// "use client";

// import { motion } from "framer-motion";

// interface ProfileData {
//   avatar_url: string;
//   name: string;
//   login: string;
//   bio: string;
//   public_repos: number;
//   followers: number;
//   html_url: string;
// }

// export function GithubCard({ data }: { data: ProfileData }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       viewport={{ once: true }}
//       className="w-full p-6 rounded-[24px] border border-white/6 bg-gradient-to-b from-[#0e0f12]/90 to-[#0c0d10]/70 backdrop-blur-xl relative group shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden font-mono"
//     >
//       {/* Premium Ambient Core Reflection Grid */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E24C60]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//       {/* Live State Header badge */}
//       <div className="flex items-center justify-between w-full mb-6">
//         <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10 text-[9px] text-emerald-400 font-bold tracking-widest uppercase">
//           <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
//           <span>Live API Active</span>
//         </div>
//         <span className="text-[10px] text-zinc-600 tracking-widest uppercase">
//           INSIGHTS
//         </span>
//       </div>

//       <div className="flex flex-col items-center text-center">
//         {/* Pro Avatar Frame inside abstract rings */}
//         <div className="relative w-28 h-28 rounded-full p-1.5 border border-white/5 bg-zinc-900/40 mb-5 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:border-[#E24C60]/30 transition-colors duration-500">
//           {/* eslint-disable-next-line @next/next/no-img-element */}
//           <img
//             src={data.avatar_url}
//             alt={data.name}
//             className="rounded-full object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
//           />
//         </div>

//         <h3 className="text-xl font-black text-white font-sans tracking-tight">
//           {data.name || data.login}
//         </h3>
//         <p className="text-xs text-[#E24C60] font-bold tracking-wider mt-1">
//           @{data.login}
//         </p>

//         <p className="text-xs text-zinc-400 mt-4 leading-relaxed font-sans max-w-xs px-2 min-h-[40px]">
//           {data.bio ||
//             "Full-Stack Engineer crafting production-grade web systems with extreme performance optimization."}
//         </p>
//       </div>

//       {/* Metrics Glossy Dashboard Map */}
//       <div className="grid grid-cols-2 gap-4 border-t border-white/5 mt-6 pt-5">
//         <div className="text-center p-3 rounded-[16px] bg-white/[0.01] border border-white/5 group-hover:bg-white/[0.02] transition-colors duration-300">
//           <div className="text-2xl font-black text-white tracking-tight">
//             {data.public_repos}
//           </div>
//           <div className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold mt-1">
//             Repositories
//           </div>
//         </div>
//         <div className="text-center p-3 rounded-[16px] bg-white/[0.01] border border-white/5 group-hover:bg-white/[0.02] transition-colors duration-300">
//           <div className="text-2xl font-black text-white tracking-tight">
//             {data.followers}
//           </div>
//           <div className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold mt-1">
//             Followers
//           </div>
//         </div>
//       </div>

//       {/* Premium Trigger Action Button */}
//       <a
//         href={data.html_url}
//         target="_blank"
//         rel="noreferrer"
//         className="mt-5 w-full py-3.5 rounded-[14px] bg-white/5 hover:bg-white/10 border border-white/10 text-center text-xs font-black tracking-[0.2em] text-white transition-all flex items-center justify-center gap-2 group-hover:border-[#E24C60]/30 group-hover:shadow-[0_0_30px_rgba(226,76,96,0.1)]"
//       >
//         <span>EXPLORE GATEWAY</span>
//         <svg
//           className="w-3.5 h-3.5 fill-current text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all"
//           viewBox="0 0 24 24"
//         >
//           <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//         </svg>
//       </a>
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";

interface ProfileData {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  public_repos: number;
  followers: number;
  html_url: string;
}

