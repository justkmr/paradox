// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Preloader({ onComplete }: { onComplete: () => void }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount((prev) => {
//         if (prev >= 100) {
//           clearInterval(timer);
//           setTimeout(() => {
//             onComplete();
//           }, 400);
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 20);

//     return () => clearInterval(timer);
//   }, [onComplete]);

//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.6, ease: "easeInOut" }}
//       className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#080808] font-mono select-none"
//     >
//       <div className="flex flex-col items-center gap-4">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-white font-bold tracking-widest text-sm uppercase"
//         >
//           Initializing <span className="text-[#E24C60]">System Core</span>...
//         </motion.div>

//         <div className="text-4xl md:text-6xl font-black text-white tracking-tighter">
//           {count}
//           <span className="text-[#E24C60]">%</span>
//         </div>

//         <div className="w-48 h-[2px] bg-white/[0.06] relative overflow-hidden rounded-full mt-2">
//           <motion.div
//             className="absolute top-0 left-0 h-full bg-[#E24C60]"
//             animate={{ width: `${count}%` }}
//             transition={{ ease: "easeOut" }}
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Preloader({ onComplete }: { onComplete: () => void }) {
//   const [percent, setPercent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPercent((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           setTimeout(() => onComplete(), 700);
//           return 100;
//         }
//         // Random tech jitter increments for realistic loading
//         const next = prev + Math.floor(Math.random() * 4) + 1;
//         return next > 100 ? 100 : next;
//       });
//     }, 40);

//     return () => clearInterval(interval);
//   }, [onComplete]);

//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       exit={{
//         opacity: 0,
//         scale: 1.3,
//         filter: "blur(20px) brightness(2)",
//       }}
//       transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
//       className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#040405] font-mono select-none overflow-hidden"
//     >
//       {/* 🔮 Background Deep Tech Ambience */}
//       <div className="absolute inset-0 bg-[radial-gradient(#ffffff01_1px,transparent_1px)] [background-size:20px_20px]" />

//       {/* Dynamic Background Pulse Wave */}
//       <motion.div
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.1, 0.2, 0.1],
//         }}
//         transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//         className="absolute w-[500px] h-[500px] bg-[#E24C60]/5 rounded-full blur-[120px]"
//       />

//       {/* 🚀 THE REACTOR INTERFACE CORE */}
//       <div className="relative flex items-center justify-center w-80 h-80">
//         {/* Outer Tech Ring with Rotating Dash Patches */}
//         <motion.svg
//           animate={{ rotate: 360 }}
//           transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
//           className="absolute w-full h-full text-zinc-800"
//           viewBox="0 0 100 100"
//         >
//           <circle
//             cx="50"
//             cy="50"
//             r="46"
//             stroke="currentColor"
//             strokeWidth="0.5"
//             fill="none"
//             strokeDasharray="4 8 12 4"
//           />
//         </motion.svg>

//         {/* Inner Active Matrix Crimson Ring */}
//         <motion.svg
//           animate={{ rotate: -360 }}
//           transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
//           className="absolute w-[85%] h-[85%] text-[#E24C60]"
//           viewBox="0 0 100 100"
//         >
//           <motion.circle
//             cx="50"
//             cy="50"
//             r="44"
//             stroke="currentColor"
//             strokeWidth="1.5"
//             fill="none"
//             strokeDasharray="100"
//             initial={{ strokeDashoffset: 100 }}
//             animate={{ strokeDashoffset: 100 - percent }}
//             className="shadow-[0_0_20px_#E24C60]"
//           />
//         </motion.svg>

//         {/* Micro-Dot Satellites Orbiting */}
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
//           className="absolute w-[75%] h-[75%] border border-dashed border-white/5 rounded-full"
//         >
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#E24C60] rounded-full shadow-[0_0_10px_#E24C60]" />
//         </motion.div>

//         {/* Central Pure HUD Stats Display */}
//         <div className="absolute flex flex-col items-center justify-center text-center">
//           {/* Futuristic Micro Tag */}
//           <motion.span
//             animate={{ opacity: [0.4, 1, 0.4] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//             className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 font-black mb-1"
//           >
//             SYS_CORE_LOAD
//           </motion.span>

