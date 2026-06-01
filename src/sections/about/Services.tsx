const services = [
  {
    title: "Frontend Development",
    description:
      "Building fast, scalable and responsive web applications using React, Next.js, Vue.js and modern frontend technologies.",
  },
  {
    title: "WordPress Development",
    description:
      "Creating custom WordPress websites with Elementor, Elementor Pro, Divi, Brizy, WPBakery and custom theme development.",
  },
  {
    title: "UI Implementation",
    description:
      "Transforming Figma and design mockups into pixel-perfect, responsive and accessible user interfaces.",
  },
  {
    title: "Website Optimization",
    description:
      "Improving performance, responsiveness, SEO fundamentals and user experience across desktop and mobile devices.",
  },
];

export default function Services() {
  return (
    <section className="section-spacing pt-0">
      <div className="container-custom">
        <div className="mb-20">
          <p className="mb-6 text-sm uppercase tracking-[6px] text-zinc-500">
            Services
          </p>

          <h2 className="section-title mb-6">
            How I Can Help
          </h2>

          <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
            I help businesses, startups and individuals build modern digital
            products that are fast, scalable and designed to deliver exceptional
            user experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-[24px] border border-zinc-800 bg-zinc-900/20 p-8 transition duration-300 hover:border-zinc-700"
            >
              <h3 className="mb-4 text-2xl font-semibold tracking-[-1px]">
                {service.title}
              </h3>

              <p className="leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}