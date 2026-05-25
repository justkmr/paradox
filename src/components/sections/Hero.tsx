// "use client";

// import { motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";

// const FADE_UP_VARIANTS = {
//   hidden: { opacity: 0, y: 24 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 20,
//       delay: i * 0.12,
//     },
//   }),
// };

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen w-full flex items-center justify-center pt-32 pb-16 px-4 md:px-8 overflow-hidden"
//     >
//       {/* 🌟 Background Radial Gradient Overlay to enhance the grid base */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,76,96,0.04),transparent_65%)] pointer-events-none" />

//       <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center gap-6 relative z-10 font-mono">
//         {/* 1. KINETIC STATUS BADGE */}
//         <motion.div
//           custom={0}
//           initial="hidden"
//           animate="visible"
//           variants={FADE_UP_VARIANTS}
//           className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05] shadow-[0_4px_12px_rgba(0,0,0,0.5)] select-none"
//         >
//           <span className="relative flex h-2 w-2">
//             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E24C60] opacity-75" />
//             <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E24C60]" />
//           </span>
//           <span className="text-[10px] sm:text-xs font-medium text-zinc-400 tracking-widest uppercase">
//             Ready for new opportunities
//           </span>
//         </motion.div>

//         {/* 2. MAIN BOLD TYPOGRAPHY STACK */}
//         <motion.h1
//           custom={1}
//           initial="hidden"
//           animate="visible"
//           variants={FADE_UP_VARIANTS}
//           className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] max-w-3xl"
//         >
//           Building Elite Full Stack Platforms with{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E24C60] to-[#ef4444] relative inline-block drop-shadow-[0_0_20px_rgba(226,76,96,0.15)]">
//             Next-Gen Architecture
//           </span>
//         </motion.h1>

//         {/* 3. PREMIUM RUNTIME SUBTITLE */}
//         <motion.p
//           custom={2}
//           initial="hidden"
//           animate="visible"
//           variants={FADE_UP_VARIANTS}
//           className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed tracking-wide font-sans mt-2"
//         >
//           Hi, I am{" "}
//           <span className="text-white font-semibold font-mono">
//             Pintu Kumar
//           </span>
//           . A Full Stack Engineer specialized in developing high-performance
//           MERN & Next.js systems with absolute dynamic control and fluid
//           micro-interactions.
//         </motion.p>

//         {/* 4. CALL TO ACTION INTERACTIVE BUTTONS */}
//         <motion.div
//           custom={3}
//           initial="hidden"
//           animate="visible"
//           variants={FADE_UP_VARIANTS}
//           className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full sm:w-auto"
//         >
//           {/* Primary View Projects Button */}
//           <motion.a
//             href="#projects"
//             className="group w-full sm:w-auto bg-[#E24C60] hover:bg-[#c73b4e] text-white text-xs uppercase font-bold tracking-widest px-7 py-4 rounded-xl flex items-center justify-center gap-2.5 shadow-[0_8px_25px_rgba(226,76,96,0.2),inset_0_1px_0_rgba(255,255,255,0.2)] border border-[#E24C60]/30 transition-colors"
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <span>Explore Projects</span>
//             <FontAwesomeIcon
//               icon={faArrowRight}
//               className="text-[11px] transition-transform duration-300 group-hover:translate-x-1"
//             />
//           </motion.a>

//           {/* Secondary Action: Resume Fetcher */}
//           <motion.a
//             href="#resume"
//             className="w-full sm:w-auto bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.04] hover:border-white/[0.08] text-zinc-300 hover:text-white text-xs uppercase font-bold tracking-widest px-7 py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
//             whileHover={{ scale: 1.03 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <FontAwesomeIcon
//               icon={faDownload}
//               className="text-[11px] opacity-70"
//             />
//             <span>Download CV</span>
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion, Variants } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faEnvelope,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { TypeAnimation } from "react-type-animation";

