"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import AuroraBackground from "@/components/ui/AuroraBackground";
import SplitText from "@/components/animations/SplitText";
import TrueFocus from "@/components/animations/TrueFocus";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1a1a1a_0%,#000_60%)]" />
      <AuroraBackground />

      <div className="container-custom relative z-10">
        <p className="hero-text uppercase tracking-[6px] text-sm text-zinc-500 mb-6">
          Frontend Developer
        </p>

        <SplitText
          text="Shahbaz"
          className="text-[64px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-semibold leading-[0.9] tracking-[-4px] md:tracking-[-8px]"
        />

        <TrueFocus>
          <div className="mt-8 max-w-2xl">
            <p className="hero-text text-zinc-400 text-lg leading-relaxed">
              I build modern, responsive and interactive digital experiences
              using React, Next.js and modern frontend technologies.
            </p>
          </div>
        </TrueFocus>
      </div>
    </section>
  );
}
