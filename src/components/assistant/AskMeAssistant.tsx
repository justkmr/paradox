"use client";

import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Send,
  X,
  RotateCcw,
  Palette,
  Briefcase,
  Moon,
  Sun,
  Code2,
  Mail,
  BotMessageSquare,
  CircleUserRound,
} from "lucide-react";

import AboutCard from "./AboutCard";
import SkillsCard from "./SkillsCard";
import ContactCard from "./ContactCard";
import { resetThemeSettings } from "./ThemeManager";

interface Message {
  id: string;
  sender: "user" | "bot";
  text?: string;
  type?: "text" | "skills" | "contact" | "colors" | "about";
}

const ACCENT_COLORS = [
  { name: "Crimson Red", value: "#E24C60" },
  { name: "Solar Amber", value: "#F59E0B" },
  { name: "Deep Emerald", value: "#059669" },
  { name: "Royal Violet", value: "#7C3AED" },
  { name: "Electric Blue", value: "#2563EB" },
  { name: "Blaze Orange", value: "#EA580C" },
  { name: "Teal Cyan", value: "#0D9488" },
  { name: "Rose Magenta", value: "#DB2777" },
];

export default function AskMeAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const { theme, setTheme } = useTheme();
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isOpen) return;

    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();

      const { scrollTop, scrollHeight, clientHeight } = container;
      const isScrollingUp = e.deltaY < 0;
      const isScrollingDown = e.deltaY > 0;

      if (
        (isScrollingDown && scrollTop + clientHeight >= scrollHeight) ||
        (isScrollingUp && scrollTop <= 0)
      ) {
        e.preventDefault();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.stopPropagation();
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchmove", handleTouchMove);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const handleColorChange = (color: string) => {
    document.documentElement.style.setProperty("--primary-accent", color);

    let styleTag = document.getElementById(
      "kumar-dynamic-theme",
    ) as HTMLStyleElement | null;
    if (!styleTag) {
      styleTag = document.createElement("style");
      styleTag.id = "kumar-dynamic-theme";
      document.head.appendChild(styleTag);
    }

    styleTag.innerHTML = `
      .text-\\[\\#E24C60\\],
      [class*=" text-[#E24C60]"] {
        color: ${color} !important;
      }
      button[class*="bg-[#E24C60]"],
      a[class*="bg-[#E24C60]"],
      .bg-\\[\\#E24C60\\] {
        background-color: ${color} !important;
        color: #ffffff !important;
      }
      [class*="border-[#E24C60]"]:not([class*="/"]) {
        border-color: ${color} !important;
      }
      #nprogress .bar {
        background: ${color} !important;
      }
    `;

    localStorage.setItem("kumar-accent", color);
  };

  const triggerProjectsNavigation = (userMsgId: string, botMsgId: string) => {
    setMessages((prev) => [
      ...prev,
      { id: userMsgId, sender: "user", text: "View projects" },
      {
        id: botMsgId,
        sender: "bot",
        text: "Here is a quick glimpse of my featured work! If you want to dive deeper into the system architecture, source code, and live demos, check out the full breakdown in the Projects section right behind this window.",
      },
    ]);
    const sec = document.getElementById("projects");
    if (sec) sec.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const savedColor = localStorage.getItem("kumar-accent");
    if (savedColor) {
      handleColorChange(savedColor);
    }
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleActionClick = (action: string) => {
    const userMsgId = Date.now().toString();
    const botMsgId = (Date.now() + 1).toString();

    switch (action) {
      case "projects":
        triggerProjectsNavigation(userMsgId, botMsgId);
        break;

      case "color":
        setMessages((prev) => [
          ...prev,
          { id: userMsgId, sender: "user", text: "Change theme color" },
          { id: botMsgId, sender: "bot", type: "colors" },
        ]);
        break;

      case "about":
        setMessages((prev) => [
          ...prev,
          { id: userMsgId, sender: "user", text: "Who is Pintu Kumar?" },
          { id: botMsgId, sender: "bot", type: "about" },
        ]);
        break;

      case "skills":
        setMessages((prev) => [
          ...prev,
          {
            id: userMsgId,
            sender: "user",
            text: "What skills does Kumar have?",
          },
          { id: botMsgId, sender: "bot", type: "skills" },
        ]);
        break;

      case "contact":
        setMessages((prev) => [
          ...prev,
          { id: userMsgId, sender: "user", text: "How can I contact Kumar?" },
          { id: botMsgId, sender: "bot", type: "contact" },
        ]);
        break;

      case "theme": {
        const nextTheme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        setMessages((prev) => [
          ...prev,
          { id: userMsgId, sender: "user", text: "Switch theme mode" },
          {
            id: botMsgId,
            sender: "bot",
            text: `Switched display theme to ${nextTheme.toUpperCase()} mode.`,
          },
        ]);
        break;
      }

      case "reset":
        resetThemeSettings(setTheme);
        setMessages((prev) => [
          ...prev,
          { id: userMsgId, sender: "user", text: "Reset UI" },
          {
            id: botMsgId,
            sender: "bot",
            text: "UI preferences, theme and accent colors have been reset to default.",
          },
        ]);
        break;
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const query = input.toLowerCase();
    const userMsgId = Date.now().toString();
    const botMsgId = (Date.now() + 1).toString();

    if (query.includes("project") || query.includes("work")) {
      triggerProjectsNavigation(userMsgId, botMsgId);
      setInput("");
      return;
    }

    let botResponse: Message = {
      id: botMsgId,
      sender: "bot",
      text: "You can ask about skills, projects, contact info, or change the UI theme using the chips below!",
    };

    if (
      query.includes("skill") ||
      query.includes("stack") ||
      query.includes("tech")
    ) {
      botResponse = { id: botMsgId, sender: "bot", type: "skills" };
    } else if (
      query.includes("contact") ||
      query.includes("email") ||
      query.includes("hire")
    ) {
      botResponse = { id: botMsgId, sender: "bot", type: "contact" };
    } else if (
      query.includes("about") ||
      query.includes("kumar") ||
      query.includes("pintu")
    ) {
      botResponse = { id: botMsgId, sender: "bot", type: "about" };
    } else if (query.includes("color") || query.includes("theme")) {
      botResponse = { id: botMsgId, sender: "bot", type: "colors" };
    }

    setMessages((prev) => [
      ...prev,
      { id: userMsgId, sender: "user", text: input },
      botResponse,
    ]);
    setInput("");
  };

  return (
    <>
      <div className="fixed bottom-6 right-20 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open AI Terminal"
          className="relative flex items-center justify-center w-12 h-12 rounded-[10px] -left-5 bg-[#0a0a0c] border border-white/20 text-white shadow-2xl hover:border-[#E24C60]/50 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
        >
          <div className="absolute inset-0 rounded-xl bg-[#E24C60]/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md" />
          <BotMessageSquare className="w-6 h-6 text-[#E24C60]" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-22 right-4 sm:right-6 w-[94vw] sm:w-105 h-130 bg-[#050507]/95 backdrop-blur-xl border border-white/15 rounded-[10px] shadow-2xl z-50 flex flex-col overflow-hidden overflow-contain font-mono text-xs">
          <div className="flex items-center justify-between px-4 py-3 bg-[#0d0d12] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-white tracking-wider text-[11px] uppercase">
                ASK ME • KUMAR INTEL
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMessages([])}
                title="Clear Chat"
                className="text-neutral-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white p-1 rounded transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            style={{
              maxHeight: "360px",
              overflowY: "scroll",
              overscrollBehavior: "contain",
              WebkitOverflowScrolling: "touch",
            }}
            className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-4 select-text"
          >
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center text-center py-1 space-y-3">
                <div className="p-3 bg-white/5 border border-white/10 shadow-inner rounded-[10px]">
                  <BotMessageSquare className="w-8 h-8 text-[#E24C60]" />
                </div>
                <h4 className="text-[16px] font-bold text-white">Hello!</h4>
                <p className="text-neutral-400 font-serif text-[17px] max-w-70">
                  Ask me anything about{" "}
                  <span className="text-[#E24C60]">Pintu Kumar</span> and his{" "}
                  <span className="text-[#E24C60]">Engineering Systems</span>.
                </p>
              </div>
            )}

            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}
              >
                {m.sender === "user" ? (
                  <div className="bg-[#facc15] text-black capitalize px-3 py-2 rounded-[10px] rounded-tr-none max-w-[85%] shadow-md">
                    {m.text}
                  </div>
                ) : (
                  <div className="w-full bg-white/3 border border-white/10 rounded-[10px] p-3 text-neutral-300 space-y-2">
                    {m.text && (
                      <p className="text-[13px] font-serif tracking-wide">
                        {m.text}
                      </p>
                    )}

                    {m.type === "about" && (
                      <AboutCard
                        onExploreMore={() => {
                          const sec = document.getElementById("about");
                          if (sec) sec.scrollIntoView({ behavior: "smooth" });
                          setIsOpen(false);
                        }}
                      />
                    )}

                    {m.type === "skills" && <SkillsCard />}

                    {m.type === "contact" && <ContactCard />}

                    {m.type === "colors" && (
                      <div className="space-y-2 rounded-[12px] bg-[#0d0d12]/60 border border-white/5 p-3">
                        <p className="text-neutral-400 text-[13px]">
                          Click a color circle to update the whole website
                          instantly :-{" "}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {ACCENT_COLORS.map((c) => (
                            <button
                              key={c.name}
                              onClick={() => handleColorChange(c.value)}
                              className="w-7 h-7 rounded-full border-2 border-white/30 hover:scale-125 transition-transform shadow-lg cursor-pointer"
                              style={{ backgroundColor: c.value }}
                              title={c.name}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          <div className="px-3 py-2 bg-[#0d0d12]/60 border-t border-white/5 flex flex-wrap gap-1.5">
            <button
              onClick={() => handleActionClick("color")}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/5 transition-all text-[12px] cursor-pointer"
            >
              <Palette className="w-4 h-4 text-pink-400" />
              <span>Change Color</span>
            </button>
            <button
              onClick={() => handleActionClick("projects")}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/5 transition-all text-[12px] cursor-pointer"
            >
              <Briefcase className="w-4 h-4 text-blue-400" />
              <span>View Projects</span>
            </button>
            <button
              onClick={() => handleActionClick("about")}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/5 transition-all text-[12px] cursor-pointer"
            >
              <CircleUserRound className="w-4 h-4 text-emerald-400" />
              <span>About Kumar</span>
            </button>
            <button
              onClick={() => handleActionClick("theme")}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/5 transition-all text-[12px] cursor-pointer"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-yellow-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-400" />
              )}
              <span>Switch theme</span>
            </button>
            <button
              onClick={() => handleActionClick("skills")}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/5 transition-all text-[12px] cursor-pointer"
            >
              <Code2 className="w-4 h-4 text-purple-400" />
              <span>Skills</span>
            </button>
            <button
              onClick={() => handleActionClick("contact")}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-white/5 hover:bg-white/10 text-neutral-300 border border-white/5 transition-all text-[12px] cursor-pointer"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>Contact</span>
            </button>
            <button
              onClick={() => handleActionClick("reset")}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-all text-[12px] cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset UI</span>
            </button>
          </div>

          <form
            onSubmit={handleSend}
            className="p-3 bg-[#0a0a0e] border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message or click the chips..."
              className="flex-1 bg-white/5 border border-white/10 rounded-[6px] px-3 py-2 text-white placeholder-neutral-500 focus:outline-none focus:border-[#E24C60]/60 transition-colors text-[12px]"
            />
            <button
              type="submit"
              className="p-2 rounded-[6px] bg-[#E24C60] hover:bg-[#E24C60]/90 text-white transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
