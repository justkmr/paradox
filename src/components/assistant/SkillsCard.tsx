"use client";

import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Server,
  Database,
  Cloud,
} from "lucide-react";

export default function SkillsCard() {
  const handleScrollToSkills = () => {
    const sec = document.getElementById("skills");
    if (sec) sec.scrollIntoView({ behavior: "smooth" });
  };

  const frontendSkills = [
    "Next.js",
    "React.js",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "Redux Toolkit",
    "Framer Motion",
    "GSAP",
    "Swiper.js",
  ];

  const backendSkills = [
    "Node.js",
    "Express.js",
    "Bcrypt.js",
    "Socket.io (Realtime)",
    "REST Architecture",
    "Next-Auth / Auth.js",
    "JWT & RBAC",
    "Payment Gateways ",
  ];

  const dataMediaSkills = [
    "MongoDB Atlas",
    "Mongoose ODM",
    "Cloudinary Media CDN",
    "Redux Persist",
  ];

  const devopsTools = [
    "Git & GitHub",
    "Vercel Edge",
    "Render",
    "Postman API",
    "Linux / Bash",
  ];

  return (
    <div className="w-full rounded-[10px] bg-[#070709] border border-white/8 p-3.5 space-y-2.5 font-sans shadow-2xl text-neutral-300">
      <div className="flex items-center justify-between pb-1.5 border-b border-white/6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#E24C60] animate-pulse" />
          <span className="font-semibold text-white tracking-wide uppercase text-[12px] ">
            Full Stack Engineering Arsenal
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="p-3 rounded-[8px] bg-linear-to-b from-white/4 to-white/1 border border-white/[0.07] hover:border-white/[0.14] transition-all space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-white ">
              <Layers className="w-8 h-8 text-sky-400" />
              <span>Frontend & Motion Systems</span>
            </div>
            <span className="text-[9px] font-mono text-sky-400/90 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">
              CLIENT
            </span>
          </div>

          <div className="flex flex-wrap gap-1">
            {frontendSkills.map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-0.5 rounded-[8px] bg-white/4 border border-white/6 text-neutral-200 hover:text-white hover:border-sky-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-[8px] bg-linear-to-b from-white/4 to-white/1 border border-white/7 hover:border-white/14 transition-all space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-white ">
              <Server className="w-8 h-8 text-[#E24C60]" />
              <span>Backend, Realtime & Auth</span>
            </div>
            <span className="text-[9px] font-mono text-[#E24C60] bg-[#E24C60]/10 px-1.5 py-0.5 rounded border border-[#E24C60]/20">
              ENGINE
            </span>
          </div>

          <div className="flex flex-wrap gap-1">
            {backendSkills.map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-0.5 rounded-[8px] bg-white/4 border border-white/6 text-neutral-200 hover:text-white hover:border-[#E24C60]/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-[8px] bg-linear-to-b from-white/3 to-white/1 border border-white/6 hover:border-white/12 transition-all space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-white">
              <Database className="w-8 h-8 text-emerald-400" />
              <span>Persistence & CDN Assets</span>
            </div>
            <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
              STORE
            </span>
          </div>

          <div className="flex flex-wrap gap-1">
            {dataMediaSkills.map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-0.5 rounded-[8px] bg-white/4 border border-white/6 text-neutral-200 hover:text-white hover:border-emerald-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="p-3 rounded-[8px] bg-linear-to-b from-white/3 to-white/1 border border-white/6 hover:border-white/12 transition-all space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-white ">
              <Cloud className="w-8 h-8 text-purple-400" />
              <span>Cloud & DevOps Ecosystem</span>
            </div>
            <span className="text-[9px] font-mono text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded border border-purple-500/20">
              DEPLOY
            </span>
          </div>

          <div className="flex flex-wrap gap-1">
            {devopsTools.map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-0.5 rounded-[8px] bg-white/4 border border-white/6 text-neutral-200 hover:text-white hover:border-purple-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-white/5">
        <div className="flex items-center gap-1 text-[10.6px] text-neutral-400">
          <Sparkles className="w-3 h-3 text-[#E24C60]" />
          <span>Production-grade across web apps & microservices</span>
        </div>
        <button
          onClick={handleScrollToSkills}
          className="flex items-center gap-1 text-[#E24C60] hover:text-[#E24C60]/80 font-medium transition-colors cursor-pointer text-[10.5px]"
        >
          <span>Skills Section</span>
          <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
