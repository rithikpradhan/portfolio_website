"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Plus, Minus, Sparkles } from "lucide-react";
import OrbitingCircles from "@/components/magicui/orbiting-circles";

const FAQS = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most websites take around 2–4 weeks, depending on the size, features, and complexity. Larger web applications may require more time.",
  },
  {
    question: "What does your development process look like?",
    answer:
      " I start by understanding your goals and requirements, then move through planning, design direction, development, testing, and finally launch.",
  },
  {
    question: "Can you redesign or improve an existing website?",
    answer:
      " Yes. I can redesign outdated websites, improve responsiveness and performance, or rebuild them using modern technologies while keeping your existing content and brand.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. I can provide ongoing support for updates, bug fixes, performance improvements, and new features after your website goes live.",
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(0);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      // Desktop Screens (>= 1024px)
      mm.add("(min-width: 1024px)", () => {
        // 1. Bento Grid Stage Smooth Expansion on Scroll (Contained inside section, no overflow/overlap)
        gsap.fromTo(
          ".services-bento-frame",
          {
            scale: 0.93,
            y: 55,
            rotateX: 4,
            boxShadow: "0 10px 30px rgba(25,60,135,0.15)",
          },
          {
            scale: 1,
            y: 0,
            rotateX: 0,
            boxShadow: "0 35px 100px rgba(25,60,135,0.35)",
            ease: "none",
            scrollTrigger: {
              trigger: ".services-bento-frame",
              start: "top bottom",
              end: "top 35%",
              scrub: 0.8,
            },
          }
        );

        // 2. Multi-plane Differential Column Parallax
        gsap.fromTo(
          ".services-card-impact",
          { y: 30 },
          {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: ".services-bento-frame",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.9,
            },
          }
        );

        // Card 1: Pills Zero-Gravity Float Scrub
        gsap.to(".brand-pill-odd", {
          y: -14,
          rotation: "+=3",
          ease: "none",
          scrollTrigger: {
            trigger: ".services-card-brand",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        });

        gsap.to(".brand-pill-even", {
          y: 14,
          rotation: "-=3",
          ease: "none",
          scrollTrigger: {
            trigger: ".services-card-brand",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.1,
          },
        });

        // Card 2: 3D Pedestal Mockup Parallax
        gsap.fromTo(
          ".services-phone-container",
          { y: 12, scale: 0.98 },
          {
            y: -12,
            scale: 1.02,
            ease: "none",
            scrollTrigger: {
              trigger: ".services-card-uiux",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.9,
            },
          }
        );

        // Card 3: Web Devices Peek Lift
        gsap.fromTo(
          ".services-devices-wrap",
          { y: 16 },
          {
            y: -10,
            ease: "none",
            scrollTrigger: {
              trigger: ".services-card-web",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.85,
            },
          }
        );

        // Card 4: Dev Card subtle entrance is handled in entrance timeline below

        // Card 5: Touching Hands Window Parallax
        gsap.fromTo(
          ".services-hands-img",
          { yPercent: -6 },
          {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: ".services-card-impact",
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );

        // FAQ Left Card Ambient Aura drift
        gsap.to(".faq-lead-glow", {
          x: 20,
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: ".faq-section-wrapper",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });

      // Tablet Screens (768px to 1023px)
      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        gsap.fromTo(
          ".services-bento-frame",
          { scale: 0.95, y: 40 },
          {
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".services-bento-frame",
              start: "top bottom",
              end: "top 35%",
              scrub: 0.8,
            },
          }
        );

        gsap.to(".brand-pill-odd", {
          y: -10,
          ease: "none",
          scrollTrigger: {
            trigger: ".services-card-brand",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(".brand-pill-even", {
          y: 10,
          ease: "none",
          scrollTrigger: {
            trigger: ".services-card-brand",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

      });

      // Mobile Screens (< 768px)
      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(
          ".services-bento-frame",
          { scale: 0.97, y: 30 },
          {
            scale: 1,
            y: 0,
            ease: "none",
            scrollTrigger: {
              trigger: ".services-bento-frame",
              start: "top bottom",
              end: "top 35%",
              scrub: 0.8,
            },
          }
        );
      });

      // Ambient Atmosphere Glows Drift on Scroll
      gsap.to(".services-glow-2", {
        y: -60,
        x: -25,
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(".services-glow-3", {
        y: 65,
        x: 25,
        scale: 1.18,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // Section Heading Entrance
      gsap.fromTo(
        ".services-heading",
        { opacity: 0, y: 35, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );

      // Bento Cards Staggered Pop-In
      gsap.fromTo(
        ".services-bento-card",
        { opacity: 0, y: 35, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "opacity,visibility",
          scrollTrigger: {
            trigger: ".services-bento-frame",
            start: "top 80%",
            once: true,
          },
        }
      );

      // Brand Pills Pop-In
      gsap.fromTo(
        ".brand-pill",
        { scale: 0.3, opacity: 0, y: 12 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: "back.out(1.8)",
          clearProps: "scale,opacity",
          scrollTrigger: {
            trigger: ".services-card-brand",
            start: "top 80%",
            once: true,
          },
        }
      );

      // Dev Center Hub & Orbit Container Pop-In
      gsap.fromTo(
        ".dev-center-hub",
        { scale: 0.6, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: ".services-card-dev",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".dev-orbit-container",
        { scale: 0.92, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".services-card-dev",
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.to(".dev-center-hub", {
        scale: 1.08,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // FAQ Section Entrance Timeline
      const faqTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".faq-section-wrapper",
          start: "top 88%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      faqTl.fromTo(
        ".faq-lead-card",
        { opacity: 0, x: -35 },
        { opacity: 1, x: 0, duration: 0.85 }
      );

      faqTl.fromTo(
        ".faq-accordion-card",
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.75, stagger: 0.08 },
        "-=0.6"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative w-full pt-14 sm:pt-20 md:pt-24 pb-14 sm:pb-20 md:pb-24 flex flex-col items-center justify-center px-4 sm:px-10 lg:px-16 overflow-hidden select-none"
      style={{
        perspective: "1200px",
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 4%, #E2EDFA 12%, #8BAFE5 24%, #3868C0 36%, #3868C0 60%, #5C88D6 72%, #8BAFE5 82%, #CFE0F8 91%, #FFFFFF 100%)",
      }}
    >
      {/* Curved Top Gradient: White flowing smoothly from top along an organic curved line */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[60px] sm:h-[80px] md:h-[100px] block"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="curveWhiteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="75%" stopColor="#D8E4FA" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#3868C0" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Smooth organic curve line dipping down from white section above */}
          <path
            d="M0,0 L1440,0 L1440,30 Q720,220 0,30 Z"
            fill="url(#curveWhiteGrad)"
          />
        </svg>
      </div>

      {/* Portrait Cornflower Blue Ambient Atmosphere & Radial Glows */}
      <div className="services-glow-1 absolute top-[22%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[1100px] h-[520px] bg-white/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="services-glow-2 absolute top-[42%] right-[5%] w-[520px] h-[460px] bg-[#2B54A3]/25 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="services-glow-3 absolute top-[52%] left-[6%] w-[480px] h-[480px] bg-[#78A1E2]/25 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Header Container */}
      <div className="w-full max-w-[1360px] mx-auto flex flex-col items-center text-center mb-8 sm:mb-10 md:mb-12 z-10">
        {/* Main Headline */}
        <h2 className="services-heading text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-semibold text-black tracking-tight font-display leading-[1.12]">
          Digital Solutions Built
          <br />
          For Growth
        </h2>
      </div>

      {/* Bento Grid Frame Container (Luminous Glass Monolith - Expands on Scroll) */}
      <div
        className="services-bento-frame relative w-full max-w-[1360px] mx-auto rounded-[24px] sm:rounded-[44px] md:rounded-[48px] border border-white/35 border-t-white/50 p-3 sm:p-6 md:p-8 backdrop-blur-2xl shadow-[0_35px_100px_rgba(25,60,135,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] z-10 overflow-hidden will-change-transform"
        style={{
          transformOrigin: "center top",
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.08) 40%, rgba(35, 75, 155, 0.45) 100%)",
        }}
      >
        {/* Soft glass reflection sheen overlay */}
        <div className="absolute inset-0 rounded-[24px] sm:rounded-[44px] md:rounded-[48px] bg-gradient-to-b from-white/[0.15] via-transparent to-black/15 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          {/* Left 8 Columns: 2x2 Grid of 4 Service Cards */}
          <div className="services-left-grid lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* 1. Brand Identity Card (Periwinkle Blue Gradient) */}
            <div className="services-bento-card services-card-brand group relative rounded-[22px] sm:rounded-[32px] bg-gradient-to-br from-[#4D77E4] via-[#7097FF] to-[#A5C5FF] p-5 sm:p-8 flex flex-col justify-between min-h-[340px] sm:min-h-[420px] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.15)] border border-white/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
              {/* Header Text */}
              <div className="flex flex-col z-10">
                <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight font-display">
                  Website Development
                </h3>
                <p className="text-white/85 text-xs sm:text-sm font-light mt-2 max-w-[250px] leading-relaxed">
                  Modern, responsive websites built for performance, usability, and growth.
                </p>
              </div>

              {/* Floating Financial/Brand Pill Tags Cluster */}
              <div className="relative w-full h-44 sm:h-48 z-10 mt-4 sm:mt-6 select-none flex items-center justify-center scale-[0.84] xs:scale-95 sm:scale-100 origin-center">
                {/* Marketing */}
                <div className="brand-pill brand-pill-odd absolute left-[8%] top-[38%] -rotate-2">
                  <div className="bg-white/95 rounded-full px-4 py-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.12)] border border-white/80 hover:scale-105 transition-transform duration-200">
                    <span className="text-xs sm:text-[13px] font-medium text-slate-800">
                      Next.js
                    </span>
                  </div>
                </div>

                {/* Taxes & Fees */}
                <div className="brand-pill brand-pill-even absolute right-[12%] top-[14%] rotate-[22deg]">
                  <div className="bg-white/95 rounded-full px-4 py-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.12)] border border-white/80 hover:scale-105 transition-transform duration-200">
                    <span className="text-xs sm:text-[13px] font-medium text-slate-800">
                      React
                    </span>
                  </div>
                </div>

                {/* Income */}
                <div className="brand-pill brand-pill-odd absolute left-[34%] top-[48%] rotate-2">
                  <div className="bg-white/95 rounded-full px-4 py-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.12)] border border-white/80 hover:scale-105 transition-transform duration-200">
                    <span className="text-xs sm:text-[13px] font-medium text-slate-800">
                      SEO
                    </span>
                  </div>
                </div>

                {/* Software */}
                <div className="brand-pill brand-pill-even absolute right-[8%] top-[54%] -rotate-1">
                  <div className="bg-white/95 rounded-full px-4 py-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.12)] border border-white/80 hover:scale-105 transition-transform duration-200">
                    <span className="text-xs sm:text-[13px] font-medium text-slate-800">
                      Responsive
                    </span>
                  </div>
                </div>

                {/* Utility */}
                <div className="brand-pill brand-pill-odd absolute left-[5%] bottom-[12%] -rotate-3">
                  <div className="bg-white/95 rounded-full px-4 py-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.12)] border border-white/80 hover:scale-105 transition-transform duration-200">
                    <span className="text-xs sm:text-[13px] font-medium text-slate-800">
                      Performance
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. UI/UX Design Card (Crisp White/Subtle Gradient Card with 3D Mockup) */}
            <div className="services-bento-card services-card-uiux group relative rounded-[22px] sm:rounded-[32px] bg-gradient-to-b from-white via-white to-[#F6F9FD] p-5 sm:p-8 flex flex-col justify-between min-h-[340px] sm:min-h-[420px] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.1)] border border-white/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              {/* Header Text */}
              <div className="flex flex-col z-10">
                <h3 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight font-display">
                  Full-Stack Development                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-light mt-2 max-w-[250px] leading-relaxed">
                  Complete web applications with powerful frontends, backends, databases, and authentication.
                </p>
              </div>

              {/* 3D Phone Mockup on Pedestals Window */}
              <div className="services-phone-container relative w-full aspect-[16/10] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-slate-50 border border-slate-100 mt-6 shadow-inner flex items-center justify-center">
                <Image
                  src="/services_phone_3d.jpg"
                  alt="UI/UX 3D Design Mockup"
                  fill
                  className="services-phone-img object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>

            {/* 3. Web Experience Card (Periwinkle Blue Gradient with Devices) */}
            <div className="services-bento-card services-card-web group relative rounded-[22px] sm:rounded-[32px] bg-gradient-to-br from-[#5480E8] via-[#7AA2FF] to-[#AECBFF] p-5 sm:p-8 flex flex-col justify-between min-h-[340px] sm:min-h-[420px] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.15)] border border-white/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
              {/* Header Text */}
              <div className="flex flex-col z-10">
                <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight font-display">
                  Interactive Web Experiences
                </h3>
                <p className="text-white/85 text-xs sm:text-sm font-light mt-2 max-w-[250px] leading-relaxed">
                  Engaging digital experiences with smooth motion, interactions, and immersive visuals.
                </p>
              </div>

              {/* Device Screens Showcase along bottom edge */}
              <div className="services-devices-wrap relative w-full aspect-[16/9] rounded-t-[18px] sm:rounded-t-[22px] overflow-hidden bg-white/20 border-t border-x border-white/40 mt-6 shadow-2xl -mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                <Image
                  src="/services_devices.jpg"
                  alt="Responsive Web Experience Mockups"
                  fill
                  className="services-devices-img object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>

            {/* 4. Development Card (White/Subtle Pearl Card with Concentric Radial Orbits & Icons) */}
            <div className="services-bento-card services-card-dev group relative rounded-[22px] sm:rounded-[32px] bg-gradient-to-b from-white via-white to-[#F6F9FD] p-5 sm:p-8 flex flex-col justify-between min-h-[340px] sm:min-h-[420px] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.1)] border border-white/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              {/* Header Text */}
              <div className="flex flex-col z-10">
                <h3 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight font-display">
                  Business Web Systems
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-light mt-2 max-w-[250px] leading-relaxed">
                  Custom dashboards, admin panels, booking systems, and tools built around real business workflows.
                </p>
              </div>

              {/* Magic UI Orbiting Circles Component */}
              <div className="dev-orbit-container relative flex h-[245px] sm:h-[265px] w-full items-center justify-center overflow-hidden mt-2 sm:mt-3 select-none">
                {/* Subtle Ambient Radial Glow */}
                <div className="pointer-events-none absolute w-52 sm:w-60 h-52 sm:h-60 rounded-full bg-blue-500/10 blur-3xl -bottom-6" />
                <div className="pointer-events-none absolute w-28 h-28 rounded-full bg-sky-400/15 blur-2xl" />

                {/* Central System Hub (Core Business Engine / Terminal) */}
                <div
                  className="dev-center-hub relative z-10 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gradient-to-tr from-slate-900 via-blue-950 to-blue-600 shadow-[0_4px_24px_rgba(37,99,235,0.45)] border-2 border-white transition-transform duration-300 hover:scale-110 cursor-pointer"
                  title="Core Business Web Engine"
                >
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 17 10 11 4 5" />
                    <line x1="12" y1="19" x2="20" y2="19" />
                  </svg>
                </div>

                {/* Inner Orbit: Dashboards, Booking Systems, Stripe Payments */}
                <OrbitingCircles
                  radius={52}
                  duration={20}
                  iconSize={32}
                  pathClassName="stroke-slate-200/80 stroke-1"
                >
                  {/* Custom Dashboards & Analytics */}
                  <div
                    className="flex h-full w-full items-center justify-center rounded-full bg-white text-blue-600 shadow-[0_3px_12px_rgba(37,99,235,0.18)] border border-blue-100 transition-transform duration-200 hover:scale-120 cursor-pointer"
                    title="Custom Dashboards & KPI Analytics"
                  >
                    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  </div>

                  {/* Booking Systems & Scheduling */}
                  <div
                    className="flex h-full w-full items-center justify-center rounded-full bg-white text-emerald-600 shadow-[0_3px_12px_rgba(16,185,129,0.2)] border border-emerald-100 transition-transform duration-200 hover:scale-120 cursor-pointer"
                    title="Booking Systems & Scheduling"
                  >
                    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                      <path d="m9 16 2 2 4-4" />
                    </svg>
                  </div>

                  {/* Stripe Payments & Billing */}
                  <div
                    className="flex h-full w-full items-center justify-center rounded-full bg-[#635BFF] text-white shadow-[0_3px_12px_rgba(99,91,255,0.35)] border border-white/80 transition-transform duration-200 hover:scale-120 cursor-pointer"
                    title="Stripe Payments & Billing"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z"/>
                    </svg>
                  </div>
                </OrbitingCircles>

                {/* Outer Orbit: Database Architecture, Admin Security, Workflows, Admin Sliders (Reverse) */}
                <OrbitingCircles
                  radius={98}
                  duration={28}
                  reverse={true}
                  iconSize={34}
                  pathClassName="stroke-slate-200/60 stroke-1 stroke-dashed"
                >
                  {/* Database & Data Architecture */}
                  <div
                    className="flex h-full w-full items-center justify-center rounded-full bg-slate-900 text-cyan-400 shadow-[0_3px_12px_rgba(6,182,212,0.25)] border border-cyan-500/30 transition-transform duration-200 hover:scale-120 cursor-pointer"
                    title="Database & Data Architecture"
                  >
                    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                      <path d="M3 12A9 3 0 0 0 21 12" />
                    </svg>
                  </div>

                  {/* Admin Panels & Access Control */}
                  <div
                    className="flex h-full w-full items-center justify-center rounded-full bg-white text-indigo-600 shadow-[0_3px_12px_rgba(99,102,241,0.2)] border border-indigo-100 transition-transform duration-200 hover:scale-120 cursor-pointer"
                    title="Admin Panels & Access Control"
                  >
                    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>

                  {/* Business Workflows & Automations */}
                  <div
                    className="flex h-full w-full items-center justify-center rounded-full bg-white text-amber-500 shadow-[0_3px_12px_rgba(245,158,11,0.2)] border border-amber-100 transition-transform duration-200 hover:scale-120 cursor-pointer"
                    title="Business Workflows & Automations"
                  >
                    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" />
                    </svg>
                  </div>

                  {/* Admin Controls & System Tools */}
                  <div
                    className="flex h-full w-full items-center justify-center rounded-full bg-white text-slate-700 shadow-[0_3px_12px_rgba(15,23,42,0.1)] border border-slate-200/90 transition-transform duration-200 hover:scale-120 cursor-pointer"
                    title="Admin Controls & System Tools"
                  >
                    <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" y1="21" x2="4" y2="14" />
                      <line x1="4" y1="10" x2="4" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12" y2="3" />
                      <line x1="20" y1="21" x2="20" y2="16" />
                      <line x1="20" y1="12" x2="20" y2="3" />
                      <line x1="1" y1="14" x2="7" y2="14" />
                      <line x1="9" y1="8" x2="15" y2="8" />
                      <line x1="17" y1="16" x2="23" y2="16" />
                    </svg>
                  </div>
                </OrbitingCircles>
              </div>
            </div>
          </div>

          {/* Right 4 Columns: Tall Impact Card (Reaching Hands + Gradient Fade to CTA) */}
          <div className="services-bento-card services-card-impact group lg:col-span-4 rounded-[22px] sm:rounded-[32px] bg-gradient-to-b from-[#82A5FF] via-white to-white flex flex-col justify-between overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.12)] border border-white/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)] relative">
            {/* Top Artwork Frame: Touching Hands on Periwinkle Sky Background with soft gradient fade to white */}
            <div className="services-hands-wrap relative w-full aspect-[4/4.5] sm:aspect-[4/4] lg:aspect-[4/4.6] overflow-hidden flex items-center justify-center">
              <Image
                src="/services_hands.jpg"
                alt="Creation of Adam Touching Hands - Global Partnership"
                fill
                priority
                className="services-hands-img scale-110 object-cover object-center transition-transform duration-700 ease-out group-hover:scale-115"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              {/* Soft bottom fade gradient mask to seamlessly blend with the card's lower body */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent 65% to-white pointer-events-none" />
            </div>

            {/* Bottom Content & CTA Section */}
            <div className="flex flex-col p-6 sm:p-7 pt-1 z-10">
              {/* Partner Badge */}
              <div className="inline-flex items-center self-start px-3.5 py-1.5 rounded-full bg-slate-100/90 text-slate-700 text-xs sm:text-[13px] font-medium tracking-tight mb-3 select-none border border-slate-200/50">
                HAVE A PROJECT IN MIND?
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight font-display mb-2 leading-snug">
                Let's Build Something Great              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed mb-6">
                Have an idea? Let's turn it into a fast, polished and functional digital product.              </p>

              {/* Action Button */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const target =
                    document.getElementById("contact") ||
                    document.getElementById("about");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className="group/btn w-fit bg-[#111317] hover:bg-black text-white pl-6 pr-2.5 py-2.5 rounded-full shadow-lg shadow-black/20 flex items-center gap-3.5 transition-all duration-300 hover:scale-105 cursor-pointer select-none"
              >
                <span className="text-sm font-medium tracking-tight">
                  Start A Project
                </span>
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white transition-transform duration-300 group-hover/btn:translate-x-0.5">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section matching reference design */}
      <div className="faq-section-wrapper w-full max-w-[1360px] mx-auto mt-10 sm:mt-14 md:mt-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* Left Card: Got questions about working together? */}
          <div
            className="faq-lead-card faq-item-entrance lg:col-span-5 relative rounded-[22px] sm:rounded-[34px] p-6 sm:p-9 md:p-11 flex flex-col justify-between min-h-[300px] sm:min-h-[440px] overflow-hidden shadow-[0_20px_50px_rgba(40,80,180,0.18)] border border-white/50 group transition-all duration-300 hover:-translate-y-1"
            style={{
              background:
                "radial-gradient(ellipse 120% 120% at 75% 25%, #4C7DE6 0%, #7099F8 35%, #A5C2FC 70%, #E3EDFD 100%)",
            }}
          >
            {/* Ambient frosted aura inside card matching image */}
            <div className="faq-lead-glow absolute -top-16 -right-16 w-56 h-56 rounded-full bg-blue-400/30 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-white/40 blur-2xl pointer-events-none" />

            {/* Top Badge: Sparkle + FAQ Questions */}
            <div className="inline-flex items-center gap-2 self-start text-white/95 text-xs sm:text-sm font-medium tracking-tight mb-6 sm:mb-10 z-10 select-none">
              <span>FAQ Questions</span>
            </div>

            {/* Headline */}
            <h3 className="text-2xl sm:text-4xl md:text-[42px] font-medium text-white tracking-tight leading-[1.16] font-display z-10 mb-6 sm:mb-10">
              Got questions about
              <br />
              working together?
            </h3>

            {/* CTA Button Group: Pill + Arrow Circle matching image */}
            <div className="flex items-center gap-2.5 z-10 select-none">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const target =
                    document.getElementById("contact") ||
                    document.getElementById("about");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-[#111317] hover:bg-black text-white text-xs sm:text-sm font-medium tracking-tight shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                Get In Touch
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const target =
                    document.getElementById("contact") ||
                    document.getElementById("about");
                  if (target) target.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#111317] hover:bg-black text-white flex items-center justify-center shadow-lg shadow-black/20 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Get in touch arrow"
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Right Column: FAQ Accordion Cards */}
          <div className="faq-accordion-col lg:col-span-7 flex flex-col gap-3 sm:gap-4 z-10">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="faq-accordion-card faq-item-entrance group/faq rounded-[18px] sm:rounded-[26px] bg-white/95 hover:bg-white p-4 sm:p-6 sm:px-7 shadow-[0_8px_25px_rgba(0,0,0,0.05)] border border-white/80 transition-all duration-300 cursor-pointer hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] select-none"
                >
                  {/* Question Row */}
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-sm sm:text-lg font-medium text-slate-900 tracking-tight leading-snug">
                      {faq.question}
                    </h4>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-slate-700 transition-colors duration-200">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.2]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.2]" />
                      )}
                    </div>
                  </div>

                  {/* Answer Content */}
                  {isOpen && (
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mt-3.5 pt-2 border-t border-slate-100/80">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Finishing Bottom Gradient Overlay: Blue smoothly transitions into pure white */}
      <div className="absolute inset-x-0 bottom-0 h-[450px] sm:h-[550px] md:h-[650px] bg-gradient-to-b from-transparent via-[#8BAFE5]/35 30% via-[#CBE0F8]/80 65% via-[#F0F5FD]/96 85% to-white 100% pointer-events-none z-[1]" />

      {/* Curved Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[60px] sm:h-[80px] md:h-[100px] block"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="curveWhiteGradBottom" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3868C0" stopOpacity="0" />
              <stop offset="35%" stopColor="#8BAFE5" stopOpacity="0.45" />
              <stop offset="68%" stopColor="#D5E4FA" stopOpacity="0.85" />
              <stop offset="92%" stopColor="#FFFFFF" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
            </linearGradient>
          </defs>
          {/* Smooth organic curve line arching up from white section below */}
          <path
            d="M0,220 L1440,220 L1440,190 Q720,0 0,190 Z"
            fill="url(#curveWhiteGradBottom)"
          />
        </svg>
      </div>
    </section>
  );
}
