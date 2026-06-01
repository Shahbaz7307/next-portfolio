import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import ProjectGallery from "@/sections/projects/ProjectGallery";
import ProjectSidebarNav from "@/components/projects/ProjectSidebarNav";
import FadeReveal from "@/components/animations/FadeReveal";
import PageTransition from "@/components/animations/PageTransition";

import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }
  const currentIndex = projects.findIndex((item) => item.slug === slug);

  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <PageTransition>
      <main className="min-h-screen bg-black text-white">
        {/* HERO */}
        <section className="section-spacing pb-20">
          <div className="container-custom">
            <p className="mb-6 text-sm uppercase tracking-[6px] text-zinc-500">
              {project.category}
            </p>

            <h1 className="max-w-6xl text-5xl font-semibold leading-none tracking-[-4px] sm:text-6xl md:text-8xl">
              {project.title}
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-zinc-400">
              {project.description}
            </p>
          </div>
        </section>

        {/* COVER IMAGE */}
        <section className="pb-32">
          <div className="container-custom">
            <div className="relative rounded-[40px] border border-zinc-800">
              <div className="relative h-[320px] sm:h-[500px] md:h-[700px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  priority
                  className="rounded-[40px] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 lg:hidden">
          <div className="container-custom">
            <div className="flex flex-wrap gap-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium uppercase tracking-[2px] text-black"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-6 py-3 text-sm uppercase tracking-[2px]"
                >
                  GitHub
                </a>
              )}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-10">
              <div>
                <p className="mb-3 text-xs uppercase tracking-[3px] text-zinc-500">
                  Year
                </p>

                <p className="text-lg font-semibold">{project.year}</p>
              </div>

              <div>
                <p className="mb-3 text-xs uppercase tracking-[3px] text-zinc-500">
                  Client
                </p>

                <p className="text-lg font-semibold">{project.client}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT + GALLERY */}
        <section className="pb-32">
          <div className="container-custom">
            <div className="mb-20 border-t border-zinc-800" />

            <div className="grid items-start gap-20 lg:grid-cols-[1.3fr_0.7fr]">
              {/* LEFT CONTENT */}
              <div className="space-y-20 md:space-y-32">
                {/* OVERVIEW */}
                <FadeReveal>
                  <section id="overview">
                    <p className="mb-6 text-sm uppercase tracking-[6px] text-zinc-500">
                      Overview
                    </p>

                    <p className="max-w-2xl text-lg leading-[1.9] text-zinc-400">
                      {project.longDescription}
                    </p>
                  </section>
                </FadeReveal>
                {/* CHALLENGE */}
                <FadeReveal>
                  <section id="challenge">
                    <p className="mb-6 text-sm uppercase tracking-[6px] text-zinc-500">
                      Challenge
                    </p>

                    <p className="max-w-2xl text-lg leading-[1.9] text-zinc-400">
                      {project.challenge}
                    </p>
                  </section>
                </FadeReveal>
                {/* SOLUTION */}
                <FadeReveal>
                  <section id="solution">
                    <p className="mb-6 text-sm uppercase tracking-[6px] text-zinc-500">
                      Solution
                    </p>

                    <p className="max-w-2xl text-lg leading-[1.9] text-zinc-400">
                      {project.solution}
                    </p>
                  </section>
                </FadeReveal>
                {/* GALLERY */}
                <FadeReveal>
                  <section id="gallery">
                    <ProjectGallery images={project.gallery} />
                  </section>
                </FadeReveal>
              </div>

              {/* STICKY SIDEBAR */}
              <aside className="hidden lg:block lg:sticky lg:top-32 lg:self-start">
                <div className="flex flex-col gap-10 rounded-[32px] border border-zinc-800 bg-zinc-900/20 p-8 backdrop-blur-sm">
                  {/* NAVIGATION */}
                  <ProjectSidebarNav />

                  {/* BUTTONS */}
                  <div className="flex flex-wrap gap-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium uppercase tracking-[2px] text-black transition duration-300 hover:scale-105"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-8 py-4 text-sm uppercase tracking-[2px] transition duration-300 hover:bg-white hover:text-black"
                      >
                        GitHub
                      </a>
                    )}
                  </div>

                  {/* YEAR */}
                  <div>
                    <p className="mb-4 text-sm uppercase tracking-[4px] text-zinc-500">
                      Year
                    </p>

                    <p className="text-2xl font-semibold">{project.year}</p>
                  </div>

                  {/* CLIENT */}
                  <div>
                    <p className="mb-4 text-sm uppercase tracking-[4px] text-zinc-500">
                      Client
                    </p>

                    <p className="text-2xl font-semibold">{project.client}</p>
                  </div>

                  {/* STACK */}
                  <div>
                    <p className="mb-6 text-sm uppercase tracking-[4px] text-zinc-500">
                      Stack
                    </p>

                    <div className="flex flex-wrap gap-4">
                      {project.stack.map((item, index) => (
                        <div
                          key={index}
                          className="rounded-full border border-zinc-700 px-5 py-3 text-sm"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="pb-32">
          <div className="container-custom">
            <div className="border-t border-zinc-800 pt-20">
              <p className="mb-6 text-sm uppercase tracking-[6px] text-zinc-500">
                Next Project
              </p>

              <Link
                href={`/projects/${nextProject.slug}`}
                className="group inline-flex items-center gap-6"
              >
                <h2 className="text-4xl font-semibold tracking-[-2px] transition duration-300 group-hover:text-zinc-400 md:text-6xl">
                  {nextProject.title}
                </h2>

                <span className="text-4xl transition duration-300 group-hover:translate-x-3">
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
