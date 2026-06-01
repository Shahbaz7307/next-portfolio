"use client";

import { motion } from "framer-motion";

interface FadeRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FadeReveal({ children, delay = 0 }: FadeRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 1, 0.5, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
