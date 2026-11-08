"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Heart, KeyRound, Lock } from "lucide-react";
import { gate } from "@/data/siteConfig";
import { checkAnswer, grantAccess, isAuthed } from "@/lib/auth";

export default function AuthForm() {
  const router = useRouter();
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isAuthed()) router.replace("/");
  }, [router]);

  const submit = (event) => {
    event.preventDefault();
    if (checkAnswer(answer)) {
      grantAccess();
      router.replace("/");
    } else {
      setError(true);
    }
  };

  return (
    <main className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-[#161014] px-6">
      <div className="absolute left-10 top-32 h-64 w-64 rounded-full bg-rose-500/15 blur-[100px]" />
      <div className="absolute bottom-16 right-12 h-64 w-64 rounded-full bg-pink-500/15 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-[#1f161b]/85 p-9 shadow-xl backdrop-blur-xl"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rose-500/15">
          <Lock className="text-rose-400" size={26} />
        </div>

        <p className="text-center text-sm tracking-[0.3em] text-rose-400 uppercase">
          Just for you
        </p>
        <h1 className="font-romantic mt-4 text-center text-4xl font-bold">
          A little secret
          <span className="block italic text-rose-400">between us</span>
        </h1>
        <p className="mt-5 text-center text-sm leading-7 text-[#b7a0a7]">
          This world was built for one person only. Answer this to step inside.
        </p>

        <motion.form
          onSubmit={submit}
          animate={error ? { x: [0, -10, 10, -7, 7, -3, 3, 0] } : { x: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 space-y-4"
        >
          <label
            htmlFor="gate-answer"
            className="flex items-center gap-2 text-sm font-medium text-rose-400"
          >
            <KeyRound size={15} /> {gate.question}
          </label>
          <input
            id="gate-answer"
            type="text"
            value={answer}
            onChange={(event) => {
              setAnswer(event.target.value);
              setError(false);
            }}
            autoComplete="off"
            autoCapitalize="none"
            spellCheck={false}
            placeholder="Your answer..."
            className="w-full rounded-full border border-white/15 bg-[#161014] px-5 py-3.5 text-center text-[#f3e6e9] outline-none transition placeholder:text-[#8d767d] focus:border-rose-400 focus:ring-2 focus:ring-rose-500/30"
          />
          {error && (
            <p className="text-center text-sm text-rose-400">
              Not quite, my love. Try again ❤️
            </p>
          )}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-rose-500 px-8 py-4 text-white shadow-lg shadow-rose-900/50 transition hover:-translate-y-0.5 hover:bg-rose-600"
          >
            <Heart size={18} className="fill-white" /> Unlock my heart
          </button>
        </motion.form>
      </motion.div>
    </main>
  );
}
