"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full grow flex flex-col"
    >
      {children}
    </motion.div>
  );
}

// export default function Template({ children }: { children: React.ReactNode }) {
//   return <>{children}</>;
// }
