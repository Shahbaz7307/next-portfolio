"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-black/30 backdrop-blur-xl transition-transform duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container-custom flex h-20 md:h-24 items-center justify-between">
          <Link href="/" className="text-2xl font-semibold tracking-[-1px]">
             {"<Shahbaz />"}
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`group relative text-sm uppercase tracking-[2px] transition-all duration-300 ${
                  pathname === link.href
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}

                <span
                  className={`absolute left-0 -bottom-2 h-[1px] bg-white transition-all duration-500 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <button onClick={() => setOpen(true)} className="md:hidden">
            <Menu size={28} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[999] bg-black"
          >
            <div className="container-custom flex h-full flex-col">
              <div className="flex h-20 items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="text-2xl font-semibold tracking-[-1px]"
                >
                  Shahbaz
                </Link>

                <button onClick={() => setOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-1 flex-col items-center justify-center gap-10">
                {links.map((link, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      y: 80,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    exit={{
                      y: 80,
                      opacity: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`text-5xl font-semibold tracking-[-2px] transition-colors duration-300 ${
                        pathname === link.href
                          ? "text-white"
                          : "text-zinc-500 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
