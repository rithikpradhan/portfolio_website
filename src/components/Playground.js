"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PLAYGROUND_ITEMS = [
  {
    title: "Nook",
    description: "An inspiration archive for creatives to save, organize, and revisit references in a more immersive way.",
    tags: ["Creative Tool", "Chrome Extension"],
    image: "/mockup_nook.png",
    link: "#"
  },
  {
    title: "Remake",
    description: "A creative-stack builder to assemble, remix, and share your workspace tools.",
    tags: ["Web App", "Creative Tech"],
    image: "/mockup_remake.png",
    link: "#"
  },
  {
    title: "Vibe Canvas",
    description: "A lightweight canvas environment to sketch design details directly in front-end HTML/CSS.",
    tags: ["WebGL", "Creative Coding"],
    image: "/project_gallery.png",
    link: "#"
  }
];

export default function Playground() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Section entry animation
      gsap.fromTo(
        ".playground-left",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".playground-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );

      gsap.fromTo(
        ".playground-card",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".playground-scroll-track",
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="performances" // Keep ID same for navbar navigation compatibility
      ref={containerRef}
      className="playground-container py-32 px-6 max-w-5xl mx-auto w-full relative z-10 bg-[#060608] grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
    >
      
      {/* Left Column: Heading & Description */}
      <div className="playground-left md:col-span-4 flex flex-col items-start text-left md:sticky md:top-32 opacity-0">
        
        {/* Status dot */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_6px_#10b981]" />
          <span className="text-[10px] tracking-[0.25em] text-gray-500 font-semibold uppercase">
            SINCE 2024
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold font-hero tracking-tight text-white mb-6">
          Playground
        </h2>

        {/* Description */}
        <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed mb-8">
          A space for self-initiated products, prototypes, and creative systems
          shaped by curiosity, code, and fast iteration.
        </p>

        {/* Scroll action link indicator */}
        <span className="text-[10px] tracking-[0.25em] text-gray-500 font-semibold uppercase flex items-center gap-2 hover:text-white transition-colors duration-300 select-none">
          SCROLL →
        </span>
      </div>

      {/* Right Column: Horizontally Scrollable Cards */}
      <div className="md:col-span-8 w-full overflow-hidden">
        <div className="playground-scroll-track flex gap-6 overflow-x-auto hide-scrollbar pb-6 scroll-smooth select-none">
          {PLAYGROUND_ITEMS.map((item) => (
            <div
              key={item.title}
              className="playground-card w-[290px] md:w-[410px] flex-shrink-0 flex flex-col gap-4 text-left group opacity-0"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-white/15 transition-all duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-[1.015] transition-transform duration-500"
                  sizes="(max-w-768px) 290px, 410px"
                />
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-2 mt-2">
                <h3 className="text-xl font-medium text-white group-hover:text-emerald-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-2 mt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-wider text-gray-400 border border-white/5 rounded-full px-3 py-1 font-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
