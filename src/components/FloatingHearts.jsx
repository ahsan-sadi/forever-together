"use client";

import { motion, useReducedMotion } from "framer-motion";

const hearts = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  left: `${(index * 17 + 5) % 100}%`,
  delay: (index % 5) * 1.2,
  duration: 8 + (index % 5) * 2,
  size: 12 + (index % 4) * 7,
}));

export default function FloatingHearts() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: "110vh", opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.45, 0.45, 0],
            rotate: [0, 25, -20, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ left: heart.left, fontSize: heart.size }}
          className="absolute text-rose-300"
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
}
