"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      // Heading entrance
      tl.fromTo(
        ".footer-cta-title",
        { y: 35, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, clearProps: "opacity,transform" }
      );

      // Subtitle entrance
      tl.fromTo(
        ".footer-cta-sub",
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, clearProps: "opacity,transform" },
        "-=0.6"
      );

      // Button pop-in
      tl.fromTo(
        ".footer-cta-btn",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.8)", clearProps: "opacity,transform" },
        "-=0.4"
      );

      // Nav row fade in
      tl.fromTo(
        ".footer-nav-row",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, clearProps: "opacity,transform" },
        "-=0.3"
      );
    },
    { scope: containerRef }
  );

  return (
    <footer
      id="contact"
      ref={containerRef}
      className="relative w-full bg-white overflow-hidden select-none"
    >
      {/* Radiant Website Theme Color Gradient Glow at Top */}
      <div className="absolute top-0 inset-x-0 h-[420px] sm:h-[500px] pointer-events-none -z-0 overflow-hidden">
        {/* Primary Radial Glow centered at top */}
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[85vw] max-w-[1100px] h-[450px] bg-gradient-to-b from-[#3B82F6]/35 via-[#60A5FA]/18 to-transparent rounded-full blur-[100px]" />
        {/* Secondary Soft Ambient Highlight */}
        <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[60vw] max-w-[750px] h-[320px] bg-gradient-to-b from-[#2563EB]/25 via-[#38BDF8]/15 to-transparent rounded-full blur-[70px]" />
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-[1360px] mx-auto px-4 sm:px-10 lg:px-16 pt-16 sm:pt-28 md:pt-36 pb-10 sm:pb-16 flex flex-col items-center justify-between min-h-[500px] sm:min-h-[580px] z-10">
        
        {/* Center CTA Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto my-auto px-2">
          {/* Main Title: "Let's Make It Happen" */}
          <h2 className="footer-cta-title text-4xl xs:text-5xl sm:text-7xl md:text-[80px] lg:text-[88px] font-normal text-[#18181B] tracking-tight font-display text-center leading-[1.08] sm:leading-[1.05] mb-4 sm:mb-6">
            Let&apos;s Make It Happen
          </h2>

          {/* Subtitle */}
          <p className="footer-cta-sub text-sm sm:text-lg md:text-[20px] text-[#374151] max-w-[620px] mx-auto text-center font-normal leading-relaxed mb-6 sm:mb-10 font-display px-2">
            always open to new opportunities, collaborations, and creative challenges. Let&apos;s work together to bring your ideas to life
          </p>

          {/* Pill CTA Button: → Get In Touch */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pradhanrithik62@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-cta-btn inline-flex items-center gap-2.5 sm:gap-3 bg-[#18181B] hover:bg-[#2563EB] text-white px-6 sm:px-9 py-2.5 sm:py-3.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_15px_35px_rgba(37,99,235,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 font-medium text-sm sm:text-base group cursor-pointer"
          >
            {/* Arrow Icon */}
            <span className="text-base sm:text-lg leading-none transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Bottom Footer Navigation Row */}
        <div className="footer-nav-row w-full mt-14 sm:mt-28 md:mt-36 pt-6 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-[#18181B]">
          {/* Left Nav Links */}
          <nav className="flex items-center flex-wrap justify-center gap-4 sm:gap-8 lg:gap-10 text-sm sm:text-base md:text-[17px] font-normal font-display">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-[#18181B] hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("about");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[#18181B] hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              About
            </a>
            <a
              href="#works"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("works");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[#18181B] hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              Portfolio
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("services");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[#18181B] hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              Blog
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pradhanrithik62@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#18181B] hover:text-[#2563EB] transition-colors cursor-pointer"
            >
              Contact
            </a>
          </nav>

          {/* Right Copyright Notice */}
          <p className="text-xs sm:text-sm text-[#4B5563] font-normal font-display text-center sm:text-right">
            &copy; 2025 Rithik Pradhan. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
