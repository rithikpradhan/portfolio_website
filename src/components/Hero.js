"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Watermark text fade in
      tl.fromTo(
        ".hero-watermark",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.6 }
      );

      // Central Arch & portrait rise
      tl.fromTo(
        ".hero-arch-container",
        { y: 25, opacity: 0, scale: 0.97 },
        { y: 0, opacity: 1, scale: 1, duration: 0.65 },
        "-=0.45"
      );

      // Floating pill badges pop-in
      tl.fromTo(
        ".floating-badge",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.08, ease: "back.out(1.8)" },
        "-=0.4"
      );

      // Bottom left headline & greeting
      tl.fromTo(
        ".hero-intro-text",
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.06, clearProps: "opacity,transform" },
        "-=0.4"
      );

      // Bottom right social pills stagger entrance: bottom to upwards
      tl.fromTo(
        ".social-pill-item",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power3.out", clearProps: "opacity,transform" },
        "-=0.4"
      );

      // Parallax scroll exit for Desktop screens only (>= 1024px)
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        const exitTl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top -50px",
            end: "bottom top",
            scrub: 0.6,
          },
        });

        // Arch and portrait gently scale down and drift up
        exitTl.to(
          ".hero-arch-container",
          {
            y: -90,
            scale: 0.92,
            opacity: 0.35,
            ease: "none",
          },
          0
        );

        // Watermark drifts upwards faster
        exitTl.to(
          ".hero-watermark",
          {
            y: -140,
            opacity: 0,
            ease: "none",
          },
          0
        );

        // Floating badges drift away
        exitTl.to(
          ".floating-badge",
          {
            y: -40,
            opacity: 0,
            scale: 0.85,
            stagger: 0.04,
            ease: "none",
          },
          0
        );

        // Bottom text and pills sink and fade
        exitTl.to(
          ".hero-intro-text",
          {
            y: 30,
            opacity: 0,
            ease: "none",
          },
          0
        );

        exitTl.to(
          ".social-pill-item",
          {
            y: 30,
            opacity: 0,
            stagger: 0.03,
            ease: "none",
          },
          0
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-[100dvh] min-h-[600px] max-h-[1100px] w-full flex flex-col justify-between items-center bg-gradient-to-b from-[#B8BFCB] via-[#C4CAD4] to-[#CAD0DB] px-4 xs:px-6 sm:px-10 lg:px-14 pt-16 sm:pt-28 pb-4 xs:pb-6 sm:pb-8 overflow-hidden select-none"
    >
      {/* Soft Ambient Radial Light for depth */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[60vh] bg-white/25 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Giant Watermark Typography: "DESIGNER" */}
      <div className="hero-watermark absolute top-[138px] sm:top-[10%] md:top-[13%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-10">
        <h2 className="text-[17vw] sm:text-[18vw] md:text-[16vw] lg:text-[200px] xl:text-[230px] font-black tracking-normal text-white/50 leading-none uppercase font-display drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)]">
          DEVELOPER
        </h2>
      </div>

      {/* Center Arch and Portrait - Positioned cleanly below the navbar on mobile with ample clearance */}
      <div className="hero-arch-container absolute top-[128px] sm:top-[8.5%] md:top-[11%] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center w-[280px] sm:w-[390px] md:w-[440px] lg:w-[500px] h-[49vh] sm:h-[56vh] md:h-[58vh] min-h-[330px] sm:min-h-[450px] max-h-[600px]">

        {/* Main Blue Arch Frame */}
        <div className="relative w-full h-full rounded-t-[140px] sm:rounded-t-[195px] md:rounded-t-[220px] lg:rounded-t-[250px] overflow-hidden bg-gradient-to-b from-[#3B66FF] via-[#355DF2] to-[#2B50DF] shadow-2xl shadow-[#3B66FF]/20 hero-arch-mask">

          {/* Portrait Image */}
          <div className="relative w-full h-full">
            <Image
              src="/hero_portrait.jpg"
              alt="Rithik Pradhan - Web Developer"
              fill
              priority
              className="object-cover object-top scale-[1.02]"
              sizes="(max-width: 640px) 350px, (max-width: 768px) 390px, (max-width: 1024px) 440px, 500px"
            />
          </div>

          {/* Bottom gradient fade blending into background */}
          <div className="absolute inset-x-0 bottom-0 h-44 sm:h-52 bg-gradient-to-t from-[#CAD0DB] via-[#CAD0DB]/85 to-transparent pointer-events-none" />
        </div>

        {/* Floating Pill Badge: Left ("Web design") */}
        <div className="floating-badge absolute left-[-10px] sm:left-[-25px] md:left-[-42px] top-[40%] sm:top-[42%] md:top-[38%] z-30 scale-90 sm:scale-95 md:scale-100 origin-left">
          <div className="animate-float-1 cursor-pointer">
            <div className="bg-white/95 backdrop-blur-md px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-white/80 hover:scale-105 transition-transform duration-200">
              <span className="text-[12px] sm:text-[13.5px] font-medium text-slate-800 tracking-normal select-none whitespace-nowrap">
                Design
              </span>
            </div>
          </div>
        </div>

        {/* Floating Pill Badge: Top-Right ("Web design") */}
        <div className="floating-badge absolute right-[-10px] sm:right-[-15px] md:right-[-25px] top-[14%] sm:top-[12%] md:top-[10%] z-30 scale-90 sm:scale-95 md:scale-100 origin-right">
          <div className="animate-float-2 cursor-pointer">
            <div className="bg-white/95 backdrop-blur-md px-4 sm:px-6 py-1.5 sm:py-2.5 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.12)] border border-white/80 hover:scale-105 transition-transform duration-200">
              <span className="text-[12px] sm:text-[13.5px] font-medium text-slate-800 tracking-normal select-none whitespace-nowrap">
                Web application
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to push bottom row down */}
      <div className="flex-1" />

      {/* Bottom Content Row: Center on mobile & small tablet, Left Intro + Right Social Pills on desktop/laptop */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center lg:flex-row lg:items-end justify-between gap-3.5 sm:gap-5 lg:gap-6 z-30 mb-1 xs:mb-2 sm:mb-4">

        {/* Headline: Centered on mobile & small tablet, Left-aligned on desktop */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-lg lg:max-w-xl">
          <p className="hero-intro-text text-xs xs:text-sm sm:text-base md:text-[17px] font-medium text-[#2F3A48] mb-0.5 sm:mb-1.5">
            Hey, I&apos;m Rithik.
          </p>
          <h1 className="hero-intro-text text-[26px] xs:text-[30px] sm:text-4xl md:text-5xl lg:text-[62px] font-extrabold text-[#0E131F] leading-[1.08] sm:leading-[1.05] tracking-tight font-display drop-shadow-[0_1px_4px_rgba(255,255,255,0.5)]">
            Web Developer
          </h1>
        </div>

        {/* Social Links: Centered on mobile & small tablet (2x2 on mobile, 1 row on tablet), Right-aligned stack on desktop */}
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-3 w-fit mx-auto lg:mx-0 lg:self-end lg:flex-col lg:items-end lg:gap-2.5">

          {/* 1. X */}
          <a
            href="https://x.com/PradhanRit29228"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill-item group bg-white/95 hover:bg-white backdrop-blur-md border border-white/80 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 cursor-pointer w-fit min-w-[130px] sm:min-w-[145px] lg:min-w-[160px]"
          >
            {/* X (formerly Twitter) Icon */}
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#11141B] transition-transform duration-200 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="text-xs sm:text-[13.5px] font-medium text-slate-800 group-hover:text-black">
              X
            </span>
          </a>

          {/* 2. Instagram */}
          <a
            href="https://www.instagram.com/rithik.pradhan/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill-item group bg-white/95 hover:bg-white backdrop-blur-md border border-white/80 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 cursor-pointer w-fit min-w-[130px] sm:min-w-[145px] lg:min-w-[160px]"
          >
            {/* Instagram Camera Icon */}
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#11141B] transition-transform duration-200 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span className="text-xs sm:text-[13.5px] font-medium text-slate-800 group-hover:text-black">
              Instagram
            </span>
          </a>

          {/* 3. LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rithik-pradhan/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill-item group bg-white/95 hover:bg-white backdrop-blur-md border border-white/80 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 cursor-pointer w-fit min-w-[130px] sm:min-w-[145px] lg:min-w-[160px]"
          >
            {/* LinkedIn Outline Icon */}
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#11141B] transition-transform duration-200 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="3" rx="4" />
              <circle cx="8" cy="8" r="1.5" fill="currentColor" stroke="none" />
              <path d="M8 11v5" />
              <path d="M12 16v-3a2 2 0 0 1 4 0v3" />
            </svg>
            <span className="text-xs sm:text-[13.5px] font-medium text-slate-800 group-hover:text-black">
              LinkedIn
            </span>
          </a>

          {/* 4. Contra */}
          <a
            href="https://contra.com/rithik_pradhan_030hcfb7/work?r=rithik_pradhan_030hcfb7"
            target="_blank"
            rel="noopener noreferrer"
            className="social-pill-item group bg-white/95 hover:bg-white backdrop-blur-md border border-white/80 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.05)] hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center lg:justify-start gap-2.5 sm:gap-3 cursor-pointer w-fit min-w-[130px] sm:min-w-[145px] lg:min-w-[160px]"
          >
            {/* Official Contra Logo */}
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#11141B] transition-transform duration-200 group-hover:scale-110"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.53257 4.1249C7.3761 5.8885 5.86224 7.39707 4.09025 8.54825C2.83892 9.4038 1.46713 10.0996 0.00488281 10.6031V11.0068H11.0004V0.0055542H10.6134C10.1069 1.47971 9.40224 2.86386 8.53213 4.1249H8.53257ZM12.9974 0.0055542V11.054H23.9942V10.6503C22.5324 10.1468 21.1615 9.45101 19.9089 8.59546C18.1386 7.44428 16.6234 5.93571 15.467 4.17211C14.5876 2.89783 13.8772 1.4978 13.3694 0.0055542H12.9974ZM23.9942 12.946H12.9974V23.9945H13.3694C13.8772 22.5027 14.5872 21.1022 15.467 19.8279C16.6234 18.0643 18.1391 16.5557 19.9089 15.4046C21.1615 14.5486 22.5324 13.8532 23.9942 13.3497V12.946ZM11.0008 23.9945V12.9932H0.00532404V13.3969C1.46713 13.9004 2.83936 14.5962 4.09069 15.4518C5.86224 16.6029 7.3761 18.112 8.53301 19.8751C9.40312 21.1362 10.1073 22.5199 10.6143 23.994H11.0013L11.0008 23.9945Z"
              />
            </svg>
            <span className="text-xs sm:text-[13.5px] font-medium text-slate-800 group-hover:text-black">
              Contra
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}
