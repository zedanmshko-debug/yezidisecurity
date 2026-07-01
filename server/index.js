import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Mailgun from "mailgun.js";
import FormData from "form-data";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
const MAILGUN_BASE_URL = process.env.MAILGUN_BASE_URL || "https://api.mailgun.net";

if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
  console.warn("Warning: MAILGUN_API_KEY or MAILGUN_DOMAIN not set. Email sending will fail until configured.");
}

// Only create the Mailgun client when the required env vars are present.
// This prevents the Mailgun library throwing 'Parameter "key" is required' and
// allows the server to start with a clear runtime error when the endpoint is used.
let mg = null;
if (MAILGUN_API_KEY && MAILGUN_DOMAIN) {
  mg = new Mailgun(FormData).client({
    username: "api",
    key: MAILGUN_API_KEY,
    url: MAILGUN_BASE_URL,
  });
}

app.post("/send-email", async (req, res) => {
  const { name, email, phone, company, message } = req.body || {};

  if (!email || !message) {
    return res.status(400).json({ error: "email and message are required" });
  }

  // If Mailgun client isn't configured, return a clear error instead of throwing.
  if (!mg) {
    const body = { error: "Mailgun not configured: missing MAILGUN_API_KEY or MAILGUN_DOMAIN" };
    if (process.env.NODE_ENV !== 'production') {
      body.details = 'Set MAILGUN_API_KEY and MAILGUN_DOMAIN in your environment or .env file.';
    }
    return res.status(500).json(body);
  }

  try {
    const text = `Naam: ${name || "-"}\nEmail: ${email}\nTelefoon: ${phone || "-"}\nBedrijf: ${company || "-"}\n\nBericht:\n${message}`;

      // Allow configuring recipient via env vars for production (Vercel, etc.)
      const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "joao.vangessel@mechhive.io";
      const CONTACT_NAME = process.env.CONTACT_NAME || "Joao van Gessel";

      const result = await mg.messages.create(MAILGUN_DOMAIN, {
        from: `${name || "Website bezoeker"} <postmaster@${MAILGUN_DOMAIN}>`,
        to: [`${CONTACT_NAME} <${CONTACT_EMAIL}>`],
        subject: `Contactformulier: ${company || name || "Nieuw bericht"}`,
        text,
      });

    return res.json({ ok: true, id: result.id });
  } catch (err) {
    console.error("Mailgun error:", err);
    const body = { error: "failed to send email" };
    if (process.env.NODE_ENV !== 'production') {
      body.details = err?.message || String(err);
    }
    return res.status(500).json(body);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Mailgun proxy server listening on http://localhost:${port}`);
});
