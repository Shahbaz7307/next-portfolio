"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power4.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden border-b border-white/[0.04]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-black" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-700/10 blur-[140px]" />

      <div className="container-custom relative z-10 flex min-h-screen items-center">
        <div className="w-full">
          {/* Label */}
          <p className="hero-item mb-8 text-[11px] uppercase tracking-[6px] text-zinc-500">
            TEST123 FRONTEND DEVELOPER
          </p>

          {/* Heading */}
          <div className="max-w-6xl">
            <div className="overflow-hidden">
              <h1 className="hero-item text-[72px] sm:text-[100px] md:text-[130px] lg:text-[170px] leading-[0.9] tracking-[-8px] font-semibold">
                Shahbaz
              </h1>
            </div>

            <div className="overflow-hidden flex justify-end md:pr-20">
              <h1 className="hero-item text-[72px] sm:text-[100px] md:text-[130px] lg:text-[170px] leading-[0.9] tracking-[-8px] font-semibold text-zinc-300">
                Shabbir
              </h1>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="mt-16 grid gap-12 lg:grid-cols-2 items-end">
            {/* Left */}
            <div className="hero-item max-w-md">
              <p className="text-zinc-400 text-lg leading-relaxed">
                I build modern websites and web applications using React,
                Next.js, Vue.js and WordPress. From custom frontend development
                to scalable business websites, I create fast, responsive and
                user-focused digital experiences.
              </p>

              <div className="mt-10 flex items-center gap-4 text-[11px] uppercase tracking-[4px] text-zinc-600">
                <span>React</span>
                <span>Next.js</span>
                <span>Vue.js</span>
                <span>WordPress</span>
                <span>TypeScript</span>
                <span>GSAP</span>
              </div>
            </div>

            {/* Right */}
            <div className="hero-item flex items-center lg:justify-end gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm hover:bg-white/[0.03] transition-all duration-300"
              >
                View Projects
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm text-zinc-400 hover:bg-white/[0.03] hover:text-white transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
