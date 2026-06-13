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
//               sizes="56px"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div className="hidden md:flex  flex-col font-mono text-left  select-none">
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
//                 className={`relative px-4 py-2.5 text-[13px] font-serif tracking-wider uppercase transition-colors duration-300 rounded-full ${
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

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faXmark,
  faArrowUpRightFromSquare,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

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
  stiffness: 500,
  damping: 32,
  mass: 0.2,
} as const;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("Home");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -45% 0px", // Viewport area coverage balance
      threshold: [0, 0.1, 0.2],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchedLink = NAV_LINKS.find(
            (link) =>
              link.href.toLowerCase() === `#${entry.target.id.toLowerCase()}`,
          );
          if (matchedLink) {
            // Instant execution frame request
            requestAnimationFrame(() => {
              setActiveSection(matchedLink.name);
            });
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    NAV_LINKS.forEach((link) => {
      const id = link.href.replace("#", "");
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Fallback tracker line matrix
    const handleFallbackScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const link of NAV_LINKS) {
        const id = link.href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (activeSection !== link.name) {
              requestAnimationFrame(() => {
                setActiveSection(link.name);
              });
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleFallbackScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleFallbackScroll);
    };
  }, [activeSection]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavigation = useCallback((sectionName: string) => {
    setActiveSection(sectionName);
    setIsOpen(false);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center p-4 md:p-6 pointer-events-none isolation-isolate">
      <header className="w-full max-w-7xl pointer-events-auto flex items-center justify-between bg-[#0b0c0e]/60 backdrop-blur-2xl border border-white/5 rounded-[24px] p-2 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.05)] relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#E24C60]/2 to-transparent opacity-40 pointer-events-none" />

        <div className="flex items-center gap-4.5 pr-5 pl-3 border-r border-red-600/40 py-1.5 h-full">
          <div className="relative w-15 h-15 rounded-full overflow-hidden border border-[#E24C60]/40 bg-[#141517] shadow-[0_0_15px_rgba(226,76,96,0.1)]">
            <Image
              src="/Sajan.jpeg"
              alt="logo"
              fill
              sizes="56px"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="hidden md:flex  flex-col font-mono text-left  select-none">
            <span className="text-[20px] font-bold text-white/90 tracking-wide">
              Pintu Kumar
            </span>
            <span className="text-[10px] mt-1 text-[#E24C60] uppercase tracking-wider font-semibold">
              Full Stack Engineer
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-1 h-full px-4 relative">
          {NAV_LINKS.map((link, index) => {
            const isActive = activeSection === link.name;
            const isHovered = hoveredIndex === index;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2.5 text-[13px] font-serif tracking-wider uppercase transition-colors duration-300 rounded-full ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-500 hover:text-zinc-200"
                }`}
                onClick={() => handleNavigation(link.name)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* 🔴 FORCE CONTENT VISIBILITY: Isko z-10 par lock kiya taaki text pill ke upar bright rahe */}
                <span className="relative z-10 pointer-events-none">
                  {link.name}
                </span>

                {/* 🔴 FIXED RENDERING: AnimatePresence layoutId synchronization */}
                {isActive && (
                  <motion.span
                    className="absolute inset-0 bg-[#E24C60] rounded-full z-0 shadow-[0_0_25px_8px_rgba(226,76,96,0.3),inset_0_1px_1px_rgba(255,255,255,0.2)] border border-[#E24C60]/50"
                    layoutId="cyberActivePill"
                    transition={SPRING_TRANSITION}
                    initial={false} // Dynamic animation sync on render layout locks
                  />
                )}

                {isHovered && !isActive && (
                  <motion.span
                    className="absolute inset-0 bg-white/3 border border-white/6 rounded-full"
                    layoutId="cyberHoverPill"
                    transition={SPRING_TRANSITION}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 pl-4 border-l border-red-600/40 py-1.5 h-full">
          <div className="hidden md:flex items-center gap-2 bg-[#E24C60]/8 border border-[#E24C60]/20 p-1.5 rounded-full shadow-[0_0_15px_rgba(226,76,96,0.05)]">
            {[
              { icon: faGithub, url: "https://github.com/justkmr" },
              {
                icon: faLinkedin,
                url: "https://www.linkedin.com/in/pintu-kumar-12x",
              },
              { icon: faInstagram, url: "https://instagram.com/babu_sajan_12" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center text-zinc-500 hover:text-[#E24C60] transition-colors duration-200"
                whileHover={{ scale: 1.12, y: -1 }}
                transition={SPRING_TRANSITION}
              >
                <FontAwesomeIcon icon={social.icon} className="text-[20px]" />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            className="hidden md:flex bg-linear-to-b from-[#E24C60] to-[#c73b4e] text-white font-mono text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full items-center gap-2.5 shadow-[0_8px_25px_rgba(226,76,96,0.25),inset_0_1px_0_rgba(255,255,255,0.2)] pointer-events-auto border border-[#E24C60]/30"
            whileHover={{
              scale: 1.03,
              filter: "brightness(1.1)",
            }}
            transition={SPRING_TRANSITION}
          >
            <span>Let&apos;s Talk</span>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="text-[10px] opacity-80"
            />
          </motion.a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-zinc-400 w-10 h-10 rounded-[13px] border border-white/6 flex items-center justify-center bg-white/2 hover:bg-white/5 hover:text-white transition-colors"
          >
            <FontAwesomeIcon
              icon={isOpen ? faXmark : faBars}
              className="text-base"
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden pointer-events-auto"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#0a0a0c] border-l border-white/5 z-50 lg:hidden p-6 flex flex-col justify-between font-mono pointer-events-auto shadow-[-20px_0_60px_rgba(0,0,0,0.9)]"
            >
              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between border-b border-white/4 pb-5">
                  <div className="flex flex-col text-left">
                    <span className="text-xl font-semibold tracking-wider text-white uppercase">
                      Navigation
                    </span>
                    <span className="text-[12.5px] mt-1.5 italic text-zinc-500 uppercase tracking-wider">
                      System Core Routing
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-11 h-11 rounded-[13px] border border-red-600/40 flex items-center justify-center text-zinc-400 bg-white/1 hover:text-white transition-colors"
                  >
                    <FontAwesomeIcon icon={faXmark} className="text-xl" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2.5">
                  {NAV_LINKS.map((link) => {
                    const isActive = activeSection === link.name;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => handleNavigation(link.name)}
                        className={`group w-full flex items-center justify-between p-6 rounded-[16px] border transition-all duration-300 ${
                          isActive
                            ? "bg-[#E24C60]/10 border-[#E24C60]/30 text-white shadow-[0_0_20px_rgba(226,76,96,0.1)]"
                            : "bg-white/1 border-white/2 text-zinc-500 hover:bg-white/6 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isActive ? "bg-[#E24C60] scale-125 shadow-[0_0_8px_#E24C60]" : "bg-zinc-700"}`}
                          />
                          <span className="text-xs font-semibold tracking-widest uppercase">
                            {link.name}
                          </span>
                        </div>
                        <motion.span
                          className={`text-[13px] transition-transform duration-300 ${
                            isActive
                              ? "text-[#E24C60] translate-x-0"
                              : "text-zinc-600 group-hover:translate-x-1"
                          }`}
                        >
                          <FontAwesomeIcon icon={faArrowRight} />
                        </motion.span>
                      </a>
                    );
                  })}
                </nav>
              </div>

              <div className="flex flex-col gap-4 border-t border-white/12 pt-5 mt-6">
                <span className="text-[12px] text-zinc-600 text-left uppercase tracking-widest font-bold">
                  Terminal Links
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://github.com/justkmr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" group flex items-center justify-center gap-2 py-3 text-xs rounded-[12px] bg-white/1 border border-white/3 text-zinc-400 hover:text-white hover:border-white/10 transition-all"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-xl text-zinc-500 group-hover:text-white"
                    />
                    <span className="text-[13px] font-medium tracking-wider">
                      GITHUB
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pintu-kumar-12x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" group flex items-center justify-center gap-2 py-3 text-xs rounded-[12px] bg-white/1 border border-white/3 text-zinc-400 hover:text-white hover:border-white/10 transition-all"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-xl text-zinc-500 group-hover:text-white"
                    />
                    <span className="text-[13px] font-medium tracking-wider">
                      LINKEDIN
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
