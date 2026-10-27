"use client";

import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";

import Image from "next/image";
import {
  MapPin,
  GraduationCap,
  Briefcase,
  ExternalLink,
  Cpu,
  Layers,
  Terminal,
  Mail,
  Globe,
} from "lucide-react";

interface AboutCardProps {
  onExploreMore?: () => void;
}

export default function AboutCard({ onExploreMore }: AboutCardProps) {
  const handleScrollToAbout = () => {
    if (onExploreMore) {
      onExploreMore();
    } else {
      const sec = document.getElementById("about");
      if (sec) sec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-3.5 rounded-[10px] bg-[#0d0d12]/95 border border-white/10 p-3.5 font-mono shadow-2xl text-neutral-300">
      <div className="flex items-start gap-3 pb-3 border-b border-white/10">
        <div className="relative w-14 h-14 rounded-[10px] overflow-hidden border border-yellow-500/30 bg-neutral-900 shrink-0 shadow-md">
          <Image
            src="/Sajan.jpeg"
            alt="Pintu Kumar"
            fill
            className="object-cover"
          />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-black animate-pulse" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-white text-[14px] tracking-wide truncate">
              Pintu Kumar (KumarrR)
            </h4>
            <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              Active
            </span>
          </div>
          <p className="text-[#E24C60] text-[11px] font-semibold truncate">
            Full-Stack Developer · Distributed Systems
          </p>
          <div className="flex items-center gap-1.5 text-neutral-400 text-[10px] pt-0.5">
            <MapPin className="w-3 h-3 text-neutral-500" />
            <span>Bhopal, India</span>
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex items-center gap-1.5 text-white font-bold text-[11px]">
          <Terminal className="w-3.5 h-3.5 text-[#E24C60]" />
          <span>Professional Focus</span>
        </div>
        <p className="text-gray-300 text-[12px] bg-white/2 p-2 rounded-[6px] tracking-wide border border-white/5">
          Building high-performance, edge-rendered web platforms and robust
          distributed full-stack architectures. Specialized in modern React 19 /
          Next.js 15 paradigms, real-time sync engines, and microservice APIs.
        </p>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5 text-white font-bold text-[11px]">
          <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
          <span>Education & Credentials</span>
        </div>
        <div className="bg-black/30 rounded-[6px] border border-white/5 divide-y divide-white/5 text-[10.5px]">
          <div className="p-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5">
            <span className="text-neutral-400 font-medium">
              B.Tech in Computer Science
            </span>
            <span className="text-neutral-200">
              Patel Group of Science & Tech (2022–2026)
            </span>
          </div>
          <div className="p-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-0.5">
            <span className="text-neutral-400 font-medium">
              Secondary & Higher Secondary
            </span>
            <span className="text-neutral-200">
              Loyola English Medium & Inter Science College
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5 text-white font-bold text-[11px]">
          <Cpu className="w-3.5 h-3.5 text-emerald-400" />
          <span>Core Engineering Skills</span>
        </div>
        <div className="overflow-hidden border border-white/10 rounded-[6px]">
          <table className="w-full text-left border-collapse text-[10.5px]">
            <thead>
              <tr className="bg-white/5 text-white border-b border-white/10">
                <th className="p-2 font-bold w-[30%]">Category</th>
                <th className="p-2 font-bold">Skills</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="p-2 font-medium text-neutral-400">Languages</td>
                <td className="p-2 text-white">
                  TypeScript, JavaScript, C++, HTML5, CSS3
                </td>
              </tr>
              <tr>
                <td className="p-2 font-medium text-neutral-400">Frontend</td>
                <td className="p-2 text-white">
                  Next.js 15, React 19, Tailwind CSS, Framer Motion, Redux
                </td>
              </tr>
              <tr>
                <td className="p-2 font-medium text-neutral-400">Backend</td>
                <td className="p-2 text-white">
                  Node.js, Express.js, REST APIs, WebSocket (Socket.io), JWT
                </td>
              </tr>
              <tr>
                <td className="p-2 font-medium text-neutral-400">Databases</td>
                <td className="p-2 text-white">
                  MongoDB Atlas, Mongoose, Cloudinary Storage
                </td>
              </tr>
              <tr>
                <td className="p-2 font-medium text-neutral-400">
                  Cloud & Tools
                </td>
                <td className="p-2 text-white">
                  Git, GitHub, Vercel, Render, Postman, Linux/Bash
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center gap-1.5 text-white font-bold text-[11px]">
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          <span>Notable Projects</span>
        </div>
        <div className="space-y-1.5">
          <div className="p-2 rounded-[6px] bg-white/2 border border-white/5 text-[10.5px] space-y-0.5">
            <div className="flex items-center justify-between">
              <span className="text-[#E24C60] font-bold">
                RADIANTIX Job Portal
              </span>
              <span className="text-[9px] text-neutral-400">
                MERN • REST Architecture
              </span>
            </div>
            <p className="text-neutral-400 tracking-wide text-[11px]">
              Full-lifecycle job ecosystem with dual applicant/recruiter
              portals, secure JWT auth, resume uploads, and real-time
              application pipelines.
            </p>
          </div>

          <div className="p-2 rounded-[6px] bg-white/2 border border-white/5 text-[10.5px] space-y-0.5">
            <div className="flex items-center justify-between">
              <span className="text-emerald-400 font-bold">
                ZESTCO Quick Commerce
              </span>
              <span className="text-[9px] text-neutral-400">
                Next.js 15 • Socket.io
              </span>
            </div>
            <p className="text-neutral-400 tracking-wide text-[11px]">
              Real-time grocery & supply delivery web app engineered with live
              socket telemetry, Stripe payments, and low-latency order routing.
            </p>
          </div>

          <div className="p-2 rounded-[6px] bg-white/2 border border-white/5 text-[10.5px] space-y-0.5">
            <div className="flex items-center justify-between">
              <span className="text-blue-400 font-bold">
                PARADOX Portfolio Terminal
              </span>
              <span className="text-[9px] text-neutral-400">
                Next.js 15 • Vercel Edge
              </span>
            </div>
            <p className="text-neutral-400 tracking-wide text-[11px]">
              Modular interactive portfolio engine featuring dynamic DOM theme
              overrides, terminal chat assistant, and 100/100 Lighthouse
              benchmark.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-1.5 pt-1">
        <div className="flex items-center gap-1.5 text-white font-bold text-[11px]">
          <Briefcase className="w-3.5 h-3.5 text-purple-400" />
          <span>Contact & Networks</span>
        </div>
        <div className="grid grid-cols-2 gap-1.5 text-[10px]">
          <a
            href="https://github.com/justkmr"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-2 rounded-[6px] bg-white/3 border border-white/10 hover:border-[#E24C60]/50 hover:bg-white/6 transition-all text-neutral-200"
          >
            <div className="flex items-center gap-1.5">
              <VscGithub className="w-3.5 h-3.5 text-[#E24C60]" />
              <span>GitHub</span>
            </div>
            <ExternalLink className="w-2.5 h-2.5 text-neutral-500" />
          </a>

          <a
            href="https://linkedin.com/in/pintu-kumar-12x"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-2 rounded-[6px] bg-white/3 border border-white/10 hover:border-blue-500/50 hover:bg-white/6 transition-all text-neutral-200"
          >
            <div className="flex items-center gap-1.5">
              <BsLinkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </div>
            <ExternalLink className="w-2.5 h-2.5 text-neutral-500" />
          </a>

          <a
            href="https://the-kumarrr.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-2 rounded-[6px] bg-white/3 border border-white/10 hover:border-emerald-500/50 hover:bg-white/6 transition-all text-neutral-200"
          >
            <div className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Portfolio</span>
            </div>
            <ExternalLink className="w-2.5 h-2.5 text-neutral-500" />
          </a>

          <div className="flex items-center justify-between p-2 rounded-[6px] bg-white/3 border border-white/10 text-neutral-300">
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>Available</span>
            </div>
            <span className="text-[9px] text-emerald-400">Full-Time</span>
          </div>
        </div>
      </div>

      <div className="pt-2 flex items-center justify-between border-t border-white/10 text-[10.5px]">
        <span className="text-neutral-400 tracking-wide">
          Feel free to reach out for collaborations!
        </span>
        <button
          onClick={handleScrollToAbout}
          className="flex items-center gap-1 text-[#E24C60] hover:underline font-semibold cursor-pointer"
        >
          <span>Story ↓</span>
        </button>
      </div>
    </div>
  );
}
