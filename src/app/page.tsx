import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import About from "@/components/sections/About";

import { GithubSection } from "@/components/ecosystem/github";
import { Testimonials } from "@/components/ecosystem/testimonials/Testimonials";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import Contact from "@/components/sections/Contact";
import Resume from "@/components/sections/Resume";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col isolation-isolate bg-[#080808] text-[#f0f0f0]">
      <div className="grid-bg fixed inset-0 z-0 pointer-events-none opacity-40" />

      <main id="top-layout" className="relative z-10 grow flex flex-col w-full">
        <Hero />
        <TechMarquee />
        <About />
        <GithubSection />
        <Testimonials />
        <Projects />
        <TechStack />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
