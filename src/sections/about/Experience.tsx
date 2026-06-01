const experiences = [
  {
    year: "Sep 2022 — Present",
    title: "Frontend Developer",
    company: "Hybrid MediaWorks",
    description:
      "Develop and maintain scalable frontend applications using React.js, Next.js and Vue.js. Built and contributed to large-scale platforms including Droit-inc, Stay Modern Pines and Fan Flo Nation. Collaborate closely with designers and backend developers to create responsive, high-performance user experiences while maintaining reusable component architectures and clean codebases.",
  },

  {
    year: "Mar 2021 — Sep 2022",
    title: "WordPress Developer",
    company: "Maxxpace Solution",
    description:
      "Built and customized WordPress websites using Elementor and custom themes. Converted design mockups into responsive websites, improved site performance and SEO, handled maintenance and updates, and delivered client-focused solutions across a variety of business websites.",
  },
];

export default function Experience() {
  return (
    <section className="section-spacing pt-0">
      <div className="container-custom">
        <div className="mb-20">
          <p className="mb-6 text-sm uppercase tracking-[6px] text-zinc-500">
            Experience
          </p>

          <h2 className="section-title mb-6">Professional Experience</h2>
          <p className="text-lg leading-relaxed text-zinc-400">
            My professional experience spans frontend development, WordPress
            development and modern web application development. I've worked on
            corporate websites, booking platforms, content-driven applications
            and custom business solutions using React, Next.js, Vue.js and
            WordPress.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 gap-8 border-t border-zinc-800 pt-10 md:grid-cols-[320px_1fr]"
            >
              <div>
                <p className="text-sm uppercase tracking-[4px] text-zinc-500">
                  {item.year}
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-3xl font-semibold tracking-[-2px]">
                  {item.title}
                </h3>

                <p className="mb-4 text-lg text-zinc-300">{item.company}</p>

                <p className="max-w-3xl leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
