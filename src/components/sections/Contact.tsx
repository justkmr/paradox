// "use client";

// import {
//   FaEnvelope,
//   FaPaperPlane,
//   FaTerminal,
//   FaCheckCircle,
//   FaExclamationTriangle,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaGithub,
//   FaLinkedin,
//   FaArrowUp,
// } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useCallback, useEffect } from "react";

// export default function Contact() {
//   // 🎛️ Form Transmission States Matrix
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [submissionStatus, setSubmissionStatus] = useState<
//     "IDLE" | "PROCESSING" | "SUCCESS" | "ERROR"
//   >("IDLE");
//   const [consoleLog, setConsoleLog] = useState<string>("");
//   const [showScrollBtn, setShowScrollBtn] = useState(false);

//   // 📡 Show/Hide Floating Button Based on Page Scroll Bounds
//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 400) {
//         setShowScrollBtn(true);
//       } else {
//         setShowScrollBtn(false);
//       }
//     };
//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleFormSubmit = useCallback(
//     async (e: React.FormEvent) => {
//       e.preventDefault();
//       if (submissionStatus === "PROCESSING") return;

//       if (
//         !formData.name.trim() ||
//         !formData.email.trim() ||
//         !formData.message.trim()
//       ) {
//         setSubmissionStatus("ERROR");
//         setConsoleLog("VALIDATION_FAULT // REQUIRED_NODES_EMPTY");
//         return;
//       }

//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(formData.email)) {
//         setSubmissionStatus("ERROR");
//         setConsoleLog("NET_PROTOCOL_FAULT // INVALID_EMAIL_FORMAT");
//         return;
//       }

//       setSubmissionStatus("PROCESSING");
//       setConsoleLog("ESTABLISHED STREAM HANDSHAKE // DISPATCHING FLOW...");

//       try {
//         await new Promise((resolve) => setTimeout(resolve, 1800));
//         setConsoleLog("200 OK // TRANSACTION_DISPATCHED_SUCCESSFULLY");
//         setSubmissionStatus("SUCCESS");
//         setFormData({ name: "", email: "", message: "" });
//         setTimeout(() => setSubmissionStatus("IDLE"), 4000);
//       } catch (error) {
//         setSubmissionStatus("ERROR");
//         setConsoleLog("HTTP_500 // ROUTE_DISCONNECTED_BY_HOST");
//         setTimeout(() => setSubmissionStatus("IDLE"), 4000);
//       }
//     },
//     [formData, submissionStatus],
//   );

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <section
//       id="contact"
//       className="w-full mt-10 border border-t border-zinc-900 relative z-10 pt-10 pb-10 font-sans select-none overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
//         <div className="w-full text-center mb-16 flex flex-col items-center">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E24C60]/5 border border-[#E24C60]/20 mb-4 shadow-inner">
//             <span className="text-[16px] font-semibold text-[#E24C60] tracking-wide">
//               Available for Opportunities
//             </span>
//           </div>

//           <h2 className="text-6xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
//             Get In Touch
//           </h2>

//           <p className="text-xl md:text-2xl text-zinc-400 max-w-xl mx-auto leading-relaxed font-normal">
//             Looking for a Full Stack Developer? Let&apos;s connect and discuss
//             how I can contribute to your team.
//           </p>
//         </div>

//         {/* =========================================================================
//             🚀 PART B: SPLIT DASHBOARD GRID
//             ========================================================================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full max-w-6xl mx-auto mb-20">
//           {/* LEFT CONTAINER: CORE INPUT CONSOLE FORM (7 Columns) */}
//           <div className="lg:col-span-7  border border-zinc-900 rounded-[20px] p-6 md:p-8 shadow-2xl flex flex-col ">
//             <h3 className="text-2xl font-bold text-white mb-6 tracking-wide font-serif">
//               Send a Message
//             </h3>

//             <form
//               onSubmit={handleFormSubmit}
//               className="flex flex-col gap-5 w-full"
//             >
//               <div className="flex flex-col gap-2 w-full">
//                 <label className="text-[18px] text-zinc-400 font-medium tracking-wide">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   disabled={submissionStatus === "PROCESSING"}
//                   className="w-full bg-zinc-900/30 border border-zinc-800  focus:ring-2 focus:ring-[#E24C60] rounded-[15px] px-4 py-3 text-[17px] text-zinc-200 outline-none transition-colors duration-200 placeholder-zinc-600 disabled:opacity-40"
//                 />
//               </div>

//               <div className="flex flex-col gap-2 w-full">
//                 <label className="text-[18px] text-zinc-400 font-medium tracking-wide">
//                   Your Email
//                 </label>
//                 <input
//                   type="text"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email"
//                   disabled={submissionStatus === "PROCESSING"}
//                   className="w-full bg-zinc-900/30 border border-zinc-800  focus:ring-2 focus:ring-[#E24C60] rounded-[15px] px-4 py-3 text-[17px] text-zinc-200 outline-none transition-colors duration-200 placeholder-zinc-600 disabled:opacity-40"
//                 />
//               </div>

//               <div className="flex flex-col gap-2 w-full">
//                 <label className="text-[18px] text-zinc-400 font-medium tracking-wide">
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   rows={5}
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Tell me about your project or opportunity..."
//                   disabled={submissionStatus === "PROCESSING"}
//                   className="w-full bg-zinc-900/30 border border-zinc-800  focus:ring-2 focus:ring-[#E24C60] rounded-[15px] px-4 py-3 text-[17px] text-zinc-200 outline-none transition-colors duration-200 placeholder-zinc-600 resize-none h-32 disabled:opacity-40"
//                 />
//               </div>

