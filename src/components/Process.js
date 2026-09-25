"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Process() {
  const containerRef = useRef(null);
  const pathRef1 = useRef(null);
  const pathRef2 = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Setup SVG path lengths for draw-in animation
      const length1 = pathRef1.current ? pathRef1.current.getTotalLength() : 300;
      const length2 = pathRef2.current ? pathRef2.current.getTotalLength() : 300;

      if (pathRef1.current) {
        gsap.set(pathRef1.current, {
          strokeDasharray: length1,
          strokeDashoffset: length1,
        });
      }
      if (pathRef2.current) {
        gsap.set(pathRef2.current, {
          strokeDasharray: length2,
          strokeDashoffset: length2,
        });
      }

      // 1. Initial Scroll Entrance Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 92%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      // Section Title Entrance
      tl.fromTo(
        ".process-heading",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      );

      // Ambient Glow fade in
      tl.fromTo(
        ".process-glow",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.4 },
        "-=0.8"
      );

      const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

      // Cards Fan-Out & Lift Entrance
      tl.fromTo(
        ".process-card-1",
        { y: 80, x: isDesktop ? -30 : 0, rotate: isDesktop ? -12 : 0, opacity: 0, scale: 0.92 },
        { y: 0, x: 0, rotate: isDesktop ? -4 : 0, opacity: 1, scale: 1, duration: 1.1, ease: "power4.out", clearProps: isDesktop ? "opacity" : "opacity,transform" },
        "-=0.9"
      );

      tl.fromTo(
        ".process-card-2",
        { y: 100, rotate: isDesktop ? 10 : 0, opacity: 0, scale: 0.9 },
        { y: 0, rotate: isDesktop ? 3 : 0, opacity: 1, scale: 1, duration: 1.2, ease: "power4.out", clearProps: isDesktop ? "opacity" : "opacity,transform" },
        "-=0.95"
      );

      tl.fromTo(
        ".process-card-3",
        { y: 80, x: isDesktop ? 30 : 0, rotate: isDesktop ? 12 : 0, opacity: 0, scale: 0.92 },
        { y: 0, x: 0, rotate: isDesktop ? 2 : 0, opacity: 1, scale: 1, duration: 1.1, ease: "power4.out", clearProps: isDesktop ? "opacity" : "opacity,transform" },
        "-=0.95"
      );

      // Connecting Neon Lines Draw-in
      if (pathRef1.current) {
        tl.to(
          pathRef1.current,
          { strokeDashoffset: 0, duration: 1, ease: "power2.inOut" },
          "-=0.7"
        );
      }
      tl.fromTo(
        ".path-node-1",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.2, ease: "back.out(2)" },
        "-=0.8"
      );

      if (pathRef2.current) {
        tl.to(
          pathRef2.current,
          { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut" },
          "-=0.6"
        );
      }
      tl.fromTo(
        ".path-node-2",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, stagger: 0.2, ease: "back.out(2)" },
        "-=0.7"
      );

      // 2. Continuous Scroll-Driven Parallax as you scroll across the section (Desktop only)
      if (isDesktop) {
        const parallaxTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        });

        // Card 1 shifts upward slightly and un-tilts gently
        parallaxTl.to(".process-card-1", {
          y: -40,
          rotate: -2,
          ease: "none",
        }, 0);

        // Card 2 (Hero center card) floats higher for pronounced depth
        parallaxTl.to(".process-card-2", {
          y: -75,
          rotate: 4.5,
          ease: "none",
        }, 0);

        // Card 3 moves with distinct rhythm
        parallaxTl.to(".process-card-3", {
          y: -35,
          rotate: 0.5,
          ease: "none",
        }, 0);

        // Ambient glow shifts smoothly
        parallaxTl.to(".process-glow", {
          y: -50,
          scale: 1.1,
          ease: "none",
        }, 0);
      }

      // 3. Client Reviews Entrance Animation
      const reviewsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".process-reviews",
          start: "top 88%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      reviewsTl.fromTo(
        ".review-divider",
        { scaleY: 0, opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 0.8, transformOrigin: "top center", clearProps: "opacity,transform" }
      );

      reviewsTl.fromTo(
        ".review-col-1",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, clearProps: "opacity,transform" },
        "-=0.6"
      );

      reviewsTl.fromTo(
        ".review-col-2",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, clearProps: "opacity,transform" },
        "-=0.6"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="process"
      ref={containerRef}
      className="relative w-full pt-12 sm:pt-14 md:pt-16 pb-14 sm:pb-20 md:pb-24 bg-[#FFFFFF] flex flex-col items-center justify-center px-4 sm:px-10 lg:px-16 overflow-hidden select-none"
    >
      {/* Radiant Neon Lime Ambient Glow behind cards */}
      <div className="process-glow absolute top-[22%] right-[12%] w-[500px] sm:w-[700px] h-[400px] sm:h-[500px] bg-gradient-to-bl from-[#A3E635]/35 via-[#BEF264]/20 to-transparent rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="process-glow absolute top-[18%] right-[30%] w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-[#84CC16]/25 rounded-full blur-[80px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="w-full max-w-[1360px] mx-auto flex flex-col items-center text-center mb-7 sm:mb-10 md:mb-12 z-20">
        <h2 className="process-heading text-3xl sm:text-5xl md:text-[56px] font-normal text-[#18181B] tracking-tight font-display">
          Here&apos;s how it works
        </h2>
      </div>

      {/* Cards & Connector Track Container */}
      <div className="relative w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-4 xl:gap-6 z-20 pb-4 sm:pb-6">

        {/* SVG Curved Connecting Lines Layer (Desktop Only) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-30">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 1200 500"
            fill="none"
          >
            {/* Connector 1: Arch from Card 01 to Card 02 */}
            <path
              ref={pathRef1}
              d="M 365 220 C 385 145, 450 130, 485 160"
              stroke="#84CC16"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Small Ring Node at Start of Line 1 (Card 01 right edge) */}
            <circle
              cx="365"
              cy="220"
              r="8"
              stroke="#84CC16"
              strokeWidth="2.5"
              fill="white"
              className="path-node-1"
            />
            {/* Small Ring Node at End of Line 1 (Card 02 top edge) */}
            <circle
              cx="485"
              cy="160"
              r="8"
              stroke="#84CC16"
              strokeWidth="2.5"
              fill="white"
              className="path-node-1"
            />

            {/* Connector 2: Smooth upward arch from Card 02 to Card 03 (matching Connector 1) */}
            <path
              ref={pathRef2}
              d="M 735 280 C 760 195, 835 180, 868 245"
              stroke="#84CC16"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* Small Ring Node at Start of Line 2 (Card 02 right edge) */}
            <circle
              cx="735"
              cy="280"
              r="8"
              stroke="#84CC16"
              strokeWidth="2.5"
              fill="white"
              className="path-node-2"
            />
            {/* Small Ring Node at End of Line 2 (Card 03 left edge) */}
            <circle
              cx="868"
              cy="245"
              r="8"
              stroke="#84CC16"
              strokeWidth="2.5"
              fill="white"
              className="path-node-2"
            />
          </svg>
        </div>

        {/* Card 01: Discover */}
        <div className="process-card-1 relative z-10 w-full max-w-[340px] sm:max-w-[360px] h-[330px] sm:h-[430px] md:h-[480px] lg:h-[500px] bg-white rounded-[24px] sm:rounded-[34px] p-6 sm:p-9 shadow-[0_20px_55px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col justify-between cursor-pointer group hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition-all duration-300 rotate-0 lg:-rotate-[4deg] lg:translate-y-6">
          {/* Top Number */}
          <span className="text-5xl sm:text-6xl md:text-7xl font-light text-[#111827] tracking-tight font-display select-none">
            01
          </span>

          {/* Bottom Content */}
          <div className="flex flex-col">
            <h3 className="text-2xl sm:text-3xl font-medium text-[#111827] mb-2 sm:mb-3 font-display tracking-tight group-hover:translate-x-1 transition-transform duration-200">
              Discover
            </h3>
            <p className="text-xs sm:text-sm text-[#6B7280] font-normal leading-relaxed max-w-[260px]">
              Understanding your goals, users, and challenges through research and strategy.
            </p>
          </div>
        </div>

        {/* Card 02: Design (Center Elevated Hero Card) */}
        <div className="process-card-2 relative z-20 w-full max-w-[340px] sm:max-w-[360px] h-[330px] sm:h-[440px] md:h-[490px] lg:h-[510px] bg-white rounded-[24px] sm:rounded-[34px] p-6 sm:p-9 shadow-[0_25px_65px_rgba(0,0,0,0.08),0_1px_4px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col justify-between cursor-pointer group hover:shadow-[0_35px_80px_rgba(0,0,0,0.14)] transition-all duration-300 rotate-0 lg:rotate-[3deg] lg:-translate-y-8">
          {/* Top Number */}
          <span className="text-5xl sm:text-6xl md:text-7xl font-light text-[#111827] tracking-tight font-display select-none">
            02
          </span>

          {/* Bottom Content */}
          <div className="flex flex-col">
            <h3 className="text-2xl sm:text-3xl font-medium text-[#111827] mb-2 sm:mb-3 font-display tracking-tight group-hover:translate-x-1 transition-transform duration-200">
              Design & Develop
            </h3>
            <p className="text-xs sm:text-sm text-[#6B7280] font-normal leading-relaxed max-w-[260px]">
              Transforming insights into intuitive, beautiful, and functional product experiences.
            </p>
          </div>
        </div>

        {/* Card 03: Deliver */}
        <div className="process-card-3 relative z-10 w-full max-w-[340px] sm:max-w-[360px] h-[330px] sm:h-[430px] md:h-[480px] lg:h-[500px] bg-white rounded-[24px] sm:rounded-[34px] p-6 sm:p-9 shadow-[0_20px_55px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col justify-between cursor-pointer group hover:shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition-all duration-300 rotate-0 lg:rotate-[2deg] lg:translate-y-4">
          {/* Top Number */}
          <span className="text-5xl sm:text-6xl md:text-7xl font-light text-[#111827] tracking-tight font-display select-none">
            03
          </span>

          {/* Bottom Content */}
          <div className="flex flex-col">
            <h3 className="text-2xl sm:text-3xl font-medium text-[#111827] mb-2 sm:mb-3 font-display tracking-tight group-hover:translate-x-1 transition-transform duration-200">
              Deliver
            </h3>
            <p className="text-xs sm:text-sm text-[#6B7280] font-normal leading-relaxed max-w-[260px]">
              Testing, refining, and launching the final product with clarity and precision.
            </p>
          </div>
        </div>

      </div>

      {/* Client Reviews Section (matching reference design) */}
      <div className="process-reviews relative w-full max-w-[1240px] mx-auto mt-10 sm:mt-16 md:mt-24 pt-4 sm:pt-8 z-20">

        {/* 2-Column Layout with Vertical Divider */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20 items-start">

          {/* Center Vertical Divider Line (Desktop) */}
          <div className="review-divider hidden md:block absolute left-1/2 top-0 bottom-4 w-[1px] bg-slate-200/90 -translate-x-1/2" />

          {/* Left Review: Daniel Reed */}
          <div className="review-col-1 flex flex-col justify-between h-full md:pr-6 lg:pr-10">
            {/* Quote & Icon Row */}
            <div className="flex items-start justify-between gap-4 sm:gap-8">
              <p className="text-[#18181B] text-base sm:text-xl md:text-[21px] font-normal leading-[1.6] tracking-tight font-display">
                Working with Elian was seamless from start to finish. He understood our goals quickly, asked the right questions, and delivered a design system that scaled perfectly with our growing modrn best app.
              </p>
              {/* Clean Parallel Quotation Mark Icon */}
              <div className="shrink-0 pt-1 text-[#18181B]">
                <svg className="w-5 h-5 text-[#18181B]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 19L8 5H12L8.5 19H4.5ZM13.5 19L17 5H21L17.5 19H13.5Z" />
                </svg>
              </div>
            </div>

            {/* Author Row */}
            <div className="mt-8 sm:mt-10 flex items-center gap-3.5">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 border border-slate-100 shadow-sm">
                <Image
                  src="/avatar_daniel.jpg"
                  alt="Daniel Reed"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm sm:text-base font-medium text-[#111827] tracking-tight">
                  Daniel Reed
                </h4>
                <p className="text-xs sm:text-[13px] text-[#6B7280] font-normal">
                  Founder of NovaLabs
                </p>
              </div>
            </div>
          </div>

          {/* Mobile divider */}
          <div className="block md:hidden w-full h-[1px] bg-slate-100 my-2" />

          {/* Right Review: Sarah Nguyen (Offset Downwards for Editorial Look) */}
          <div className="review-col-2 flex flex-col justify-between h-full md:pl-6 lg:pl-10 md:pt-14 lg:pt-20">
            {/* Quote & Icon Row */}
            <div className="flex items-start justify-between gap-4 sm:gap-8">
              <p className="text-[#18181B] text-base sm:text-xl md:text-[21px] font-normal leading-[1.6] tracking-tight font-display">
                Elian brought our product vision to life with incredible attention to detail. His ability to balance business needs with user empathy made our platform not just beautiful — but genuinely useful.
              </p>
              {/* Clean Parallel Quotation Mark Icon */}
              <div className="shrink-0 pt-1 text-[#18181B]">
                <svg className="w-5 h-5 text-[#18181B]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.5 19L8 5H12L8.5 19H4.5ZM13.5 19L17 5H21L17.5 19H13.5Z" />
                </svg>
              </div>
            </div>

            {/* Author Row */}
            <div className="mt-8 sm:mt-10 flex items-center gap-3.5">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0 border border-slate-100 shadow-sm">
                <Image
                  src="/avatar_sarah.jpg"
                  alt="Sarah Nguyen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h4 className="text-sm sm:text-base font-medium text-[#111827] tracking-tight">
                  Sarah Nguyen
                </h4>
                <p className="text-xs sm:text-[13px] text-[#6B7280] font-normal">
                  Product Manager at FlowSync
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
