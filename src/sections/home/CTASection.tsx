import Link from "next/link";

interface CTASectionProps {
  showProjectsButton?: boolean;
}

export default function CTASection({
  showProjectsButton = true,
}: CTASectionProps) {
  return (
    <section className="section-spacing pt-0">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-[40px] border border-zinc-800 bg-zinc-900/40 p-8 sm:p-12 md:p-20 backdrop-blur-xl">
          <div className="absolute top-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[120px]" />

          <div className="relative z-10">
            <p className="mb-6 text-sm uppercase tracking-[6px] text-zinc-500">
              Let&apos;s Work Together
            </p>

            <h2 className="max-w-5xl text-5xl sm:text-6xl md:text-8xl font-semibold tracking-[-4px] leading-none">
              Helping businesses build websites that perform and convert.
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Whether you need a WordPress website, custom frontend development,
              landing page, dashboard or full web application, I can help
              transform your ideas into fast, responsive and scalable digital
              products that deliver real business value.
            </p>

            <div className="mt-14 flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-sm font-medium uppercase tracking-[2px] text-black transition duration-300 hover:scale-105"
              >
                Start a Project
              </Link>

              {showProjectsButton && (
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-10 py-5 text-sm uppercase tracking-[2px] transition duration-300 hover:bg-white hover:text-black"
                >
                  View Projects
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
