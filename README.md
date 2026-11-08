# Forever Us ❤️

A dreamy romantic website starter built with Next.js App Router, JavaScript, Tailwind CSS v4, Framer Motion, and Lucide React.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Personalize your website

All the gate and opening love-note copy lives in `src/data/siteConfig.js`.

1. Replace the photos in `public/images/` (`memory_1.jpeg` … `memory_5.jpeg` — all `.jpeg`) with your own. The site currently uses `memory_1`–`memory_4` (referenced from `src/data/memories.js` and `src/components/Hero.jsx`); `memory_5.jpeg` is unused. If you change a filename or extension, update the matching `src` path too.
2. Replace `public/music/our_music.mp3` with an audio file you have permission to use.
3. Edit `src/data/memories.js` to add your real timeline and gallery captions.
4. Edit the gate question and answers (plus the love-note headline/title/paragraphs) in `src/data/siteConfig.js`.
5. Edit the letter in `src/components/LoveLetter.jsx`.
6. Edit the surprise messages in `src/components/Surprise.jsx`.

The unused `hero.svg` / `memory-*.svg` files in `public/images/` are leftover starter artwork — no code references them. The music player stays silent until you press Play; if `our_music.mp3` is missing, the button shows "Add your song".

## Build for production

```bash
npm run build
npm run start
```

Verification order is `npm run lint` → `npm run build` (there is no separate test/typecheck script).

## Deploy to Vercel

No config file is needed — Vercel auto-detects the Next.js framework and runs `npm run build`.

1. Push the repo to GitHub (run `git status` first — if local `main` is ahead of `origin/main`, push it so Vercel builds the current code):

   ```bash
   git add -A
   git commit -m "Prepare for deploy"
   git push origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new), import the repository, and keep the defaults (Framework Preset: **Next.js**, no build output configuration).
3. Deploy. The two routes are `/` (gated home) and `/welcome` (secret-answer login).
4. For a custom domain: Project → Settings → Domains.

Notes:

- The security gate is client-side only and memory-only: every refresh or new tab re-asks the question. That is intentional — don't add storage persistence or auth infrastructure.
- No environment variables, database, or server actions are used, so nothing needs to be configured in Vercel. `src/app/layout.js` reads Vercel's built-in `VERCEL_PROJECT_PRODUCTION_URL` at build time to make `og:image` an absolute URL (falling back to the hardcoded `https://forever-us.vercel.app` when absent), so share previews work without setup.
- Link previews use `public/images/og-cover.png` (1200×630). Regenerate or replace it if you change the site title.
- The site ships `robots: noindex, nofollow` so it stays out of search engines — remove that field in `src/app/layout.js` if you ever want it discoverable.
- `public/music/our_music.mp3` (~10 MB) ships with the deploy; keep individual files under Vercel's size limit.

## Notes

- Audio playback requires a user click because browsers generally block autoplay with sound.
- Use personal photos only when you have permission to publish them.
- This starter has no database or authentication; content is static and served from `public/`.
