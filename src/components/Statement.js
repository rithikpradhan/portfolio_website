"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Statement() {
  const containerRef = useRef(null);
  const showcaseRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Cinematic Entrance Timeline for content (runs once smoothly without oscillation)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 92%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      // Greeting entrance: delicate slide up & scale
      tl.fromTo(
        ".statement-greeting",
        { y: 25, opacity: 0, scale: 0.94 },
        { y: 0, opacity: 1, scale: 1, duration: 0.65 }
      );

      // Statement text smooth upward glide
      tl.fromTo(
        ".statement-text",
        { y: 35, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.75 },
        "-=0.45"
      );

      // Left badges pop & float into place in tandem with the text
      tl.fromTo(
        ".badge-left",
        { x: -40, opacity: 0, scale: 0.88, rotate: -12 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotate: (index) => [-6, -10, -3][index] || 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // Right badges pop & float into place simultaneously with left badges
      tl.fromTo(
        ".badge-right",
        { x: 40, opacity: 0, scale: 0.88, rotate: 12 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotate: (index) => [-6, 6, 4][index] || 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
        },
        "<+=0.04"
      );

      // 3. Showcase Container Entrance (triggers smoothly when showcase comes into view)
      if (showcaseRef.current) {
        gsap.fromTo(
          showcaseRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "opacity,transform",
            scrollTrigger: {
              trigger: showcaseRef.current,
              start: "top 88%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          ".showcase-pill",
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.7,
            ease: "back.out(1.8)",
            clearProps: "opacity,transform",
            scrollTrigger: {
              trigger: showcaseRef.current,
              start: "top 78%",
              once: true,
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      id="intro"
      ref={containerRef}
      className="relative z-20 w-full pt-14 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 bg-white flex flex-col items-center justify-center px-4 sm:px-10 lg:px-16 overflow-hidden select-none"
    >
      {/* Subtle Background Glow for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[55vh] bg-slate-50/90 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Main Content Wrapper */}
      <div className="relative w-full max-w-[1360px] mx-auto flex flex-col items-center justify-center">

        {/* Top Greeting: "Hallo!" in elegant italic serif */}
        <p className="statement-greeting font-serif italic text-2xl sm:text-4xl md:text-[44px] text-slate-800 font-light mb-4 sm:mb-7 md:mb-8 text-center tracking-normal">
          Hallo!
        </p>

        {/* Center Container with Flanking Badges */}
        <div className="relative w-full flex items-center justify-center">

          {/* Left Flanking Badges Column (Desktop / Tablet) */}
          <div className="hidden lg:flex flex-col gap-10 xl:gap-14 absolute left-0 xl:left-4 z-20">

            {/* 1. Product Design (Orange) */}
            <div className="badge-left transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
              <div className="animate-badge-1">
                <div className="bg-white/95 rounded-full pl-2 pr-5 py-2 shadow-[0_10px_26px_rgba(0,0,0,0.07)] border border-slate-100 flex items-center gap-3 cursor-pointer group transition-shadow duration-300 hover:shadow-xl">
                  <div className="w-8 h-8 rounded-full bg-[#FF5500] flex items-center justify-center shrink-0 shadow-sm shadow-[#FF5500]/30 transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-800 tracking-tight whitespace-nowrap">
                    Frontend Developement
                  </span>
                </div>
              </div>
            </div>

            {/* 2. UX Design (Sky Blue) */}
            <div className="badge-left transition-transform duration-300 hover:scale-110 hover:-translate-y-1 ml-4 xl:ml-6">
              <div className="animate-badge-2">
                <div className="bg-white/95 rounded-full pl-2 pr-5 py-2 shadow-[0_10px_26px_rgba(0,0,0,0.07)] border border-slate-100 flex items-center gap-3 cursor-pointer group transition-shadow duration-300 hover:shadow-xl">
                  <div className="w-8 h-8 rounded-full bg-[#0099FF] flex items-center justify-center shrink-0 shadow-sm shadow-[#0099FF]/30 transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-800 tracking-tight whitespace-nowrap">
                    Responsive Design
                  </span>
                </div>
              </div>
            </div>

            {/* 3. User Research (Black) */}
            <div className="badge-left transition-transform duration-300 hover:scale-110 hover:-translate-y-1 -ml-2">
              <div className="animate-badge-3">
                <div className="bg-white/95 rounded-full pl-2 pr-5 py-2 shadow-[0_10px_26px_rgba(0,0,0,0.07)] border border-slate-100 flex items-center gap-3 cursor-pointer group transition-shadow duration-300 hover:shadow-xl">
                  <div className="w-8 h-8 rounded-full bg-[#23272F] flex items-center justify-center shrink-0 shadow-sm shadow-black/20 transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-800 tracking-tight whitespace-nowrap">
                    API Integration
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Central Statement Typography */}
          <div className="max-w-[860px] mx-auto text-center px-2 sm:px-6 z-10">
            <h2 className="statement-text text-2xl xs:text-3xl sm:text-5xl md:text-[52px] lg:text-[56px] font-normal leading-[1.28] sm:leading-[1.24] tracking-tight font-display">
              <span className="text-[#151922] font-medium">
                focus is on blending clear strategy, thoughtful design, and user empathy to{" "}
              </span>
              <span className="text-[#A2A8B5] font-light">
                craft experiences that solve real problems
              </span>
            </h2>
          </div>

          {/* Right Flanking Badges Column (Desktop / Tablet) */}
          <div className="hidden lg:flex flex-col gap-10 xl:gap-14 absolute right-0 xl:right-4 z-20 items-end">

            {/* 1. Design Systems (Yellow) */}
            <div className="badge-right transition-transform duration-300 hover:scale-110 hover:-translate-y-1">
              <div className="animate-badge-1">
                <div className="bg-white/95 rounded-full pl-2 pr-5 py-2 shadow-[0_10px_26px_rgba(0,0,0,0.07)] border border-slate-100 flex items-center gap-3 cursor-pointer group transition-shadow duration-300 hover:shadow-xl">
                  <div className="w-8 h-8 rounded-full bg-[#EAB308] flex items-center justify-center shrink-0 shadow-sm shadow-[#EAB308]/30 transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-800 tracking-tight whitespace-nowrap">
                    Full-Stack Development
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Usability Testing (Magenta Pink) */}
            <div className="badge-right transition-transform duration-300 hover:scale-110 hover:-translate-y-1 mr-4 xl:mr-6">
              <div className="animate-badge-2">
                <div className="bg-white/95 rounded-full pl-2 pr-5 py-2 shadow-[0_10px_26px_rgba(0,0,0,0.07)] border border-slate-100 flex items-center gap-3 cursor-pointer group transition-shadow duration-300 hover:shadow-xl">
                  <div className="w-8 h-8 rounded-full bg-[#EC4899] flex items-center justify-center shrink-0 shadow-sm shadow-[#EC4899]/30 transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-800 tracking-tight whitespace-nowrap">
                    Web Applications
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Brand Identity (Green) */}
            <div className="badge-right transition-transform duration-300 hover:scale-110 hover:-translate-y-1 -mr-2">
              <div className="animate-badge-3">
                <div className="bg-white/95 rounded-full pl-2 pr-5 py-2 shadow-[0_10px_26px_rgba(0,0,0,0.07)] border border-slate-100 flex items-center gap-3 cursor-pointer group transition-shadow duration-300 hover:shadow-xl">
                  <div className="w-8 h-8 rounded-full bg-[#22C55E] flex items-center justify-center shrink-0 shadow-sm shadow-[#22C55E]/30 transition-transform duration-300 group-hover:scale-110">
                    <svg className="w-4 h-4 text-white fill-white" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-800 tracking-tight whitespace-nowrap">
                    Performance
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Mobile & Tablet Badges Cloud (Displayed below statement on small screens) */}
        <div className="lg:hidden flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 mt-8 sm:mt-14 max-w-2xl px-2">

          {/* Product Design */}
          <div className="bg-white/95 rounded-full pl-2 pr-4 py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center gap-2.5 -rotate-3">
            <div className="w-7 h-7 rounded-full bg-[#FF5500] flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-white fill-white" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium text-slate-800">
              Frontend Development
            </span>
          </div>

          {/* UX Design */}
          <div className="bg-white/95 rounded-full pl-2 pr-4 py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center gap-2.5 rotate-2">
            <div className="w-7 h-7 rounded-full bg-[#0099FF] flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-white fill-white" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium text-slate-800">
              Responsive Design
            </span>
          </div>

          {/* User Research */}
          <div className="bg-white/95 rounded-full pl-2 pr-4 py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center gap-2.5 -rotate-2">
            <div className="w-7 h-7 rounded-full bg-[#23272F] flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-white fill-white" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium text-slate-800">
              API Integration
            </span>
          </div>

          {/* Design Systems */}
          <div className="bg-white/95 rounded-full pl-2 pr-4 py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center gap-2.5 -rotate-3">
            <div className="w-7 h-7 rounded-full bg-[#EAB308] flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-white fill-white" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium text-slate-800">
              Full-Stack Development
            </span>
          </div>

          {/* Usability Testing */}
          <div className="bg-white/95 rounded-full pl-2 pr-4 py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center gap-2.5 rotate-3">
            <div className="w-7 h-7 rounded-full bg-[#EC4899] flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-white fill-white" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium text-slate-800">
              Web Applications
            </span>
          </div>

          {/* Brand Identity */}
          <div className="bg-white/95 rounded-full pl-2 pr-4 py-1.5 shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-100 flex items-center gap-2.5 rotate-1">
            <div className="w-7 h-7 rounded-full bg-[#22C55E] flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5 text-white fill-white" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium text-slate-800">
              Performance
            </span>
          </div>

        </div>

        {/* Recent Works Showcase Banner (Neutral Base with Blue Overlay from Top) */}
        <div
          ref={showcaseRef}
          className="relative w-full max-w-[1240px] mt-10 sm:mt-16 md:mt-18 h-[340px] xs:h-[400px] sm:h-[480px] md:h-[560px] lg:h-[600px] rounded-[24px] sm:rounded-[44px] md:rounded-[52px] bg-[#F8FAFC] overflow-hidden shadow-[0_25px_65px_rgba(0,0,0,0.08)] border border-slate-200/80 flex items-center justify-center p-3 sm:p-6 md:p-8 select-none"
        >
          {/* Subtle Ambient Depth Lighting */}
          <div className="absolute top-0 inset-x-0 h-48 bg-blue-500/10 blur-3xl pointer-events-none z-10" />
          <div className="absolute bottom-0 inset-x-0 h-48 bg-slate-100/50 pointer-events-none -z-10" />

          {/* Staggered Mockup Columns Grid */}
          <div className="relative w-full h-full grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 z-10 pointer-events-none">

            {/* Left Column */}
            <div className="flex flex-col gap-3 sm:gap-6 -mt-8 xs:-mt-12 sm:-mt-20 md:-mt-28 pointer-events-auto">
              {/* Card 1: mockup1 */}
              <div className="w-full bg-white rounded-[14px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20 transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/mockup1.png"
                  alt="Custom Websites - AROME"
                  width={640}
                  height={420}
                  priority
                  className="w-full h-auto object-cover block"
                />
              </div>

              {/* Card 2: mockup2 */}
              <div className="w-full bg-white rounded-[14px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20 transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/mockup2.png"
                  alt="Websites that build Trust - AMS Safety"
                  width={640}
                  height={420}
                  priority
                  className="w-full h-auto object-cover block"
                />
              </div>

              {/* Card 3: mockup3 */}
              <div className="w-full bg-white rounded-[14px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20 transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/mockup3.jpeg"
                  alt="Modern Websites - Zenvia Care"
                  width={640}
                  height={420}
                  priority
                  className="w-full h-auto object-cover block"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3 sm:gap-6 -mt-20 xs:-mt-28 sm:-mt-44 md:-mt-52 pointer-events-auto">
              {/* Card 4: mockup3 */}
              <div className="w-full bg-white rounded-[14px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20 transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/mockup3.jpeg"
                  alt="Modern Websites - Zenvia Care"
                  width={640}
                  height={420}
                  className="w-full h-auto object-cover block"
                />
              </div>

              {/* Card 5: mockup1 */}
              <div className="w-full bg-white rounded-[14px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20 transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/mockup1.png"
                  alt="Custom Websites - AROME"
                  width={640}
                  height={420}
                  className="w-full h-auto object-cover block"
                />
              </div>

              {/* Card 6: mockup2 */}
              <div className="w-full bg-white rounded-[14px] sm:rounded-[24px] md:rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-white/20 transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/mockup2.png"
                  alt="Websites that build Trust - AMS Safety"
                  width={640}
                  height={420}
                  className="w-full h-auto object-cover block"
                />
              </div>
            </div>

          </div>

          {/* Blue Theme Overlay from Top over Mockup Cards */}
          <div className="absolute inset-x-0 top-0 h-[65%] sm:h-[60%] bg-gradient-to-b from-[#2563EB]/80 via-[#3B82F6]/35 to-transparent pointer-events-none z-20" />
          <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-[#1D4ED8]/30 to-transparent pointer-events-none z-20" />

          {/* Center Floating Badge: "Seen Resent Works" */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center pointer-events-none">
            {/* Soft Ambient Spotlight Glow behind the pill */}
            <div className="absolute w-56 sm:w-64 h-56 sm:h-64 rounded-full bg-white/40 blur-2xl pointer-events-none" />

            {/* Interactive Pill Button */}
            <a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("works");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="showcase-pill pointer-events-auto bg-white rounded-full pl-4 pr-2 sm:pl-7 sm:pr-3 py-2 sm:py-3 shadow-[0_20px_50px_rgba(0,0,0,0.22),0_1px_3px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-2.5 sm:gap-4 cursor-pointer group hover:scale-105 hover:shadow-[0_25px_60px_rgba(0,0,0,0.28)] transition-all duration-300 select-none"
            >
              <span className="text-xs sm:text-base md:text-lg font-medium text-[#111827] tracking-tight whitespace-nowrap">
                Seen Recent Works
              </span>
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#18181B] flex items-center justify-center text-white shadow-md shadow-black/25 group-hover:bg-[#2563EB] group-hover:rotate-12 transition-all duration-300 shrink-0">
                {/* Layered Cards / Sheets SVG Icon matching reference */}
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="8" y="2" width="13" height="15" rx="3" />
                  <path d="M5 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1" />
                </svg>
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
