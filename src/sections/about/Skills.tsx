import Reveal from "@/components/animations/Reveal";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "GSAP",
  "Framer Motion",
  "Node.js",
  "MongoDB",
];

export default function Skills() {
  return (
    <section className="section-spacing">
      <Reveal>
        <div className="container-custom">
          <p className="uppercase tracking-[6px] text-sm text-zinc-500 mb-6">
            Skills
          </p>

          <h2 className="section-title font-semibold tracking-[-3px] leading-none mb-20">
            Technologies I Use
          </h2>

          <div className="flex flex-wrap gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-8 py-4 rounded-full border border-zinc-800 bg-zinc-900/50 hover:border-zinc-600 transition duration-300"
              >
                <p className="text-lg">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
