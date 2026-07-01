Short deployment and troubleshooting steps for Vercel functions

1) Commit & push your changes

git add -A
git commit -m "chore: ensure api functions runtime in vercel.json; add docs"
git push

2) Trigger a production deploy (optional — Git push usually triggers automatically)

npx vercel --prod

3) In the Vercel Dashboard: Projects → select project → Deployments
  - Open the newest deployment and check Functions.
  - You should see /api/test.js, /api/ping.js, /api/send-email.js listed.

4) If the Functions list is empty but Source shows the files:
  - Open Build Logs and search for api/ or Serverless Function messages.
  - If you see a previous deployment that had functions, copy that deployment URL.
    - Alias it back to the domain to restore service quickly:

npx vercel alias set <DEPLOYMENT_URL> www.cazasecurity.nl

5) Quick endpoint tests

# GET test
Invoke-RestMethod -Uri 'https://www.cazasecurity.nl/api/test' -Method GET
# OPTIONS (preflight)
Invoke-WebRequest -Uri 'https://www.cazasecurity.nl/api/test' -Method OPTIONS -UseBasicParsing

6) If problems remain: copy 20–30 lines from the Build Logs around where api/ is mentioned and paste them into the issue for analysis.

Notes:
- This repo now explicitly requests Node 18 runtime for api/**/*.js. If you prefer a different runtime version, edit vercel.json accordingly.
- This change should not break the site; it's a non-destructive request to Vercel's builder.
