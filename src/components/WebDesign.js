"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    id: "sourcing",
    title: "Sourcing",
    image: "/mockup_sourcing.png"
  },
  {
    id: "iidrr",
    title: "IIDRR",
    image: "/mockup_learning.png"
  },
  {
    id: "nuro_ai",
    title: "Nuro AI",
    image: "/mockup_nuro.png"
  },
  {
    id: "be_financial",
    title: "BE Financial ED",
    image: "/mockup_health.png"
  }
];

export default function WebDesign() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const containerRef = useRef(null);
  const previewRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Header entrance animation
      gsap.fromTo(
        ".design-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".design-container",
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // List items stagger fade up
      gsap.fromTo(
        ".design-row",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".design-list",
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );
    },
    { scope: containerRef }
  );

  const handleMouseEnter = (idx) => {
    setHoveredIdx(idx);
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.35,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    setHoveredIdx(null);
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
      ease: "power2.in"
    });
  };

  const handleMouseMove = (e) => {
    gsap.to(previewRef.current, {
      x: e.clientX + 30, // offset right
      y: e.clientY - 95, // center vertically
      duration: 0.45,
      ease: "power3.out"
    });
  };

  return (
    <section
      id="about" // Keep same ID for navbar scrolling continuity
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="design-container py-32 px-6 max-w-5xl mx-auto w-full relative z-10 bg-[#060608]"
    >
      
      {/* Header Block */}
      <div className="design-header flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20 opacity-0 text-left w-full">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-semibold font-hero tracking-tight text-white mb-6">
            Web Design
          </h2>
          <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed">
            I create digital surfaces that are visually compelling,
            strategically aligned, and optimized for both users and business growth.
          </p>
        </div>

        {/* Dynamic dot + counter */}
        <div className="flex items-center gap-3 text-xs md:text-sm font-light text-gray-500 font-sans select-none mb-2">
          <span className="w-1.5 h-1.5 bg-white rounded-full opacity-65" />
          <span>(04)</span>
        </div>
      </div>

      {/* Accordion / Hover Rows Grid */}
      <div className="design-list flex flex-col border-t border-white/10 w-full">
        {PROJECTS.map((project, idx) => (
          <div
            key={project.id}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
            className="design-row group py-10 md:py-12 border-b border-white/10 flex items-center justify-between cursor-pointer opacity-0 relative"
          >
            {/* Outline title with hover solid text effect */}
            <span className="text-outline font-hero text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight uppercase leading-none select-none">
              {project.title}
            </span>

            {/* Diagnostic Arrow link icon */}
            <span className="text-gray-600 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1.5 group-hover:-translate-y-1.5 transition-transform duration-300">
              <ArrowUpRight className="w-8 h-8" />
            </span>
          </div>
        ))}
      </div>

      {/* Central Floating Hover Image Preview Container */}
      <div
        ref={previewRef}
        className="fixed top-0 left-0 pointer-events-none z-50 w-[280px] h-[185px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 opacity-0 scale-90"
      >
        <div className="relative w-full h-full">
          {PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="absolute inset-0 transition-opacity duration-300"
              style={{ opacity: hoveredIdx === idx ? 1 : 0 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
