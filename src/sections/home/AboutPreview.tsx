import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="section-spacing">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="uppercase tracking-[6px] text-sm text-zinc-500 mb-6">
              About
            </p>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-[-4px] leading-none">
              Building high-performance websites and web applications.
            </h2>
          </div>

          <div className="flex flex-col">
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">
              I'm a frontend and WordPress developer specializing in modern
              websites, business platforms and web applications. I work with
              React, Next.js, Vue.js and WordPress to create fast, scalable and
              responsive digital experiences.
            </p>

            <p className="text-zinc-500 leading-relaxed mb-12">
              From custom frontend interfaces and dynamic web applications to
              WordPress websites built with Elementor, Divi, Brizy, WPBakery and
              custom themes, I focus on delivering solutions that combine
              performance, usability and clean design across all devices.
            </p>

            <Link
              href="/about"
              className="inline-flex w-fit items-center justify-center rounded-full border border-zinc-700 px-8 py-4 text-sm uppercase tracking-[2px] transition duration-300 hover:bg-white hover:text-black"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
