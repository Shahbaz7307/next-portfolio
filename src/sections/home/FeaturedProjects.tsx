"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".featured-project",
        {
          y: 120,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power4.out",
          clearProps: "all",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-spacing">
      <div className="container-custom">
        <div className="mb-20 flex items-end justify-between gap-8">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[6px] text-zinc-500">
              Featured Work
            </p>

            <h2 className="section-title">Selected Projects</h2>
          </div>

          <Link
            href="/projects"
            className="hidden md:inline-flex items-center justify-center rounded-full border border-zinc-700 px-8 py-4 text-sm uppercase tracking-[2px] transition duration-300 hover:bg-white hover:text-black"
          >
            View All
          </Link>
        </div>

        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="featured-project group block"
            >
              <div className="relative overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-900/30 transition-all duration-700 hover:border-zinc-600">
                <div className="relative h-[280px] sm:h-[400px] md:h-[600px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="100vw"
                    priority={index === 0}
                    className="object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 transition duration-700 group-hover:opacity-100" />
                </div>

                <div className="absolute inset-0 z-10 flex items-end">
                  <div className="w-full p-6 sm:p-8 md:p-12">
                    <p className="mb-4 text-sm uppercase tracking-[4px] text-zinc-400">
                      {project.category}
                    </p>

                    <h3 className="text-3xl sm:text-5xl md:text-7xl font-semibold tracking-[-4px] text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-2xl text-zinc-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex justify-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-8 py-4 text-sm uppercase tracking-[2px] transition duration-300 hover:bg-white hover:text-black"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}