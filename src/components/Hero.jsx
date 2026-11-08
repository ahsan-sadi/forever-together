"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div className="absolute left-10 top-40 h-64 w-64 rounded-full bg-rose-500/15 blur-[100px]" />
      <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-pink-500/15 blur-[100px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center md:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-white/5 px-5 py-2 text-sm text-rose-300">
            <Sparkles size={16} />A little world made for you
          </div>

          <h1 className="font-romantic text-5xl leading-tight font-bold md:text-7xl">
            Every moment
            <span className="block text-rose-400 italic">with you</span>
            is magic.
          </h1>

          <p className="mt-7 max-w-lg leading-8 text-[#b7a0a7]">
            Somewhere between a thousand little moments, you became my favorite
            part of life. This is our little corner of forever.
          </p>

          <a
            href="#story"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-rose-500 px-8 py-4 text-white shadow-lg shadow-rose-900/50 transition hover:-translate-y-1 hover:bg-rose-600"
          >
            Explore Our Story <Heart size={18} className="fill-white" />
          </a>

          <p className="mt-8 font-romantic text-lg italic text-rose-400">
            To my favorite human, with love. ♡
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 rounded-[45%] bg-rose-500/25 blur-2xl" />
          <div className="floating relative rotate-2 rounded-[220px] border-8 border-[#2b1f24] bg-[#2b1f24] p-3 shadow-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[200px] bg-rose-100">
              <Image
                src="/images/memory_3.jpeg"
                alt="A romantic illustration"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 400px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-[#241a1f] p-4 shadow-xl">
            <Heart className="heart-pulse fill-rose-400 text-rose-400" />
          </div>
          <div className="absolute -right-5 top-10 rounded-full bg-[#241a1f] p-4 shadow-lg">
            ✨
          </div>
        </motion.div>
      </div>

      <a
        href="#story"
        aria-label="Scroll to our story"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-rose-400"
      >
        <ArrowDown className="animate-bounce" />
      </a>
    </section>
  );
}
