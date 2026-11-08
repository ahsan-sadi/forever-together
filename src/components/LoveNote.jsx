"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X } from "lucide-react";
import { loveNote } from "@/data/siteConfig";

// Deterministic spread (index-derived, no Math.random) so server and client
// render identical hearts and React Compiler's purity rule stays happy.
const hearts = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  left: (index * 61.8) % 100,
  delay: (index * 0.73) % 4,
  duration: 5 + ((index * 1.13) % 5),
  size: 12 + ((index * 3.7) % 18),
  hue: ["text-rose-300", "text-pink-300", "text-rose-400"][index % 3],
}));

// Opens once the page has settled, so the entrance spring plays after load.
export default function LoveNote() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="love-note-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] overflow-hidden bg-black/70 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`Love note for ${loveNote.name}`}
        >
          {/* Falling hearts */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {hearts.map((heart) => (
              <motion.span
                key={heart.id}
                initial={{ y: "-15vh", opacity: 0 }}
                animate={{ y: "115vh", opacity: [0, 1, 1, 0] }}
                transition={{
                  delay: heart.delay,
                  duration: heart.duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className={`absolute ${heart.hue}`}
                style={{ left: `${heart.left}%`, fontSize: heart.size }}
              >
                ❤
              </motion.span>
            ))}
          </div>

          {/* Scroll layer. min-h-full centres a short card and lets a tall
              one scroll from the very top — plain flex centring would push
              the close button off the top of a phone screen, unreachable. */}
          <div className="absolute inset-0 overflow-y-auto px-4 py-10">
            <div className="flex min-h-full items-center justify-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 140, damping: 16 }}
            className="relative z-10 w-full max-w-2xl rounded-[2.5rem] border border-white/15 bg-[#1e151a] px-8 py-12 text-center shadow-2xl sm:px-14"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close love note"
              className="absolute right-5 top-5 rounded-full p-2 text-[#b7a0a7] transition hover:bg-rose-500/15 hover:text-rose-300"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ rotate: -12, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ delay: 0.25, type: "spring", stiffness: 160 }}
              className="mx-auto mb-7 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-rose-500/25 to-pink-500/25 shadow-lg"
            >
              <Heart className="fill-rose-400 text-rose-400 heart-pulse" size={44} />
            </motion.div>

            <p className="text-sm tracking-[0.4em] text-rose-400 uppercase">
              {loveNote.headline}
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="font-romantic mt-5 text-5xl font-bold leading-tight text-rose-300 sm:text-6xl"
            >
              {loveNote.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              className="font-romantic mt-5 text-xl italic text-[#e7c9d1]"
            >
              My love, {loveNote.name} ♡
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="mt-7 space-y-4"
            >
              {loveNote.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="font-romantic text-lg italic leading-8 text-[#d8c4ca]"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="font-romantic mt-7 text-xl italic text-rose-400"
            >
              {loveNote.signature}
            </motion.p>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-rose-500 px-9 py-4 text-white shadow-lg shadow-rose-900/50 transition hover:-translate-y-1 hover:bg-rose-600"
            >
              <Heart size={18} className="fill-white" /> Read our story, my love
            </button>
          </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
