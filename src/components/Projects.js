"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS = [
  {
    id: "first_movers",
    counter: "01 / 04",
    title: "AI Learning Platform",
    tabLabel: "First Movers",
    description: "Designed personalized learning journeys and AI-powered experiences for a professional education",
    image: "/mockup_learning.png",
    bgColor: "bg-[#3cd09d]" // Mint green
  },
  {
    id: "foster_health",
    counter: "02 / 04",
    title: "FosterHealth AI",
    tabLabel: "FosterHealth AI",
    description: "An AI-powered healthcare assistant simplifying clinical documentation and patient records",
    image: "/mockup_health.png",
    bgColor: "bg-[#5850ec]" // Purple-blue
  },
  {
    id: "sourcing",
    counter: "03 / 04",
    title: "Smart Sourcing Platform",
    tabLabel: "Sourcing",
    description: "Streamlining vendor discovery and automated procurement workflows with intelligent matching",
    image: "/mockup_sourcing.png",
    bgColor: "bg-[#0f766e]" // Deep teal
  },
  {
    id: "salona",
    counter: "04 / 04",
    title: "Salona E-Commerce",
    tabLabel: "Salona",
    description: "A minimalist luxury fashion e-commerce storefront with immersive WebGL lookbooks",
    image: "/mockup_salona.png",
    bgColor: "bg-[#c89666]" // Warm sand/gold
  }
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const slideTrackRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Section Header entry animation
      gsap.fromTo(
        ".projects-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".projects-header",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Slider frame entry animation
      gsap.fromTo(
        ".slider-container",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".slider-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const slideTo = (index) => {
    let target = index;
    if (target < 0) target = PROJECTS.length - 1;
    if (target >= PROJECTS.length) target = 0;
    setActiveIndex(target);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 w-full relative z-10 bg-[#060608] overflow-hidden flex flex-col items-center"
    >
      
      {/* Title Header */}
      <div className="projects-header max-w-5xl w-full px-6 mb-16 opacity-0 text-left">
        <h2 className="text-4xl md:text-6xl font-semibold font-hero tracking-tight text-white mb-6">
          Featured Work
        </h2>
        <p className="text-gray-400 font-light text-base md:text-lg max-w-2xl leading-relaxed">
          I blend technology, creativity, and empathy to craft seamless
          experiences that bridge people, spaces, and services.
        </p>
      </div>

      {/* Interactive Carousel Frame */}
      <div className="slider-container relative w-full opacity-0 flex flex-col items-center">
        
        {/* Navigation Arrows */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 md:px-12 z-30 pointer-events-none">
          <button
            onClick={() => slideTo(activeIndex - 1)}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 pointer-events-auto cursor-pointer"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={() => slideTo(activeIndex + 1)}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-black/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 pointer-events-auto cursor-pointer"
            aria-label="Next Project"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Slide Track Wrapper */}
        <div className="w-full overflow-hidden py-4">
          <div
            ref={slideTrackRef}
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] w-full"
            style={{
              transform: `translateX(calc(15% - ${activeIndex * 75}%))`
            }}
          >
            {PROJECTS.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={project.id}
                  className={`w-[70%] flex-shrink-0 mr-[5%] rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/9] transition-all duration-700 relative flex flex-col items-center justify-center p-8 md:p-16 ${
                    project.bgColor
                  } ${
                    isActive 
                      ? "opacity-100 scale-100 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
                      : "opacity-40 scale-[0.93] pointer-events-none"
                  }`}
                >
                  
                  {/* Counter Badge */}
                  <span className="absolute top-6 left-8 bg-black/25 backdrop-blur-md border border-white/10 rounded-full px-4 py-1 text-xs md:text-sm font-light text-white select-none">
                    {project.counter}
                  </span>

                  {/* Decorative glowing dot in bottom right */}
                  <span className="absolute bottom-6 right-8 w-3 h-3 bg-white rounded-full opacity-65 shadow-[0_0_10px_#fff]" />

                  {/* Inner Mockup Image frame */}
                  <div className="relative w-full h-[70%] rounded-xl overflow-hidden shadow-2xl border border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="70vw"
                      priority={idx === 0}
                    />
                  </div>

                  {/* Slide details (overlay bottom title/desc) */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 md:p-8 flex flex-col justify-end text-left select-none">
                    <h3 className="text-xl md:text-3xl font-medium text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Tab triggers / labels below the carousel */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-10 px-6">
          {PROJECTS.map((project, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={project.id}
                onClick={() => slideTo(idx)}
                className={`text-sm md:text-base transition-all duration-300 font-light cursor-pointer select-none relative pb-2 ${
                  isActive ? "text-white font-medium" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {project.tabLabel}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white rounded-full animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

      </div>

    </section>
  );
}
