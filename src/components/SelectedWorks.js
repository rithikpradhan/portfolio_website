"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

const PROJECTS = [
  {
    id: "finvera",
    title: "OVII Perfume",
    tags: ["Perfume", "Web Design"],
    video: "/ovi_perfume.mov",
  },
  {
    id: "havenly",
    title: "AMS Safety",
    tags: ["Web Design", "Development"],
    video: "/amssafety.mov",
  },
  {
    id: "cluvia",
    title: "Genocide Education",
    tags: ["NGO", "Child Development"],
    video: "/genocide_education.mov",
  },
  {
    id: "trusten",
    title: "Arome",
    tags: ["Web Design", "UI"],
    video: "/aesthetic_perfume.mov",
  },
];

export default function SelectedWorks() {
  const containerRef = useRef(null);
  const videoRefs = useRef([]);
  const [mutedStates, setMutedStates] = useState(
    PROJECTS.map(() => true)
  );
  const [playingStates, setPlayingStates] = useState(
    PROJECTS.map(() => true)
  );

  // Guarantee autoplay for all video elements on mount
  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.muted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay policy fallback: muted autoplay
            video.muted = true;
            video.play().catch(() => { });
          });
        }
      }
    });
  }, []);

  const toggleMute = (idx, e) => {
    e.stopPropagation();
    e.preventDefault();
    const video = videoRefs.current[idx];
    if (video) {
      const nextMuted = !video.muted;
      video.muted = nextMuted;
      setMutedStates((prev) => {
        const copy = [...prev];
        copy[idx] = nextMuted;
        return copy;
      });
    }
  };

  const togglePlay = (idx, e) => {
    e.stopPropagation();
    e.preventDefault();
    const video = videoRefs.current[idx];
    if (video) {
      if (video.paused) {
        video.play().catch(() => { });
        setPlayingStates((prev) => {
          const copy = [...prev];
          copy[idx] = true;
          return copy;
        });
      } else {
        video.pause();
        setPlayingStates((prev) => {
          const copy = [...prev];
          copy[idx] = false;
          return copy;
        });
      }
    }
  };

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Scrubbed Parallax for the rounded card sheet lift over Hero
      gsap.fromTo(
        containerRef.current,
        { y: 50 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "top 40%",
            scrub: true,
          },
        }
      );

      // Section Entrance Timeline (once: true prevents oscillation / flickering)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      // Header entrance: subtitle & title
      tl.fromTo(
        ".selected-works-subtitle",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 }
      );

      tl.fromTo(
        ".selected-works-title",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.95 },
        "-=0.6"
      );

      // Cards staggered rise
      tl.fromTo(
        ".selected-works-card",
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "opacity,transform",
        },
        "-=0.5"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="works"
      ref={containerRef}
      className="relative z-30 w-full -mt-6 sm:-mt-12 md:-mt-16 pt-14 sm:pt-20 md:pt-24 pb-12 sm:pb-16 md:pb-20 bg-white rounded-t-[36px] sm:rounded-t-[68px] md:rounded-t-[84px] shadow-[0_-25px_60px_rgba(0,0,0,0.06)] border-t border-white/90 flex flex-col items-center justify-center px-4 sm:px-10 lg:px-16 overflow-hidden select-none"
    >
      {/* Radiant Neon Lime & Soft Green Ambient Glows matching reference */}
      <div className="absolute top-[8%] left-[8%] w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] bg-gradient-to-br from-[#A3E635]/25 via-[#BEF264]/15 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute top-[38%] right-[6%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gradient-to-bl from-[#84CC16]/20 via-[#A3E635]/15 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-[8%] left-[22%] w-[550px] sm:w-[750px] h-[450px] sm:h-[600px] bg-[#A3E635]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="w-full max-w-[1360px] mx-auto flex flex-col items-center text-center mb-7 sm:mb-10 md:mb-12 z-10">
        {/* Subtitle: "/ Best Projects" in elegant serif italic */}
        <p className="selected-works-subtitle font-serif italic text-base sm:text-xl md:text-[22px] text-[#374151] font-light tracking-wide mb-1.5 sm:mb-2">
          / Best Projects
        </p>

        {/* Title: "Selected Works" */}
        <h2 className="selected-works-title text-3xl sm:text-5xl md:text-[56px] lg:text-[62px] font-normal text-[#111827] tracking-tight font-display">
          Selected Works
        </h2>
      </div>

      {/* 2x2 Works Grid */}
      <div className="w-full max-w-[1360px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-14 z-10">
        {PROJECTS.map((project, idx) => {
          const isMuted = mutedStates[idx];
          const isPlaying = playingStates[idx];

          return (
            <div
              key={project.id}
              className="selected-works-card group flex flex-col select-none"
            >
              {/* Outer Card Canvas Container */}
              <div className="relative w-full rounded-[22px] sm:rounded-[36px] md:rounded-[40px] bg-[#F1F4F9] border border-slate-200/80 shadow-[0_15px_45px_rgba(0,0,0,0.04)] p-2.5 sm:p-5 md:p-6 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] group-hover:border-slate-300/90 overflow-hidden flex flex-col items-center justify-center">

                {/* Soft ambient inner card highlight */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-transparent pointer-events-none rounded-[22px] sm:rounded-[36px] md:rounded-[40px]" />

                {/* Inner Video Window */}
                <div className="relative w-full aspect-[16/10] rounded-[16px] sm:rounded-[26px] md:rounded-[28px] overflow-hidden bg-white shadow-[0_8px_25px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] border border-slate-100 z-10 flex items-center justify-center">

                  {/* HTML5 Looping Video */}
                  <video
                    ref={(el) => {
                      videoRefs.current[idx] = el;
                    }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  >
                    <source src={project.video} type="video/mp4" />
                    <source src={project.video} type="video/quicktime" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Interactive Controls Overlay (Touch-friendly on mobile, hover on desktop) */}
                  <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 z-20 flex items-center gap-1.5 sm:gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
                    {/* Play/Pause Button */}
                    <button
                      onClick={(e) => togglePlay(idx, e)}
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md shadow-black/10 backdrop-blur-md border border-white/80 flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      {isPlaying ? (
                        <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-slate-800 text-slate-800" />
                      ) : (
                        <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-slate-800 text-slate-800 ml-0.5" />
                      )}
                    </button>

                    {/* Mute/Unmute Button */}
                    <button
                      onClick={(e) => toggleMute(idx, e)}
                      aria-label={isMuted ? "Unmute video" : "Mute video"}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md shadow-black/10 backdrop-blur-md border border-white/80 flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      {isMuted ? (
                        <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563EB]" />
                      )}
                    </button>
                  </div>

                  {/* Subtle video bottom gradient to preserve contrast */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/15 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

              </div>

              {/* Bottom Meta Row: Title on Left, Category Tag Pills on Right */}
              <div className="mt-3.5 sm:mt-5 md:mt-6 flex flex-col xs:flex-row xs:items-center justify-between gap-2.5 sm:gap-3 px-1 sm:px-3">

                {/* Project Title */}
                <h3 className="text-lg sm:text-2xl font-medium text-[#111827] tracking-tight font-display">
                  {project.title}
                </h3>

                {/* Tag Pills matching reference */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 sm:px-5 py-1 sm:py-1.5 rounded-full bg-white border border-slate-200/80 text-[11px] sm:text-[13px] font-medium text-[#4B5563] shadow-[0_1px_3px_rgba(0,0,0,0.03)] select-none transition-colors duration-200 group-hover:border-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
