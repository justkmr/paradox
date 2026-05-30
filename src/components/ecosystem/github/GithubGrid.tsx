"use client";

import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const FEATURED_REPOS = [
  {
    name: "RadiAntiX",
    description:
      "An enterprise-grade Full-Stack Job Portal architecture engineered with MERN stack, featuring advanced query pipelines, real-time tracking, and role-based access management.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Redux", "ShadCN UI"],
    href: "https://github.com/justkmr/Job-Portal-Project",
  },
  {
    name: "ZestCo",
    description:
      "A high-performance real-time grocery delivery infrastructure utilizing Next.js 15, integrated with asynchronous web socket events for ultra-fast checkout and status monitoring.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "Socket.io",
      "Tailwind",
      "Redux",
      "Cloudinary",
    ],
    href: "https://github.com/justkmr/zestCo",
  },
];

const cyberpunkRedTheme = {
  light: ["#111215", "#2d0b10", "#5c0e18", "#a81326", "#E24C60"],
  dark: ["#111215", "#2d0b10", "#5c0e18", "#a81326", "#E24C60"],
};

export function GithubGrid() {
  // Custom Filter Engine: August Till Now
  const selectAugustToNow = (contributionDays: any[]) => {
    const currentYear = new Date().getFullYear();
    const targetStartDate = new Date(`${currentYear - 1}-08-01`);
    return contributionDays.filter(
      (day) => new Date(day.date) >= targetStartDate,
    );
  };

  return (
    <div className="lg:col-span-2 w-full flex flex-col gap-6 md:gap-8">
      {/* 📦 FEATURED REPOSITORIES RESPONSIVE GRID */}
      {/* <div className="grid sm:grid-cols-2 gap-5 md:gap-6 w-full">
        {FEATURED_REPOS.map((repo, index) => (
          <motion.div
            key={repo.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 15,
              delay: index * 0.1,
            }}
            whileHover={{ y: -6, borderColor: "rgba(226, 76, 96, 0.4)" }}
            className="w-full p-6 md:p-8 rounded-[28px] border border-white/5 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent backdrop-blur-3xl hover:bg-zinc-900/10 transition-all duration-500 flex flex-col justify-between group relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute -bottom-6 -right-4 text-zinc-950 font-mono font-black text-8xl pointer-events-none select-none opacity-40 group-hover:opacity-80 group-hover:text-[#E24C60]/5 transition-all duration-500 ease-out">
              0{index + 1}
            </div>

            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-transparent via-[#E24C60] to-transparent group-hover:w-full transition-all duration-700 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between w-full mb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-4 h-4 text-zinc-500 group-hover:text-[#E24C60] transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <h4 className="font-sans font-black text-xl text-white tracking-tight group-hover:text-[#E24C60] transition-colors duration-300">
                    {repo.name}
                  </h4>
                </div>
                <a
                  href={repo.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-500 hover:text-white p-2 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5"
                >
                  <svg
                    className="w-[18px] h-[18px] fill-none stroke-current"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 font-sans tracking-wide min-h-[40px] opacity-90">
                {repo.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 font-mono text-[10px] relative z-10">
              {repo.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-xl bg-zinc-950/60 border border-white/5 text-zinc-500 font-bold group-hover:text-zinc-200 group-hover:border-[#E24C60]/20 group-hover:bg-[#E24C60]/5 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div> */}

      {/* 📦 NEXT-GEN HIGH-CONTRAST ASYMMETRIC REPOSITORIES MATRIX */}
      <div className="grid sm:grid-cols-2 gap-6 w-full font-mono">
        {FEATURED_REPOS.map((repo, index) => (
          <motion.div
            key={repo.name}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 16,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -8,
              borderColor: "rgba(226, 76, 96, 0.5)",
            }}
            className="w-full p-6 md:p-8 rounded-[25px] border-2 border-white/5 bg-[#090a0d] transition-all duration-500 flex flex-col justify-between group relative overflow-hidden shadow-[20px_30px_60px_rgba(0,0,0,0.8)]"
          >
            {/* ⚡ THE CYBER BEAM INDEX STRIP */}
            {/* Left side par ek thick glowing track chipka diya hai jo hover hote hi laser crimson red ho jayega */}
            <div className="absolute left-0 top-0 w-1 h-full bg-zinc-900 group-hover:bg-[#E24C60] group-hover:shadow-[0_0_15px_#E24C60] transition-all duration-500 pointer-events-none" />

            {/* Split Decorative Header Line */}
            <div className="absolute top-0 right-12 w-24 h-0.75 bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            {/* Absolute Dynamic Digital Index Indicator */}
            <div className="absolute top-4 right-6 text-[10px] text-zinc-700 font-bold tracking-widest uppercase group-hover:text-[#E24C60]/60 transition-colors">
              SYS_NODE_0{index + 1}
            </div>

            <div className="relative z-10 w-full">
              {/* 🛠️ ASYMMETRIC SPLIT-HEADER */}
              <div className="flex items-baseline justify-between w-full border-b border-white/5 pb-4 mb-5">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-[#E24C60] font-black tracking-widest uppercase select-none">
                    [ ACTIVE REPOSITORY ]
                  </span>
                  <h4 className="font-sans font-black text-2xl text-white tracking-tight mt-1 group-hover:translate-x-1 transition-transform duration-300">
                    {repo.name}
                  </h4>
                </div>

                {/* <a
                  href={repo.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-500 hover:text-white p-3 rounded-[25px] bg-zinc-950 border border-white/5 hover:border-[#E24C60]/40 hover:shadow-[0_0_15px_rgba(226,76,96,0.2)] transition-all duration-300 flex items-center justify-center shrink-0"
                >
                  <svg
                    className="w-4 h-4 fill-none stroke-current"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a> */}

                {/* 🚀 REMOVED <a> TAG FOR TOP RIGHT ANCHOR */}
                <button
                  onClick={() =>
                    window.open(repo.href, "_blank", "noopener,noreferrer")
                  }
                  className="text-zinc-500 hover:text-white p-3 rounded-[25px] bg-zinc-950 border border-white/5 hover:border-[#E24C60]/40 hover:shadow-[0_0_15px_rgba(226,76,96,0.2)] transition-all duration-300 flex items-center justify-center shrink-0 cursor-pointer"
                >
                  <svg
                    className="w-4 h-4 fill-none stroke-current"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </button>
              </div>

              {/* High-Contrast System Description Field */}
              <div className="w-full p-4 rounded-[25px] transparent border border-white/2 mb-6 relative overflow-hidden group-hover:border-white/5 transition-colors">
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-sans tracking-wide opacity-90 group-hover:text-zinc-200 transition-colors duration-300">
                  <span className="text-[#E24C60] font-bold mr-1.5 font-mono select-none">
                    &gt;
                  </span>
                  {repo.description}
                </p>
              </div>
            </div>

            {/* 💎 FUTURISTIC TERMINAL LOG-STYLE TECH TAGS */}
            <div className="flex flex-wrap gap-2 relative z-10 w-full pt-2 border-t border-white/3">
              {repo.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-[12px] bg-zinc-950 border border-white/5 text-[12px] text-zinc-500 font-extrabold tracking-wider uppercase transition-all duration-300 group-hover:text-white group-hover:bg-[#E24C60]/5 group-hover:border-[#E24C60]/20 shadow-inner"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.1 }}
        className="w-full mt-6 p-6 md:p-8 rounded-[32px] border border-white/5 bg-linear-to-b from-white/3 to-transparent backdrop-blur-3xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden group font-mono"
      >
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#E24C60]/2 rounded-full blur-[100px] pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#E24C60]/5 border border-[#E24C60]/10 text-[#E24C60]">
              <svg
                className="w-4 h-4 text-[#E24C60] drop-shadow-[0_0_6px_#E24C60]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-sans font-black text-base text-white tracking-tight leading-none">
                Commit Pulse Pipeline
              </h4>
              <p className="text-[10px] text-[#E24C60] font-bold tracking-wider mt-1 uppercase">
                August &rarr; Till Now
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-center px-3 py-1 rounded-full bg-zinc-950/60 border border-white/5 text-[9px] text-zinc-400 font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E24C60] shadow-[0_0_6px_#E24C60] animate-pulse" />
            <span>Telemetry Interactive</span>
          </div>
        </div>

        <div
          className="w-full overflow-x-auto py-4 px-2 rounded-2xl bg-zinc-950/40 border border-white/1 flex items-center justify-start
          scrollbar-thin 
          scrollbar-thumb-zinc-800 
          scrollbar-track-transparent
          hover:scrollbar-thumb-[#E24C60]/50
          [&::-webkit-scrollbar]:h-1.5
          [&::-webkit-scrollbar-track]:bg-zinc-950/20
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-zinc-800
          [&::-webkit-scrollbar-thumb]:rounded-full
          hover:[&::-webkit-scrollbar-thumb]:bg-[#E24C60]/60
          [&::-webkit-scrollbar-thumb]:transition-colors
          [&::-webkit-scrollbar-thumb]:duration-300"
        >
          {/* <div className="min-w-[780px] text-zinc-400 font-mono select-none pr-4 pb-2">
            <GitHubCalendar
              username="justkmr"
              theme={cyberpunkRedTheme}
              transformData={selectAugustToNow}
              blockSize={14}
              blockMargin={5}
              fontSize={13}
              showWeekdayLabels={true}
              hideColorLegend={false}
              renderBlock={(block, activity) => {
                const updatedProps = {
                  ...block.props,
                  "data-tooltip-id": "github-tooltip",
                  "data-tooltip-content": `${activity.count} commits on ${activity.date}`,
                };
                return <rect {...updatedProps} />;
              }}
            />

            <ReactTooltip
              id="github-tooltip"
              delayShow={40}
              delayHide={40}
              className="!bg-zinc-950/95 !border !border-white/10 !text-white !font-mono !text-[13px] !rounded-[15px] !px-3 !py-2 !backdrop-blur-xl !shadow-2xl"
            />
          </div> */}

          <div className="min-w-195 text-zinc-400 font-mono select-none pr-4 pb-2">
            <GitHubCalendar
              username="justkmr"
              theme={cyberpunkRedTheme}
              transformData={selectAugustToNow}
              blockSize={14}
              blockMargin={5}
              fontSize={13}
              showWeekdayLabels={true}
              hideColorLegend={false}
              renderBlock={(block, activity) => {
                // 🧠 Custom JavaScript Date Parsing Engine standard
                const formatDateFriendly = (dateString: string) => {
                  const date = new Date(dateString);
                  return date.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short", // 'May', 'Aug', etc.
                    year: "numeric",
                  });
                };

                const updatedProps = {
                  ...block.props,
                  "data-tooltip-id": "github-tooltip",

                  "data-tooltip-content": `${activity.count} commits on ${formatDateFriendly(activity.date)}`,
                };
                return <rect {...updatedProps} />;
              }}
            />

            <ReactTooltip
              id="github-tooltip"
              delayShow={40}
              delayHide={40}
              className="!bg-zinc-950/95 !border !border-white/10 !text-white !font-mono !text-[13px] !rounded-[15px] !px-3 !py-2 !backdrop-blur-xl !shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
