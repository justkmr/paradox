"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialNode {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  linkedinUrl: string;
  githubUrl: string;
  gradient: string;
}

const TESTIMONIALS_POOL: TestimonialNode[] = [
  {
    id: "01",
    name: "Sajan Babu",
    role: "Senior Product Manager",
    company: "ZestCo Engineering",
    avatar: "/testimonials/sajan.jpg",
    content:
      "Pintu's implementation of our core application nodes was flawless. His choice of Next.js architecture and socket pipeline design slashed our checkout latency by 40%. Absolute system beast!",
    linkedinUrl: "https://www.linkedin.com/in/pintu-kumar-12x",
    githubUrl: "https://github.com/justkmr",
    gradient: "from-[#E24C60] via-[#ec4899] to-[#84cc16]",
  },
  {
    id: "02",
    name: "Umesh Kumar Mahto",
    role: "Lead UI/UX Architect",
    company: "RadiAntiX Labs",
    avatar: "/testimonials/umesh.jpg",
    content:
      "Exceptional craftsmanship. He doesn't just build functional components; he creates immersive visual environments. The performance optimization he delivered is production perfection.",
    linkedinUrl: "https://www.linkedin.com/in/umesh-kumar-mahto",
    githubUrl: "https://github.com/Umeshku1305",
    gradient: "from-[#34d399] via-cyan-400 to-[#a855f7]",
  },
  {
    id: "03",
    name: "Raaj Singh Patel",
    role: "DevOps Lead",
    company: "CloudSync Inc",
    avatar: "/testimonials/raj.jpg",
    content:
      "The Docker containers and CI/CD pipelines Pintu set up are rock solid. Deployment cycles dropped from minutes to absolute seconds. Highly reliable engineer.",
    linkedinUrl: "https://linkedin.com/in/raj-singh-patel-5a5746231",
    githubUrl: "https://github.com/Rajsingh2005-coder",
    gradient: "from-[#22d3ee] via-[#3b82f6] to-[#ec4899]",
  },
  {
    id: "04",
    name: "Sunil Kumar Patel",
    role: "Backend Architect",
    company: "NodeNexus",
    avatar: "/testimonials/sunil.jpg",
    content:
      "Highly scalable database indexing schemas. His Redis caching layer integration prevented system bottlenecks during intense high concurrency loads on our critical API endpoints.",
    linkedinUrl: "https://www.linkedin.com/in/sunil4556",
    githubUrl: "https://github.com/Sunilkr2004",
    gradient: "from-[#fbbf24] via-[#f97316] to-[#E24C60]",
  },
  {
    id: "05",
    name: "Sanjay Kumar Mahto",
    role: "CTO",
    company: "The Rice Foundation",
    avatar: "/testimonials/sanjay.jpg",
    content:
      "Pintu is a rare asset for any engineering setup. He commands full product workflows from raw architectural prototypes straight up to high-availability client deployments seamlessly.",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    gradient: "from-[#a855f7] via-[#ec4899] to-[#34d399]",
  },
  {
    id: "06",
    name: "Amar Kumar barnwal",
    role: "Frontend Engineer",
    company: "Vivid UI",
    avatar: "/testimonials/amar.jpg",
    content:
      "Impeccable attention to Tailwind details and Framer Motion micro-interactions. The layout aesthetics, spacing systems, and animations are always clean and elite.",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    gradient: "from-[#ec4899] via-[#fbbf24] to-[#22d3ee]",
  },
  {
    id: "07",
    name: "Prajwal Kumar Singh",
    role: "Security Analyst",
    company: "CyberShield",
    avatar: "/testimonials/prajwal.jpg",
    content:
      "Clean, injection-proof codebase infrastructure. His implementation of strict TLS encryption across global network channels and endpoints is brilliant and robust.",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    gradient: "from-[#3b82f6] via-[#a855f7] to-[#f97316]",
  },
  {
    id: "08",
    name: "Aman Kumar Barnwal",
    role: "Product Owner",
    company: "SaaSify Hub",
    avatar: "/testimonials/aman2.jpg",
    content:
      "Delivered our complex management dashboard feature two weeks ahead of schedule. Post-launch maintenance metrics and performance remain completely clean.",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    gradient: "from-[#f97316] via-[#E24C60] to-[#84cc16]",
  },
  {
    id: "09",
    name: "Jairam Kumar Mahto",
    role: "Full Stack Engineer",
    company: "QuantLabs",
    avatar: "/testimonials/jairam.jpeg",
    content:
      "Exceptional mastery of state architecture. Solved complex race conditions inside our async streaming data panels effortlessly with super crisp code syntax.",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    gradient: "from-[#14b8a6] via-[#34d399] to-[#fbbf24]",
  },
  {
    id: "10",
    name: "Aman Kumar Singh",
    role: "Engineering Director",
    company: "CoreTech Global",
    avatar: "/testimonials/aman.jpg",
    content:
      "Pintu brings stellar code-hygiene and deep architectural design patterns to the team. An exceptional engineer who builds products optimized for longevity.",
    linkedinUrl: "https://linkedin.com",
    githubUrl: "https://github.com",
    gradient: "from-[#84cc16] via-[#22d3ee] to-[#a855f7]",
  },
];

