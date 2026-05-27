"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface TechIcon {
  name: string;
  icon: string;
  color: string;
}

const TRACK_ONE: TechIcon[] = [
  {
    name: "Next.js",
    icon: "https://cdn.simpleicons.org/nextdotjs/white",
    color: "rgba(255,255,255,0.03)",
  },
  {
    name: "React",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    color: "rgba(97,218,251,0.03)",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
    color: "rgba(49,120,198,0.03)",
  },
  {
    name: "Node.js",
    icon: "https://cdn.simpleicons.org/nodedotjs/339933",
    color: "rgba(51,153,51,0.03)",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.simpleicons.org/mongodb/47A24A",
    color: "rgba(71,162,74,0.03)",
  },
  {
    name: "Express",
    icon: "https://cdn.simpleicons.org/express/white",
    color: "rgba(255,255,255,0.03)",
  },
  {
    name: "Redux",
    icon: "https://cdn.simpleicons.org/redux/764ABC",
    color: "rgba(118,74,188,0.03)",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    color: "rgba(6,182,212,0.03)",
  },
  {
    name: "Shadcn UI",
    icon: "https://cdn.simpleicons.org/shadcnui/white",
    color: "rgba(255,255,255,0.03)",
  },
  {
    name: "Framer Motion",
    icon: "https://cdn.simpleicons.org/framer/0055FF",
    color: "rgba(0,85,255,0.03)",
  },
];

const TRACK_TWO: TechIcon[] = [
  {
    name: "Docker",
    icon: "https://cdn.simpleicons.org/docker/2496ED",
    color: "rgba(36,150,237,0.03)",
  },
  {
    name: "Socket.io",
    icon: "https://cdn.simpleicons.org/socketdotio/white",
    color: "rgba(255,255,255,0.03)",
  },
  {
    name: "Stripe",
    icon: "https://cdn.simpleicons.org/stripe/6772E5",
    color: "rgba(103,114,229,0.03)",
  },
  {
    name: "Postman",
    icon: "https://cdn.simpleicons.org/postman/FF6C37",
    color: "rgba(255,108,55,0.03)",
  },
  {
    name: "Cloudinary",
    icon: "https://cdn.simpleicons.org/cloudinary/3448C5",
    color: "rgba(52,72,197,0.03)",
  },
  {
    name: "JWT",
    icon: "https://cdn.simpleicons.org/jsonwebtokens/white",
    color: "rgba(255,255,255,0.03)",
  },
  {
    name: "Git",
    icon: "https://cdn.simpleicons.org/git/F05032",
    color: "rgba(240,80,50,0.03)",
  },
  {
    name: "GitHub",
    icon: "https://cdn.simpleicons.org/github/white",
    color: "rgba(255,255,255,0.03)",
  },
  {
    name: "Vercel",
    icon: "https://cdn.simpleicons.org/vercel/white",
    color: "rgba(255,255,255,0.03)",
  },
  {
    name: "Render",
    icon: "https://cdn.simpleicons.org/render/white",
    color: "rgba(255,255,255,0.03)",
  },
  {
    name: "Sass",
    icon: "https://cdn.simpleicons.org/sass/CC6699",
    color: "rgba(204,102,153,0.03)",
  },
];

