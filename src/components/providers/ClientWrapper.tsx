"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/loaders/Preloader";
import Navbar from "@/components/sections/Navbar";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className="relative min-h-screen w-full flex flex-col isolation-isolate">
        <div className="grid-bg fixed inset-0 w-full h-full z-0 pointer-events-none opacity-40" />

        {/* Loader jab 100% hokar split ho jayega, tabhi Navbar aur baaki layout dikhega */}
        {!isLoading && (
          <>
            <Navbar />
            <main className="relative z-10 grow flex flex-col w-full animate-fade-in">
              {children}
            </main>
          </>
        )}
      </div>
    </>
  );
}
