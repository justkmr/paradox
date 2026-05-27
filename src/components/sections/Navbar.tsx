// "use client";

// import { useState, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGithub,
//   faLinkedin,
//   faInstagram,
// } from "@fortawesome/free-brands-svg-icons";
// import {
//   faBars,
//   faXmark,
//   faArrowUpRightFromSquare,
//   faArrowRight,
// } from "@fortawesome/free-solid-svg-icons";

// import Image from "next/image";

// interface NavLink {
//   name: string;
//   href: string;
// }

// const NAV_LINKS: readonly NavLink[] = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Projects", href: "#projects" },
//   { name: "Tech Stack", href: "#tech-stack" },
//   { name: "Resume", href: "#resume" },
//   { name: "Contact", href: "#contact" },
// ];

// const SPRING_TRANSITION = {
//   type: "spring",
//   stiffness: 400,
//   damping: 28,
// } as const;

// export default function Navbar() {
//   const [activeSection, setActiveSection] = useState<string>("Home");
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   useEffect(() => {
//     if (isOpen) document.body.style.overflow = "hidden";
//     else document.body.style.overflow = "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [isOpen]);

//   const handleNavigation = useCallback((sectionName: string) => {
//     setActiveSection(sectionName);
//     setIsOpen(false);
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 w-full z-50 flex justify-center p-4 md:p-6 pointer-events-none isolation-isolate">
//       <header className="w-full max-w-7xl pointer-events-auto flex items-center justify-between bg-[#0b0c0e]/60 backdrop-blur-2xl border border-white/5 rounded-[24px] p-2 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.05)] relative overflow-hidden">
//         <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#E24C60]/2 to-transparent opacity-40 pointer-events-none" />

//         <div className="flex items-center gap-4.5 pr-5 pl-3 border-r border-red-600/40 py-1.5 h-full">
//           <div className="relative w-15 h-15 rounded-full overflow-hidden border border-[#E24C60]/40 bg-[#141517] shadow-[0_0_15px_rgba(226,76,96,0.1)]">
//             <Image
//               src="/Sajan.jpeg"
//               alt="logo"
//               fill
//               className="w-full h-full object-cover"
//             />
//           </div>
//           {/* 🌟 ISME BADLAO KIYA: hidden sm:flex ko hidden md:flex kiya taaki naam mobile me chhip jaye */}
//           <div className="flex flex-col font-mono text-left hidden md:flex select-none">
//             <span className="text-[20px] font-bold text-white/90 tracking-wide">
//               Pintu Kumar
//             </span>
//             <span className="text-[10px] mt-1 text-[#E24C60] uppercase tracking-wider font-semibold">
//               Full Stack Engineer
//             </span>
//           </div>
//         </div>

//         <nav className="hidden lg:flex items-center gap-1 h-full px-4 relative">
//           {NAV_LINKS.map((link, index) => {
//             const isActive = activeSection === link.name;
//             const isHovered = hoveredIndex === index;

//             return (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className={`relative px-5 py-2.5 text-xs font-mono tracking-widest uppercase transition-colors duration-300 rounded-full ${
//                   isActive
//                     ? "text-white font-semibold"
//                     : "text-zinc-500 hover:text-zinc-200"
//                 }`}
//                 onClick={() => handleNavigation(link.name)}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//               >
//                 <span className="relative z-10">{link.name}</span>

//                 {isActive && (
//                   <motion.span
//                     className="absolute inset-0 bg-[#E24C60] rounded-full z-0 shadow-[0_0_25px_8px_rgba(226,76,96,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)] border border-[#E24C60]/50"
//                     layoutId="cyberActivePill"
//                     transition={SPRING_TRANSITION}
//                   />
//                 )}

//                 {isHovered && !isActive && (
//                   <motion.span
//                     className="absolute inset-0 bg-white/3 border border-white/6 rounded-full"
//                     layoutId="cyberHoverPill"
//                     transition={SPRING_TRANSITION}
//                   />
//                 )}
//               </a>
//             );
//           })}
//         </nav>

//         <div className="flex items-center gap-4 pl-4 border-l border-red-600/40 py-1.5 h-full">
//           <div className="hidden md:flex items-center gap-2 bg-[#E24C60]/8 border border-[#E24C60]/20 p-1.5 rounded-full shadow-[0_0_15px_rgba(226,76,96,0.05)]">
//             {[
//               { icon: faGithub, url: "https://github.com/justkmr" },
//               {
//                 icon: faLinkedin,
//                 url: "https://www.linkedin.com/in/pintu-kumar-12x",
//               },
//               { icon: faInstagram, url: "https://instagram.com/babu_sajan_12" },
//             ].map((social, i) => (
//               <motion.a
//                 key={i}
//                 href={social.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-500 hover:text-[#E24C60] transition-colors duration-200"
//                 whileHover={{ scale: 1.12, y: -1 }}
//                 transition={SPRING_TRANSITION}
//               >
//                 <FontAwesomeIcon icon={social.icon} className="text-[20px]" />
//               </motion.a>
//             ))}
//           </div>

//           {/* 🌟 ISME BADLAO KIYA: Added 'hidden md:flex' taaki 'Let's Talk' button mobile me chhip jaye */}
//           <motion.a
//             href="#contact"
//             className="hidden md:flex bg-linear-to-b from-[#E24C60] to-[#c73b4e] text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full items-center gap-2.5 shadow-[0_8px_25px_rgba(226,76,96,0.25),inset_0_1px_0_rgba(255,255,255,0.2)] pointer-events-auto border border-[#E24C60]/30"
//             whileHover={{
//               scale: 1.03,
//               filter: "brightness(1.1)",
//             }}
//             transition={SPRING_TRANSITION}
//           >
//             <span>Let&apos;s Talk</span>
//             <FontAwesomeIcon
//               icon={faArrowUpRightFromSquare}
//               className="text-[10px] opacity-80"
//             />
//           </motion.a>

//           {/* Mobile Hamburg Panel Opener */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden text-zinc-400 w-10 h-10 rounded-[13px] border border-white/6 flex items-center justify-center bg-white/2 hover:bg-white/5 hover:text-white transition-colors"
//           >
//             <FontAwesomeIcon
//               icon={isOpen ? faXmark : faBars}
//               className="text-base"
//             />
//           </button>
//         </div>
//       </header>

//       <AnimatePresence>
//         {isOpen && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setIsOpen(false)}
//               className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden pointer-events-auto"
//             />

//             <motion.div
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ type: "spring", stiffness: 320, damping: 28 }}
//               className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#0a0a0c] border-l border-white/5 z-50 lg:hidden p-6 flex flex-col justify-between font-mono pointer-events-auto shadow-[-20px_0_60px_rgba(0,0,0,0.9)]"
//             >
//               <div className="flex flex-col gap-8">
//                 <div className="flex items-center justify-between border-b border-white/4 pb-5">
//                   <div className="flex flex-col text-left">
//                     <span className="text-xl font-semibold tracking-wider text-white uppercase">
//                       Navigation
//                     </span>
//                     <span className="text-[12.5px] mt-1.5 italic text-zinc-500 uppercase tracking-wider">
//                       System Core Routing
//                     </span>
//                   </div>
//                   <button
//                     onClick={() => setIsOpen(false)}
//                     className="w-11 h-11 rounded-[13px] border border-red-600/40 flex items-center justify-center text-zinc-400 bg-white/1 hover:text-white transition-colors"
//                   >
//                     <FontAwesomeIcon icon={faXmark} className="text-xl" />
//                   </button>
//                 </div>