//               <AnimatePresence>
//                 {submissionStatus !== "IDLE" && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className={`text-[11px] font-bold w-full py-2.5 px-4 rounded-lg border font-mono tracking-wider transition-all duration-300 ${
//                       submissionStatus === "ERROR"
//                         ? "bg-red-500/5 text-red-400 border-red-500/20"
//                         : submissionStatus === "SUCCESS"
//                           ? "bg-emerald-500/5 text-emerald-400 border-emerald-500/20"
//                           : "bg-zinc-900/90 text-amber-500 border-zinc-800"
//                     }`}
//                   >
//                     STATUS_LOG // {consoleLog}
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* Action Trigger Button mapped to Brand Red */}
//               <button
//                 type="submit"
//                 disabled={submissionStatus === "PROCESSING"}
//                 className="w-full rounded-[15px] bg-[#E24C60] hover:bg-red-600 text-white font-bold text-[14px] tracking-wide inline-flex items-center justify-center gap-2 py-3.5 mt-2 transition-all duration-300 shadow-lg shadow-red-950/10 cursor-pointer disabled:opacity-50"
//               >
//                 {submissionStatus === "PROCESSING" ? (
//                   <>
//                     <FaTerminal className="animate-spin text-xs" />
//                     <span>Processing Payload...</span>
//                   </>
//                 ) : submissionStatus === "ERROR" ? (
//                   <>
//                     <FaExclamationTriangle className="text-xs" />
//                     <span>Retry Dispatch</span>
//                   </>
//                 ) : submissionStatus === "SUCCESS" ? (
//                   <>
//                     <FaCheckCircle className="text-xs" />
//                     <span>Stream Dispatched</span>
//                   </>
//                 ) : (
//                   <>
//                     <FaPaperPlane className="text-base" />
//                     <span>Send Message</span>
//                   </>
//                 )}
//               </button>

//               <span className="text-[15px] text-zinc-500 font-normal text-center mt-1 block">
//                 Your message will be sent directly to my inbox
//               </span>
//             </form>
//           </div>

