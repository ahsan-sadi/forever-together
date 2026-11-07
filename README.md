# Forever Us ❤️

A dreamy romantic website starter built with Next.js App Router, JavaScript, Tailwind CSS v4, Framer Motion, and Lucide React.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Personalize your website

All the gate/birthday copy lives in `src/data/siteConfig.js`.

1. Replace `public/images/hero.svg` and the four `memory-*.svg` files with your own photos (`.jpg`/`.png` work as-is — remember to update the `src` paths in `src/components/Hero.jsx` and `src/data/memories.js` if you change the extension).
2. Replace `public/music/our-song.mp3` with an audio file you have permission to use.
3. Edit `src/data/memories.js` to add your real timeline and gallery captions.
4. Edit the secret answer and birthday window in `src/data/siteConfig.js`.
5. Edit the letter in `src/components/LoveLetter.jsx`.
6. Edit the surprise messages in `src/components/Surprise.jsx`.

The `public/images` folder contains placeholder SVG artwork so the starter runs immediately. Replace those files with your photographs when ready. The music player will remain silent until you add `our-song.mp3` and press Play.

## Build for production

```bash
npm run build
npm run start
```

## Notes

- Audio playback requires a user click because browsers generally block autoplay with sound.
- Use personal photos only when you have permission to publish them.
- This starter has no database or authentication; all content is currently local.
# forever-us