const FADE_UP_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 lg:px-12 bg-black"
    >
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[80px_80px]" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,76,96,0.08),transparent_65%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto min-h-screen grid lg:grid-cols-2 items-center gap-20">
        <div className=" mt-25 flex flex-col justify-center">
          {/* Open To Opportunities Badge */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={FADE_UP_VARIANTS}
            className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full border border-white/6 bg-white/3 backdrop-blur-md mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E24C60] opacity-75" />

              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E24C60]" />
            </span>

            <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-medium">
              Open To Opportunities
            </span>
          </motion.div>

          <motion.p
            custom={1}
            initial="hidden"
            animate="visible"
            variants={FADE_UP_VARIANTS}
            className="text-zinc-500 text-2xl  font-medium"
          >
            Hi there, I&apos;m —
          </motion.p>

          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={FADE_UP_VARIANTS}
            className="w-full"
          >
            <div className="space-y-2 select-none">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
                Pintu Kumar
              </h1>

              <div className="min-h-12.5 sm:min-h-15 flex items-center bg-[#E24C60] rounded-[12px] px-4 py-2 w-fit">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-300 leading-none tracking-tight">
                  <div className="inline-block relative">
                    <TypeAnimation
                      sequence={[
                        "Full Stack Developer",
                        2000,
                        "Software Engineer",
                        2000,
                        "MERN Stack Developer",
                        2000,
                        "Frontend & Backend Enthusiast",
                        2000,
                        "Next.js Developer",
                        2000,
                      ]}
                      wrapper="span"
                      speed={40}
                      repeat={Infinity}
                      cursor={true}
                    />
                  </div>
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={FADE_UP_VARIANTS}
            className="mt-5 text-zinc-400 text-xl leading-relaxed max-w-2xl"
          >
            Undergraduate{" "}
            <span className="text-[#E24C60] font-semibold">
              Computer Science
            </span>{" "}
            student building scalable systems with{" "}
            <span className="text-[#E24C60] font-semibold">
              MongoDB, Express, React & Next.js
            </span>
            . Focused on creating modern interfaces, smooth interactions, and
            highly optimized user experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={FADE_UP_VARIANTS}
            className="flex flex-wrap gap-4 mt-5"
          >
            {/* View Projects */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-[#E24C60] hover:bg-[#cf4054] text-white px-8 py-4 rounded-[12px] font-semibold flex items-center gap-2 transition-all shadow-[0_10px_40px_rgba(226,76,96,0.3)]"
            >
              <span>View Projects</span>

              <FontAwesomeIcon
                icon={faArrowRight}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            {/* Contact */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] text-white px-8 py-4 rounded-[12px] font-semibold flex items-center gap-2 transition-all"
            >
              <FontAwesomeIcon icon={faEnvelope} />

              <span>Contact Me</span>
            </motion.a>

            {/* Resume */}
            <motion.a
              href="#resume"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] text-white px-8 py-4 rounded-[12px] font-semibold flex items-center gap-2 transition-all"
            >
              <FontAwesomeIcon icon={faFileLines} />

              <span>Resume</span>
            </motion.a>
          </motion.div>
        </div>

        {/* =========================================
            RIGHT SIDE TERMINAL
        ========================================= */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={FADE_UP_VARIANTS}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-[#E24C60]/10 blur-[120px]" />

            {/* Terminal */}
            <div className="relative w-[430px] h-[430px] rounded-[30px] border border-white/[0.06] bg-[#0c0c0d]/95 backdrop-blur-xl p-8 shadow-[0_30px_120px_rgba(0,0,0,0.9)]">
              {/* Header */}
              <div className="flex items-center gap-2 mb-10">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />

                <span className="text-zinc-600 text-base ml-4">
                  ~/pintu-kumar
                </span>
              </div>

              {/* Terminal Commands */}
              <div className="space-y-8 font-mono text-[15px]">
                <div>
                  <p className="text-amber-400">$ whoami</p>

                  <p className="text-emerald-400  pl-4">Pintu Kumar</p>
                </div>

                <div>
                  <p className="text-amber-400">$ cat role.txt</p>

                  <p className="text-cyan-400  pl-4">Full Stack Developer</p>
                </div>

                <div>
                  <p className="text-amber-400">$ cat focus.txt</p>

                  <p className="text-[#6bd02f] pl-4">
                    MERN Stack • Next.js • TypeScript
                  </p>
                </div>

                <div>
                  <p className="text-amber-400">$ echo $ STATUS</p>

                  <div className="flex items-center gap-2  pl-4 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

                    <span>Ready to build</span>
                  </div>

                  <div className=" mt-4 left-8 right-8 border-t border-white/[0.05]  flex items-center justify-between text-sm text-zinc-600">
                    <span>• latest_projects</span>

                    <a
                      href="#projects"
                      className="text-amber-400 hover:text-amber-300 transition-colors mt-1"
                    >
                      View All →
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
