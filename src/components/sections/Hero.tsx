// "use client";

// import { motion, Variants } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faEnvelope,
//   faFileLines,
//   faCircleArrowRight,
// } from "@fortawesome/free-solid-svg-icons";
// import { TypeAnimation } from "react-type-animation";

// const FADE_UP_VARIANTS: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       duration: 0.7,
//       ease: "easeOut",
//     },
//   }),
// };

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen overflow-hidden px-6 lg:px-12 bg-black"
//     >
//       <div className="absolute inset-0 opacity-[0.08]">
//         <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[80px_80px]" />
//       </div>

//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,76,96,0.08),transparent_65%)] pointer-events-none" />

//       <div className="relative z-10 max-w-7xl mx-auto min-h-screen grid lg:grid-cols-2 items-center gap-20">
//         <div className=" mt-25 flex flex-col justify-center">
//           <motion.div
//             custom={2}
//             initial="hidden"
//             animate="visible"
//             variants={FADE_UP_VARIANTS}
//             className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full border border-white/6 bg-white/3 backdrop-blur-md mb-6"
//           >
//             <span className="relative flex h-2.5 w-2.5">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E24C60] opacity-75" />

//               <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E24C60]" />
//             </span>

//             <span className="text-xs uppercase tracking-[0.2em] text-zinc-400 font-medium">
//               Open To Opportunities
//             </span>
//           </motion.div>

//           <motion.p
//             custom={1}
//             initial="hidden"
//             animate="visible"
//             variants={FADE_UP_VARIANTS}
//             className="text-zinc-500 text-2xl  font-medium"
//           >
//             Hi there, I&apos;m —
//           </motion.p>

//           <motion.div
//             custom={2}
//             initial="hidden"
//             animate="visible"
//             variants={FADE_UP_VARIANTS}
//             className="w-full"
//           >
//             <div className="space-y-2 select-none">
//               <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
//                 Pintu Kumar
//               </h1>

//               <div className="min-h-12.5 sm:min-h-15 flex items-center bg-[#E24C60] rounded-[12px] px-4 py-2 w-fit">
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-300 leading-none tracking-tight">
//                   <div className="inline-block relative">
//                     <TypeAnimation
//                       sequence={[
//                         "Full Stack Developer",
//                         2000,
//                         "Software Engineer",
//                         2000,
//                         "MERN Stack Developer",
//                         2000,
//                         "Frontend & Backend Enthusiast",
//                         2000,
//                         "Next.js Developer",
//                         2000,
//                       ]}
//                       wrapper="span"
//                       speed={40}
//                       repeat={Infinity}
//                       cursor={true}
//                     />
//                   </div>
//                 </h2>
//               </div>
//             </div>
//           </motion.div>

//           <motion.p
//             custom={3}
//             initial="hidden"
//             animate="visible"
//             variants={FADE_UP_VARIANTS}
//             className="mt-5 text-zinc-400 text-xl leading-relaxed max-w-2xl"
//           >
//             <span className="text-[#E24C60] font-semibold">
//               Computer Science Undergraduate{" "}
//             </span>
//             focused on building scalable and visually immersive web experiences
//             using{" "}
//             <span className="text-[#E24C60] font-semibold">
//               MongoDB, Express.js, React, and Next.js.
//             </span>{" "}
//             Blending modern UI craftsmanship with performance-driven engineering
//             to create fast, interactive, and production-ready digital products.
//           </motion.p>

//           <motion.div
//             custom={4}
//             initial="hidden"
//             animate="visible"
//             variants={FADE_UP_VARIANTS}
//             className="flex flex-wrap gap-4 mt-5"
//           >
//             <motion.a
//               href="#projects"
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.98 }}
//               className="group bg-[#E24C60] hover:bg-[#cf4054] text-white px-8 py-4 rounded-[12px] font-semibold flex items-center gap-2 transition-all shadow-[0_10px_40px_rgba(226,76,96,0.3)]"
//             >
//               <span>View Projects</span>