//           {/* RIGHT CONTAINER: DIRECT COMM CARDS */}
//           <div className="lg:col-span-5 flex flex-col gap-6 w-full">
//             {/* CARD 1: DIRECT CONTACT */}
//             <div className="bg-[#0b0b0d]/90 border border-zinc-900 rounded-[20px] p-6 shadow-2xl flex flex-col">
//               <h4 className="text-2xl font-bold text-white mb-4 tracking-wide">
//                 Direct Contact
//               </h4>
//               <div className="flex flex-col gap-3.5">
//                 <div className="flex items-center justify-between p-3.5 bg-zinc-900/30 border border-zinc-900/60 rounded-[12px] group hover:border-zinc-800 transition-colors">
//                   <div className="flex items-center gap-3.5">
//                     <div className="w-10 h-10 rounded-[10px] bg-[#E24C60]/5 border border-[#E24C60]/10 flex items-center justify-center text-[#E24C60] shadow-inner">
//                       <FaEnvelope className="text-base" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] text-zinc-500 font-bold uppercase mb-0.5">
//                         Email
//                       </div>
//                       <div className="text-[13px] text-zinc-300 font-medium">
//                         mrkumarrr12@gmail.com
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between p-3.5 bg-zinc-900/30 border border-zinc-900/60 rounded-[12px] group hover:border-zinc-800 transition-colors">
//                   <div className="flex items-center gap-3.5">
//                     <div className="w-10 h-10 rounded-[10px] bg-[#E24C60]/5 border border-[#E24C60]/10 flex items-center justify-center text-[#E24C60] shadow-inner">
//                       <FaPhoneAlt className="text-base" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] text-zinc-500 font-bold uppercase mb-0.5">
//                         Phone
//                       </div>
//                       <div className="text-[13px] text-zinc-300 font-medium">
//                         (+91) 80 8401 8064
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between p-3.5 bg-zinc-900/30 border border-zinc-900/60 rounded-[12px] group hover:border-zinc-800 transition-colors">
//                   <div className="flex items-center gap-3.5">
//                     <div className="w-10 h-10 rounded-[10px] bg-[#E24C60]/5 border border-[#E24C60]/10 flex items-center justify-center text-[#E24C60] shadow-inner">
//                       <FaMapMarkerAlt className="text-base" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] text-zinc-500 font-bold uppercase mb-0.5">
//                         Location
//                       </div>
//                       <div className="text-[13px] text-zinc-300 font-medium">
//                         Bhopal, Madhya Pradesh
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* CARD 2: CONNECT ONLINE */}
//             <div className="bg-[#0b0b0d]/90 border border-zinc-900 rounded-[20px] p-6 shadow-2xl flex flex-col">
//               <h4 className="text-[20px] font-serif  text-white mb-4 tracking-wide">
//                 Connect Online
//               </h4>
//               <div className="grid grid-cols-2 gap-4 ">
//                 <a
//                   href="https://github.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center justify-center gap-4 py-3 bg-zinc-900/30 border border-zinc-900 rounded-[12px] text-zinc-300 text-base font-semibold hover:border-zinc-800 hover:bg-[#E24C60]/30 hover:border-[#E24C60]/20 transition-all"
//                 >
//                   <FaGithub className="text-[20px] " /> GitHub
//                 </a>
//                 <a
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center justify-center gap-4 py-3 bg-zinc-900/30 border border-zinc-900 rounded-[12px] text-zinc-300 text-base font-semibold hover:border-zinc-800 hover:bg-[#E24C60]/30 hover:border-[#E24C60]/20 transition-all"
//                 >
//                   <FaLinkedin className="text-[20px]" /> LinkedIn
//                 </a>
//               </div>
//             </div>

//             {/* CARD 3: OPEN TO WORK */}
//             <div className="bg-[#0b0b0d]/90 border border-zinc-900 rounded-[20px] p-6 shadow-2xl flex flex-col relative overflow-hidden group">
//               <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#E24C60]/20 to-transparent" />
//               <div className="flex items-center gap-5 mb-3">
//                 <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
//                 <span className="text-[17px] font-serif font-bold text-[#E24C60] tracking-wide">
//                   Open to Work
//                 </span>
//               </div>
//               <p className="text-[17px] text-zinc-400 leading-relaxed font-normal">
//                 Currently seeking internship opportunities as a Mern Full Stack
//                 Developer. Available to start immediately.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* =========================================================================
//           🚀 FLOATING SCROLL TO TOP CONSOLE MATRIX (100% Working Smooth Engine)
//           ========================================================================= */}
//       <AnimatePresence mode="wait">
//         {showScrollBtn && (
//           <motion.div
//             key="scroll-top-btn"
//             initial={{ opacity: 0, scale: 0.5, y: 40 }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               y: 0,
//               transition: { type: "spring", stiffness: 260, damping: 20 },
//             }}
//             exit={{
//               opacity: 0,
//               scale: 0.5,
//               y: 40,
//               transition: { duration: 0.25, ease: "easeInOut" },
//             }}
//             onClick={scrollToTop}
//             className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-11 h-11 rounded-full bg-[#0b0b0d] border border-zinc-800 text-[#E24C60] hover:text-white hover:border-[#E24C60]/50 hover:shadow-[0_0_20px_rgba(226,76,96,0.4)] flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300 group"
//           >
//             {/* Hover karne par icon halke se upar bounce framework pass karega */}
//             <motion.div
//               whileHover={{ y: -3 }}
//               transition={{ type: "spring", stiffness: 300, damping: 10 }}
//             >
//               <FaArrowUp className="text-base" />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

// "use client";

// import {
//   FaEnvelope,
//   FaPaperPlane,
//   FaTerminal,
//   FaCheckCircle,
//   FaExclamationTriangle,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaGithub,
//   FaLinkedin,
//   FaArrowUp,
// } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useCallback, useEffect } from "react";
// import { useLenis } from "lenis/react";

// export default function Contact() {
//   // 🎛️ Form Transmission States Matrix
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [submissionStatus, setSubmissionStatus] = useState<
//     "IDLE" | "PROCESSING" | "SUCCESS" | "ERROR"
//   >("IDLE");
//   const [consoleLog, setConsoleLog] = useState<string>("");
//   const [showScrollBtn, setShowScrollBtn] = useState(false);

//   // 📡 Show/Hide Floating Button Based on Page Scroll Bounds
//   // useEffect(() => {
//   //   const toggleVisibility = () => {
//   //     if (window.scrollY > 400) {
//   //       setShowScrollBtn(true);
//   //     } else {
//   //       setShowScrollBtn(false);
//   //     }
//   //   };
//   //   window.addEventListener("scroll", toggleVisibility, { passive: true });
//   //   return () => window.removeEventListener("scroll", toggleVisibility);
//   // }, []);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleFormSubmit = useCallback(
//     async (e: React.FormEvent) => {
//       e.preventDefault();
//       if (submissionStatus === "PROCESSING") return;

//       if (
//         !formData.name.trim() ||
//         !formData.email.trim() ||
//         !formData.message.trim()
//       ) {
//         setSubmissionStatus("ERROR");
//         setConsoleLog("VALIDATION_FAULT // REQUIRED_NODES_EMPTY");
//         return;
//       }

//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(formData.email)) {
//         setSubmissionStatus("ERROR");
//         setConsoleLog("NET_PROTOCOL_FAULT // INVALID_EMAIL_FORMAT");
//         return;
//       }

//       setSubmissionStatus("PROCESSING");
//       setConsoleLog("ESTABLISHED STREAM HANDSHAKE // DISPATCHING FLOW...");

//       try {
//         await new Promise((resolve) => setTimeout(resolve, 1800));
//         setConsoleLog("200 OK // TRANSACTION_DISPATCHED_SUCCESSFULLY");
//         setSubmissionStatus("SUCCESS");
//         setFormData({ name: "", email: "", message: "" });
//         setTimeout(() => setSubmissionStatus("IDLE"), 4000);
//       } catch (error) {
//         setSubmissionStatus("ERROR");
//         setConsoleLog("HTTP_500 // ROUTE_DISCONNECTED_BY_HOST");
//         setTimeout(() => setSubmissionStatus("IDLE"), 4000);
//       }
//     },
//     [formData, submissionStatus],
//   );

//   const lenis = useLenis(({ scroll }) => {
//     setShowScrollBtn(scroll > 400);
//   });

//   const scrollToTop = () => {
//     lenis?.scrollTo(0, { duration: 1.5 });
//   };

//   return (
//     <section
//       id="contact"
//       className="w-full mt-10 border-t border-zinc-900 relative z-10 pt-10 pb-10 font-sans select-none overflow-hidden"
//     >
//       <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
//         <div className="w-full text-center mb-16 flex flex-col items-center">
//           <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E24C60]/5 border border-[#E24C60]/20 mb-4 shadow-inner">
//             <span className="text-[16px] font-semibold text-[#E24C60] tracking-wide">
//               Available for Opportunities
//             </span>
//           </div>

//           <h2 className="text-6xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
//             Get In Touch
//           </h2>

//           <p className="text-xl md:text-2xl text-zinc-400 max-w-xl mx-auto leading-relaxed font-normal">
//             Looking for a Full Stack Developer? Let&apos;s connect and discuss
//             how I can contribute to your team.
//           </p>
//         </div>

//         {/* =========================================================================
//             🚀 PART B: SPLIT DASHBOARD GRID
//             ========================================================================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full max-w-6xl mx-auto mb-20">
//           {/* LEFT CONTAINER: CORE INPUT CONSOLE FORM (7 Columns) */}
//           <div className="lg:col-span-7 border border-zinc-900 rounded-[20px] p-6 md:p-8 shadow-2xl flex flex-col ">
//             <h3 className="text-2xl font-bold text-white mb-6 tracking-wide font-serif">
//               Send a Message
//             </h3>

//             <form
//               onSubmit={handleFormSubmit}
//               className="flex flex-col gap-5 w-full"
//             >
//               <div className="flex flex-col gap-2 w-full">
//                 <label className="text-[18px] text-zinc-400 font-medium tracking-wide">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your name"
//                   disabled={submissionStatus === "PROCESSING"}
//                   className="w-full bg-zinc-900/30 border border-zinc-800 focus:ring-2 focus:ring-[#E24C60] rounded-[15px] px-4 py-3 text-[17px] text-zinc-200 outline-none transition-all duration-200 placeholder-zinc-600 disabled:opacity-40"
//                 />
//               </div>

//               <div className="flex flex-col gap-2 w-full">
//                 <label className="text-[18px] text-zinc-400 font-medium tracking-wide">
//                   Your Email
//                 </label>
//                 <input
//                   type="text"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email"
//                   disabled={submissionStatus === "PROCESSING"}
//                   className="w-full bg-zinc-900/30 border border-zinc-800 focus:ring-2 focus:ring-[#E24C60] rounded-[15px] px-4 py-3 text-[17px] text-zinc-200 outline-none transition-all duration-200 placeholder-zinc-600 disabled:opacity-40"
//                 />
//               </div>

//               <div className="flex flex-col gap-2 w-full">
//                 <label className="text-[18px] text-zinc-400 font-medium tracking-wide">
//                   Message
//                 </label>
//                 <textarea
//                   name="message"
//                   rows={5}
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Tell me about your project or opportunity..."
//                   disabled={submissionStatus === "PROCESSING"}
//                   className="w-full bg-zinc-900/30 border border-zinc-800 focus:ring-2 focus:ring-[#E24C60] rounded-[15px] px-4 py-3 text-[17px] text-zinc-200 outline-none transition-all duration-200 placeholder-zinc-600 resize-none h-32 disabled:opacity-40"
//                 />
//               </div>

//               <AnimatePresence>
//                 {submissionStatus !== "IDLE" && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: "auto" }}
//                     exit={{ opacity: 0, height: 0 }}
//                     className={`text-[11px] font-bold w-full py-2.5 px-4 rounded-lg border font-mono tracking-wider transition-all duration-300 ${
//                       submissionStatus === "ERROR"
//                         ? "bg-red-500/5 text-red-400 border-red-500/20"
//                         : submissionStatus === "SUCCESS"
//                           ? "bg-emerald-500/5 text-emerald-400 border-emerald-500/20"
//                           : "bg-zinc-900/90 text-amber-500 border-zinc-800"
//                     }`}
//                   >
//                     STATUS_LOG // {consoleLog}
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               <button
//                 type="submit"
//                 disabled={submissionStatus === "PROCESSING"}
//                 className="w-full rounded-[15px] bg-[#E24C60] hover:bg-red-600 text-white font-bold text-[14px] tracking-wide inline-flex items-center justify-center gap-2 py-3.5 mt-2 transition-all duration-300 shadow-lg shadow-red-950/10 cursor-pointer disabled:opacity-50"
//               >
//                 {submissionStatus === "PROCESSING" ? (
//                   <>
//                     <FaTerminal className="animate-spin text-xs" />
//                     <span>Processing Payload...</span>
//                   </>
//                 ) : submissionStatus === "ERROR" ? (
//                   <>
//                     <FaExclamationTriangle className="text-xs" />
//                     <span>Retry Dispatch</span>
//                   </>
//                 ) : submissionStatus === "SUCCESS" ? (
//                   <>
//                     <FaCheckCircle className="text-xs" />
//                     <span>Stream Dispatched</span>
//                   </>
//                 ) : (
//                   <>
//                     <FaPaperPlane className="text-base" />
//                     <span>Send Message</span>
//                   </>
//                 )}
//               </button>

//               <span className="text-[15px] text-zinc-500 font-normal text-center mt-1 block">
//                 Your message will be sent directly to my inbox
//               </span>
//             </form>
//           </div>

//           {/* RIGHT CONTAINER: DIRECT COMM CARDS */}
//           <div className="lg:col-span-5 flex flex-col gap-6 w-full">
//             {/* CARD 1: DIRECT CONTACT */}
//             <div className="bg-[#0b0b0d]/90 border border-zinc-900 rounded-[20px] p-6 shadow-2xl flex flex-col">
//               <h4 className="text-2xl font-bold text-white mb-4 tracking-wide">
//                 Direct Contact
//               </h4>
//               <div className="flex flex-col gap-3.5">
//                 <div className="flex items-center justify-between p-3.5 bg-zinc-900/30 border border-zinc-900/60 rounded-[12px] group hover:border-zinc-800 transition-colors">
//                   <div className="flex items-center gap-3.5">
//                     <div className="w-10 h-10 rounded-[10px] bg-[#E24C60]/5 border border-[#E24C60]/10 flex items-center justify-center text-[#E24C60] shadow-inner">
//                       <FaEnvelope className="text-base" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] text-zinc-500 font-bold uppercase mb-0.5">
//                         Email
//                       </div>
//                       <div className="text-[13px] text-zinc-300 font-medium">
//                         mrkumarrr12@gmail.com
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between p-3.5 bg-zinc-900/30 border border-zinc-900/60 rounded-[12px] group hover:border-zinc-800 transition-colors">
//                   <div className="flex items-center gap-3.5">
//                     <div className="w-10 h-10 rounded-[10px] bg-[#E24C60]/5 border border-[#E24C60]/10 flex items-center justify-center text-[#E24C60] shadow-inner">
//                       <FaPhoneAlt className="text-base" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] text-zinc-500 font-bold uppercase mb-0.5">
//                         Phone
//                       </div>
//                       <div className="text-[13px] text-zinc-300 font-medium">
//                         (+91) 80 8401 8064
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center justify-between p-3.5 bg-zinc-900/30 border border-zinc-900/60 rounded-[12px] group hover:border-zinc-800 transition-colors">
//                   <div className="flex items-center gap-3.5">
//                     <div className="w-10 h-10 rounded-[10px] bg-[#E24C60]/5 border border-[#E24C60]/10 flex items-center justify-center text-[#E24C60] shadow-inner">
//                       <FaMapMarkerAlt className="text-base" />
//                     </div>
//                     <div>
//                       <div className="text-[13px] text-zinc-500 font-bold uppercase mb-0.5">
//                         Location
//                       </div>
//                       <div className="text-[13px] text-zinc-300 font-medium">
//                         Bhopal, Madhya Pradesh
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* CARD 2: CONNECT ONLINE */}
//             <div className="bg-[#0b0b0d]/90 border border-zinc-900 rounded-[20px] p-6 shadow-2xl flex flex-col">
//               <h4 className="text-[20px] font-serif text-white mb-4 tracking-wide">
//                 Connect Online
//               </h4>
//               <div className="grid grid-cols-2 gap-4 ">
//                 <a
//                   href="https://github.com/justkmr"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center justify-center gap-4 py-3 bg-zinc-900/30 border border-zinc-900 rounded-[12px] text-zinc-300 text-base font-semibold hover:border-zinc-800 hover:bg-[#E24C60]/30 hover:border-[#E24C60]/20 transition-all"
//                 >
//                   <FaGithub className="text-[20px] " /> GitHub
//                 </a>
//                 <a
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noreferrer"
//                   className="flex items-center justify-center gap-4 py-3 bg-zinc-900/30 border border-zinc-900 rounded-[12px] text-zinc-300 text-base font-semibold hover:border-zinc-800 hover:bg-[#E24C60]/30 hover:border-[#E24C60]/20 transition-all"
//                 >
//                   <FaLinkedin className="text-[20px]" /> LinkedIn
//                 </a>
//               </div>
//             </div>

