import ContactHero from "@/sections/contact/ContactHero";
import Contact from "@/sections/contact/Contact";

import PageTransition from "@/components/animations/PageTransition";

export default function ContactPage() {
  return (
    <main className="grid-background bg-black text-white min-h-screen">
      <PageTransition>
        <ContactHero />

        <Contact />
      </PageTransition>
    </main>
  );
}
