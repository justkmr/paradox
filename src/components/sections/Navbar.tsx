"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faXmark,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center p-4 md:p-6 pointer-events-none">
      <header className="w-full max-w-7xl pointer-events-auto flex items-center justify-between gap-4">
        {/* 1. LEFT: Profile Avatar & Meta Info */}
        <div className="flex items-center gap-3 bg-[#111111]/80 backdrop-blur-xl border border-white/4 px-4 py-2 rounded-full shadow-lg">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#E24C60]/30 bg-[#161616]">
            <div className="w-full h-full bg-linear-to-tr from-[#E24C60] to-zinc-700 opacity-80 flex items-center justify-center text-[10px] font-mono text-white font-bold">
              PK
            </div>
          </div>
          <div className="flex flex-col font-mono text-left  sm:flex">
            <span className="text-xs font-bold text-white tracking-wide">
              Pintu K.
            </span>
            <span className="text-[9px] text-zinc-500 uppercase tracking-tighter">
              Developer
            </span>
          </div>
        </div>

        {/* 2. CENTER: Encapsulated Bento Nav Dock (With Double Pill Logic) */}
        <nav className="hidden lg:flex items-center bg-[#111111]/80 backdrop-blur-xl border border-white/4 p-1.5 rounded-full shadow-lg relative">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.name;
            const isHovered = hoveredIndex === index;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-3 text-sm font-mono tracking-wider transition-all duration-300 rounded-full ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
                onClick={() => setActiveSection(link.name)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="relative z-10">{link.name}</span>

                {/* 🔥 FEATURE 1: Active Capsule Fill (Hamesha active section par rahega) */}
                {isActive && (
                  <motion.span
                    className="absolute inset-0 bg-[#E24C60] rounded-full shadow-[0_4px_20px_rgba(226,76,96,0.4)]"
                    layoutId="activePillFill"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}

                {/* 🔥 FEATURE 2: Hover Capsule Fill (Baki links par hover karne par smoothly slide karega) */}
                {isHovered && !isActive && (
                  <motion.span
                    className="absolute inset-0 bg-white/4 border border-white/8 rounded-full"
                    layoutId="hoverPillFill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* 3. RIGHT: Social Clusters (Refined Background & Motion) & Action Button */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-[#111111]/80 backdrop-blur-xl border border-white/[0.04] px-4 py-2 rounded-full shadow-lg">
            {[
              { icon: faGithub, url: "https://github.com" },
              { icon: faLinkedin, url: "https://linkedin.com" },
              { icon: faInstagram, url: "https://instagram.com" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 bg-white/[0.02] border border-white/[0.04] transition-colors duration-200"
                whileHover={{
                  scale: 1.12,
                  y: -2,
                  color: "#E24C60",
                  backgroundColor: "rgba(226, 76, 96, 0.08)",
                  borderColor: "rgba(226, 76, 96, 0.2)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <FontAwesomeIcon icon={social.icon} className="text-[18px]" />
              </motion.a>
            ))}
          </div>

          {/* 🔥 Enhanced "Let's Talk" Custom Action Button */}
          <motion.a
            href="#contact"
            className="bg-[#E24C60] text-white font-mono text-sm font-semibold  tracking-wider px-5 py-3 rounded-full flex items-center gap-2 shadow-[0_4px_20px_rgba(226,76,96,0.25)] pointer-events-auto"
            whileHover={{
              scale: 1.04,
              backgroundColor: "#b91c1c",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <span>Let&apos;s Talk</span>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-[10px]"
            />
          </motion.a>

          {/* Mobile Screen Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white w-10 h-10 rounded-full border border-white/[0.06] flex items-center justify-center bg-[#111111]/80 backdrop-blur-xl"
          >
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
              className="text-xs"
            />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-[#111111]/95 backdrop-blur-2xl border border-white/6 rounded-2xl lg:hidden p-5 flex flex-col gap-3 font-mono shadow-2xl pointer-events-auto">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setIsOpen(false);
                setActiveSection(link.name);
              }}
              className={`text-xs tracking-wider uppercase py-2 px-3 rounded-xl transition-all ${
                activeSection === link.name
                  ? "text-white bg-[#E24C60]"
                  : "text-zinc-400 hover:bg-white/2"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
