"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EXPERIENCES = [


  {
    role: "Freelance",
    company: "Self",
    period: "2026 - Present"
  },
  {
    role: "Product & Web Operations Associate",
    company: "Nextplatforms",
    period: "2023 → 2026",
  },
];

export default function About() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      // Header entrance
      tl.fromTo(
        ".about-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 }
      );

      tl.fromTo(
        ".about-title",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.5"
      );

      // Left portrait card entrance with subtle un-tilt
      tl.fromTo(
        ".about-portrait-card",
        { opacity: 0, scale: 0.92, y: 40, rotate: -6 },
        { opacity: 1, scale: 1, y: 0, rotate: -2.5, duration: 1.1, ease: "power3.out" },
        "-=0.6"
      );

      // Meta row entrance (socials + name)
      tl.fromTo(
        ".about-meta-row",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.5"
      );

      // Right column bio text entrance
      tl.fromTo(
        ".about-bio-text",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9 },
        "-=0.7"
      );

      // Timeline rows stagger entrance
      tl.fromTo(
        ".about-timeline-row",
        { opacity: 0, x: 25 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", clearProps: "opacity,transform" },
        "-=0.5"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full pt-14 sm:pt-20 md:pt-24 pb-14 sm:pb-20 md:pb-24 bg-white flex flex-col items-center justify-center px-4 sm:px-10 lg:px-16 overflow-hidden select-none"
    >
      {/* Subtle clean ambient lighting */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[1000px] h-[500px] bg-slate-50/80 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Header Container */}
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center text-center mb-8 sm:mb-12 md:mb-14 z-10 px-2">
        {/* Subtitle: / Who Am I */}
        <p className="about-subtitle font-serif italic text-lg sm:text-2xl md:text-[26px] text-[#374151] font-light tracking-wide mb-2 sm:mb-3">
          / Who Am I
        </p>

        {/* Title: Pushing Boundaries since 2011 */}
        <h2 className="about-title text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-normal tracking-tight font-display leading-[1.15] sm:leading-[1.12]">
          <span className="font-semibold text-slate-900">Making The Web Feel</span>{" "}
          <span className="font-light text-slate-400">Less Ordinary</span>
        </h2>
      </div>

      {/* Main Two-Column Content Grid */}
      <div className="w-full max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 xl:gap-20 items-start z-10">

        {/* Left Column (5 Cols): Tilted Black & White Portrait Card + Socials & Persona */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-start w-full max-w-[480px] mx-auto lg:mx-0">

          {/* Tilted Photo Card */}
          <div className="about-portrait-card group relative w-full aspect-[4/3.1] rounded-[22px] sm:rounded-[36px] overflow-hidden bg-[#181A1F] shadow-[0_25px_60px_rgba(0,0,0,0.14)] -rotate-1 sm:-rotate-[2.5deg] border border-black/5 transition-transform duration-500 ease-out hover:rotate-0 hover:scale-[1.02] cursor-pointer">
            <Image
              src="/model2.png"
              alt="Elian Ross - Product Designer"
              fill
              priority
              className="object-cover object-center grayscale contrast-[1.06] transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
          </div>

          {/* Bottom Meta Row: Social Icons on Left, Name & Role on Right */}
          <div className="about-meta-row flex flex-row items-center justify-between w-full mt-5 sm:mt-7 px-2">

            {/* Social Icons (X, LinkedIn, Instagram) */}
            <div className="flex items-center gap-3 sm:gap-4 text-slate-800">
              {/* X (formerly Twitter) */}
              <a
                href="https://x.com/PradhanRit29228"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-800 hover:text-black hover:scale-115 transition-all duration-200"
                aria-label="X Twitter profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rithik-pradhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-800 hover:text-black hover:scale-115 transition-all duration-200"
                aria-label="LinkedIn profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/rithik.pradhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-800 hover:text-black hover:scale-115 transition-all duration-200"
                aria-label="Instagram profile"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Contra */}
              <a
                href="https://contra.com/rithik_pradhan_030hcfb7/work?r=rithik_pradhan_030hcfb7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-slate-800 hover:text-black hover:scale-115 transition-all duration-200"
                aria-label="Contra profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.53257 4.1249C7.3761 5.8885 5.86224 7.39707 4.09025 8.54825C2.83892 9.4038 1.46713 10.0996 0.00488281 10.6031V11.0068H11.0004V0.0055542H10.6134C10.1069 1.47971 9.40224 2.86386 8.53213 4.1249H8.53257ZM12.9974 0.0055542V11.054H23.9942V10.6503C22.5324 10.1468 21.1615 9.45101 19.9089 8.59546C18.1386 7.44428 16.6234 5.93571 15.467 4.17211C14.5876 2.89783 13.8772 1.4978 13.3694 0.0055542H12.9974ZM23.9942 12.946H12.9974V23.9945H13.3694C13.8772 22.5027 14.5872 21.1022 15.467 19.8279C16.6234 18.0643 18.1391 16.5557 19.9089 15.4046C21.1615 14.5486 22.5324 13.8532 23.9942 13.3497V12.946ZM11.0008 23.9945V12.9932H0.00532404V13.3969C1.46713 13.9004 2.83936 14.5962 4.09069 15.4518C5.86224 16.6029 7.3761 18.112 8.53301 19.8751C9.40312 21.1362 10.1073 22.5199 10.6143 23.994H11.0013L11.0008 23.9945Z"
                  />
                </svg>
              </a>
            </div>

            {/* Persona Name & Role */}
            <div className="flex flex-col text-right">
              <span className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight font-display">
                Rithik Pradhan
              </span>
              <span className="text-xs sm:text-[13px] text-slate-500 font-light mt-0.5">
                Web Developer
              </span>
            </div>

          </div>

        </div>

        {/* Right Column (7 Cols): Bio Description & Experience Timeline */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full pt-1 sm:pt-2">

          {/* Bio Description Paragraph */}
          <p className="about-bio-text text-sm sm:text-lg md:text-[19px] text-slate-600 font-light leading-relaxed max-w-[620px] mb-5 sm:mb-8">
            For me, development isn’t just about making things work. I enjoy obsessing over the little things  how a page moves, how fast it feels, how an interaction responds, and how everything comes together into something people actually enjoy using.
          </p>

          {/* Career & Experience Timeline Rows */}
          <div className="w-full flex flex-col pl-3 sm:pl-6 border-l-2 border-slate-900/15">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={index}
                className="about-timeline-row group flex flex-col sm:flex-row sm:items-center justify-between py-3.5 sm:py-5 md:py-6 border-b border-slate-200/80 last:border-b-0 transition-colors duration-200 hover:pl-2 gap-1 sm:gap-2"
              >
                {/* Role and Company */}
                <div className="flex items-baseline justify-between sm:justify-start gap-2 sm:gap-4 sm:w-2/3">
                  <span className="text-sm sm:text-base font-medium text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                    {exp.role}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 font-light">
                    {exp.company}
                  </span>
                </div>

                {/* Period / Dates */}
                <div className="sm:w-1/3 text-left sm:text-right">
                  <span className="text-xs sm:text-sm text-slate-600 sm:text-slate-700 font-normal tracking-tight">
                    {exp.period}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}
