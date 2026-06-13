"use client";

import React, { useRef, useState, ReactElement } from "react";
import { motion } from "framer-motion";

interface MagneticProps {
  children: ReactElement;
}

export default function Index({ children }: MagneticProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();

    // Calculate middle point of the element
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    // 0.35 se multiply kiya taaki element pure cursor ke sath na bhaage, thoda tight pull feel ho
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    // Mouse hat-te hi wapas apni jagah pr jump karega elastic spring ki tarah
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
