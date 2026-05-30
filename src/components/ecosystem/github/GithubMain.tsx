"use client";

import { useState, useEffect } from "react";
import { GithubCard } from "./GithubCard";
import { GithubGrid } from "./GithubGrid";

export default function GithubMain() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/justkmr`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        setProfile(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section
      id="github"
      className="w-full relative bg-transparent py-5 px-6 lg:px-12 overflow-hidden select-none"
    >
      <div className="absolute top-1/4 left-1/4 w-125 h-[500px] bg-[radial-gradient(circle_at_center,rgba(226,76,96,0.12),transparent_70%)] rounded-full blur-[120px] pointer-events-none transform-gpu animate-pulse duration-[6s]" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05),transparent_70%)] rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent absolute top-0 left-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-left mb-20 font-mono">
          <div className="flex items-center gap-3 mb-4 text-xs tracking-[0.5em] text-[#E24C60] font-bold uppercase">
            <span className="w-2 h-2 rounded-full bg-[#E24C60] shadow-[0_0_12px_#E24C60] animate-pulse" />
            <span>Open Source Ecosystem</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-200 to-zinc-500 tracking-tight leading-none">
            Code{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E24C60] to-[#ff6b7d] drop-shadow-[0_0_30px_rgba(226,76,96,0.2)]">
              Contributions
            </span>
          </h2>
          <div className="h-[3px] w-20 bg-gradient-to-r from-[#E24C60] to-transparent mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start w-full">
          {loading ? (
            <div className="lg:col-span-1 h-[420px] rounded-[32px] border border-white/5 bg-[#07080a]/60 backdrop-blur-xl flex flex-col gap-3 items-center justify-center text-zinc-500 text-xs font-mono tracking-[0.2em] uppercase">
              <span className="w-5 h-5 border-2 border-zinc-800 border-t-[#E24C60] rounded-full animate-spin" />
              <span>Syncing Live Matrix...</span>
            </div>
          ) : profile ? (
            <GithubCard data={profile} />
          ) : (
            <div className="lg:col-span-2 h-105 rounded-[32px] border border-white/5 bg-red-950/10 flex items-center justify-center text-zinc-600 text-xs font-mono w-full">
              FAILED TO SECURE USER ENGINE.
            </div>
          )}

          <GithubGrid />
        </div>
      </div>
    </section>
  );
}
