"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // GSAP entry animation
    gsap.fromTo(
      ".portfon-nav",
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.1 }
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`portfon-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#C4CAD4]/85 backdrop-blur-md shadow-sm py-3.5"
          : "bg-transparent py-5 sm:py-7"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
        {/* Left: Logo & Nav items */}
        <div className="flex items-center gap-8 lg:gap-12">
          {/* Brand Logo */}
          <div
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            {/* Blue squircle logo icon */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#3B66FF] flex items-center justify-center shadow-md shadow-[#3B66FF]/30 group-hover:scale-105 transition-transform duration-200">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                {/* Stylized Angular / Geometric origami badge icon */}
                <path d="M12 2L3 8.5v7L12 22l9-6.5v-7L12 2zm0 3.2l6 4.3-6 4.3-6-4.3 6-4.3zm-7 6.1l5.5 3.9v5.2L5 15.6v-4.3zm8.5 9.1v-5.2l5.5-3.9v4.3l-5.5 4.8z" />
              </svg>
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#11141B] font-display">
              Portfon
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm sm:text-[15px] font-medium text-[#4B5563]">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-[#11141B] font-semibold hover:text-black transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("intro")}
              className="hover:text-[#11141B] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-[#11141B] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("works")}
              className="hover:text-[#11141B] transition-colors cursor-pointer"
            >
              Works
            </button>
          </nav>
        </div>

        {/* Right: CTA Button Group */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pradhanrithik62@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 sm:gap-2 cursor-pointer select-none"
          >
            {/* "Get In Touch" Pill */}
            <span className="bg-[#111317] hover:bg-black text-white text-xs sm:text-sm font-medium px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-md whitespace-nowrap">
              Get In Touch
            </span>

            {/* Circular Arrow Button (Desktop / Tablet) */}
            <span className="hidden sm:flex w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#111317] hover:bg-black text-white items-center justify-center transition-all duration-200 group-hover:scale-105 shadow-md shrink-0">
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-800 hover:text-black focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#C4CAD4]/95 backdrop-blur-xl border-t border-slate-300/60 px-6 py-5 mt-3 flex flex-col gap-3.5 shadow-xl">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-left text-base font-semibold text-[#11141B] hover:text-black py-1 cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("works")}
            className="text-left text-base font-medium text-slate-700 hover:text-black py-1 cursor-pointer"
          >
            Selected Works
          </button>
          <button
            onClick={() => scrollToSection("intro")}
            className="text-left text-base font-medium text-slate-700 hover:text-black py-1 cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-left text-base font-medium text-slate-700 hover:text-black py-1 cursor-pointer"
          >
            Services &amp; FAQ
          </button>
          <button
            onClick={() => scrollToSection("process")}
            className="text-left text-base font-medium text-slate-700 hover:text-black py-1 cursor-pointer"
          >
            Process &amp; Reviews
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-left text-base font-medium text-slate-700 hover:text-black py-1 cursor-pointer"
          >
            Who Am I
          </button>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pradhanrithik62@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="text-left text-base font-semibold text-[#2563EB] hover:text-blue-700 py-1 cursor-pointer"
          >
            Get In Touch &rarr;
          </a>
        </div>
      )}
    </header>
  );
}
