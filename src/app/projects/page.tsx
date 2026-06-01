import ProjectsHero from "@/sections/projects/ProjectsHero";
import FeaturedProject from "@/sections/projects/FeaturedProject";
import Projects from "@/sections/projects/Projects";

import PageTransition from "@/components/animations/PageTransition";
import CTASectionProjects from "@/sections/projects/CTASectionProjects";

export default function ProjectsPage() {
  return (
    <main className="grid-background min-h-screen bg-black text-white">
      <PageTransition>
        <ProjectsHero />

        <FeaturedProject />

        <Projects />

        <CTASectionProjects showProjectsButton={false} />
      </PageTransition>
    </main>
  );
}
