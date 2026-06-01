const stack = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
  },

  {
    category: "Animation",
    items: [
      "GSAP",
      "Framer Motion",
      "Lenis",
      "Responsive Design",
      "Performance Optimization",
      "UI Development",
    ],
  },

  {
    category: "WordPress",
    items: [
      "WordPress",
      "Elementor",
      "Elementor Pro",
      "Divi",
      "Brizy",
      "WPBakery",
      "Custom Themes",
    ],
  },

  {
    category: "Tools",
    items: ["Git", "GitHub", "Figma", "Vercel", "VS Code", "npm"],
  },
];

export default function TechStack() {
  return (
    <section className="section-spacing pt-0">
      <div className="container-custom">
        <div className="mb-20">
          <p className="mb-6 text-sm uppercase tracking-[6px] text-zinc-500">
            Stack
          </p>

          <h2 className="section-title">Technologies & Tools</h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {stack.map((group, index) => (
            <div
              key={index}
              className="rounded-[32px] border border-zinc-800 bg-zinc-900/30 p-8"
            >
              <h3 className="mb-8 text-2xl font-semibold tracking-[-1px]">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-4">
                {group.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="rounded-full border border-zinc-700 px-5 py-3 text-sm text-zinc-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
