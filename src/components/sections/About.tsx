"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  FaCode,
  FaServer,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaCode />,
    title: "Full-Stack Developer",
    description:
      "Specialized in React Components Pages & full Stack Development Ecosysystem",
  },
  {
    icon: <FaServer />,
    title: "Backend Focus",
    description: "Building scalable APIs and microservices",
  },
  {
    icon: <FaGraduationCap />,
    title: "IT Student",
    description:
      "Patel College of Science & Technology, Bhopal (Madhya Pradesh)",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Based in",
    description: "Bhopal Madhya Pradesh",
  },
];

export default function About() {
  const sectionId = useId();

  return (
    <section
      id="about"
      aria-labelledby={`about-heading-${sectionId}`}
      className="w-full relative bg-transparent py-16 md:py-24 px-4 md:px-16 xl:px-24 overflow-hidden select-none"
    >
      <div
        className="absolute top-1/2 left-1/4 w-125 h-125 bg-[#E24C60]/2 rounded-full blur-[130px] pointer-events-none transform-gpu"
        aria-hidden="true"
      />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="text-left mb-12 font-mono">
          <h2
            id={`about-heading-${sectionId}`}
            className="text-3xl md:text-5xl font-black text-white tracking-tight"
          >
            About <span className="text-[#E24C60]">Me</span>
          </h2>
          <div className="h-0.5 w-12 bg-[#E24C60] mt-3" aria-hidden="true" />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 xl:gap-20 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="w-75 sm:w-75 md:w-95 lg:w-110 aspect-square flex-none relative mx-auto sm:mx-0"
          >
            <div className="absolute -top-1 -right-1 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#E24C60] z-20 animate-pulse" />
            <div className="absolute -bottom-1 -left-1 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-zinc-700 z-20" />
            <div className="absolute -left-1 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-blue-700 z-20" />
            <div className="absolute bottom-1 -right-1 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-amber-700 z-20" />

            <div className="w-full h-full rounded-[14px] sm:rounded-[24px] overflow-hidden border border-white/6 bg-[#0c0d10]/40 p-1 sm:p-2 relative group shadow-2xl">
              <div className="w-full h-full rounded-[10px] sm:rounded-[18px] overflow-hidden relative">
                <Image
                  src="/Sajan.jpeg"
                  alt="Sajan Kumar official"
                  fill
                  sizes="(max-width: 768px) 160px, (max-width: 1024px) 380px, 440px"
                  loading="lazy"
                  className=" object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                />

                <div className="absolute bottom-1.5 sm:bottom-4 left-1/2 -translate-x-1/2 bg-[#0c0d10]/90 backdrop-blur-md border border-white/8 px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full flex items-center gap-1 sm:gap-2 shadow-lg whitespace-nowrap">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[7px] sm:text-[10px] text-zinc-300 font-mono font-bold tracking-wider uppercase">
                    Open To Work
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="w-full flex flex-col text-left font-mono min-w-0 sm:pl-8 md:pl-12 lg:pl-16"
          >
            <h3 className="text-2xl sm:text-2xl md:text-3xl font-black text-white tracking-tight font-sans">
              Hi, I&apos;m <span className="text-[#E24C60]">Pintu Kumar</span>
            </h3>
            <span className="text-xs sm:text-sm md:text-2xl text-[#E24C60] font-bold tracking-wider uppercase mt-0.5 sm:mt-1">
              Full Stack Developer
            </span>

            <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-4 font-sans text-lg sm:text-2xl md:text-xl text-zinc-400 leading-relaxed tracking-wide">
              <p>
                I am deeply passionate about engineering scalable,
                enterprise-grade web applications. My development core lies
                heavily in optimizing the{" "}
                <span className="text-[#E24C60] font-medium">
                  MERN Stack and Next.js 15
                </span>{" "}
                ecosystem to deliver high-performance digital architectures.
              </p>
              <p>
                I prioritize writing clean, modular, and maintainable code
                blocks while continuously exploring asynchronous query pipelines
                to resolve backend data sets with zero user interface friction.
              </p>
            </div>

            <div className="flex items-center gap-3 sm:gap-8 border-y border-white/5 py-3 sm:py-6 my-4 sm:my-8">
              <div>
                <div className="text-2xl sm:text-2xl md:text-3xl font-black text-white">
                  10+
                </div>
                <div className="text-[10px] sm:text-[12px] text-zinc-500 uppercase tracking-widest mt-0.5">
                  Projects
                </div>
              </div>
              <div className="w-px h-6 sm:h-8 bg-white/40" />
              <div>
                <div className="text-2xl sm:text-2xl md:text-3xl font-black text-white">
                  2+
                </div>
                <div className="text-[10px] sm:text-[12px] text-zinc-500 uppercase tracking-widest mt-0.5">
                  Years Exp
                </div>
              </div>
              <div className="w-px h-6 sm:h-8 bg-white/40" />
              <div>
                <div className="text-2xl sm:text-2xl md:text-3xl font-black text-white">
                  100%
                </div>
                <div className="text-[10px] sm:text-[12px] text-zinc-500 uppercase tracking-widest mt-0.5">
                  Dedication
                </div>
              </div>
            </div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="group p-5 bg-neutral-900/50 border border-neutral-800 rounded-[12px] hover:border-red-500/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-amber-400 text-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-neutral-100 text-sm sm:text-base mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
