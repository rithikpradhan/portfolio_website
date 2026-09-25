"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AUDIENCES = [
  {
    id: "anyone",
    label: "For anyone",
    text: "I'm Jingjing — a New York based product designer who blends creativity, technology, and a little vibe-coding into experiences that feel genuinely human."
  },
  {
    id: "recruiters",
    label: "Recruiters",
    text: "I'm Jingjing — a designer who builds. I focus on creating high-performance React systems, structured design tokens, and robust component libraries. I have 4+ years of experience bridging product strategy and code."
  },
  {
    id: "designers",
    label: "Product Designers",
    text: "I'm Jingjing — I design in the browser and in code. I believe design is about motion and responsiveness. I use Figma for structural grids, but do my high-fidelity prototyping directly with React, CSS, and GSAP."
  },
  {
    id: "managers",
    label: "Product Managers",
    text: "I'm Jingjing — I help align product vision with technical execution. I focus on modular design systems, user-centric research, and rapid frontend testing cycles to deliver high-quality features ahead of schedule."
  },
  {
    id: "engineers",
    label: "Engineers",
    text: "I'm Jingjing — I write clean CSS, semantic structures, and optimized React code. I love collaborating on WebGL shaders, Framer Motion, and GSAP timelines. I make sure my component logic is clean and reusable."
  }
];

export default function Intro() {
  const [activeTab, setActiveTab] = useState("anyone");
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Entry animations for the section elements
      gsap.fromTo(
        ".intro-left",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".intro-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );

      gsap.fromTo(
        ".intro-right",
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".intro-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    },
    { scope: containerRef }
  );

  // Tab change animation
  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return;

    // Fade out text, change active state, fade in text
    gsap.to(textRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.2,
      onComplete: () => {
        setActiveTab(tabId);
        gsap.to(textRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out"
        });
      }
    });
  };

  const activeContent = AUDIENCES.find((a) => a.id === activeTab);

  return (
    <div ref={containerRef} className="w-full bg-[#060608]">
      
      {/* Infinite Horizontal Scrolling Marquee */}
      <div className="w-full bg-white text-black py-4 md:py-6 overflow-hidden select-none relative z-20 flex items-center border-y border-white/5">
        <div className="animate-marquee whitespace-nowrap flex text-2xl md:text-4xl font-semibold font-hero tracking-tight uppercase">
          <span className="mx-4">Design</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Brand Systems</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Vibe Coding</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Product Design</span>
          <span className="mx-4">•</span>
          {/* Duplicate set for seamless looping */}
          <span className="mx-4">Design</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Brand Systems</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Vibe Coding</span>
          <span className="mx-4">•</span>
          <span className="mx-4">Product Design</span>
          <span className="mx-4">•</span>
        </div>
      </div>

      {/* Main Intro content container */}
      <section className="intro-container py-24 md:py-32 px-6 max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start relative z-10">
        
        {/* Left Column: Heading + Interactive Filter Items */}
        <div className="intro-left md:col-span-4 flex flex-col gap-8 opacity-0">
          <h2 className="text-4xl md:text-5xl font-semibold font-hero tracking-tight text-white leading-none">
            Intro
          </h2>
          
          <ul className="flex flex-col gap-4 text-sm md:text-base font-light">
            {AUDIENCES.map((audience) => {
              const isActive = audience.id === activeTab;
              return (
                <li
                  key={audience.id}
                  onClick={() => handleTabChange(audience.id)}
                  className={`cursor-pointer transition-all duration-300 select-none flex items-center gap-2 ${
                    isActive
                      ? "text-white font-medium pl-2 border-l border-emerald-400"
                      : "text-gray-500 hover:text-gray-300 pl-0 border-l border-transparent"
                  }`}
                >
                  {isActive ? "" : "— "}
                  {audience.label}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Column: Dog-ear Dot-grid Interactive Card */}
        <div className="intro-right md:col-span-8 w-full opacity-0">
          <div className="glass-panel rounded-2xl p-8 md:p-12 min-h-[280px] md:min-h-[340px] flex items-center relative overflow-hidden dog-ear dot-grid border border-white/10 hover:border-white/15 transition-colors duration-300">
            
            {/* Center soft decorative white dot matching the image */}
            <div className="absolute top-[48%] left-[65%] w-2 h-2 bg-white rounded-full pointer-events-none opacity-40 shadow-[0_0_8px_#fff]" />

            <div ref={textRef} className="relative z-10 w-full">
              <p className="text-gray-300 font-hero font-light text-2xl md:text-3.5xl leading-relaxed max-w-2xl">
                {activeContent?.text}
              </p>
            </div>

          </div>
        </div>

      </section>

    </div>
  );
}
