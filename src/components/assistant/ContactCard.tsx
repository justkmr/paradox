"use client";

import { useState } from "react";
import {
  Mail,
  Globe,
  Copy,
  Check,
  ArrowUpRight,
  MapPin,
  Send,
} from "lucide-react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";

export default function ContactCard() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "babusajan1886@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollToContact = () => {
    const sec = document.getElementById("contact");
    if (sec) sec.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full rounded-[10px] bg-[#070709] border border-white/8 p-3.5 space-y-2.5 font-sans shadow-2xl text-neutral-300">
      <div className="flex items-center justify-between pb-1.5 border-b border-white/6 text-xs">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-semibold text-white tracking-tight uppercase text-[11px] font-mono">
            Get in Touch
          </span>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          Open to Opportunities
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="sm:col-span-2 p-3 rounded-[8px] bg-linear-to-b from-white/4 to-white/1 border border-white/[0.07] hover:border-white/[0.14] transition-all flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-[10px] bg-[#E24C60]/10 border border-[#E24C60]/20 flex items-center justify-center text-[#E24C60] shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] text-neutral-400 font-mono block">
                Direct Mailbox
              </span>
              <span className="text-[12px] font-medium text-white truncate block">
                {emailAddress}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleCopyEmail}
              title="Copy email to clipboard"
              className="p-1.5 rounded-[5px] bg-white/4 hover:bg-white/8 border border-white/6 text-neutral-300 hover:text-white transition-all cursor-pointer flex items-center gap-1 text-[10.5px]"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 text-[10px] font-mono">
                    Copied
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-[10px] font-mono">Copy</span>
                </>
              )}
            </button>
            <a
              href={`mailto:${emailAddress}`}
              className="p-1.5 rounded-[8px] bg-[#E24C60] hover:bg-[#E24C60]/90 text-white transition-all cursor-pointer"
              title="Compose Email"
            >
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <a
          href="https://github.com/justkmr"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 rounded-[10px] bg-linear-to-b from-white/3 to-white/1 border border-white/6[0.06] hover:border-white/15 hover:bg-white/4 transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-[8px] bg-white/5 flex items-center justify-center text-white">
              <FaGithubSquare className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11.5px] font-medium text-white block">
                GitHub
              </span>
              <span className="text-[13px] text-neutral-400 tracking-wide">
                @justkmr
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
        </a>

        <a
          href="https://www.linkedin.com/in/pintu-kumar-12x/"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 rounded-[10px] bg-linear-to-b from-white/3 to-white/1 border border-white/6 hover:border-blue-500/30 hover:bg-white/4 transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-[8px] bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <FaLinkedin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11.5px] font-medium text-white block">
                LinkedIn
              </span>
              <span className="text-[13px] text-neutral-400 tracking-wide">
                Connect{" "}
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-blue-400 transition-colors" />
        </a>

        <a
          href="https://x.com/babu_sajan_12"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 rounded-[10px] bg-linear-to-b from-white/3 to-white/1 border border-white/6 hover:border-gray-950/50 hover:bg-gray-950 transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-[8px] bg-gray-500/10 border border-gray-500/20 flex items-center justify-center text-gray-400">
              <FaTwitter className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11.5px] font-medium text-white block">
                X
              </span>
              <span className="text-[13px] text-neutral-400 tracking-wide">
                Twit{" "}
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-gray-400 transition-colors" />
        </a>

        <a
          href="https://instagram.com/babu_sajan_12"
          target="_blank"
          rel="noreferrer"
          className="p-2.5 rounded-[10px] bg-linear-to-b from-white/3 to-white/1 border border-white/6 hover:border-purple-500/30 hover:bg-white/4 transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-[8px] bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <FaInstagramSquare className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11.5px] font-medium text-white block">
                Instagram
              </span>
              <span className="text-[13px] text-neutral-400 tracking-wide">
                Follow{" "}
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-purple-400 transition-colors" />
        </a>

        <div className="p-2 rounded-[8px] bg-white/2 border border-white/5 flex items-center gap-2 text-[10.5px]">
          <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
          <span className="text-neutral-400">Base:</span>
          <span className="text-neutral-200 font-medium truncate">
            Bhopal, India
          </span>
        </div>

        <a
          href="https://the-kumarrr.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-[8px] bg-white/2 border border-white/5 hover:border-emerald-500/30 transition-all flex items-center justify-between text-[10.5px] group"
        >
          <div className="flex items-center gap-1.5 truncate">
            <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="text-neutral-200 font-medium truncate">
              PARADOX Web
            </span>
          </div>
          <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-emerald-400 transition-colors shrink-0" />
        </a>
      </div>

      <div className="flex items-center justify-between pt-1 border-t border-white/5">
        <span className="text-[12px] text-neutral-500 font-mono">
          Response latency: &lt; 24h
        </span>
        <button
          onClick={handleScrollToContact}
          className="flex items-center gap-1 text-[#E24C60] hover:text-[#E24C60]/80 font-medium transition-colors cursor-pointer text-[10.5px]"
        >
          <span>Open Full Contact Form</span>
          <ArrowUpRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