//           {/* Huge Clean Counter */}
//           <div className="text-5xl md:text-6xl font-black text-white tracking-tighter relative font-mono pl-3">
//             {percent}
//             <span className="text-[#E24C60] text-lg font-bold absolute top-1 -right-4">
//               %
//             </span>
//           </div>

//           {/* Glitch Status Message */}
//           <div className="text-[10px] uppercase tracking-widest text-zinc-400 mt-2 h-4 flex items-center gap-1.5">
//             <span className="w-1 h-1 bg-emerald-500 rounded-full animate-ping" />
//             <span>{percent === 100 ? "READY" : "STABILIZING..."}</span>
//           </div>
//         </div>
//       </div>

//       {/* 🎛️ Bottom Calibration Framework Metadata */}
//       <div className="absolute bottom-12 flex flex-col items-center gap-1.5">
//         <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
//         <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-bold">
//           PINTU KUMAR // ARCHITECT
//         </span>
//       </div>
//     </motion.div>
//   );
// }

// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Preloader({ onComplete }: { onComplete: () => void }) {
//   const [activeToken, setActiveToken] = useState(0);

//   const subTokens = [
//     "SYS.ALLOCATE_NODE",
//     "HYDRATE.MERN_ENGINE",
//     "STREAM.NEXT_15_ACTIVE",
//     "HANDSHAKE.PORT_3000",
//     "SYSTEM.READY",
//   ];

//   useEffect(() => {
//     // High frequency staggered steps matching elite state machines
//     const interval = setInterval(() => {
//       setActiveToken((prev) => {
//         if (prev >= subTokens.length - 1) {
//           clearInterval(interval);
//           setTimeout(() => onComplete(), 500); // Premium easing delay
//           return subTokens.length - 1;
//         }
//         return prev + 1;
//       });
//     }, 450);

//     return () => clearInterval(interval);
//   }, [onComplete, subTokens.length]);

//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       exit={{
//         y: "-100%",
//         transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1] }, // Professional Shutter Easing Curve
//       }}
//       className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#060608] font-mono overflow-hidden select-none"
//     >
//       {/* Micro-Grid Performance Layer */}
//       <div className="absolute inset-0 bg-[#08080a] opacity-[0.4] bg-[linear-gradient(to_right,#111319_1px,transparent_1px),linear-gradient(to_bottom,#111319_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

//       {/* 🚀 ELITE MONOLITH FRAME SYSTEM */}
//       <div className="relative flex flex-col items-start w-full max-w-sm px-6">
//         {/* Top Minimalist Running Hash Track */}
//         <div className="w-full flex items-center justify-between mb-8 border-b border-white/[0.04] pb-3 text-[10px] tracking-[0.3em] text-zinc-600 font-bold">
//           <span>INITIALIZE SEQUENCE</span>
//           <span className="text-[#E24C60] font-mono animate-pulse">
//             0{activeToken + 1} / 05
//           </span>
//         </div>

//         {/* Central Masked Content Wrapper */}
//         <div className="h-14 overflow-hidden relative w-full flex items-center">
//           <AnimatePresence mode="popLayout">
//             <motion.div
//               key={activeToken}
//               initial={{ y: 24, opacity: 0, filter: "blur(4px)" }}
//               animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
//               exit={{ y: -24, opacity: 0, filter: "blur(4px)" }}
//               transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
//               className="text-lg md:text-xl font-black text-white tracking-widest font-mono flex items-center gap-3 uppercase w-full"
//             >
//               <span className="w-1.5 h-4 bg-[#E24C60] shadow-[0_0_12px_#E24C60]" />
//               {subTokens[activeToken]}
//             </motion.div>
//           </AnimatePresence>
//         </div>

