# EP Master Construction — site export

Black-and-white site for **EP Master Construction LLC** (Eli / Ilya Polyakov).
Oregon & Washington. Decks, patio covers, framing.

## What’s inside

- Full source (`src/`)
- Videos, photos, logo (`public/`)
- Config to run and deploy

This is a **full website**, not a WordPress plugin. Put it on the client’s domain (or a subdomain), then later point DNS to it.

## Run locally

```bash
npm install
npm run dev
```

Opens on port 8080.

## Deploy on the client’s domain

Easiest: **Vercel** or **Netlify**.

1. Unzip this archive.
2. Create a new project, upload the folder (or push it to GitHub and connect).
3. Build command: `npm run build`
4. In the host’s domain settings, add the client domain
   (for example `epmasterconstruction.com` or `www.…`).
5. At the domain registrar, point DNS to Vercel/Netlify as they show.

The deck estimator page on this site is `/estimator`. The live tool can stay at `https://deck.rhinolab.app` and this site links to it.

## Contacts already in the site

- Phone: (503) 781-2203
- Email: Eli@epmasterconstruction.com
- Instagram: @ep_mastercollc
- OR CCB #219593 · WA #EPMASMC746K9

Edit `src/data/site.ts` if any of this changes.