//               <FontAwesomeIcon
//                 icon={faCircleArrowRight}
//                 className="transition-transform duration-300 group-hover:translate-x-1 text-[18px] "
//               />
//             </motion.a>

//             <motion.a
//               href="#contact"
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.98 }}
//               className="border border-white/10 bg-white/3 hover:bg-white/5 text-white px-8 py-4 rounded-[12px] font-semibold flex items-center gap-2 transition-all "
//             >
//               <FontAwesomeIcon icon={faEnvelope} />

//               <span>Contact Me</span>
//             </motion.a>

//             <motion.a
//               href="#resume"
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.98 }}
//               className="border border-white/10 bg-white/3 hover:bg-white/5 text-white px-8 py-4 rounded-[12px] font-semibold flex items-center gap-2 transition-all"
//             >
//               <FontAwesomeIcon icon={faFileLines} />

//               <span>Resume</span>
//             </motion.a>
//           </motion.div>
//         </div>

//         {/* =========================================
//             RIGHT SIDE TERMINAL
//         ========================================= */}
//         <motion.div
//           custom={6}
//           initial="hidden"
//           animate="visible"
//           variants={FADE_UP_VARIANTS}
//           className="flex justify-center lg:justify-end"
//         >
//           <div className="relative mt-30">
//             <div className="absolute inset-0 bg-[#E24C60] blur-[200px] " />

//             {/* Terminal */}
//             <div className="relative w-110 h-110 rounded-[30px] border border-white/10 bg-[#0c0c0d]/95 backdrop-blur-xl p-8 shadow-[0_30px_120px_rgba(0,0,0,0.9)]">
//               <div className="flex items-center gap-2 mb-5">
//                 <span className="w-4 h-4 rounded-full bg-red-500" />
//                 <span className="w-4 h-4 rounded-full bg-yellow-500" />
//                 <span className="w-4 h-4 rounded-full bg-green-500" />

//                 <span className="text-zinc-600 text-base ml-4">
//                   ~/pintu-kumar/justkmr
//                 </span>
//               </div>

//               {/* Terminal Commands */}
//               <div className="space-y-8 font-mono text-[15px]">
//                 <div>
//                   <p className="text-amber-400">$ whoami</p>

//                   <div className="flex items-center gap-2  pl-4 text-emerald-400">
//                     <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

//                     <span> Pintu Kumar</span>
//                   </div>
//                 </div>

//                 <div>
//                   <p className="text-amber-400">$ cat role.txt</p>

//                   <div className="flex items-center gap-2  pl-4 text-cyan-400">
//                     <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />

//                     <span> Full Stack Developer</span>
//                   </div>
//                 </div>

//                 <div>
//                   <p className="text-amber-400">$ cat focus.txt</p>

//                   <div className="flex items-center gap-2  pl-4 text-[#6bd02f]">
//                     <span className="w-2 h-2 rounded-full bg-[#6bd02f] animate-pulse" />

//                     <span> MERN Stack • Next.js • TypeScript</span>
//                   </div>
//                 </div>

//                 <div>
//                   <p className="text-amber-400">$ echo $ STATUS</p>

//                   <div className="flex items-center gap-2  pl-4 text-emerald-400">
//                     <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

//                     <span>Ready to build</span>
//                   </div>

//                   <div className=" mt-4 left-8 right-8 border-t border-white/8  flex items-center justify-between text-sm text-zinc-600">
//                     <span className="mt-5 text-base">• latest_projects</span>