//         {/* Monolithic Segmented Track Metrics */}
//         <div className="grid grid-cols-5 gap-1.5 w-full mt-6">
//           {[...Array(5)].map((_, index) => (
//             <div
//               key={index}
//               className="h-[3px] bg-white/[0.03] rounded-full relative overflow-hidden"
//             >
//               {index <= activeToken && (
//                 <motion.div
//                   initial={{ width: "0%" }}
//                   animate={{ width: "100%" }}
//                   transition={{ duration: 0.4, ease: "easeOut" }}
//                   className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#c73b4e] to-[#E24C60] shadow-[0_0_8px_#E24C60]"
//                 />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Ambient Subtle Back-Glow Tracking */}
//         <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-[#E24C60]/3 rounded-full blur-[90px] pointer-events-none" />
//       </div>

//       {/* Micro Calibration Footer */}
//       <div className="absolute bottom-10 text-[9px] uppercase tracking-[0.4em] text-zinc-600 font-bold flex items-center gap-2">
//         <span>PK_CORE_NODE</span>
//         <span className="w-1 h-1 rounded-full bg-white/10" />
//         <span>SECURE HANDSHAKE active</span>
//       </div>
//     </motion.div>
//   );
// }

// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Preloader({ onComplete }: { onComplete: () => void }) {
//   const [index, setIndex] = useState(0);
//   const [progress, setProgress] = useState(0);

//   const tokens = [
//     "AUTHENTICATING ENGINE",
//     "STRUCTURING CORE PATHS",
//     "SYNCHRONIZING RECON NODES",
//     "HYDRATING INTERFACE CORE",
//     "SYSTEM OPERATIONAL",
//   ];

//   useEffect(() => {
//     // Speed multiplier logic for fluid progress monitoring
//     const progressTimer = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(progressTimer);
//           return 100;
//         }
//         return prev + 1;
//       });
//     }, 20);

//     return () => clearInterval(progressTimer);
//   }, []);

//   useEffect(() => {
//     // Dynamic text sequence loop mapping
//     const tokenTimer = setInterval(() => {
//       setIndex((prev) => {
//         if (prev < tokens.length - 1) return prev + 1;
//         clearInterval(tokenTimer);
//         return prev;
//       });
//     }, 550);

//     return () => clearInterval(tokenTimer);
//   }, [tokens.length]);

//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       exit={{
//         y: "-100%",
//         transition: {
//           duration: 0.85,
//           ease: [0.86, 0, 0.07, 1], // Exclusive Liquid Shutter Curve
//         },
//       }}
//       className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050506] font-mono overflow-hidden select-none"
//     >
//       {/* Premium Cinematic Background Layer Matrix */}
//       <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_right,#e24c6012_1px,transparent_1px),linear-gradient(to_bottom,#e24c6012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
//       <div className="absolute w-[400px] h-[400px] bg-[#E24C60]/3 rounded-full blur-[130px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

//       {/* 🚀 THE MONOLITHIC MINIMAL HUD TRACK */}
//       <div className="relative flex flex-col items-start w-full max-w-sm px-6">
//         {/* Progress Metric Tracker Box */}
//         <div className="w-full flex items-end justify-between mb-4">
//           <div className="flex flex-col gap-1 text-left">
//             <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-600 font-bold">
//               BOOT SEQUENCE
//             </span>

//             {/* Masked Content Slide System */}
//             <div className="h-6 overflow-hidden relative w-56 flex items-center">
//               <AnimatePresence mode="popLayout">
//                 <motion.span
//                   key={index}
//                   initial={{ y: 16, opacity: 0 }}
//                   animate={{ y: 0, opacity: 1 }}
//                   exit={{ y: -16, opacity: 0 }}
//                   transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
//                   className="text-xs font-black text-white tracking-widest font-mono uppercase block whitespace-nowrap"
//                 >
//                   <span className="text-[#E24C60] mr-2">/</span> {tokens[index]}
//                 </motion.span>
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Micro Percent Counter */}
//           <div className="text-3xl font-black text-white tracking-tighter font-mono flex items-start">
//             {progress}
//             <span className="text-[#E24C60] text-xs font-bold mt-1 ml-0.5">
//               %
//             </span>
//           </div>
//         </div>

