"use client";

import { useEffect, useState } from "react";

const sections = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "challenge",
    label: "Challenge",
  },
  {
    id: "solution",
    label: "Solution",
  },
  {
    id: "gallery",
    label: "Gallery",
  },
];

export default function ProjectSidebarNav() {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section.id);

        if (!element) continue;

        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const headerOffset = 140;

    const elementPosition = element.getBoundingClientRect().top;

    const offsetPosition = window.pageYOffset + elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative pl-6">
      {/* VERTICAL LINE */}
      <div className="absolute left-0 top-[2px] flex h-full w-px flex-col bg-zinc-800">
        <div
          className="absolute left-0 w-px rounded-full bg-white transition-all duration-300"
          style={{
            transform: `translateY(${
              sections.findIndex((s) => s.id === activeSection) * 38
            }px)`,
            height: "22px",
          }}
        />
      </div>

      {/* NAV ITEMS */}
      <div className="flex flex-col gap-4 pt-[2px]">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`h-[22px] text-left text-sm uppercase tracking-[3px] transition-all duration-300 hover:translate-x-1 hover:text-white ${
              activeSection === section.id
                ? "translate-x-1 text-white"
                : "text-zinc-500"
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  );
}