const STREAM_ROW_1 = [...TESTIMONIALS_POOL.slice(0, 5)];
const STREAM_ROW_2 = [...TESTIMONIALS_POOL.slice(5, 10)];

export function Testimonials() {
  const TestimonialCard = ({ node }: { node: TestimonialNode }) => (
    <div className="w-100 sm:w-112.5 shrink-0 p-8 sm:p-10 rounded-[38px] border border-white/4 bg-white/1 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between group relative overflow-hidden select-none cursor-pointer hover:bg-[#090a0f] hover:border-[#E24C60]/40 hover:shadow-[0_40px_90px_-15px_rgba(226,76,96,0.15),0_60px_120px_-20px_rgba(0,0,0,0.9)] hover:-translate-y-2">
      <div
        className={`absolute inset-0 bg-linear-to-r ${node.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none p-[1.5px] rounded-[38px]`}
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <div className="absolute -top-24 -right-24 w-52 h-52 bg-[#E24C60]/6 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/6 to-transparent pointer-events-none" />

      <div>
        <div className="flex items-center justify-between w-full mb-6 relative z-10">
          <div className="flex items-center gap-4 text-left">
            <div className="relative w-16 h-16 rounded-[25px] p-[1.5px] bg-rose-600/15 border border-white/10 group-hover:border-[#E24C60]/40 transition-colors duration-500 shadow-inner shrink-0 rotate-3 group-hover:rotate-0">
              <Image
                src={node.avatar}
                alt={node.name}
                fill
                className="w-full h-full rounded-[30px] bg-rose-600 object-cover"
                loading="eager"
              />
            </div>

            <div>
              <h4 className="font-sans font-black text-base sm:text-lg text-white tracking-tight group-hover:text-[#E24C60] transition-colors duration-300">
                {node.name}
              </h4>
              <p className="font-sans text-[11px] text-zinc-500 font-bold tracking-wide mt-0.5 uppercase">
                {node.role} <span className="text-zinc-600 font-normal">@</span>{" "}
                <span className="text-zinc-300 group-hover:text-white transition-colors">
                  {node.company}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(node.githubUrl, "_blank", "noopener,noreferrer");
              }}
              className="p-2  rounded-[18px] bg-white/1 hover:bg-white/5 border border-white/5 hover:border-white/20 text-zinc-400 hover:text-white transition-all duration-300 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(node.linkedinUrl, "_blank", "noopener,noreferrer");
              }}
              className="p-2 rounded-[18px] bg-white/1 hover:bg-[#E24C60]/5 border border-white/5 hover:border-[#E24C60]/30 text-zinc-400 hover:text-[#E24C60] transition-all duration-300 cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </button>
          </div>
        </div>

        <p className="text-zinc-400 font-sans text-sm sm:text-[15px] leading-relaxed tracking-wide font-normal text-left group-hover:text-zinc-200 transition-colors duration-300 relative z-10">
          &quot;{node.content}&quot;
        </p>
      </div>

      <div className="flex items-center justify-between w-full pt-5 mt-6 border-t border-white/3 font-mono text-[13px] text-gray-600 tracking-wider relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E24C60]" />
          <span>PEER_VERIFIED</span>
        </div>
        <span className="text-zinc-700 font-bold group-hover:text-[#E24C60] transition-colors">
          REF_{node.id}
        </span>
      </div>
    </div>
  );

  return (
    <section className="w-full py-5 relative z-10 overflow-x-hidden bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 text-left relative z-10">
        <div className="flex items-center gap-2 px-3 py-1 w-fit rounded-full bg-[#E24C60]/5 border border-[#E24C60]/20 text-[12px] font-mono text-[#ff6b7d] font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(226,76,96,0.05)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E24C60] shadow-[0_0_8px_#E24C60] animate-pulse" />
          <span>Ecosystem Feedback</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white font-sans tracking-tight">
          What People Say About My Work
        </h2>
      </div>

      <div className="w-full flex flex-col gap-8 relative">
        <div className="absolute inset-y-0 left-0 w-20 sm:w-48 bg-linear-to-r from-zinc-950 via-zinc-950/70 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-48 bg-linear-to-l from-zinc-950 via-zinc-950/70 to-transparent z-20 pointer-events-none" />

        <div className="w-full overflow-hidden flex group/row1">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 85, repeat: Infinity }}
            className="flex gap-8 shrink-0 group-hover/row1:paused py-2 pr-8"
          >
            {[...STREAM_ROW_1, ...STREAM_ROW_1].map((node, i) => (
              <TestimonialCard key={`r1-${node.id}-${i}`} node={node} />
            ))}
          </motion.div>
        </div>

        <div className="w-full overflow-hidden flex group/row2">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 85, repeat: Infinity }}
            className="flex gap-8 shrink-0 group-hover/row2:paused py-2 pr-8"
          >
            {[...STREAM_ROW_2, ...STREAM_ROW_2].map((node, i) => (
              <TestimonialCard key={`r2-${node.id}-${i}`} node={node} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