//                 <nav className="flex flex-col gap-2.5">
//                   {NAV_LINKS.map((link) => {
//                     const isActive = activeSection === link.name;
//                     return (
//                       <a
//                         key={link.name}
//                         href={link.href}
//                         onClick={() => handleNavigation(link.name)}
//                         className={`group w-full flex items-center justify-between p-6 rounded-[16px] border transition-all duration-300 ${
//                           isActive
//                             ? "bg-[#E24C60]/10 border-[#E24C60]/30 text-white shadow-[0_0_20px_rgba(226,76,96,0.1)]"
//                             : "bg-white/1 border-white/2 text-zinc-500 hover:bg-white/6 hover:text-white"
//                         }`}
//                       >
//                         <div className="flex items-center gap-3">
//                           <div
//                             className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive ? "bg-[#E24C60] scale-125 shadow-[0_0_8px_#E24C60]" : "bg-zinc-700"}`}
//                           />
//                           <span className="text-xs font-semibold tracking-widest uppercase">
//                             {link.name}
//                           </span>
//                         </div>
//                         <motion.span
//                           className={`text-[13px] transition-transform duration-300 ${
//                             isActive
//                               ? "text-[#E24C60] translate-x-0"
//                               : "text-zinc-600 group-hover:translate-x-1"
//                           }`}
//                         >
//                           <FontAwesomeIcon icon={faArrowRight} />
//                         </motion.span>
//                       </a>
//                     );
//                   })}
//                 </nav>
//               </div>