//             {/* CARD 3: OPEN TO WORK */}
//             <div className="bg-[#0b0b0d]/90 border border-zinc-900 rounded-[20px] p-6 shadow-2xl flex flex-col relative overflow-hidden group">
//               <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#E24C60]/20 to-transparent" />
//               <div className="flex items-center gap-5 mb-3">
//                 <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
//                 <span className="text-[17px] font-serif font-bold text-[#E24C60] tracking-wide">
//                   Open to Work
//                 </span>
//               </div>
//               <p className="text-[17px] text-zinc-400 leading-relaxed font-normal">
//                 Currently seeking internship opportunities as a Mern Full Stack
//                 Developer. Available to start immediately.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FLOATING SCROLL TO TOP CONFIG CONTAINER */}
//       <AnimatePresence mode="wait">
//         {showScrollBtn && (
//           <motion.div
//             key="scroll-top-btn"
//             initial={{ opacity: 0, scale: 0.5, y: 40 }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               y: 0,
//               transition: { type: "spring", stiffness: 260, damping: 20 },
//             }}
//             exit={{
//               opacity: 0,
//               scale: 0.5,
//               y: 40,
//               transition: { duration: 0.25, ease: "easeInOut" },
//             }}
//             onClick={scrollToTop}
//             className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-11 h-11 rounded-full bg-[#0b0b0d] border border-zinc-800 text-[#E24C60] hover:text-white hover:border-[#E24C60]/50 hover:shadow-[0_0_20px_rgba(226,76,96,0.4)] flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300 group"
//           >
//             <motion.div
//               whileHover={{ y: -3 }}
//               transition={{ type: "spring", stiffness: 300, damping: 10 }}
//             >
//               <FaArrowUp className="text-base" />
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