export default function TechMarquee() {
  const id = useId();

  return (
    <section
      aria-labelledby={`tech-heading-${id}`}
      className="w-full flex flex-col items-center relative overflow-hidden bg-transparent py-8 select-none"
    >
      <div className="flex items-center gap-3 mb-8 font-mono text-[10px] sm:text-xs tracking-[0.4em] text-zinc-600 uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-[#E24C60] animate-pulse" />
        <h2 id={`tech-heading-${id}`}>Technical Arsenal</h2>
      </div>

      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-[#E24C60]/5 rounded-full blur-[120px] pointer-events-none transform-gpu opacity-40" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none transform-gpu opacity-30" />

      <div className="w-full relative flex flex-col gap-5 overflow-hidden max-w-7xl mx-auto bg-transparent">
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 z-30 bg-linear-to-r from-[#080808] via-[#080808]/80 to-transparent pointer-events-none " />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 z-30 bg-linear-to-l from-[#080808] via-[#080808]/80 to-transparent pointer-events-none " />

        <div className="flex whitespace-nowrap overflow-hidden py-2">
          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{ ease: "linear", duration: 32, repeat: Infinity }}
            className="flex w-max items-center gap-5 pr-5 transform-gpu will-change-transform"
          >
            {[...Array(2)].map((_, loopIdx) => (
              <div
                key={`l1-${loopIdx}`}
                className="flex items-center gap-5 flex-none"
              >
                {TRACK_ONE.map((tech, idx) => (
                  // <motion.div
                  //   key={`t1-${loopIdx}-${idx}`}
                  //   whileHover={{ scale: 1.04, y: -4, borderColor: "#E24C60" }}
                  //   transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  //   style={{ backgroundColor: tech.color }}
                  //   className="flex items-center gap-4 border border-white/5 backdrop-blur-md px-6 py-3 hover:bg-[#0f1013]/90 hover:shadow-[0_15px_30px_rgba(226,76,96,0.06)] transition-all rounded-[15px] duration-300 cursor-default group"
                  // >
                  //   <img
                  //     src={tech.icon}
                  //     alt={tech.name}
                  //     loading="lazy"
                  //     decoding="async"
                  //     className="h-5 w-5 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                  //   />
                  //   <span className="text-zinc-500 group-hover:text-white font-mono text-xs font-semibold tracking-wider transition-colors duration-300">
                  //     {tech.name}
                  //   </span>
                  // </motion.div>

                  <motion.div
                    key={`t1-${loopIdx}-${idx}`}
                    whileHover={{ scale: 1.04, y: -4, borderColor: "#E24C60" }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    style={{ backgroundColor: tech.color }}
                    className="flex items-center gap-4 border border-white/5 backdrop-blur-md px-6 py-3 hover:bg-[#0f1013]/90 hover:shadow-[0_15px_30px_rgba(226,76,96,0.06)] transition-all rounded-[15px] duration-300 cursor-default group"
                  >
                    {/* 🌟 FIXED: `next/image` Optimization Integration */}
                    <div className="relative h-5 w-5 flex items-center justify-center overflow-hidden">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={20}
                        height={20}
                        unoptimized
                        className="opacity-40 group-hover:opacity-100 transition-opacity duration-300 object-contain w-full h-full"
                      />
                    </div>

                    <span className="text-zinc-500 group-hover:text-white font-mono text-xs font-semibold tracking-wider transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex whitespace-nowrap overflow-hidden py-2">
          <motion.div
            animate={{ x: ["-50%", 0] }}
            transition={{ ease: "linear", duration: 36, repeat: Infinity }}
            className="flex w-max items-center gap-5 pr-5 transform-gpu will-change-transform"
          >
            {[...Array(2)].map((_, loopIdx) => (
              <div
                key={`l2-${loopIdx}`}
                className="flex items-center gap-5 flex-none"
              >
                {TRACK_TWO.map((tech, idx) => (
                  <motion.div
                    key={`t2-${loopIdx}-${idx}`}
                    whileHover={{ scale: 1.04, y: -4, borderColor: "#E24C60" }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    style={{ backgroundColor: tech.color }}
                    className="flex items-center gap-4 border border-white/5 backdrop-blur-md px-6 py-3 rounded-[15px] hover:bg-[#0f1013]/90 hover:shadow-[0_15px_30px_rgba(226,76,96,0.06)] transition-all duration-300 cursor-default group"
                  >
                    <div className="relative h-5 w-5 flex items-center justify-center overflow-hidden">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={20}
                        height={20}
                        unoptimized
                        className="opacity-40 group-hover:opacity-100 transition-opacity duration-300 object-contain w-full h-full"
                      />
                    </div>

                    <span className="text-zinc-500 group-hover:text-white font-mono text-xs font-semibold tracking-wider transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div
        className="flex flex-col items-center gap-3 mt-2 select-none"
        aria-hidden="true"
      >
        <div className="w-24 h-px bg-linear-to-r from-transparent via-red-800 to-transparent" />
        <span className="text-[10px] tracking-[0.3em] text-zinc-600 font-mono uppercase">
          Explore Infrastructure
        </span>
        <div className="w-4 h-6 border border-red-900/40 rounded-full flex justify-center mb-2">
          <motion.div
            animate={{ y: [0, 6, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 bg-red-600 rounded-full mt-1.5"
          />
        </div>
      </div>
    </section>
  );
}
