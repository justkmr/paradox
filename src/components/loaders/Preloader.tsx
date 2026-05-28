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
        className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#e24c6015_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none z-10"
      />

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

          <div className="h-8 overflow-hidden relative w-full flex items-center justify-start border-l-2 border-[#E24C60] pl-4 bg-gray-500/15 rounded-r-md">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentIndex}
                initial={{ x: -25, opacity: 0, filter: "blur(6px)" }}
                animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ x: 25, opacity: 0, filter: "blur(6px)" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs md:text-sm font-black text-white tracking-[0.2em] font-mono  uppercase whitespace-nowrap"
              >
                {steps[currentIndex].label}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full flex items-center justify-between border-t border-white/4 pt-4.5">
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
                  className="w-6 h-1 rounded-full transition-colors duration-300"
                />
              ))}
            </div>

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
