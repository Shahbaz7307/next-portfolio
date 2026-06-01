"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const projectsRef = useRef<HTMLElement | null>(null);

  const archiveProjects = projects.filter(
    (project) => !project.featured
  );

  // Hide section completely if there are no archive projects
  if (archiveProjects.length === 0) {
    return null;
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        {
          y: 120,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: projectsRef.current,
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
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={projectsRef} className="pb-32">
      <div className="container-custom">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[6px] text-zinc-500">
            Project Archive
          </p>
        </div>

        <div className="sm:space-y-24 space-y-10">
          {archiveProjects.map((project, index) => (
            <div
              key={project.slug}
              className="project-card group relative overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-900/30 transition-all duration-700 hover:border-zinc-600"
            >
              <div className="relative h-[280px] overflow-hidden sm:h-[380px] md:h-[440px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority={index === 0}
                  className="object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition duration-700 group-hover:opacity-100" />
              </div>

              <div className="absolute inset-0 z-10 flex items-end">
                <div className="w-full p-6 sm:p-8 md:p-10">
                  <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:translate-y-6 md:transition-transform md:duration-700 md:group-hover:translate-y-0">
                    <div>
                      <p className="mb-4 text-sm text-zinc-500">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <p className="mb-3 text-sm uppercase tracking-[4px] text-zinc-400">
                        {project.category}
                      </p>

                      <h3 className="text-3xl sm:text-4xl md:text-4xl font-semibold tracking-[-3px] text-white">
                        {project.title}
                      </h3>
                    </div>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex w-fit items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium uppercase tracking-[2px] text-black transition duration-300 hover:scale-105"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}