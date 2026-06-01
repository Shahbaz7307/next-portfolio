import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedProject() {
  const project = projects[0];

  return (
    <section className="section-spacing pt-0">
      <div className="container-custom">
        <div className="mb-16">
          <p className="mb-6 text-sm uppercase tracking-[6px] text-zinc-500">
            Featured Project
          </p>

          <h2 className="section-title">{project.title}</h2>
        </div>

        <Link href={`/projects/${project.slug}`} className="group block">
          <div className="relative overflow-hidden rounded-[40px] border border-zinc-800 bg-zinc-900/30">
            <div className="relative h-[320px] sm:h-[500px] md:h-[750px] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="100vw"
                className="object-cover object-top transition-transform duration-[1600ms] ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 z-10 w-full p-8 sm:p-10 md:p-14">
              <p className="mb-4 text-sm uppercase tracking-[4px] text-zinc-400">
                {project.category}
              </p>

              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <h3 className="text-4xl sm:text-6xl md:text-8xl font-semibold tracking-[-4px]">
                    {project.title}
                  </h3>

                  <p className="sm:block hidden mt-6 max-w-2xl text-zinc-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm uppercase tracking-[2px] text-black transition duration-300 group-hover:scale-105">
                  View Case Study
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}