//         {/* Seamless Premium Fluid Progress Bar Track */}
//         <div className="w-full h-[2px] bg-white/[0.03] rounded-full relative overflow-hidden shadow-inner">
//           <motion.div
//             className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#c73b4e] to-[#E24C60] shadow-[0_0_15px_#E24C60]"
//             animate={{ width: `${progress}%` }}
//             transition={{ ease: "easeOut" }}
//             onAnimationComplete={() => {
//               if (progress === 100) {
//                 setTimeout(() => onComplete(), 400); // Trigger system ready state
//               }
//             }}
//           />
//         </div>
//       </div>

//       {/* Micro Metrics Bottom Grid */}
//       <div className="absolute bottom-12 left-6 right-6 flex items-center justify-between text-[9px] text-zinc-600 tracking-[0.25em] font-bold border-t border-white/[0.02] pt-4 max-w-7xl mx-auto w-full px-4">
//         <span>CORE // NODE // STABLE</span>
//         <span className="text-[#E24C60]/50 font-mono">PINTU KUMAR</span>
//       </div>
//     </motion.div>
//   );
// }

// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Preloader({ onComplete }: { onComplete: () => void }) {
//   const [index, setIndex] = useState(0);
//   const [progress, setProgress] = useState(0);

//   const steps = [
//     { code: "0x01_BOOT", label: "VERIFYING V8 MATRIX" },
//     { code: "0x02_HYDRATE", label: "STABILIZING CORE NODES" },
//     { code: "0x03_ROUTE", label: "MAPPING NEXT.js INTERFACE" },
//     { code: "0x04_HANDSHAKE", label: "PROXY SHUTTLE ACTIVE" },
//     { code: "0x05_READY", label: "SYSTEM OPERATIONAL" },
//   ];

//   useEffect(() => {
//     // 🌟 Standard state loop counter logic
//     const progressTimer = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(progressTimer);
//           return 100;
//         }
//         const rand = Math.floor(Math.random() * 4) + 1; // Quick loading speed
//         return Math.min(prev + rand, 100);
//       });
//     }, 20);

//     return () => clearInterval(progressTimer);
//   }, []);

//   useEffect(() => {
//     // Sync steps dynamically based on current progress
//     const stepRatio = 100 / steps.length;
//     const currentStep = Math.floor(progress / stepRatio);
//     setIndex(Math.min(currentStep, steps.length - 1));

//     // 🌟 PERFECT SYNTAX FIX: Trigger exit cleanly from the hook when 100% reached
//     if (progress === 100) {
//       const exitTimeout = setTimeout(() => {
//         onComplete();
//       }, 500); // 500ms hold for final green success screen state
//       return () => clearTimeout(exitTimeout);
//     }
//   }, [progress, steps.length, onComplete]);

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-transparent font-mono overflow-hidden select-none">
//       {/* 🌟 KINETIC SPLIT BACKDROP PANELS */}
//       {/* Top Shutter Sheet */}
//       <motion.div
//         initial={{ y: "0%" }}
//         exit={{ y: "-100%" }}
//         transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1] }}
//         className="absolute top-0 left-0 w-full h-1/2 bg-[#050506] border-b border-white/[0.02]"
//       />
//       {/* Bottom Shutter Sheet */}
//       <motion.div
//         initial={{ y: "0%" }}
//         exit={{ y: "100%" }}
//         transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1] }}
//         className="absolute bottom-0 left-0 w-full h-1/2 bg-[#050506] border-t border-white/[0.02]"
//       />

//       {/* Grid Network Decoration Overlay */}
//       <motion.div
//         exit={{ opacity: 0, transition: { duration: 0.3 } }}
//         className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(#e24c6015_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none z-10"
//       />

