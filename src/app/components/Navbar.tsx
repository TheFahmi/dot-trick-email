"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { handleSmoothScroll } from "../utils/scrollUtils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 flex items-center justify-between transition-all duration-300 ${
        scrolled 
          ? "navbar-scrolled" 
          : "navbar-transparent"
      }`}
    >
      <div className="flex items-center gap-2">
        <Image 
          src="/gmail-logo.svg" 
          alt="Gmail Logo" 
          width={30} 
          height={30}
          className="object-contain"
        />
        <h1 className="font-bold text-xl">Dot Trik Gmail</h1>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <a 
          href="#generator" 
          className="hover:text-[var(--primary)] transition-colors"
          onClick={(e) => handleSmoothScroll(e)}
        >
          Generator
        </a>
        <a 
          href="#features" 
          className="hover:text-[var(--primary)] transition-colors"
          onClick={(e) => handleSmoothScroll(e)}
        >
          Features
        </a>
        <a 
          href="#tips" 
          className="hover:text-[var(--primary)] transition-colors"
          onClick={(e) => handleSmoothScroll(e)}
        >
          Tips
        </a>
        <a 
          href="#resources" 
          className="hover:text-[var(--primary)] transition-colors"
          onClick={(e) => handleSmoothScroll(e)}
        >
          Resources
        </a>
      </div>
      <button className="btn-primary">Get Started</button>
    </nav>
  );
}