//               <div className="flex flex-col gap-4 border-t border-white/12 pt-5 mt-6">
//                 <span className="text-[12px] text-zinc-600 text-left uppercase tracking-widest font-bold">
//                   Terminal Links
//                 </span>
//                 <div className="grid grid-cols-2 gap-3">
//                   <a
//                     href="https://github.com/justkmr"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className=" group flex items-center justify-center gap-2 py-3 text-xs rounded-[12px] bg-white/1 border border-white/3 text-zinc-400 hover:text-white hover:border-white/10 transition-all"
//                   >
//                     <FontAwesomeIcon
//                       icon={faGithub}
//                       className="text-xl text-zinc-500 group-hover:text-white"
//                     />
//                     <span className="text-[13px] font-medium tracking-wider">
//                       GITHUB
//                     </span>
//                   </a>
//                   <a
//                     href="https://www.linkedin.com/in/pintu-kumar-12x"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className=" group flex items-center justify-center gap-2 py-3 text-xs rounded-[12px] bg-white/1 border border-white/3 text-zinc-400 hover:text-white hover:border-white/10 transition-all"
//                   >
//                     <FontAwesomeIcon
//                       icon={faLinkedin}
//                       className="text-xl text-zinc-500 group-hover:text-white"
//                     />
//                     <span className="text-[13px] font-medium tracking-wider">
//                       LINKEDIN
//                     </span>
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  href: string;
}

const NAV_LINKS: readonly NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

const SPRING_TRANSITION = {
  type: "spring",
  stiffness: 400,
  damping: 28,
} as const;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("Home");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[50] transition-all duration-300 font-mono select-none bg-[#040405]/85 backdrop-blur-xl border-b border-white/[0.04] py-3.5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* BRAND LOGO */}
        <div className="text-xs font-black text-[#E24C60] tracking-[0.35em] cursor-pointer flex items-center gap-2.5 group">
          <span className="w-2 h-2 rounded-full bg-[#E24C60] shadow-[0_0_10px_#E24C60]" />
          PINTU_KUMAR
        </div>

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, idx) => {
            const isActive = activeSection === link.name;
            return (
              <button
                key={link.href}
                onClick={() => setActiveSection(link.name)}
                className={`text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300 relative py-1 ${
                  isActive ? "text-[#E24C60]" : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#E24C60]"
                    transition={SPRING_TRANSITION}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* SOCIAL NETWORKS (Pure HTML SVGs) */}
        <div className="hidden md:flex items-center gap-5 text-zinc-400">
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            <svg
              className="w-4 h-4 stroke-current fill-none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>

        {/* MOBILE HAMBURGER TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-400 hover:text-white transition-colors duration-200 z-[60] focus:outline-none"
        >
          {isOpen ? (
            /* XMark SVG */
            <svg
              className="w-5 h-5 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Bars/Hamburger SVG */
            <svg
              className="w-5 h-5 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE DRAWER OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 h-screen w-full bg-[#050506]/98 z-[55] flex flex-col pt-24 px-8 border-b border-white/5"
          >
            <div className="flex flex-col gap-6 w-full">
              {NAV_LINKS.map((link, idx) => {
                const isActive = activeSection === link.name;
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { delay: idx * 0.05 },
                    }}
                    key={link.href}
                  >
                    <button
                      onClick={() => {
                        setActiveSection(link.name);
                        setIsOpen(false);
                      }}
                      className={`text-lg uppercase tracking-[0.25em] font-black w-full text-left flex items-center justify-between group ${
                        isActive ? "text-[#E24C60]" : "text-zinc-500"
                      }`}
                    >
                      <span>{link.name}</span>
                      {/* ArrowRight SVG */}
                      <svg
                        className={`w-4 h-4 stroke-current opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ${isActive ? "opacity-100 text-[#E24C60]" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
