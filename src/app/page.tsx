import Hero from "@/sections/home/Hero";
import FeaturedProjects from "@/sections/home/FeaturedProjects";
import AboutPreview from "@/sections/home/AboutPreview";
import CTASection from "@/sections/home/CTASection";
import PageTransition from "@/components/animations/PageTransition";

export default function Home() {
  return (
    <main className="bg-black text-white grid-background">
      <PageTransition>
        <Hero />

        <FeaturedProjects />

        <AboutPreview />

        <CTASection />
      </PageTransition>
    </main>
  );
}
