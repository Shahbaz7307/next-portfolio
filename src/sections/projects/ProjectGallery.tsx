"use client";

import Image from "next/image";

interface ProjectGalleryProps {
  images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <div className="space-y-16">
      {images.map((image, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-[32px] border border-zinc-800"
        >
          <div className="relative h-[280px] sm:h-[500px] md:h-[800px] group">
            <Image
              src={image}
              alt={`Project image ${index + 1}`}
              fill
              sizes="100vw"
              className="object-cover object-top transition-all duration-[10000ms] ease-linear hover:object-bottom"
            />
          </div>
        </div>
      ))}
    </div>
  );
}