// "use client";

// import {
//   FaEnvelope,
//   FaPaperPlane,
//   FaTerminal,
//   FaCheckCircle,
//   FaExclamationTriangle,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaGithub,
//   FaLinkedin,
// } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useCallback } from "react";

// export default function Contact() {
//   // 🎛️ Form Transmission States Matrix
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [submissionStatus, setSubmissionStatus] = useState<
//     "IDLE" | "PROCESSING" | "SUCCESS" | "ERROR"
//   >("IDLE");
//   const [consoleLog, setConsoleLog] = useState<string>("");

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleFormSubmit = useCallback(
//     async (e: React.FormEvent) => {
//       e.preventDefault();
//       if (submissionStatus === "PROCESSING") return;

//       if (
//         !formData.name.trim() ||
//         !formData.email.trim() ||
//         !formData.message.trim()
//       ) {
//         setSubmissionStatus("ERROR");
//         setConsoleLog("VALIDATION_FAULT // REQUIRED_NODES_EMPTY");
//         return;
//       }

//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(formData.email)) {
//         setSubmissionStatus("ERROR");
//         setConsoleLog("NET_PROTOCOL_FAULT // INVALID_EMAIL_FORMAT");
//         return;
//       }

//       setSubmissionStatus("PROCESSING");
//       setConsoleLog("ESTABLISHED STREAM HANDSHAKE // DISPATCHING FLOW...");

//       try {
//         await new Promise((resolve) => setTimeout(resolve, 1800));
//         setConsoleLog("200 OK // TRANSACTION_DISPATCHED_SUCCESSFULLY");
//         setSubmissionStatus("SUCCESS");
//         setFormData({ name: "", email: "", message: "" });
//         setTimeout(() => setSubmissionStatus("IDLE"), 4000);
//       } catch (error) {
//         setSubmissionStatus("ERROR");
//         setConsoleLog("HTTP_500 // ROUTE_DISCONNECTED_BY_HOST");
//         setTimeout(() => setSubmissionStatus("IDLE"), 4000);
//       }
//     },
//     [formData, submissionStatus],
//   );

//   const webForms = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

//   return (
//     <>
//       <section
//         id="contact"
//         className="w-full mt-10 border-t border-zinc-900 relative z-10 pt-10 pb-10 font-sans select-none overflow-hidden"
//       >
//         <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
//           <div className="w-full text-center mb-16 flex flex-col items-center">
//             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E24C60]/5 border border-[#E24C60]/20 mb-4 shadow-inner">
//               <span className="text-[16px] font-semibold text-[#E24C60] tracking-wide">
//                 Available for Opportunities
//               </span>
//             </div>

//             <h2 className="text-6xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
//               Get In Touch
//             </h2>

//             <p className="text-xl md:text-2xl text-zinc-400 max-w-xl mx-auto leading-relaxed font-normal">
//               Looking for a Full Stack Developer? Let&apos;s connect and discuss
//               how I can contribute to your team.
//             </p>
//           </div>

//           {/* =========================================================================
//             🚀 PART B: SPLIT DASHBOARD GRID
//             ========================================================================= */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full max-w-6xl mx-auto mb-20">
//             {/* LEFT CONTAINER: CORE INPUT CONSOLE FORM (7 Columns) */}
//             <div className="lg:col-span-7 border border-zinc-900 rounded-[20px] p-6 md:p-8 shadow-2xl flex flex-col ">
//               <h3 className="text-2xl font-bold text-white mb-6 tracking-wide font-serif">
//                 Send a Message
//               </h3>

//               <form
//                 onSubmit={handleFormSubmit}
//                 className="flex flex-col gap-5 w-full"
//               >
//                 <div className="flex flex-col gap-2 w-full">
//                   <label className="text-[18px] text-zinc-400 font-medium tracking-wide">
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Enter your name"
//                     disabled={submissionStatus === "PROCESSING"}
//                     className="w-full bg-zinc-900/30 border border-zinc-800 focus:ring-2 focus:ring-[#E24C60] rounded-[15px] px-4 py-3 text-[17px] text-zinc-200 outline-none transition-all duration-200 placeholder-zinc-600 disabled:opacity-40"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-2 w-full">
//                   <label className="text-[18px] text-zinc-400 font-medium tracking-wide">
//                     Your Email
//                   </label>
//                   <input
//                     type="text"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="Enter your email"
//                     disabled={submissionStatus === "PROCESSING"}
//                     className="w-full bg-zinc-900/30 border border-zinc-800 focus:ring-2 focus:ring-[#E24C60] rounded-[15px] px-4 py-3 text-[17px] text-zinc-200 outline-none transition-all duration-200 placeholder-zinc-600 disabled:opacity-40"
//                   />
//                 </div>

//                 <div className="flex flex-col gap-2 w-full">
//                   <label className="text-[18px] text-zinc-400 font-medium tracking-wide">
//                     Message
//                   </label>
//                   <textarea
//                     name="message"
//                     rows={5}
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Tell me about your project or opportunity..."
//                     disabled={submissionStatus === "PROCESSING"}
//                     className="w-full bg-zinc-900/30 border border-zinc-800 focus:ring-2 focus:ring-[#E24C60] rounded-[15px] px-4 py-3 text-[17px] text-zinc-200 outline-none transition-all duration-200 placeholder-zinc-600 resize-none h-32 disabled:opacity-40"
//                   />
//                 </div>

//                 <AnimatePresence>
//                   {submissionStatus !== "IDLE" && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className={`text-[11px] font-bold w-full py-2.5 px-4 rounded-lg border font-mono tracking-wider transition-all duration-300 ${
//                         submissionStatus === "ERROR"
//                           ? "bg-red-500/5 text-red-400 border-red-500/20"
//                           : submissionStatus === "SUCCESS"
//                             ? "bg-emerald-500/5 text-emerald-400 border-emerald-500/20"
//                             : "bg-zinc-900/90 text-amber-500 border-zinc-800"
//                       }`}
//                     >
//                       STATUS_LOG // {consoleLog}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 <button
//                   type="submit"
//                   disabled={submissionStatus === "PROCESSING"}
//                   className="w-full rounded-[15px] bg-[#E24C60] hover:bg-red-600 text-white font-bold text-[14px] tracking-wide inline-flex items-center justify-center gap-2 py-3.5 mt-2 transition-all duration-300 shadow-lg shadow-red-950/10 cursor-pointer disabled:opacity-50"
//                 >
//                   {submissionStatus === "PROCESSING" ? (
//                     <>
//                       <FaTerminal className="animate-spin text-xs" />
//                       <span>Processing Payload...</span>
//                     </>
//                   ) : submissionStatus === "ERROR" ? (
//                     <>
//                       <FaExclamationTriangle className="text-xs" />
//                       <span>Retry Dispatch</span>
//                     </>
//                   ) : submissionStatus === "SUCCESS" ? (
//                     <>
//                       <FaCheckCircle className="text-xs" />
//                       <span>Stream Dispatched</span>
//                     </>
//                   ) : (
//                     <>
//                       <FaPaperPlane className="text-base" />
//                       <span>Send Message</span>
//                     </>
//                   )}
//                 </button>

//                 <span className="text-[15px] text-zinc-500 font-normal text-center mt-1 block">
//                   Your message will be sent directly to my inbox
//                 </span>
//               </form>
//             </div>

//             {/* RIGHT CONTAINER: DIRECT COMM CARDS */}
//             <div className="lg:col-span-5 flex flex-col gap-6 w-full">
//               {/* CARD 1: DIRECT CONTACT */}
//               <div className="bg-[#0b0b0d]/90 border border-zinc-900 rounded-[20px] p-6 shadow-2xl flex flex-col">
//                 <h4 className="text-2xl font-bold text-white mb-4 tracking-wide">
//                   Direct Contact
//                 </h4>
//                 <div className="flex flex-col gap-3.5">
//                   <div className="flex items-center justify-between p-3.5 bg-zinc-900/30 border border-zinc-900/60 rounded-[12px] group hover:border-zinc-800 transition-colors">
//                     <div className="flex items-center gap-3.5">
//                       <div className="w-10 h-10 rounded-[10px] bg-[#E24C60]/5 border border-[#E24C60]/10 flex items-center justify-center text-[#E24C60] shadow-inner">
//                         <FaEnvelope className="text-base" />
//                       </div>
//                       <div>
//                         <div className="text-[13px] text-zinc-500 font-bold uppercase mb-0.5">
//                           Email
//                         </div>
//                         <div className="text-[13px] text-zinc-300 font-medium">
//                           mrkumarrr12@gmail.com
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between p-3.5 bg-zinc-900/30 border border-zinc-900/60 rounded-[12px] group hover:border-zinc-800 transition-colors">
//                     <div className="flex items-center gap-3.5">
//                       <div className="w-10 h-10 rounded-[10px] bg-[#E24C60]/5 border border-[#E24C60]/10 flex items-center justify-center text-[#E24C60] shadow-inner">
//                         <FaPhoneAlt className="text-base" />
//                       </div>
//                       <div>
//                         <div className="text-[13px] text-zinc-500 font-bold uppercase mb-0.5">
//                           Phone
//                         </div>
//                         <div className="text-[13px] text-zinc-300 font-medium">
//                           (+91) 80 8401 8064
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between p-3.5 bg-zinc-900/30 border border-zinc-900/60 rounded-[12px] group hover:border-zinc-800 transition-colors">
//                     <div className="flex items-center gap-3.5">
//                       <div className="w-10 h-10 rounded-[10px] bg-[#E24C60]/5 border border-[#E24C60]/10 flex items-center justify-center text-[#E24C60] shadow-inner">
//                         <FaMapMarkerAlt className="text-base" />
//                       </div>
//                       <div>
//                         <div className="text-[13px] text-zinc-500 font-bold uppercase mb-0.5">
//                           Location
//                         </div>
//                         <div className="text-[13px] text-zinc-300 font-medium">
//                           Bhopal, Madhya Pradesh
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* CARD 2: CONNECT ONLINE */}
//               <div className="bg-[#0b0b0d]/90 border border-zinc-900 rounded-[20px] p-6 shadow-2xl flex flex-col">
//                 <h4 className="text-[20px] font-serif text-white mb-4 tracking-wide">
//                   Connect Online
//                 </h4>
//                 <div className="grid grid-cols-2 gap-4 ">
//                   <a
//                     href="https://github.com/justkmr"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex items-center justify-center gap-4 py-3 bg-zinc-900/30 border border-zinc-900 rounded-[12px] text-zinc-300 text-base font-semibold hover:border-zinc-800 hover:bg-[#E24C60]/30 hover:border-[#E24C60]/20 transition-all"
//                   >
//                     <FaGithub className="text-[20px] " /> GitHub
//                   </a>
//                   <a
//                     href="https://linkedin.com"
//                     target="_blank"
//                     rel="noreferrer"
//                     className="flex items-center justify-center gap-4 py-3 bg-zinc-900/30 border border-zinc-900 rounded-[12px] text-zinc-300 text-base font-semibold hover:border-zinc-800 hover:bg-[#E24C60]/30 hover:border-[#E24C60]/20 transition-all"
//                   >
//                     <FaLinkedin className="text-[20px]" /> LinkedIn
//                   </a>
//                 </div>
//               </div>