//                     <a
//                       href="#projects"
//                       className="text-amber-400 hover:text-amber-300 transition-colors mt-5 "
//                     >
//                       View All →
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion, Variants } from "framer-motion";
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
          {/* Badge */}
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
            className="text-zinc-500 text-2xl font-medium"
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
                  {/* <div className="inline-block relative">
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
                  </div> */}

                  <div className="inline-block relative">
                    {typeof window !== "undefined" && (
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
                    )}
                  </div>
                </h2>
              </div>
            </div>
          </motion.div>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={FADE_UP_VARIANTS}
            className="mt-5 text-zinc-400 text-xl leading-relaxed max-w-2xl"
          >
            <span className="text-[#E24C60] font-semibold">
              Computer Science Undergraduate{" "}
            </span>
            focused on building scalable and visually immersive web experiences
            using{" "}
            <span className="text-[#E24C60] font-semibold">
              MongoDB, Express.js, React, and Next.js.
            </span>{" "}
            Blending modern UI craftsmanship with performance-driven engineering
            to create fast, interactive, and production-ready digital products.
          </motion.p>

          {/* Action Buttons (🌟 FIXED: Handled with pure HTML SVGs) */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={FADE_UP_VARIANTS}
            className="flex flex-wrap gap-4 mt-5"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-[#E24C60] hover:bg-[#cf4054] text-white px-8 py-4 rounded-[12px] font-semibold flex items-center gap-2 transition-all shadow-[0_10px_40px_rgba(226,76,96,0.3)]"
            >
              <span>View Projects</span>
              <svg
                className="w-4 h-4 fill-current transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 512 512"
              >
                <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM281 385c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l71-71L120 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l198.1 0-71-71c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L401 239c9.4 9.4 9.4 24.6 0 33.9L281 385z" />
              </svg>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="border border-white/10 bg-white/3 hover:bg-white/5 text-white px-8 py-4 rounded-[12px] font-semibold flex items-center gap-2 transition-all "
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <span>Contact Me</span>
            </motion.a>

            <motion.a
              href="#resume"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="border border-white/10 bg-white/3 hover:bg-white/5 text-white px-8 py-4 rounded-[12px] font-semibold flex items-center gap-2 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 384 512">
                <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
              </svg>
              <span>Resume</span>
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT SIDE TERMINAL */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={FADE_UP_VARIANTS}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative mt-30">
            <div className="absolute inset-0 bg-[#E24C60] blur-[200px] " />

            <div className="relative w-110 h-110 rounded-[30px] border border-white/10 bg-[#0c0c0d]/95 backdrop-blur-xl p-8 shadow-[0_30px_120px_rgba(0,0,0,0.9)]">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-4 h-4 rounded-full bg-red-500" />
                <span className="w-4 h-4 rounded-full bg-yellow-500" />
                <span className="w-4 h-4 rounded-full bg-green-500" />
                <span className="text-zinc-600 text-base ml-4">
                  ~/pintu-kumar/justkmr
                </span>
              </div>

              <div className="space-y-8 font-mono text-[15px]">
                <div>
                  <p className="text-amber-400">$ whoami</p>
                  <div className="flex items-center gap-2 pl-4 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span> Pintu Kumar</span>
                  </div>
                </div>

                <div>
                  <p className="text-amber-400">$ cat role.txt</p>
                  <div className="flex items-center gap-2 pl-4 text-cyan-400">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    <span> Full Stack Developer</span>
                  </div>
                </div>

                <div>
                  <p className="text-amber-400">$ cat focus.txt</p>
                  <div className="flex items-center gap-2 pl-4 text-[#6bd02f]">
                    <span className="w-2 h-2 rounded-full bg-[#6bd02f] animate-pulse" />
                    <span> MERN Stack • Next.js • TypeScript</span>
                  </div>
                </div>

                <div>
                  <p className="text-amber-400">$ echo $STATUS</p>
                  <div className="flex items-center gap-2 pl-4 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Ready to build</span>
                  </div>

                  <div className=" mt-4 left-8 right-8 border-t border-white/8 flex items-center justify-between text-sm text-zinc-600">
                    <span className="mt-5 text-base">• latest_projects</span>
                    <a
                      href="#projects"
                      className="text-amber-400 hover:text-amber-300 transition-colors mt-5 "
                    >
                      View All →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
