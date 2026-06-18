"use client";

import {
  TECH_STACK_DATA,
  TechCategoryBlock,
  TechNodeItem,
} from "@/data/techstack";

import {
  SiExpress,
  SiJsonwebtokens,
  SiRedux,
  SiMongodb,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiMysql,
  SiPostman,
  SiCloudinary,
  SiOpenai,
  SiGooglemaps,
  SiIntellijidea,
  SiVercel,
  SiShadcnui,
  SiDocker,
  SiVite,
  SiPnpm,
  SiEslint,
  SiPrettier,
  SiAxios,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  FaServer,
  FaCode,
  FaDatabase,
  FaTools,
  FaCloudUploadAlt,
  FaBrain,
  FaLock,
  FaKey,
  FaTerminal,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { DiSqllite } from "react-icons/di";
import { TbCloudComputing } from "react-icons/tb";
import { motion } from "framer-motion";

interface TechActionItem {
  id: string;
  projectName: string;
  tagline: string;
  highlightLog: string;
  appliedTech: string[];
  hoverShadowStyle: string;
}

const TECH_ACTION_DATA: TechActionItem[] = [
  {
    id: "01",
    projectName: "VibeStream - Music Platform",
    tagline: "Full-stack collaboration platform with real-time features.",
    highlightLog:
      "An immersive music streaming application built with Next.js and Aceternity UI, featuring fluid Framer Motion animations and high-performance server-side rendering.",
    appliedTech: [
      "next.js",
      "typescript",
      "tailwind css",
      "aceternity ui",
      "framer-motion",
      "swiper.js",
    ],

    hoverShadowStyle:
      "hover:border-cyan-500/30 hover:shadow-[0_0_50px_rgba(6,182,212,0.15)]",
  },
  {
    id: "02",
    projectName:
      "ZestCo: A real-time full-Stack Grocery Delivery Infrastructure",
    tagline:
      "ZestCo | Real-time tracking & RBAC ecosystem built with Next.js 15 and WebSockets.",
    highlightLog:
      "A production-ready grocery delivery platform featuring real-time tracking, multi-role dashboards, and secure payments, built with Next.js 15 and Socket.io.",
    appliedTech: [
      "next.js",
      "redux toolkit",
      "typescript",
      "scroll-trigger",
      "framer motion",
      "socket.io",
      "cloudinary",
      "mongodb-atlas",
      "tailwind.css",
    ],

    hoverShadowStyle:
      "hover:border-emerald-500/30 hover:shadow-[0_0_50px_rgba(16,185,129,0.15)]",
  },
  {
    id: "03",
    projectName: "RadiAntiX Job Search",
    tagline:
      "Engineered a full-stack Modern Web application responsive and interactive user interfaces.",
    highlightLog:
      "A high-performance full-stack job portal built with React 19 and Node.js, featuring secure JWT authentication, Redux state management, and Cloudinary media integration.",
    appliedTech: [
      "react 19",
      "redux toolkit",
      "tailwindcss 4",
      "shadcn ui",
      "framer motion",
      "node.js",
      "express.js",
      "jwt",
      "cloudinary",
      "mongodb",
    ],

    hoverShadowStyle:
      "hover:border-[#E24C60]/30 hover:shadow-[0_0_50px_rgba(226,76,96,0.15)]",
  },
];

export default function TechStack() {
  const getCategoryStyles = (title: string) => {
    const lowTitle = title.toLowerCase();

    if (lowTitle.includes("backend")) {
      return {
        bgStyle:
          "bg-[#1c0f11]/40 border-orange-500/15 hover:border-[#E24C60]/50 hover:shadow-[0_0_40px_rgba(226,76,96,0.03)]",
        icon: <FaServer className="text-9xl text-[#E24C60]" />,
        lineGlow: "bg-[#E24C60]",
      };
    }
    if (lowTitle.includes("frontend")) {
      return {
        bgStyle:
          "bg-[#1a160d]/40 border-amber-500/15 hover:border-amber-500/50 hover:shadow-[0_0_40px_rgba(245,158,11,0.03)]",
        icon: <FaCode className="text-9xl text-amber-500" />,
        lineGlow: "bg-amber-500",
      };
    }
    if (lowTitle.includes("database")) {
      return {
        bgStyle:
          "bg-[#0d1a13]/40 border-emerald-500/15 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.03)]",
        icon: <FaDatabase className="text-9xl text-emerald-400" />,
        lineGlow: "bg-emerald-400",
      };
    }
    if (lowTitle.includes("tools")) {
      return {
        bgStyle:
          "bg-[#140f1a]/40 border-purple-500/15 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.03)]",
        icon: <FaTools className="text-9xl text-purple-400" />,
        lineGlow: "bg-purple-400",
      };
    }
    if (lowTitle.includes("cloud")) {
      return {
        bgStyle:
          "bg-[#0d171a]/40 border-cyan-500/15 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.03)]",
        icon: <FaCloudUploadAlt className="text-9xl text-cyan-400" />,
        lineGlow: "bg-cyan-400",
      };
    }
    return {
      bgStyle:
        "bg-[#1a180d]/40 border-yellow-500/15 hover:border-yellow-500/50 hover:shadow-[0_0_40px_rgba(234,179,8,0.03)]",
      icon: <FaBrain className="text-9xl text-yellow-400" />,
      lineGlow: "bg-yellow-400",
    };
  };

  const getBrandTechIcon = (key: string) => {
    switch (key.toLowerCase().trim()) {
      case "node":
      case "node.js":
        return <FaNodeJs className="text-[#339933] text-xl" />;
      case "express":
      case "express.js":
        return <SiExpress className="text-zinc-400 text-xl" />;
      case "lock":
      case "bcrypt.js":
        return <FaLock className="text-zinc-500 text-xl" />;
      case "next":
      case "next.js":
      case "next.js 15":
        return <RiNextjsFill className="text-gray-400 text-xl" />;
      case "redux":
      case "redux toolkit":
        return <SiRedux className="text-[#764ABC] text-xl" />;
      case "jwt":
        return (
          <SiJsonwebtokens className="text-black bg-white rounded-xs p-0.5 text-xl" />
        );
      case "mongoose":
        return <FaKey className="text-emerald-500 text-xl" />;
      case "js":
      case "javascript":
        return (
          <SiJavascript className="text-[#F7DF1E] bg-black text-xl rounded-xs" />
        );
      case "react":
      case "react 19":
      case "react.js":
        return <SiReact className="text-[#61DAFB] text-xl" />;
      case "ts":
      case "typescript":
        return <SiTypescript className="text-[#3178C6] text-xl" />;
      case "tailwind":
      case "tailwindcss":
      case "tailwind css":
      case "tailwind.css":
        return <SiTailwindcss className="text-[#06B6D4] text-xl" />;
      case "motion":
      case "framer motion":
      case "framer-motion":
        return <SiFramer className="text-white text-xl" />;
      case "mysql":
        return <SiMysql className="text-[#4479A1] text-xl" />;
      case "sql":
        return (
          <DiSqllite className="text-[#003B57] text-xl bg-white rounded-xs p-0.5" />
        );
      case "mongodb":
      case "mongodb-atlas":
        return <SiMongodb className="text-[#47A248] text-xl" />;
      case "vscode":
        return <VscVscode className="text-[#007ACC] text-xl" />;
      case "git":
      case "git engine":
        return <FaGitAlt className="text-[#F05032] text-xl" />;
      case "postman":
        return <SiPostman className="text-[#FF6C37] text-xl" />;
      case "intellij":
      case "intellij idea":
        return <SiIntellijidea className="text-white text-xl" />;
      case "render":
        return <TbCloudComputing className="text-indigo-400 text-xl" />;
      case "vercel":
        return <SiVercel className="text-white text-xl" />;
      case "cloudinary":
        return <SiCloudinary className="text-[#3448C5] text-xl" />;
      case "github":
        return <FaGithub className="text-white text-xl" />;
      case "chatgpt":
        return <SiOpenai className="text-[#10A37F] text-xl" />;
      case "claude":
      case "claude ai":
        return <FaBrain className="text-amber-200 text-xl" />;
      case "gemini":
        return <SiGooglemaps className="text-[#8E75FF] text-xl" />;
      case "shadcn":
      case "shadcn ui":
        return <SiShadcnui className="text-zinc-200 text-xl" />;
      case "docker":
        return <SiDocker className="text-[#2496ED] text-xl" />;
      case "vite":
        return <SiVite className="text-[#646CFF] text-xl" />;
      case "package":
      case "npm / pnpm":
        return <SiPnpm className="text-[#F69220] text-xl" />;
      case "eslint":
      case "eslint & prettier":
        return <SiEslint className="text-[#4B32C3] text-xl" />;
      case "prettier":
        return <SiPrettier className="text-[#F7B93E] text-xl" />;
      case "axios":
      case "axios api":
        return <SiAxios className="text-[#5A29E4] text-xl" />;
      default:
        return <FaTerminal className="text-zinc-500 text-xl" />;
    }
  };

  const getTelemetryMetricStyle = (level: string) => {
    if (level === "CORE" || level === "Expert" || level === "Proficient") {
      return "text-[#E24C60] tracking-widest text-[9px]";
    }
    if (level === "ADVANCED" || level === "Advanced") {
      return "text-zinc-300 font-bold tracking-wide text-[9px]";
    }
    return "text-amber-400 font-bold tracking-wide text-[11px]";
  };

  return (
    <section
      id="tech-stack"
      className="w-full p-5 bg-transparent relative z-10 border-t border-white/5 scroll-mt-24 font-mono select-none"
    >
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        <div className="w-full text-left mb-12">
          <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter text-white uppercase leading-none">
            ENGINE
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-800 via-[#E24C60]/70 to-zinc-900">
              SYSTEMS.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start mb-24">
          {(TECH_STACK_DATA || []).map((cat: TechCategoryBlock) => {
            const currentStyle = getCategoryStyles(cat.title);

            return (
              <div
                key={cat.id}
                className={`w-full backdrop-blur-xl border rounded-[24px] p-7 flex flex-col shadow-2xl transition-all duration-500 group/card relative overflow-hidden ${currentStyle.bgStyle}`}
              >
                <div className="w-full flex items-center justify-between pb-5 mb-5 border-b border-white/15 relative z-10">
                  <div className="flex items-center gap-8">
                    <div className="w-15 h-15 rounded-[12px] p-1.5 border border-white/5 flex items-center justify-center shadow-inner">
                      {currentStyle.icon}
                    </div>
                    <h3 className="text-[18px] md:text-base font-black tracking-wider text-white uppercase opacity-85 group-hover/card:opacity-100 transition-all duration-300">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-col gap-2 relative z-10">
                  {cat.items?.map((item: TechNodeItem) => (
                    <div
                      key={item.name}
                      className="w-full flex items-center justify-between px-4 py-3 bg-black/25 hover:bg-[#121214]/60 border border-white/2 hover:border-white/5 rounded-[18px] transition-all duration-300 group/node relative overflow-hidden"
                    >
                      <div
                        className={`absolute left-0 top-0 w-[1.5px] h-full opacity-0 group-hover/node:opacity-100 transition-all duration-300 ${currentStyle.lineGlow}`}
                      />
                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 flex items-center justify-center opacity-65 group-hover/node:opacity-100 transition-all duration-300">
                          {getBrandTechIcon(item.iconKey)}
                        </div>
                        <span className="text-zinc-400 text-[15px] font-bold tracking-wider uppercase group-hover:text-zinc-100 transition-colors duration-200">
                          {item.name}
                        </span>
                      </div>
                      <span
                        className={`text-[12px] uppercase font-bold transition-all duration-300 ${getTelemetryMetricStyle(item.level)}`}
                      >
                        {item.level}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="w-full mt-5 pt-4 border-t border-white/5 text-[11px] text-zinc-500 tracking-[0.2em] uppercase font-bold flex items-center justify-between relative z-10">
                  <span>MOUNT_POINT // SEC_0{cat.id}</span>
                  <div className="w-1 h-1 rounded-full bg-[#E24C60]" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="w-full border-t border-white/5 pt-8">
          <div className="w-full text-center mb-16 select-none">
            <h3 className="text-5xl sm:text-3xl md:text-5xl font-black text-[#E24C60] mb-1 tracking-tighter">
              Tech Stack in Action
            </h3>
            <p className="text-2xl sm:text-2xl md:text-2xl text-zinc-500 tracking-tight max-w-2xl mx-auto leading-relaxed opacity-90 font-medium">
              Real projects showcasing how I apply these technologies to solve
              problems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {TECH_ACTION_DATA.map((item: TechActionItem) => (
              <div
                key={item.id}
                className={`w-full  border border-zinc-800/60 rounded-[20px] p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 ${item.hoverShadowStyle}`}
              >
                <div className="flex flex-col grow">
                  <div className="w-full flex flex-col pb-4">
                    <h4 className="text-[20px] font-bold text-[#E24C60] tracking-wide leading-tight">
                      {item.projectName}
                    </h4>
                  </div>

                  <p className="text-zinc-400 text-[16px] font-normal tracking-wide leading-relaxed mb-2">
                    {item.tagline}
                  </p>

                  <div className="w-full flex flex-col mb-5">
                    <div className="text-[15px] font-bold text-[#eab308] tracking-tight mb-3 flex items-center gap-2">
                      <span>Key Technologies :-</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {item.appliedTech.map(
                        (techName: string, index: number) => (
                          <div
                            key={index}
                            className="flex items-center gap-1.5 px-3 py-1 bg-[#16171b] border border-zinc-800 rounded-full text-[12px] text-zinc-300 font-medium tracking-wide"
                          >
                            <span className="font-sans font-medium text-[12px] text-zinc-400 capitalize">
                              {techName}
                            </span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-full p-3.5 bg-transparent border border-zinc-800/40 rounded-[20px] mt-auto ">
                  <div className="flex items-start gap-3">
                    <FaLightbulb className="text-amber-500 text-lg shrink-0 mt-1.5" />
                    <p className="text-zinc-400 text-[16px]  md:text-[16px] font-normal tracking-wide leading-relaxed">
                      {item.highlightLog}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <motion.div
            className="text-center glass-effect rounded-[20px] mt-10 p-12 border border-[#E24C60]/50  shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-16 h-16 bg-linear-to-r from-red-500 to-red-600 rounded-[20px] flex items-center justify-center mx-auto mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaRocket className="text-neutral-900 text-3xl " />
            </motion.div>

            <h3 className="text-3xl font-bold text-neutral-100 mb-4">
              Let&apos;s Build Something Amazing
            </h3>

            <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
              Ready to leverage these technologies for your next project?
              Let&apos;s discuss how we can create innovative solutions
              together.
            </p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#contact"
                className="bg-[#E24C60] rounded-[10px] inline-flex items-center gap-3 px-8 py-4 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="bg-gray-800  rounded-[10px] inline-flex items-center gap-3 px-8 py-4 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