//       {/* 🚀 THE TRANSFORMING HUD BOX */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         exit={{ opacity: 0, scale: 1.08, filter: "blur(8px)" }}
//         transition={{ duration: 0.5, ease: "easeInOut" }}
//         className="relative z-20 w-full max-w-sm px-6 flex flex-col items-center"
//       >
//         <motion.div
//           animate={{
//             borderColor: progress === 100 ? "#10b981" : "#E24C60",
//             boxShadow:
//               progress === 100
//                 ? "0 0 40px rgba(16,185,129,0.12)"
//                 : "0 0 30px rgba(226,76,96,0.06)",
//           }}
//           className="w-full bg-[#0a0b0e]/95 backdrop-blur-2xl border border-[#E24C60]/30 rounded-2xl p-5 relative overflow-hidden flex flex-col gap-5 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)]"
//         >
//           {/* Box Header Identifier */}
//           <div className="w-full flex items-center justify-between text-[9px] font-black tracking-[0.25em] text-zinc-600">
//             <span>CORE NODE VERIFY</span>
//             <span className="text-[#E24C60] font-mono">
//               {steps[index].code}
//             </span>
//           </div>

//           {/* Central Horizontal Slider Mask */}
//           <div className="h-7 overflow-hidden relative w-full flex items-center justify-start border-l-2 border-[#E24C60] pl-3">
//             <AnimatePresence mode="popLayout">
//               <motion.div
//                 key={index}
//                 initial={{ x: -20, opacity: 0, filter: "blur(4px)" }}
//                 animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
//                 exit={{ x: 20, opacity: 0, filter: "blur(4px)" }}
//                 transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
//                 className="text-xs md:text-[13px] font-black text-white tracking-[0.18em] font-mono uppercase whitespace-nowrap"
//               >
//                 {steps[index].label}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Dynamic Segment Dots & Counter */}
//           <div className="w-full flex items-center justify-between border-t border-white/[0.03] pt-3.5">
//             <div className="flex items-center gap-1">
//               {[...Array(5)].map((_, i) => (
//                 <div
//                   key={i}
//                   style={{
//                     backgroundColor:
//                       i <= index
//                         ? progress === 100
//                           ? "#10b981"
//                           : "#E24C60"
//                         : "rgba(255,255,255,0.04)",
//                   }}
//                   className="w-4 h-[3px] rounded-full transition-colors duration-300"
//                 />
//               ))}
//             </div>

//             {/* Micro Percent Numbers */}
//             <div className="text-xl font-black text-white font-mono tracking-tighter flex items-start">
//               {progress}
//               <span
//                 style={{ color: progress === 100 ? "#10b981" : "#E24C60" }}
//                 className="text-[10px] font-bold ml-0.5 mt-0.5 transition-colors duration-300"
//               >
//                 %
//               </span>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Preloader({ onComplete }: { onComplete: () => void }) {
//   const [index, setIndex] = useState(0);
//   const [progress, setProgress] = useState(0);

//   const steps = [
//     { code: "SYS_BOOT_0x01", label: "VERIFYING INTERACTION MATRIX" },
//     { code: "SYS_HYDRATE_0x02", label: "STABILIZING SYSTEM CORE NODES" },
//     { code: "SYS_ROUTE_0x03", label: "MAPPING NEXT.JS DYNAMIC PIPELINES" },
//     { code: "SYS_PROXY_0x04", label: "PROXY SHUTTLE NODE HANDSHAKE" },
//     { code: "SYS_READY_0x05", label: "PORTFOLIO CORE IS OPERATIONAL" },
//   ];

//   useEffect(() => {
//     // Premium mathematical counter progression
//     const progressTimer = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(progressTimer);
//           return 100;
//         }
//         // Jitter increment for organic realistic compile feel
//         const rand = Math.floor(Math.random() * 3) + 1;
//         return Math.min(prev + rand, 100);
//       });
//     }, 18); // Super smooth and snappy pacing

//     return () => clearInterval(progressTimer);
//   }, []);

//   useEffect(() => {
//     // Dynamic index cycle sync with progress thresholds
//     const stepRatio = 100 / steps.length;
//     const currentStep = Math.floor(progress / stepRatio);
//     setIndex(Math.min(currentStep, steps.length - 1));

