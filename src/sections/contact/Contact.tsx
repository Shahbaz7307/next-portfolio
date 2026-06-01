import Link from "next/link";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Shahbaz7307",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shahbaz-shabbir-malik/",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/923326999776",
  },
];

export default function Contact() {
  return (
    <section className="pt-0 pb-40">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-24 border-t border-zinc-800 pt-20 lg:grid-cols-2">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[6px] text-zinc-400">
              Contact
            </p>

            <h2 className="mb-10 max-w-xl text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-3px] leading-none">
              Let's discuss your next project.
            </h2>

            <p className="max-w-xl text-lg leading-relaxed text-zinc-400">
              I help businesses, startups and individuals build modern websites,
              WordPress solutions and web applications using React, Next.js,
              Vue.js and WordPress.
            </p>
          </div>

          <div className="flex flex-col gap-16">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[4px] text-zinc-400">
                Email
              </p>

              <a
                href="mailto:shahbazshabbir64@gmail.com"
                className="text-2xl sm:text-3xl font-semibold tracking-[-1px] transition duration-300 hover:text-zinc-400 underline-offset-8 hover:underline"
              >
                shahbazshabbir64@gmail.com
              </a>
            </div>

            <div>
              <p className="mb-6 text-sm uppercase tracking-[4px] text-zinc-400">
                Socials
              </p>

              <div className="flex flex-wrap gap-4">
                {socials.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full border border-zinc-700 px-6 py-3 text-sm uppercase tracking-[2px] transition duration-300 hover:bg-white hover:text-black"
                  >
                    {social.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm uppercase tracking-[4px] text-zinc-400">
                Availability
              </p>

              <p className="max-w-md text-zinc-400 leading-relaxed">
                Open to freelance work, contract projects and partnerships
                focused on modern web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