export function GithubCard({ data }: { data: ProfileData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 60, damping: 15 }}
      className="w-full p-8 rounded-[32px] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-2xl relative group shadow-[0_50px_100px_rgba(0,0,0,0.9)] overflow-hidden font-mono flex flex-col justify-between min-h-[580px]"
    >
      {/* Glowing Neon Border Trace Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E24C60]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div>
        {/* Live Active Bar Indicator */}
        <div className="flex items-center justify-between w-full mb-8">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#E24C60]/5 border border-[#E24C60]/20 text-[9px] text-[#ff6b7d] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(226,76,96,0.05)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E24C60] shadow-[0_0_8px_#E24C60] animate-pulse" />
            <span>Core Hub Active</span>
          </div>
          <span className="text-[9px] text-zinc-600 tracking-widest uppercase font-bold">
            Terminal v1.0
          </span>
        </div>

        <div className="flex flex-col items-center text-center">
          {/* 🌐 CYBERPUNK HIGH-FIDELITY CIRCULAR AVATAR FRAME */}
          <div className="relative w-28 h-28 rounded-full p-1 border border-white/10 bg-zinc-950/80 mb-5 overflow-hidden transition-all duration-500 group-hover:border-[#E24C60]/50 group-hover:shadow-[0_0_35px_rgba(226,76,96,0.25)] group-hover:scale-105">
            {/* Absolute layout scanline/hologram ring tracking light on hover */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#E24C60]/0 group-hover:border-[#E24C60]/30 group-hover:animate-[spin_8s_linear_infinite] pointer-events-none" />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={data.avatar_url}
              alt={data.name}
              className="rounded-full object-cover w-full h-full border border-white/5 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </div>

          <h3 className="text-2xl font-black text-white font-sans tracking-tight">
            {data.name || data.login}
          </h3>
          <p className="text-xs text-[#E24C60] font-bold tracking-widest mt-1 uppercase">
            SYSTEM.ENGINEER
          </p>

          <p className="text-base text-zinc-400 mt-5 leading-relaxed font-sans px-2 min-h-[50px]">
            {data.bio ||
              "Full-Stack Engineer building visual-heavy, high-performance web systems and scalable API nodes."}
          </p>
        </div>
      </div>

      <div>
        {/* 🚀 EXACT MATCH TERMINAL SECTION (With Custom Variables) */}
        <div className="w-full p-6 rounded-[18px] transparent border border-white/5 flex flex-col gap-4 font-mono text-left relative  shadow-inner">
          {/* Mac-Style Top Header Window Buttons */}
          <div className="flex items-center justify-between w-full border-b border-white/5 ">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-[14px] text-gray-500  tracking-wider">
              ~/pintu-kumar/justkmr
            </span>
          </div>

          {/* Line 1: Whoami Command */}
          <div className="flex flex-col gap-1 text-[14px]">
            <span className="text-yellow-500 font-bold">$ whoami</span>
            <div className="flex items-center gap-2 pl-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-emerald-400 font-medium">
                {data.name || data.login}
              </span>
            </div>
          </div>

          {/* Line 2: Custom Architecture Role */}
          <div className="flex flex-col gap-1 text-[14px]">
            <span className="text-yellow-500 font-bold">$ cat role.txt</span>
            <div className="flex items-center gap-2 pl-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-cyan-400 font-medium">Problem Solver</span>
            </div>
          </div>

          {/* Line 3: Custom Tech Focus Mapping */}
          <div className="flex flex-col gap-1 text-[14px]">
            <span className="text-yellow-500 font-bold">$ cat focus.txt</span>
            <div className="flex items-center gap-2 pl-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-purple-500 font-medium">
                Git Workflow • Core Optimization
              </span>
            </div>
          </div>

          {/* Line 4: System Status Command */}
          <div className="flex flex-col gap-1 text-[14px]">
            <span className="text-yellow-500 font-bold">$ echo $ STATUS</span>
            <div className="flex items-center gap-2 pl-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-medium">
                Ready to build
              </span>
            </div>
          </div>
        </div>

        {/* Core Gateway Solid Neon Action Trigger Button */}
        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 w-full py-4 rounded-[18px] bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#E24C60]/30 text-center text-xs font-black tracking-[0.25em] text-white transition-all flex items-center justify-center gap-3 group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
        >
          <span>ACCESS CORE SOURCE</span>
          <svg
            className="w-4 h-4 fill-current text-zinc-500 group-hover:text-[#E24C60] transition-all duration-300 transform group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
