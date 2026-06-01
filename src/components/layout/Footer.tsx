import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pb-10">
      <div className="container-custom">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-zinc-800 pt-10 md:flex-row">
          <div>
            <h3 className="text-2xl font-semibold tracking-[-1px]">
              {"<Shahbaz />"}
            </h3>

            <p className="mt-2 text-zinc-500">Frontend & WordPress Developer</p>
          </div>

          <div className="flex items-center gap-8 text-sm uppercase tracking-[2px] text-zinc-400">
            <Link
              href="https://github.com/Shahbaz7307"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-white"
            >
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/in/shahbaz-shabbir-malik/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-white"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