//     if (progress === 100) {
//       const exitTimeout = setTimeout(() => {
//         onComplete();
//       }, 600); // Premium hold for success state display
//       return () => clearTimeout(exitTimeout);
//     }
//   }, [progress, steps.length, onComplete]);

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-transparent font-mono overflow-hidden select-none">
//       {/* 🌟 KINETIC SPLIT BACKGROUND PANEL INTERCEPTION */}
//       {/* Top Shutter Sheet */}
//       <motion.div
//         initial={{ y: "0%" }}
//         exit={{ y: "-100%" }}
//         transition={{ duration: 0.95, ease: [0.86, 0, 0.07, 1] }}
//         className="absolute top-0 left-0  w-full h-1/2 bg-[#040405] border-b border-white/[0.02]"
//       />
//       {/* Bottom Shutter Sheet */}
//       <motion.div
//         initial={{ y: "0%" }}
//         exit={{ y: "100%" }}
//         transition={{ duration: 0.95, ease: [0.86, 0, 0.07, 1] }}
//         className="absolute bottom-0  left-0 w-full h-1/2 bg-[#040405] border-t border-white/[0.02]"
//       />

//       {/* Cyber ambient grid backdrop */}
//       <motion.div
//         exit={{ opacity: 0, transition: { duration: 0.3 } }}
//         className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#e24c6015_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none z-10 "
//       />

//       {/* 🚀 POLISHED & UPSCALED MONOLITH ENGINE CARD */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95, y: 15 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
//         transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
//         className="relative z-20 w-full  max-w-xl px-8 flex flex-col items-center"
//       >
//         {/* Transforming Main Frame Container */}
//         <motion.div
//           animate={{
//             borderColor: progress === 100 ? "#10b981" : "#E24C60",
//             boxShadow:
//               progress === 100
//                 ? "0 0 50px rgba(16,185,129,0.15)"
//                 : "0 0 40px rgba(226,76,96,0.08)",
//           }}
//           className="w-full rounded-[20px] bg-[#08090c]/95 backdrop-blur-3xl border border-[#E24C60]/30  p-7 relative overflow-hidden flex flex-col gap-6 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.03)]"
//         >
//           {/* Top Running Track Details */}
//           <div className="w-full flex items-center justify-between text-[10px] font-black tracking-[0.3em] text-zinc-500">
//             <span className="flex items-center gap-2">
//               <span
//                 className={`w-1.5 h-1.5 rounded-full ${progress === 100 ? "bg-[#10b981]" : "bg-[#E24C60] animate-pulse"}`}
//               />
//               CORE NODE TRACE
//             </span>
//             <span className="text-[#E24C60] font-mono tracking-widest">
//               {steps[index].code}
//             </span>
//           </div>

//           {/* Central Masked Text Field Slider */}
//           <div className="h-8 overflow-hidden relative w-full flex items-center justify-start border-l-2 border-[#E24C60] pl-4 bg-white/[0.01] rounded-r-md">
//             <AnimatePresence mode="popLayout">
//               <motion.div
//                 key={index}
//                 initial={{ x: -25, opacity: 0, filter: "blur(6px)" }}
//                 animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
//                 exit={{ x: 25, opacity: 0, filter: "blur(6px)" }}
//                 transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
//                 className="text-xs md:text-sm font-black text-white tracking-[0.2em] font-mono uppercase whitespace-nowrap"
//               >
//                 {steps[index].label}
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Segment Blocks Indicator and Big Counter */}
//           <div className="w-full flex items-center justify-between border-t border-white/[0.04] pt-4.5">
//             <div className="flex items-center gap-1.5">
//               {[...Array(5)].map((_, i) => (
//                 <div
//                   key={i}
//                   style={{
//                     backgroundColor:
//                       i <= index
//                         ? progress === 100
//                           ? "#10b981"
//                           : "#E24C60"
//                         : "rgba(255,255,255,0.03)",
//                   }}
//                   className="w-6 h-[4px] rounded-full transition-colors duration-300"
//                 />
//               ))}
//             </div>

