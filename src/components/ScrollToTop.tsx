"use client";

import { FaArrowUp } from "react-icons/fa";
import { useLenis } from "lenis/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const lenis = useLenis();

  useLenis(({ scroll }) => {
    const shouldShow = scroll > 600;

    setVisible((prev) => (prev !== shouldShow ? shouldShow : prev));
  });

  if (!visible) return null;

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={() => lenis?.scrollTo(0, { duration: 1.5 })}
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="
          fixed bottom-8 right-8 z-999999
w-14 h-14 rounded-full
bg-[#0b0b0d]/90
backdrop-blur-xl
border border-[#E24C60]/30
text-[#E24C60]
flex items-center justify-center
shadow-[0_0_30px_rgba(226,76,96,0.35)]
hover:shadow-[0_0_50px_rgba(226,76,96,0.6)]
before:absolute
before:inset-0
before:rounded-full
before:border
before:border-[#E24C60]/20
before:animate-ping
        "
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>,
    document.body,
  );
}
