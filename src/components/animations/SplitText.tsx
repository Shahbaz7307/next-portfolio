"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

interface SplitTextProps {
  text: string;
  className?: string;
}

export default function SplitText({ text, className }: SplitTextProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, {
      types: "chars",
    });

    gsap.from(split.chars, {
      delay: 1.8,
      y: 120,
      opacity: 0,
      stagger: 0.04,
      duration: 1,
      ease: "power4.out",
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <h1 ref={textRef} className={className}>
      {text}
    </h1>
  );
}