//             {/* Premium Scaled Percent Metrics */}
//             <div className="text-3xl font-black text-white font-mono tracking-tighter flex items-start">
//               {progress}
//               <span
//                 style={{ color: progress === 100 ? "#10b981" : "#E24C60" }}
//                 className="text-xs font-bold ml-0.5 mt-0.5 transition-colors duration-300"
//               >
//                 %
//               </span>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  const steps = [
    { code: "SYS_BOOT_0x01", label: "VERIFYING INTERACTION MATRIX" },
    { code: "SYS_HYDRATE_0x02", label: "STABILIZING SYSTEM CORE NODES" },
    { code: "SYS_ROUTE_0x03", label: "MAPPING NEXT.JS DYNAMIC PIPELINES" },
    { code: "SYS_PROXY_0x04", label: "PROXY SHUTTLE NODE HANDSHAKE" },
    { code: "SYS_READY_0x05", label: "PORTFOLIO CORE IS OPERATIONAL" },
  ];

  const stepRatio = 100 / steps.length;
  const currentStep = Math.floor(progress / stepRatio);
  const currentIndex = Math.min(currentStep, steps.length - 1);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        const rand = Math.floor(Math.random() * 3) + 1;
        return Math.min(prev + rand, 100);
      });
    }, 18);

    return () => clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const exitTimeout = setTimeout(() => {
        onComplete();
      }, 600);
      return () => clearTimeout(exitTimeout);
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-transparent font-mono overflow-hidden select-none">
      <motion.div
        initial={{ y: "0%" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.95, ease: [0.86, 0, 0.07, 1] }}
        className="absolute top-0 left-0 w-full h-1/2 bg-[#040405] border-b border-white/2"
      />
      <motion.div
        initial={{ y: "0%" }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.95, ease: [0.86, 0, 0.07, 1] }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-[#040405] border-t border-white/2"
      />

      <motion.div
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#e24c6015_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none z-10"
      />

      {/* 🚀 POLISHED & UPSCALED MONOLITH ENGINE CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 w-full max-w-xl px-8 flex flex-col items-center"
      >
        <motion.div
          animate={{
            borderColor: progress === 100 ? "#10b981" : "#E24C60",
            boxShadow:
              progress === 100
                ? "0 0 50px rgba(16,185,129,0.15)"
                : "0 0 40px rgba(226,76,96,0.08)",
          }}
          className="w-full bg-[#08090c]/95 backdrop-blur-3xl border border-[#E24C60]/30 rounded-[20px] p-7 relative overflow-hidden flex flex-col gap-6 shadow-[0_40px_90px_-20px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.03)]"
        >
          {/* Top Running Track Details */}
          <div className="w-full flex items-center justify-between text-[10px] font-black tracking-[0.3em] text-zinc-500">
            <span className="flex items-center gap-2">
              <span
                className={`w-1.5 h-1.5 rounded-full ${progress === 100 ? "bg-[#10b981]" : "bg-[#E24C60] animate-pulse"}`}
              />
              CORE NODE TRACE
            </span>
            <span className="text-[#E24C60] font-mono tracking-widest">
              {steps[currentIndex].code}
            </span>
          </div>

          {/* Central Masked Text Field Slider */}
          <div className="h-8 overflow-hidden relative w-full flex items-center justify-start border-l-2 border-[#E24C60] pl-4 bg-white/[0.01] rounded-r-md">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex}
                initial={{ x: -25, opacity: 0, filter: "blur(6px)" }}
                animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ x: 25, opacity: 0, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs md:text-sm font-black text-white tracking-[0.2em] font-mono uppercase whitespace-nowrap"
              >
                {steps[currentIndex].label}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Segment Blocks Indicator and Big Counter */}
          <div className="w-full flex items-center justify-between border-t border-white/[0.04] pt-4.5">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor:
                      i <= currentIndex
                        ? progress === 100
                          ? "#10b981"
                          : "#E24C60"
                        : "rgba(255,255,255,0.03)",
                  }}
                  className="w-6 h-[4px] rounded-full transition-colors duration-300"
                />
              ))}
            </div>

            {/* Premium Scaled Percent Metrics */}
            <div className="text-3xl font-black text-white font-mono tracking-tighter flex items-start">
              {progress}
              <span
                style={{ color: progress === 100 ? "#10b981" : "#E24C60" }}
                className="text-xs font-bold ml-0.5 mt-0.5 transition-colors duration-300"
              >
                %
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
