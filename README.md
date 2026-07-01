# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.

## Mailgun contact form setup

This project ships a tiny backend helper to send contact form submissions via Mailgun so your API key is never exposed to browsers.

1. Create a `.env` file in the project root (do not commit it). You can copy `.env.example`:

	- PowerShell (Windows):

```
cp .env.example .env
# then open .env and replace the values
```

2. Install the new server dependencies and the rest of the project:

```
npm install
```

3. Start the backend server (listens on port 3000 by default):

```
npm run start:server
```

4. Start the frontend in another terminal:

```
npm run dev
```

5. The contact form will POST to `http://localhost:3000/send-email`. For production, deploy the `server/index.js` to a safe place (serverless function or small Node host) and set the environment variables there.

## Deploying to Vercel (recommended)

If you plan to host the frontend on Vercel, the easiest approach is to use a serverless function for the Mailgun endpoint so Vercel can run it securely (no long-lived Express server required).

What I added for you:
- `api/send-email.js` — a Vercel-compatible serverless function that accepts POST requests and forwards them to Mailgun using environment variables.

Steps to deploy on Vercel:
1. Push this repository to GitHub (if not already).
2. Create a new project on Vercel and connect your GitHub repo.
3. In the Vercel dashboard, open Project Settings → Environment Variables and add these variables:
	- `MAILGUN_API_KEY` = (your Mailgun API key)
	- `MAILGUN_DOMAIN` = (your sending domain, NOT the sandbox recipient unless configured)
	- `MAILGUN_BASE_URL` = `https://api.mailgun.net` (optional)

4. Deploy. The frontend will call `/api/send-email` in production. Locally the frontend still falls back to `http://localhost:3000/send-email` for your Express server if you want to keep running it.

DNS / spam notes:
- To reduce spam/warnings: configure SPF and DKIM records Mailgun provides for your sending domain in your DNS provider.


Security notes:
- Never commit your real API keys. Keep them in environment variables or a secret manager.
- If you need help deploying the backend to a server or serverless platform, tell me which provider you prefer and I can draft steps.

## Klachtenformulier (PDF) toevoegen

Als je een klachtenformulier als PDF wilt aanbieden via de contactpagina, plaats dan het bestand `CAZAKlachtenForm.pdf` in de `public/` map van het project (maak de map aan als die nog niet bestaat). Tijdens development serveert Vite bestanden in `public/` rechtstreeks op `/`.

Voorbeeldlocatie op jouw machine:

```
project-root/public/CAZAKlachtenForm.pdf
```

In de contactpagina is er al een knop "Download klachtenformulier (PDF)" die naar `/CAZAKlachtenForm.pdf` linkt en het bestand met de `download`-attribute aanbiedt.

Windows pad van je lokale kopie (voorbeeld):

```
c:\Users\joaov\OneDrive\Bureaublad\CAZAKlachtenForm.pdf
```

Kopieer dat bestand naar `public/` en start de dev server (`npm run dev`). Je kunt dan op de knop in de contactpagina klikken om de PDF te downloaden.
