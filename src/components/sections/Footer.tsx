"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const middleLetters = ["u", "m", "a", "r", "r"];

  return (
    <div className="w-full flex flex-col items-center border-t border-zinc-900 pt-16 pb-24 xs:pb-28 sm:pb-32 md:pb-16 relative select-none">
      <style jsx global>{`
        .neon-letter-stroke {
          color: transparent !important;
          -webkit-text-stroke: 1.5px #e24c60 !important;
          filter: drop-shadow(0 0 10px rgba(226, 76, 96, 0.2)) !important;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }
        .neon-letter-stroke:hover {
          transform: scale(1.08) translateY(-5px) !important;
          filter: drop-shadow(0 0 25px #e24c60) drop-shadow(0 0 50px #e24c60)
            drop-shadow(0 0 80px rgba(226, 76, 96, 0.6)) !important;
        }

        .neon-letter-solid {
          color: rgba(39, 39, 42, 0.3) !important;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1) !important;
        }
        .neon-letter-solid:hover {
          color: #e24c60 !important;
          transform: scale(1.08) translateY(-5px) !important;
          filter: drop-shadow(0 0 25px #e24c60)
            drop-shadow(0 0 60px rgba(226, 76, 96, 0.8)) !important;
        }

        .mobile-watermark span.stroke-art {
          color: transparent !important;
          -webkit-text-stroke: 1px #e24c60 !important;
        }
        .mobile-watermark span.solid-art {
          color: rgba(39, 39, 42, 0.3) !important;
        }
      `}</style>

      <div className="hidden md:flex absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-0 font-sans font-black select-none text-center w-full justify-center items-end opacity-40 cursor-default leading-none tracking-[-0.05em]">
        <span className="text-[240px] lg:text-[320px] leading-none inline-block neon-letter-stroke pointer-events-auto">
          K
        </span>
        {middleLetters.map((letter, index) => (
          <span
            key={index}
            className="text-[240px] lg:text-[320px] leading-none inline-block neon-letter-solid pointer-events-auto"
          >
            {letter}
          </span>
        ))}
        <span className="text-[240px] lg:text-[320px] leading-none inline-block neon-letter-stroke pointer-events-auto">
          R
        </span>
        <span className="text-[240px] lg:text-[320px] leading-none inline-block neon-letter-solid pointer-events-auto">
          .
        </span>
      </div>

      <div className="md:hidden absolute bottom-[90px] xs:bottom-[105px] sm:bottom-[120px] left-1/2 -translate-x-1/2 pointer-events-none z-0 font-sans font-black select-none text-center w-full opacity-40 tracking-tight leading-none whitespace-nowrap flex justify-center items-end px-4 mobile-watermark">
        <h2 className="text-[14vw] sm:text-[13vw] leading-none m-0 p-0 flex items-end">
          <span className="stroke-art">K</span>
          <span className="solid-art">umarr</span>
          <span className="stroke-art">R</span>
          <span className="solid-art">.</span>
        </h2>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center pb-16">
        <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-6 font-serif">
          Mr. <span className="text-[#E24C60]">KumarrR.</span>
        </h3>

        <div className="flex items-center justify-center flex-wrap gap-x-8 gap-y-3 mb-8 text-[17px] font-serif text-zinc-400">
          <a href="#about" className="hover:text-[#E24C60] transition-colors">
            About
          </a>
          <a
            href="#projects"
            className="hover:text-[#E24C60] transition-colors"
          >
            Projects
          </a>
          <a
            href="#techstack"
            className="hover:text-[#E24C60] transition-colors"
          >
            Tech Stack
          </a>
          <a
            href="#contact"
            className="hover:text-[#E24C60] transition-colors text-[#E24C60]"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 mb-10">
          <a
            href="https://github.com/justkmr"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-full bg-zinc-900/30 border border-zinc-900 flex items-center justify-center text-zinc-400 hover:border-[#E24C60]/40 hover:text-white transition-all"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/pintu-kumar-12x"
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 rounded-full bg-zinc-900/30 border border-zinc-900 flex items-center justify-center text-zinc-400 hover:border-[#E24C60]/40 hover:text-white transition-all"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="mailto:mrkumarrr12@gmail.com"
            className="w-11 h-11 rounded-full bg-zinc-900/30 border border-zinc-900 flex items-center justify-center text-zinc-400 hover:border-[#E24C60]/40 hover:text-white transition-all"
          >
            <FaEnvelope className="text-2xl" />
          </a>
        </div>

        <div className="w-full text-center text-[16px] text-zinc-500  tracking-wide font-mono flex flex-col gap-1.5 border-t border-zinc-950/40 max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center gap-1">
            <span>
              Made with ❤️ by{" "}
              <span className="text-[#E24C60] font-bold">Mr. KumarrR</span>{" "}
            </span>
          </div>
          <div className="text-[18px]">
            © {new Date().getFullYear()} KumarrR. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
