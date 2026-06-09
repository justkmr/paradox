"use client";

import { useState } from "react";
import { PROJECTS_DATA, ProjectType } from "@/data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCpu,
  faTerminal,
  faSquareCode,
  faStar,
  faCalendarDays,
  faUserTie,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

type FilterType = "all" | "fullstack" | "frontend" | "backend";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const premiumAssets = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1600&auto=format&fit=crop",
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  const filterTabs = [
    { id: "all", label: "ALL_REPOS" },
    { id: "fullstack", label: "FULL_STACK" },
    { id: "frontend", label: "FRONTEND" },
    { id: "backend", label: "BACKEND" },
  ];

  return (
    <section id="projects" className="w-full bg-transparent relative z-10">
      <div className="w-full flex flex-col">
        {/* 🛰️ Monolithic Kinetic Intro Title Track & Filter Controls */}
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 pt-44 pb-12 select-none text-left relative flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 font-mono text-[10px] text-[#E24C60] tracking-[0.4em] uppercase mb-4">
              <span className="w-1.5 h-1.5 bg-[#E24C60] inline-block animate-pulse rounded-full" />
              <span>// DEPLOYMENT_PIPELINE_ACTIVE</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-white uppercase leading-none">
              SELECTED
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-zinc-800 via-zinc-500 to-zinc-900 selection:bg-zinc-700">
                WORKS.
              </span>
            </h2>
          </div>

          {/* 🟢 FUTURISTIC CYBERPUNK FILTER CONTROLS */}
          <div className="flex flex-wrap gap-2 font-mono text-[12px] bg-black/10 p-2.5 border border-white/10 rounded-[18px] backdrop-blur-md self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as FilterType)}
                className={`px-4 py-2 rounded-[15px] uppercase tracking-widest font-bold transition-all duration-300 relative ${
                  activeFilter === tab.id
                    ? "text-[#E24C60] bg-[#E24C60]/10 border border-[#E24C60]/20 shadow-[0_0_20px_rgba(226,76,96,0.05)]"
                    : "text-zinc-500 hover:text-[#E24C60] border border-transparent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col min-h-[50vh]">
          {filteredProjects.length === 0 ? (
            <div className="w-full py-32 flex items-center justify-center font-mono text-zinc-600 text-xs tracking-widest uppercase">
              // NO_PROJECTS_COMPILE_UNDER_THIS_NODES
            </div>
          ) : (
            filteredProjects.map((project: ProjectType, index: number) => {
              const currentAsset = premiumAssets[index] || premiumAssets[0];

              return (
                <div
                  key={project.id}
                  className="w-full min-h-screen sticky top-0 flex items-center justify-center overflow-hidden border-t border-white/5 bg-[#080808]/95 backdrop-blur-md"
                >
                  {/* Ambient Deep Background Glow Overlay */}
                  <div className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none mix-blend-screen transition-opacity duration-700 group-hover:opacity-20">
                    <Image
                      src={project.image || currentAsset}
                      alt="Core Backdrop Glow"
                      fill
                      sizes="100vw"
                      className="object-cover grayscale blur-xs scale-[1.05]"
                      priority={index === 0}
                    />

                    {/* Dynamic Inline Style Radial Mask */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at center, transparent 20%, #080808 100%)",
                      }}
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-transparent to-[#080808]" />
                  </div>

                  <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-20">
                    <div className="lg:col-span-6 text-left flex flex-col justify-center order-2 lg:order-1">
                      <div className="flex items-center gap-4 font-mono select-none">
                        <span className="text-[12px] text-[#E24C60] font-bold tracking-[0.25em]">
                          [ PIPELINE // 0{index + 1} ]
                        </span>
                        <span className="w-12 h-[1px] bg-zinc-800" />
                        <span className="text-[15px] text-gray-400  tracking-wider font-semibold">
                          {project.subtitle}
                        </span>
                      </div>

                      <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-transparent bg-clip-text bg-linear-to-b from-white via-white to-zinc-500 uppercase tracking-tight mt-6 leading-none">
                        {project.title}
                      </h3>

                      <p className="mt-6 text-sm md:text-base text-zinc-400 font-serif font-light leading-relaxed tracking-wide max-w-xl">
                        {project.description}
                      </p>

                      <div className="mt-5 border-t border-b border-white/5 py-5 grid grid-cols-3 gap-4 font-mono text-[15px] select-none">
                        <div className="flex flex-col gap-1.5">
                          <span className="text-zinc-600 tracking-wider flex items-center gap-1.5 uppercase font-medium">
                            <FontAwesomeIcon
                              icon={faCalendarDays}
                              className="text-[#E24C60] text-[15px]"
                            />
                            DATE_STAMP
                          </span>
                          <span className="text-zinc-400 tracking-wide">
                            {project.date || "N/A"}
                          </span>
                        </div>

                        <div className="flex flex-col gap-1.5 border-l border-white/5 pl-4">
                          <span className="text-zinc-600 tracking-wider flex items-center gap-1.5 uppercase font-medium">
                            <FontAwesomeIcon
                              icon={faUserTie}
                              className="text-[#E24C60] text-[15px]"
                            />
                            ROLE_SPEC
                          </span>
                          <span className="text-zinc-400 tracking-wide truncate">
                            {project.role || "N/A"}
                          </span>
                        </div>

                        <div className="flex flex-col gap-1.5 border-l border-white/5 pl-4">
                          <span className="text-zinc-600 tracking-wider flex items-center gap-1.5 uppercase font-medium">
                            <FontAwesomeIcon
                              icon={faUsers}
                              className="text-[#E24C60] text-[15px]"
                            />
                            MEMBERS
                          </span>
                          <span className="text-zinc-400 tracking-wide">
                            {project.members || "N/A"}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 pt-3  font-mono text-[11px] tracking-widest font-bold">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-white transition-all duration-300 flex items-center gap-2 group/btn relative bg-black rounded-[12px] py-2.5 px-5"
                          >
                            <FontAwesomeIcon
                              icon={faGithub}
                              className="text-sm group-hover/btn:rotate-12 transition-transform duration-300"
                            />
                            <span>GET_SOURCE</span>
                            <span className="absolute bottom-0 left-0 w-0 h-1px bg-white group-hover/btn:w-full transition-all duration-300" />
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 hover:text-[#E24C60] transition-all duration-300 flex items-center gap-1.5 ml-auto group/live relative bg-black rounded-[12px] py-2.5 px-5"
                          >
                            <span>LIVE_EXECUTE</span>
                            <FontAwesomeIcon
                              icon={faArrowUpRightFromSquare}
                              className="text-[10px] group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform duration-300"
                            />
                            <span className="absolute bottom-0 right-0 w-0 h-px bg-[#E24C60] group-hover/live:w-20 transition-all duration-300" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="lg:col-span-6 w-full order-1 lg:order-2 group/vessel">
                      <div className="w-full bg-[#0c0d0f]/60 backdrop-blur-md border border-white/5 rounded-[28px] overflow-hidden shadow-[0_50px_100px_-25px_rgba(0,0,0,0.95)] group-hover/vessel:border-[#E24C60]/20 group-hover/vessel:shadow-[0_50px_100px_-20px_rgba(226,76,96,0.05)] transition-all duration-700 flex flex-col">
                        <div className="w-full bg-black/40 px-6 py-4 border-b border-white/5 flex items-center justify-between font-mono select-none">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <div className="w-2.5 h-2.5 rounded-full bg-white/5 border border-white/10 group-hover/vessel:bg-[#E24C60]/40 transition-colors duration-500" />
                              <div className="w-2.5 h-2.5 rounded-full bg-white/5 border border-white/10" />
                              <div className="w-2.5 h-2.5 rounded-full bg-white/5 border border-white/10" />
                            </div>

                            <span className="text-[11px] text-[#E24C60] tracking-widest flex items-center gap-1.5 border-l border-white/10 pl-4">
                              <FontAwesomeIcon
                                icon={faSquareCode}
                                className="text-[12px] text-[#E24C60]/60"
                              />
                              RENDER_TARGET // PORT_0{index + 1}
                            </span>
                          </div>

                          <div className="flex items-center justify-center h-full">
                            {project.featured && (
                              <div className="flex items-center gap-1 bg-[#E24C60]/10 border border-[#E24C60]/30 rounded-full  px-2.5 py-1 text-[12px] text-[#E24C60] font-bold uppercase tracking-widest scale-[0.95] animate-pulse">
                                <FontAwesomeIcon
                                  icon={faStar}
                                  className="text-[10px] "
                                />
                                <span>FEATURED</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="w-full aspect-[16/10] relative bg-[#090a0c] overflow-hidden group/img">
                          <Image
                            src={project.image || currentAsset}
                            alt={project.title}
                            fill
                            sizes="(max-w-7xl) 50vw"
                            className="object-cover opacity-25 grayscale group-hover/vessel:opacity-75 group-hover/vessel:grayscale-0 group-hover/vessel:scale-[1.015] transition-all duration-[1000ms] ease-out"
                          />

                          <div className="absolute inset-0 bg-size-[24px_24px] bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] opacity-0 group-hover/vessel:opacity-100 transition-opacity duration-700 pointer-events-none" />

                          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-80" />
                        </div>

                        <div className="p-6 bg-black/30 border-t border-white/5 flex flex-wrap gap-2.5 font-mono">
                          {project.tech.map((t) => (
                            <div
                              key={t}
                              className="flex items-center gap-2 text-zinc-500 py-1.5 px-3.5 bg-white/2 border border-white/5 rounded-[12px] hover:text-[#E24C60] hover:bg-[#E24C60]/5 hover:border-[#E24C60]/20 transition-all duration-300 select-none"
                            >
                              <span className="w-1 h-1 bg-zinc-600 group-hover/vessel:bg-[#E24C60] rounded-full transition-colors duration-500" />
                              <span className="uppercase tracking-wider text-[9px] font-bold">
                                {t}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
