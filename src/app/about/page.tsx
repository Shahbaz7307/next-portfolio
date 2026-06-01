import AboutHero from "@/sections/about/AboutHero";
import About from "@/sections/about/About";
import Experience from "@/sections/about/Experience";
import TechStack from "@/sections/about/TechStack";

import PageTransition from "@/components/animations/PageTransition";
import CTASectionAbout from "@/sections/about/CTASectionAbout";
import Certifications from "@/sections/about/Certifications";
import Services from "@/sections/about/Services";

export default function AboutPage() {
  return (
    <main className="grid-background min-h-screen bg-black text-white">
      <PageTransition>
        <AboutHero />

        <About />

        <Experience />

        <Certifications />

        <Services />

        <TechStack />

        <CTASectionAbout />
      </PageTransition>
    </main>
  );
}
