"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface GitHubProfile {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  public_repos: number;
  followers: number;
  html_url: string;
}

const FEATURED_REPOS = [
  {
    name: "RadiAntiX",
    description:
      "An enterprise-grade Full-Stack Job Portal architecture engineered with MERN stack, featuring advanced query pipelines, real-time tracking, and role-based access management.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    href: "https://github.com/justkmr/RadiAntiX",
  },
  {
    name: "ZestCo",
    description:
      "A high-performance real-time grocery delivery infrastructure utilizing Next.js 15, integrated with asynchronous web socket events for ultra-fast checkout and status monitoring.",
    tags: ["Next.js 15", "TypeScript", "Socket.io", "Tailwind"],
    href: "https://github.com/justkmr/ZestCo",
  },
];

export default function GithubSection() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const username = "justkmr";

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (res.ok) {
          const data = await res.json();
          setProfile(data);
        }
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchGitHubData();
  }, []);

  return (
    <section
      id="github"
      className="w-full relative bg-transparent py-2 px-6 lg:px-12 overflow-hidden select-none"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-neutral-900/40 rounded-full blur-[140px] pointer-events-none transform-gpu" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#E24C60]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-left mb-16 font-mono">
          <div className="flex items-center gap-3 mb-3 text-xs tracking-[0.4em] text-zinc-600 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E24C60] animate-pulse" />
            <span>Open Source Ecosystem</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Code <span className="text-[#E24C60]">Contributions</span>
          </h2>
          <div className="h-0.5 w-12 bg-[#E24C60] mt-3" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start w-full">
          <div className="lg:col-span-1 w-full">
            {loading ? (
              <div className="w-full h-80 rounded-[24px] border border-white/5 bg-[#0c0d10]/40 animate-pulse flex items-center justify-center text-zinc-600 font-mono text-xs">
                INITIALIZING API PIPELINE...
              </div>
            ) : profile ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full p-6 rounded-[24px] border border-white/6 bg-[#0c0d10]/70 backdrop-blur-xl relative group shadow-2xl overflow-hidden"
              >
                {/* Micro corner indicators */}
                <div className="absolute top-3 right-3 text-[10px] font-mono text-zinc-600 tracking-widest uppercase">
                  Live Stat
                </div>

                <div className="flex flex-col items-center text-center mt-4">
                  <div className="relative w-24 h-24 rounded-full p-1 border border-white/10 bg-zinc-900/50 mb-4 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={profile.avatar_url}
                      alt={profile.name}
                      className="rounded-full object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-white font-sans">
                    {profile.name || profile.login}
                  </h3>
                  <p className="text-xs text-[#E24C60] font-mono tracking-wider mt-0.5">
                    @{profile.login}
                  </p>

                  <p className="text-xs text-zinc-400 mt-4 leading-relaxed font-sans max-w-xs px-2">
                    {profile.bio ||
                      "Full-Stack Engineer crafting digital architectures with extreme performance optimization."}
                  </p>
                </div>

                {/* API Live Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 border-t border-white/5 mt-6 pt-5 font-mono">
                  <div className="text-center p-3 rounded-[12px] bg-white/[0.02] border border-white/[0.02]">
                    <div className="text-xl font-black text-white">
                      {profile.public_repos}
                    </div>
                    <div className="text-[9px] uppercase tracking-wider text-zinc-500 mt-1">
                      Repositories
                    </div>
                  </div>
                  <div className="text-center p-3 rounded-[12px] bg-white/[0.02] border border-white/[0.02]">
                    <div className="text-xl font-black text-white">
                      {profile.followers}
                    </div>
                    <div className="text-[9px] uppercase tracking-wider text-zinc-500 mt-1">
                      Followers
                    </div>
                  </div>
                </div>

                {/* Action Link */}
                <a
                  href={profile.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 w-full py-3 rounded-[12px] bg-white/5 hover:bg-white/10 border border-white/10 text-center font-mono text-xs font-bold tracking-widest text-white transition-all flex items-center justify-center gap-2 group-hover:border-[#E24C60]/30"
                >
                  <span>EXPLORE PROFILE</span>
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </motion.div>
            ) : (
              <div className="w-full h-80 rounded-[24px] border border-white/5 bg-[#0c0d10]/40 flex items-center justify-center text-zinc-600 font-mono text-xs">
                FAILED TO RESOLVE INSTANCE.
              </div>
            )}
          </div>

          {/* 2. PREMIUM FEATURED REPOSITORIES GRID */}
          <div className="lg:col-span-2 w-full flex flex-col gap-5">
            {FEATURED_REPOS.map((repo, index) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, borderColor: "rgba(226, 76, 96, 0.25)" }}
                className="w-full p-6 rounded-[24px] border border-white/5 bg-neutral-900/30 backdrop-blur-md hover:bg-neutral-900/50 transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Absolute Decoration vector */}
                <div className="absolute bottom-4 right-4 text-zinc-800 font-mono font-black text-6xl pointer-events-none select-none opacity-20 group-hover:opacity-40 group-hover:text-[#E24C60]/10 transition-all duration-500">
                  0{index + 1}
                </div>

                <div>
                  {/* Top line repo info */}
                  <div className="flex items-center justify-between w-full mb-3">
                    <div className="flex items-center gap-2.5">
                      {/* Repo SVG vector icon */}
                      <svg
                        className="w-4 h-4 text-zinc-500 group-hover:text-[#E24C60] transition-colors"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      <h4 className="font-bold text-white tracking-tight text-lg group-hover:text-[#E24C60] transition-colors font-sans">
                        {repo.name}
                      </h4>
                    </div>

                    {/* View Code Link */}
                    <a
                      href={repo.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-500 hover:text-white p-1 rounded-full hover:bg-white/5 transition-all"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M6 17c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm18-4.9c0-.3-.1-.5-.3-.7l-4.4-4.4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.7 2.7H10c-.6 0-1 .4-1 1s.4 1 1 1h9.6l-2.7 2.7c-.4 1-.4 1.6 0 2 .2.2.5.3.7.3s.5-.1.7-.3l4.4-4.4c.2-.2.3-.4.3-.7zM10 5c0 .6.4 1 1 1h7.6l-2.7 2.7c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l4.4-4.4c.2-.2.3-.4.3-.7s-.1-.5-.3-.7l-4.4-4.4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.7 2.7H11c-.6 0-1 .4-1 1zm-4 6c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM4 5c0 1.1-.9 2-2 2S0 6.1 0 5s.9-2 2-2 2 .9 2 2z" />
                      </svg>
                    </a>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed max-w-xl font-sans mb-5">
                    {repo.description}
                  </p>
                </div>

                {/* Technology Badges Matrix */}
                <div className="flex flex-wrap gap-2 font-mono text-[10px]">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-zinc-500 group-hover:text-zinc-300 group-hover:border-white/10 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
