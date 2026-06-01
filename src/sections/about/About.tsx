"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/animations/Reveal";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-animation", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },

        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={aboutRef} className="section-spacing">
      <Reveal>
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="about-animation uppercase tracking-[6px] text-sm text-zinc-500 mb-6">
              About
            </p>

            <h2 className="about-animation section-title font-semibold leading-tight tracking-[-3px]">
              Helping businesses grow through modern web experiences.
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p className="about-animation text-zinc-400 text-lg leading-relaxed mb-6">
              I'm a Frontend and WordPress Developer passionate about building
              modern websites and web applications that combine performance,
              usability and clean design.
            </p>

            <p className="about-animation text-zinc-400 text-lg leading-relaxed">
              My experience includes developing projects with React, Next.js,
              Vue.js and WordPress, ranging from business websites and corporate
              platforms to interactive web applications and custom frontend
              interfaces.
            </p>

            <p className="about-animation text-zinc-400 text-lg leading-relaxed">
              I work with both visual page builders such as Elementor, Elementor
              Pro, Divi, Brizy and WPBakery, as well as custom WordPress theme
              development and modern JavaScript frameworks to deliver scalable
              digital solutions.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