//               {/* CARD 3: OPEN TO WORK */}
//               <div className="bg-[#0b0b0d]/90 border border-zinc-900 rounded-[20px] p-6 shadow-2xl flex flex-col relative overflow-hidden group">
//                 <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#E24C60]/20 to-transparent" />
//                 <div className="flex items-center gap-5 mb-3">
//                   <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
//                   <span className="text-[17px] font-serif font-bold text-[#E24C60] tracking-wide">
//                     Open to Work
//                   </span>
//                 </div>
//                 <p className="text-[17px] text-zinc-400 leading-relaxed font-normal">
//                   Currently seeking internship opportunities as a Mern Full
//                   Stack Developer. Available to start immediately.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import {
  FaEnvelope,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { useState, useCallback } from "react";

export default function Contact() {
  // 🔒 ENVIRONMENT KEY REGISTRATION
  const WEB3FORMS_ACCESS_KEY =
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

  // 🎛️ Local State Matrix
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // 📡 CLEAN & EFFECTIVE FETCH NETWORK DISPATCH WITH AUTO-CLEAR
  const handleFormSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Reset triggers on new submission attempt
      setSuccessMessage("");
      setErrorMessage("");

      // Guard Clauses for Validation
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.message.trim()
      ) {
        setErrorMessage("Please fill in all fields.");
        // Auto-clear validation error after 4 seconds
        setTimeout(() => setErrorMessage(""), 4000);
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setErrorMessage("Please enter a valid email address.");
        // Auto-clear validation error after 4 seconds
        setTimeout(() => setErrorMessage(""), 4000);
        return;
      }

      if (!WEB3FORMS_ACCESS_KEY) {
        setErrorMessage("Configuration Error: Access Key missing.");
        return;
      }

      setIsSubmitting(true);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name: formData.name.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
            from_name: `${formData.name.trim()} (Portfolio Link)`,
            subject: `New Portfolio Message from ${formData.name.trim()}`,
          }),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setSuccessMessage(
            "Thank you! Your message has been sent successfully.",
          );
          setFormData({ name: "", email: "", message: "" });

          // 🔴 FIXED: 4 seconds baad success message automatic gayab ho jayega
          setTimeout(() => {
            setSuccessMessage("");
          }, 4000);
        } else {
          throw new Error(result.message || "Failed to submit.");
        }
      } catch (error: any) {
        setErrorMessage(
          error.message || "Something went wrong. Please try again.",
        );
        // Auto-clear network errors after 4 seconds too
        setTimeout(() => setErrorMessage(""), 4000);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, WEB3FORMS_ACCESS_KEY],
  );

  return (
    <section
      id="contact"
      className="w-full mt-10 border-t border-zinc-900 relative z-10 pt-10 pb-10 font-sans select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
        <div className="w-full text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E24C60]/5 border border-[#E24C60]/20 mb-4 shadow-inner">
            <span className="text-[16px] font-semibold text-[#E24C60] tracking-wide">
              Available for Opportunities
            </span>
          </div>

          <h2 className="text-6xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            Get In Touch
          </h2>

          <p className="text-xl md:text-2xl text-zinc-400 max-w-xl mx-auto leading-relaxed font-normal">
            Looking for a Full Stack Developer? Let&apos;s connect and discuss
            how I can contribute to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full max-w-6xl mx-auto mb-20 font-serif">
          {/* LEFT CONTAINER: FORM */}
          <div className="lg:col-span-7 border border-zinc-900 rounded-[20px] p-6 md:p-8 shadow-2xl flex flex-col">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-wide ">
              Send a <span className="text-[#E24C60]">Message</span>
            </h3>

            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-5 w-full"
            >
              <div className="flex flex-col gap-2 w-full">
                <label className="text-[18px] text-zinc-400 font-medium tracking-wide">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  disabled={isSubmitting}
                  className="w-full bg-zinc-900/30 border border-zinc-800 focus:ring-2 focus:ring-[#E24C60] rounded-[15px] px-4 py-3 text-[17px] text-zinc-200 outline-none transition-all duration-200 placeholder-zinc-600 disabled:opacity-40"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-[18px] text-zinc-400 font-medium tracking-wide">
                  Your Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                  className="w-full bg-zinc-900/30 border border-zinc-800 focus:ring-2 focus:ring-[#E24C60] rounded-[15px] px-4 py-3 text-[17px] text-zinc-200 outline-none transition-all duration-200 placeholder-zinc-600 disabled:opacity-40"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-[18px] text-zinc-400 font-medium tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  disabled={isSubmitting}
                  className="w-full bg-zinc-900/30 border border-zinc-800 focus:ring-2 focus:ring-[#E24C60] rounded-[15px] px-4 py-3 text-[17px] text-zinc-200 outline-none transition-all duration-200 placeholder-zinc-600 resize-none h-32 disabled:opacity-40"
                />
              </div>

              {errorMessage && (
                <div className="text-[14px] font-medium text-red-400 bg-red-500/5 border border-red-500/20 py-2.5 px-4 rounded-lg font-mono transition-all duration-300">
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div className="text-[14px] font-medium text-emerald-400 bg-emerald-500/5 border border-emerald-500/20 py-2.5 px-4 rounded-lg font-mono transition-all duration-300">
                  {successMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-[15px] bg-[#E24C60] hover:bg-red-600 text-white font-bold text-[15px] tracking-wide inline-flex items-center justify-center gap-2 py-3.5 mt-2 transition-all duration-300 shadow-lg shadow-red-950/10 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <span className="text-[15px] text-zinc-500 font-normal text-center mt-1 block">
                Your message will be sent directly to my inbox
              </span>
            </form>
          </div>

          <div className="lg:col-span-5 font-serif flex flex-col gap-6 w-full">
            <div className="bg-[#0b0b0d]/90 border border-zinc-900 rounded-[20px] p-6 shadow-2xl flex flex-col">
              <h4 className="text-2xl font-bold  mb-4 tracking-wide">
                Direct <span className="text-[#E24C60]">Contact</span>
              </h4>
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center justify-between p-3.5 bg-zinc-900/30 border border-zinc-900/60 rounded-[12px] group hover:border-zinc-800 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-[10px] bg-[#E24C60]/5 border border-[#E24C60]/10 flex items-center justify-center text-[#E24C60] shadow-inner">
                      <FaEnvelope className="text-base" />
                    </div>
                    <div>
                      <div className="text-[13px] text-zinc-500 font-bold uppercase mb-0.5">
                        Email
                      </div>
                      <div className="text-[15px] text-zinc-300 font-medium tracking-wider">
                        mrkumarrr12@gmail.com
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-zinc-900/30 border border-zinc-900/60 rounded-[12px] group hover:border-zinc-800 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-[10px] bg-[#E24C60]/5 border border-[#E24C60]/10 flex items-center justify-center text-[#E24C60] shadow-inner">
                      <FaPhoneAlt className="text-base" />
                    </div>
                    <div>
                      <div className="text-[13px] text-zinc-500 font-bold uppercase mb-0.5">
                        Phone
                      </div>
                      <div className="text-[15px] text-zinc-300 font-medium tracking-wider">
                        (+91) 80 8401 8064
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-zinc-900/30 border border-zinc-900/60 rounded-[12px] group hover:border-zinc-800 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-[10px] bg-[#E24C60]/5 border border-[#E24C60]/10 flex items-center justify-center text-[#E24C60] shadow-inner">
                      <FaMapMarkerAlt className="text-base" />
                    </div>
                    <div>
                      <div className="text-[13px] text-zinc-500 font-bold uppercase mb-0.5">
                        Location
                      </div>
                      <div className="text-[15px] text-zinc-300 font-medium tracking-wider">
                        Bhopal, Madhya Pradesh
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0b0b0d]/90 border border-zinc-900 rounded-[20px] p-6 shadow-2xl flex flex-col">
              <h4 className="text-[20px] font-serif text-white mb-4 tracking-wide">
                Connect Online
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/justkmr"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-4 py-3 bg-zinc-900/30 border border-zinc-900 rounded-[12px] text-zinc-300 text-base font-semibold hover:bg-[#E24C60]/30 transition-all"
                >
                  <FaGithub className="text-[20px]" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/pintu-kumar-12x"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-4 py-3 bg-zinc-900/30 border border-zinc-900 rounded-[12px] text-zinc-300 text-base font-semibold hover:bg-[#E24C60]/30 transition-all"
                >
                  <FaLinkedin className="text-[20px]" /> LinkedIn
                </a>
              </div>
            </div>

            <div className="bg-[#0b0b0d]/90 border border-zinc-900 rounded-[20px] p-6 shadow-2xl flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[1.5px] bg-linear-to-r from-transparent via-[#E24C60]/20 to-transparent" />
              <div className="flex items-center gap-5 mb-3">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
                <span className="text-[17px] font-serif font-bold text-[#E24C60] tracking-wide">
                  Open to Work
                </span>
              </div>
              <p className="text-[17px] text-zinc-400 leading-relaxed font-normal">
                Currently seeking internship opportunities as a Mern Full Stack
                Developer. Available to start immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
