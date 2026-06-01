"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { CodeXml } from "lucide-react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setLoading(false);
      },
    });

    tl.fromTo(
      ".loader-text",
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power4.out",
      },
    ).to(".loader-screen", {
      y: "-100%",
      duration: 1.2,
      ease: "power4.inOut",
      delay: 0.4,
    });
  }, []);

  if (!loading) return null;

  return (
    <div className="loader-screen fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      <h1 className="loader-text text-5xl md:text-8xl font-semibold tracking-[-4px]">
        <CodeXml className="h-20 w-20 text-gray-600" />
      </h1>
    </div>
  );
}
