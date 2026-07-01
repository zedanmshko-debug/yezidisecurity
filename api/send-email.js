// Lightweight Mailgun proxy using fetch and x-www-form-urlencoded
// This avoids the mailgun.js dependency and is easy to reason about in a serverless environment.

export default async function handler(req, res) {
	// Debug: log invocation so we can see function hits in Vercel logs.
	console.log("[send-email] invoked", { method: req.method, url: req.url, host: req.headers?.host });
	// Allow CORS from any origin; tighten this in production to your domain if desired.
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");

	if (req.method === "OPTIONS") {
		res.status(200).end();
		return;
	}

	if (req.method !== "POST") {
		res.status(405).json({ error: "Method not allowed" });
		return;
	}

	try {
		const { name, email, phone, company, message } = req.body ?? {};
		console.log("[send-email] parsed body", { name, email: Boolean(email), phone, company, messageLength: message?.length ?? 0 });

		if (!email || !message) {
			res.status(400).json({ error: "email and message are required" });
			return;
		}

		const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
		const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
		const MAILGUN_BASE_URL = process.env.MAILGUN_BASE_URL || "https://api.mailgun.net";

		// Only log non-sensitive info about env. Never log the full API key.
		console.log("[send-email] env", { hasApiKey: Boolean(MAILGUN_API_KEY), mailgunDomain: MAILGUN_DOMAIN, baseUrl: MAILGUN_BASE_URL });

		if (!MAILGUN_API_KEY || !MAILGUN_DOMAIN) {
			console.error("Mailgun not configured: missing env vars");
			res.status(500).json({ error: "Mailgun not configured" });
			return;
		}

		const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "info@yezidisecurity.nl";
		const CONTACT_NAME = process.env.CONTACT_NAME || "Yezidi security";

		const text = `Naam: ${name || "-"}\nEmail: ${email}\nTelefoon: ${phone || "-"}\nBedrijf: ${company || "-"}\n\nBericht:\n${message}`;

		const url = `${MAILGUN_BASE_URL}/v3/${MAILGUN_DOMAIN}/messages`;
		console.log("[send-email] mailgun url", url);

		// Basic auth: username 'api' and password = API key
		const basicAuth = Buffer.from(`api:${MAILGUN_API_KEY}`).toString("base64");

		const body = new URLSearchParams();
		body.append("from", `${name || "Website bezoeker"} <postmaster@${MAILGUN_DOMAIN}>`);
		body.append("to", `${CONTACT_NAME} <${CONTACT_EMAIL}>`);
		body.append("subject", `Contactformulier: ${company || name || "Nieuw bericht"}`);
		body.append("text", text);

		const resp = await fetch(url, {
			method: "POST",
			headers: {
				Authorization: `Basic ${basicAuth}`,
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: body.toString(),
		});

		const contentType = resp.headers.get("content-type") || "";
		let data = null;
		if (contentType.includes("application/json")) {
			data = await resp.json();
		} else {
			data = await resp.text();
		}

		if (!resp.ok) {
			console.error("[send-email] Mailgun API responded with error", resp.status, data);
			return res.status(502).json({ error: "Mailgun error", details: data });
		}

		return res.status(200).json({ ok: true, result: data });
	} catch (err) {
		console.error("Mailgun proxy error:", err);
		const message = err?.message ?? String(err);
		return res.status(500).json({ error: "failed to send email", details: process.env.NODE_ENV !== "production" ? message : undefined });
	}
}
