"use client";

import { motion } from "motion/react";

interface TrueFocusProps {
  children: React.ReactNode;
}

export default function TrueFocus({
  children,
}: TrueFocusProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1.2,
        delay: 2.2,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}