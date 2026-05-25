import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col isolation-isolate bg-[#080808] text-[#f0f0f0]">
      {/* Absolute Master Grid Sync Layer */}
      <div className="grid-bg fixed inset-0 z-0 pointer-events-none opacity-40" />

      <Navbar />

      <main className="relative z-10 grow flex flex-col w-full">
        <Hero />
        <TechMarquee />
        <About />
      </main>
    </div>
  );
}
