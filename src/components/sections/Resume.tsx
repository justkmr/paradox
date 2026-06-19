// "use client";

// import {
//   FaBriefcase,
//   FaGraduationCap,
//   FaAward,
//   FaCertificate,
//   FaFilePdf,
//   FaDownload,
//   FaTerminal,
//   FaCheckCircle,
//   FaExclamationTriangle,
// } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useState, useCallback } from "react";

// interface JobProjectLog {
//   id: string;
//   role: string;
//   projectName: string;
//   type: string;
//   duration: string;
//   location: string;
//   points: string[];
// }

// interface CertLogItem {
//   name: string;
//   provider: string;
//   timeline: string;
//   desc: string;
// }

// interface AwardLogItem {
//   id: string;
//   title: string;
//   category: string;
//   year: string;
//   institution: string;
//   achievementText: string;
//   details: string;
// }

// const PROJECT_EXPERIENCE_DATA: JobProjectLog[] = [
//   {
//     id: "01",
//     role: "Frontend Developer",
//     projectName: "Food Website Project",
//     type: "Personal Project",
//     duration: "January 2024 - February 2024",
//     location: "Bhopal, Madhya Pradesh",
//     points: [
//       "Developed a high-performance food website using HTML5, CSS3, and JavaScript with a focus on modern UI/UX.",
//       "Implemented smooth, scroll-triggered animations and reveal effects using Framer Motion for an interactive user experience.",
//       "Integrated SwiperJS to create responsive, touch-enabled hero and category sliders for seamless navigation.",
//       "Optimized website performance and load times by ensuring clean code structure and efficient asset management.",
//       "Designed a fully responsive layout with modern CSS techniques like Flexbox and Grid for all screen sizes.",
//     ],
//   },
//   {
//     id: "02",
//     role: "Backend Developer",
//     projectName: "Quora Post Project",
//     type: "Personal Project",
//     duration: "May 2024 - May 2024",
//     location: "Bhopal, Madhya Pradesh",
//     points: [
//       "Architected a robust server-side application using Node.js and Express.js framework.",
//       "Developed dynamic web pages using EJS template engine to render data efficiently from the server.",
//       "Implemented RESTful API endpoints for seamless data flow and business logic handling.",
//       "Integrated middleware for request parsing, error handling, and security best practices.",
//       "Managed server-side state and logic to ensure smooth user flow without heavy client-side reliance.",
//     ],
//   },
//   {
//     id: "03",
//     role: "Full-Stack Developer",
//     projectName: "VibeStream - Music Platform",
//     type: "Personal Project",
//     duration: "December 2024 - January 2025",
//     location: "Bhopal, Madhya Pradesh",
//     points: [
//       "Architected a high-performance music streaming platform using Next.js (App Router) for optimized server-side rendering and routing.",
//       "Crafted a visually stunning and immersive UI using Aceternity UI and Tailwind CSS, focusing on modern aesthetics and dark-themed components.",
//       "Integrated Framer Motion to create fluid interface transitions, including smooth hover effects and interactive player animations.",
//       "Implemented responsive music playback controls and dynamic song categorization for a seamless user experience across devices.",
//       "Leveraged Next.js API routes for efficient data fetching and state management to handle real-time UI updates during music playback.",
//     ],
//   },
//   {
//     id: "04",
//     role: "Full-Stack MERN Developer",
//     projectName: "RadiAntiX Job Search",
//     type: "Personal Project",
//     duration: "September 2025 - December 2025",
//     location: "Bhopal, Madhya Pradesh",
//     points: [
//       "Engineered a full-stack web application using React.js and Node.js/Express with a focus on scalable architecture.",
//       "Implemented secure User Authentication using JSON Web Tokens (JWT) and Bcryptjs for password hashing.",
//       "Integrated Cloudinary, Multer, and DataURI for seamless image upload and cloud-based media management.",
//       "Designed a modern UI using Tailwind CSS and Shadcn UI, managing global state efficiently with Redux Toolkit.",
//       "Architected a robust database schema with MongoDB and Mongoose, ensuring data integrity and optimized query performance.",
//       "Utilized Cookie-parser for secure session handling and CORS for cross-origin resource sharing management.",
//     ],
//   },
//   {
//     id: "05",
//     role: "Full-Stack Next.js Developer",
//     projectName: "ZestCo Grocery Ecosystem",
//     type: "Personal Project",
//     duration: "January 2026 - April 2026",
//     location: "Bhopal, Madhya Pradesh",
//     points: [
//       "Engineered a high-performance grocery delivery platform using Next.js 15 and Turbopack for optimized server-side rendering (SSR).",
//       "Architected a real-time tracking system with Socket.io and WebSockets to provide live delivery updates and instant chat support.",
//       "Implemented Secure Role-Based Access Control (RBAC) using Auth.js (NextAuth v5) for Admin, User, and Delivery Boy dashboards.",
//       "Integrated Stripe Payment Gateway with automated Webhook handling to ensure secure and robust transaction management.",
//       "Designed a responsive, mobile-first UI using Tailwind CSS, Shadcn UI, and Framer Motion for smooth, interactive user experiences.",
//       "Managed complex database relationships with MongoDB Atlas and Mongoose, utilizing ObjectIds for optimized data retrieval and integrity.",
//     ],
//   },
// ];

// const CERTIFICATIONS_DATA: CertLogItem[] = [
//   {
//     name: "Full Stack Development",
//     provider: "Apna College",
//     timeline: "2024-2025",
//     desc: "Next.js 16, React 19, TailwindCSS, Modern JavaScript Redux & Next.js RESTful APIs development expertise demonstrated through multiple projects.",
//   },
//   {
//     name: "C & C++",
//     provider: "Excellence Academics Coaching Center",
//     timeline: "2023",
//     desc: "C & C++ using through CodeHub and NatureGrain projects.",
//   },
// ];

// const AWARDS_DATA: AwardLogItem[] = [
//   {
//     id: "01",
//     title: "Social Welfare Activities",
//     category: "Welfare Scheme",
//     year: "2022",
//     institution: "Bishnugarh Inter College of Science, Hazaribagh (Jharkhand)",
//     achievementText: "Recognizes the Best Student in College",
//     details:
//       "Led a team for Social Welfare Activities during Inter College organizing and managing communities initiatives.",
//   },
//   {
//     id: "02",
//     title: "Debate Activities",
//     category: "Debate Competition",
//     year: "2024",
//     institution:
//       "Patel College of Science & Technology, Bhopal (Madhya Pradesh)",
//     achievementText: "Achievement: ₹ 15,000/",
//     details:
//       "Second-year excellence recognition in Debate Competition program.",
//   },
//   {
//     id: "03",
//     title: "Web Development",
//     category: "Website Building",
//     year: "2025",
//     institution:
//       "Patel College of Science & Technology, Bhopal (Madhya Pradesh)",
//     achievementText: "Secured 1st position",
//     details:
//       "Awarded for secured top position among 15 students in the University Web Development Projects.",
//   },
//   {
//     id: "04",
//     title: "Full Stack Web Development",
//     category: "Website Building",
//     year: "2026",
//     institution:
//       "Patel College of Science & Technology, Bhopal (Madhya Pradesh)",
//     achievementText: "Secured 2nd position",
//     details:
//       "Awarded for secured top position among 20 students in the University for Full Stack Web Development Projects & PPT Presentation.",
//   },
// ];

// const gridContainerConfig = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.18 } },
// };

// const terminalCardReveal = {
//   hidden: {
//     opacity: 0,
//     clipPath: "inset(40% 0% 40% 0%)",
//     filter: "brightness(0.3) contrast(1.5)",
//   },
//   visible: {
//     opacity: 1,
//     clipPath: "inset(0% 0% 0% 0%)",
//     filter: "brightness(1) contrast(1)",
//     transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] },
//   },
// };

// export default function Resume() {
//   const [downloadStatus, setDownloadStatus] = useState<
//     "IDLE" | "FETCHING" | "SUCCESS" | "ERROR"
//   >("IDLE");
//   const [protocolMessage, setProtocolMessage] = useState<string>("");

//   const handleDownloadPDF = useCallback(async () => {
//     if (downloadStatus === "FETCHING") return;

//     setDownloadStatus("FETCHING");
//     setProtocolMessage("INITIATING HTTP GET REQUEST...");

//     try {
//       const response = await fetch("/documents/kumarrR.pdf", {
//         method: "GET",
//         headers: {
//           "Cache-Control": "no-cache",
//         },
//       });

//       if (response.status === 200) {
//         setProtocolMessage("200 OK: STREAMING RAW BINARY ARTIFACT...");

//         const blob = await response.blob();
//         const downloadUrl = window.URL.createObjectURL(blob);

//         const link = document.createElement("a");
//         link.href = downloadUrl;
//         link.download = "kumarrR.pdf";

//         document.body.appendChild(link);
//         link.click();

//         document.body.removeChild(link);
//         window.URL.revokeObjectURL(downloadUrl);

//         setDownloadStatus("SUCCESS");
//         setProtocolMessage("COMPLETED // DISPATCH_SUCCESSFUL");

//         setTimeout(() => setDownloadStatus("IDLE"), 4000);
//       } else if (response.status === 404) {
//         throw new Error("HTTP_ERR_404 // ASSET_NOT_FOUND_ON_SERVER");
//       } else {
//         throw new Error(`HTTP_ERR_${response.status} // SERVER_PIPELINE_FAULT`);
//       }
//     } catch (error: any) {
//       console.error("Transmission Protocol Fault:", error);
//       setDownloadStatus("ERROR");
//       setProtocolMessage(error.message || "NET::ERR_CONNECTION_REFUSED");

//       setTimeout(() => setDownloadStatus("IDLE"), 5000);
//     }
//   }, [downloadStatus]);

//   return (
//     <section
//       id="resume"
//       className="w-full p-5 bg-transparent relative z-10 border-t border-white/5 scroll-mt-24 font-mono select-none overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

//       <div className="text-center mb-16 relative z-10">
//         <motion.div
//           className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900/60 border border-neutral-700/50 mb-8 backdrop-blur-md"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <FaFilePdf className="w-6 h-6 text-[#E24C60]" />
//           <span className="text-lg font-semibold text-neutral-300">
//             Professional Resume
//           </span>
//         </motion.div>

//         <motion.h1
//           className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-white"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//         >
//           My <span className="gradient-text text-[#E24C60]">Resume</span>
//         </motion.h1>

//         <motion.div
//           className="w-24 h-1.5 bg-linear-to-r from-red-500 to-red-600 mx-auto mb-8 rounded-full"
//           initial={{ width: 0 }}
//           animate={{ width: 96 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         />

//         <motion.p
//           className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           Download my complete resume or view it online to learn more about my
//           professional experience, skills, and achievements.
//         </motion.p>
//       </div>

//       <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
//         <motion.div
//           initial={{ opacity: 0, letterSpacing: "-0.05em" }}
//           whileInView={{ opacity: 1, letterSpacing: "0.02em" }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="w-full text-center mb-20 flex flex-col items-center"
//         >
//           <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-neutral-700/50 mb-6">
//             <FaBriefcase className="w-5 h-5 text-red-400" />
//             <span className="text-lg font-semibold text-neutral-300">
//               Work Experience
//             </span>
//           </div>

//           <h3 className="text-4xl md:text-6xl font-black text-[#E24C60] tracking-tighter uppercase relative">
//             Professional Journey
//             <span className="absolute -inset-x-2 top-0 h-full bg-linear-to-r from-transparent via-[#E24C60]/5 to-transparent blur-md opacity-30 pointer-events-none" />
//           </h3>
//         </motion.div>

//         <motion.div
//           variants={gridContainerConfig}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="flex flex-col gap-8 w-full mb-32"
//         >
//           {PROJECT_EXPERIENCE_DATA.map((job: JobProjectLog) => (
//             <motion.div
//               key={job.id}
//               variants={terminalCardReveal}
//               whileHover={{
//                 scale: 1.005,
//                 borderColor: "rgba(226, 76, 96, 0.35)",
//                 boxShadow: "0 25px 60px -20px rgba(226, 76, 96, 0.03)",
//               }}
//               className="w-full bg-[#050506]/95 border border-zinc-900 rounded-[16px] p-6 md:p-8 flex flex-col shadow-2xl transition-all duration-300 relative group/card overflow-hidden"
//             >
//               <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#E24C60]/40 to-transparent translate-y-[-100%] group-hover/card:animate-[scan_2s_linear_infinite] pointer-events-none" />

//               <div className="w-full flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-zinc-900/60 pb-5 mb-5 relative z-10 overflow-hidden">
//                 <div className="flex flex-col items-start w-full md:max-w-[65%] min-w-0">
//                   <h4 className="text-[19px] md:text-2xl font-black text-white tracking-wide break-words w-full">
//                     {job.role}{" "}
//                     <span className="text-zinc-600 font-medium text-base md:text-lg block md:inline-block break-words">
//                       ({job.projectName})
//                     </span>
//                   </h4>
//                   <div className="flex items-center gap-2 mt-2">
//                     <span className="text-[15px] px-2.5 py-2 rounded-[12px] bg-zinc-900 border border-zinc-800 text-[#E24C60] font-black uppercase tracking-wider whitespace-nowrap">
//                       {job.type}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex flex-col items-start md:items-end justify-start shrink-0 font-mono w-full md:w-auto mt-1 md:mt-0 min-w-0">
//                   <div className="w-full md:w-auto flex flex-wrap">
//                     <span className="text-[17px] md:text-[16px] text-[#E24C60] font-bold bg-zinc-900/60 border border-zinc-800/80 rounded-[12px] px-3 py-1 text-left md:text-right break-words tracking-tight leading-relaxed max-w-full">
//                       {job.duration}
//                     </span>
//                   </div>
//                   <span className="text-[14px] text-zinc-500 font-bold tracking-wide mt-2 block text-left md:text-right w-full md:w-auto">
//                     {job.location}
//                   </span>
//                 </div>
//               </div>

//               <ul className="flex flex-col gap-4 w-full relative z-10">
//                 {job.points.map((point: string, idx: number) => (
//                   <motion.li
//                     key={idx}
//                     initial={{ opacity: 0, x: -10 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: idx * 0.08, duration: 0.4 }}
//                     className="flex items-start gap-4 text-zinc-400 text-[13px] leading-relaxed group/li"
//                   >
//                     <span className="w-1 h-1 rounded-full bg-[#E24C60] shrink-0 mt-2 shadow-[0_0_8px_#E24C60] group-hover/li:scale-150 transition-transform" />
//                     <p className="normal-case font-sans font-normal text-zinc-300/90 group-hover/li:text-white transition-colors text-[17px]">
//                       {point}
//                     </p>
//                   </motion.li>
//                 ))}
//               </ul>
//             </motion.div>
//           ))}
//         </motion.div>

//         <motion.div
//           variants={gridContainerConfig}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full border-t border-zinc-900 pt-24"
//         >
//           <motion.div
//             variants={terminalCardReveal}
//             className="flex flex-col gap-6 w-full"
//           >
//             <div className="flex flex-col items-center lg:items-start w-full mb-4 text-center lg:text-left">
//               <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/60 border border-zinc-800/80 rounded-full mb-3 shadow-inner">
//                 <FaGraduationCap className="text-[30px] text-[#E24C60]" />
//                 <span className="text-[18px] font-black tracking-wider text-zinc-400 uppercase">
//                   Education
//                 </span>
//               </div>
//               <h4 className="text-2xl font-black text-[#E24C60] tracking-tighter uppercase">
//                 Academic Background
//               </h4>
//             </div>

//             <div className="w-full bg-[#050506]/95 border border-zinc-900 rounded-[16px] p-6 shadow-2xl hover:border-zinc-800 transition-all duration-300 group/edu relative overflow-hidden">
//               <h5 className="text-[20px] font-black text-white tracking-wide transition-colors">
//                 Bachelor of Software Engineering
//               </h5>
//               <p className="text-[16px] font-bold text-[#E24C60] mt-2 leading-snug font-sans">
//                 Patel College of Science & Technology,
//                 <br />
//                 Bhopal (Madhya Pradesh)
//               </p>

//               <div className="flex flex-col gap-1 mt-4 border-y border-zinc-900/60 py-3 my-4 text-[16px] font-bold">
//                 <span className="text-zinc-400 font-medium">
//                   August 2022 - Present
//                 </span>
//                 <span className="text-zinc-400 font-medium">
//                   Bhopal, Madhya Pradesh
//                 </span>
//               </div>

//               <div className="text-[16px] font-black text-white tracking-wide mb-4">
//                 GPA:{" "}
//                 <span className="text-[#E24C60] text-base bg-zinc-900 border border-zinc-800/60 px-3 py-1.5 rounded-[12px] shadow-inner">
//                   7.44/10
//                 </span>
//               </div>

//               <p className="text-zinc-400 text-[16px] font-sans font-normal leading-relaxed normal-case border-t border-zinc-900/40 pt-4">
//                 Final-year Software Engineering student with solid experience in
//                 Mern Full Stack development. Passionate about backend
//                 development, database design, and building scalable
//                 applications.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             variants={terminalCardReveal}
//             className="flex flex-col gap-6 w-full"
//           >
//             <div className="flex flex-col items-center lg:items-start w-full mb-4 text-center lg:text-left">
//               <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/60 border border-zinc-800/80 rounded-full mb-3 shadow-inner">
//                 <FaCertificate className="text-[30px] text-[#E24C60]" />
//                 <span className="text-[18px] font-black tracking-wider text-zinc-400 uppercase">
//                   Certifications
//                 </span>
//               </div>
//               <h4 className="text-2xl font-black text-[#E24C60] tracking-tighter uppercase">
//                 Professional Certifications
//               </h4>
//             </div>

//             <motion.div
//               variants={gridContainerConfig}
//               className="flex flex-col gap-4 w-full"
//             >
//               {CERTIFICATIONS_DATA.map((cert: CertLogItem, index: number) => (
//                 <motion.div
//                   key={index}
//                   variants={terminalCardReveal}
//                   className="w-full bg-[#050506]/95 border border-zinc-900 rounded-[16px] p-6 shadow-2xl hover:border-zinc-800 transition-all duration-300 group/cert relative overflow-hidden"
//                 >
//                   <div className="flex items-start gap-2 text-white font-black text-[18px] transition-colors group-hover/cert:text-[#E24C60]">
//                     <FaAward className="text-[#E24C60] text-[25px] shrink-0" />
//                     <span className="tracking-wide leading-tight uppercase">
//                       {cert.name}
//                     </span>
//                   </div>
//                   <div className="text-[16px] text-zinc-500 font-bold mt-1">
//                     {cert.provider} •{" "}
//                     <span className="text-zinc-400 font-medium">
//                       {cert.timeline}
//                     </span>
//                   </div>
//                   <p className="text-zinc-400 font-sans font-normal text-[16px] leading-relaxed normal-case mt-4 border-t border-zinc-900/40 pt-3">
//                     {cert.desc}
//                   </p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>

//           <motion.div
//             variants={terminalCardReveal}
//             className="flex flex-col gap-6 w-full"
//           >
//             <div className="flex flex-col items-center lg:items-start w-full mb-4 text-center lg:text-left">
//               <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/60 border border-zinc-800/80 rounded-full mb-3 shadow-inner">
//                 <FaAward className="text-[30px] text-[#E24C60]" />
//                 <span className="text-[18px] font-black tracking-wider text-zinc-400 uppercase">
//                   Awards & Scholarships
//                 </span>
//               </div>
//               <h4 className="text-2xl font-black text-[#E24C60] tracking-tighter uppercase">
//                 Awards & Recognition
//               </h4>
//             </div>

//             <motion.div
//               variants={gridContainerConfig}
//               className="flex flex-col gap-4 w-full"
//             >
//               {AWARDS_DATA.map((award: AwardLogItem) => (
//                 <motion.div
//                   key={award.id}
//                   variants={terminalCardReveal}
//                   className="w-full bg-[#050506]/95 border border-zinc-900 rounded-[16px] p-5 shadow-2xl relative overflow-hidden hover:border-zinc-800 transition-all duration-300 group/award"
//                 >
//                   <div className="flex items-start gap-3">
//                     <div className="w-10 h-10 rounded-[13px] bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 text-[#E24C60] shadow-inner group-hover/award:bg-[#E24C60] group-hover/award:text-black transition-colors duration-300">
//                       <FaAward className="text-[28px]" />
//                     </div>

//                     <div className="flex flex-col grow">
//                       <div className="w-full flex items-center justify-between gap-2">
//                         <h5 className="text-[18px] font-black text-white tracking-tight group-hover/award:text-[#E24C60] transition-colors uppercase">
//                           {award.title}
//                         </h5>
//                         <span className="text-[15px] font-black text-zinc-600 shrink-0 font-mono">
//                           {award.year}
//                         </span>
//                       </div>
//                       <span className="text-[16px] font-bold text-zinc-500 tracking-wider mt-0.5 uppercase">
//                         {award.category}
//                       </span>

//                       <div className="text-[15px] text-zinc-500 mt-2.5 border-t border-zinc-900/60 pt-2.5 font-mono leading-tight">
//                         <span className="text-zinc-400 block text-[18px] font-bold mb-0.5 uppercase">
//                           Institution:
//                         </span>{" "}
//                         {award.institution}
//                       </div>

//                       <div className="text-[12px] font-black text-[#E24C60] tracking-widest uppercase mt-3 bg-[#E24C60]/5 px-2.5 py-1 rounded-[12px] border border-red-500/10 inline-block self-start shadow-inner">
//                         {award.achievementText}
//                       </div>

//                       <p className="text-zinc-400 font-sans font-normal text-[16px] leading-relaxed normal-case mt-3 border-t border-zinc-900/40 pt-2.5">
//                         {award.details}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         <motion.div
//           className={`text-center bg-zinc-900/40 rounded-[20px] mt-10 p-12 border transition-all duration-500 backdrop-blur-md ${
//             downloadStatus === "ERROR"
//               ? "border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.05)]"
//               : downloadStatus === "SUCCESS"
//                 ? "border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.05)]"
//                 : "border-neutral-700/50"
//           }`}
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <motion.div
//             className={`w-16 h-16 rounded-[12px] flex items-center justify-center mx-auto mb-6 shadow-lg transition-colors duration-300 ${
//               downloadStatus === "ERROR"
//                 ? "bg-red-500/20 text-red-400"
//                 : downloadStatus === "SUCCESS"
//                   ? "bg-emerald-500/20 text-emerald-400"
//                   : "bg-linear-to-r from-red-500 to-red-600 text-neutral-400"
//             }`}
//             animate={
//               downloadStatus === "FETCHING"
//                 ? { scale: [1, 1.1, 1], rotate: [0, 360] }
//                 : {}
//             }
//             transition={
//               downloadStatus === "FETCHING"
//                 ? { repeat: Infinity, duration: 1.5 }
//                 : {}
//             }
//           >
//             {downloadStatus === "ERROR" ? (
//               <FaExclamationTriangle className="text-2xl" />
//             ) : downloadStatus === "SUCCESS" ? (
//               <FaCheckCircle className="text-2xl" />
//             ) : (
//               <FaDownload className="text-3xl text-neutral-400" />
//             )}
//           </motion.div>

//           <h3 className="text-3xl font-bold text-neutral-100 mb-4">
//             {downloadStatus === "ERROR"
//               ? "Transmission Interrupted"
//               : downloadStatus === "SUCCESS"
//                 ? "Secure Stream Dispatched!"
//                 : "Ready to collaborate?"}
//           </h3>

//           <p className="text-neutral-400 text-lg mb-4 max-w-2xl mx-auto">
//             {downloadStatus === "ERROR"
//               ? "The server failed to stream the compiled resume PDF binary artifact."
//               : downloadStatus === "SUCCESS"
//                 ? "The resume compilation sheet binary sequence was transmitted successfully to storage."
//                 : "Download my full resume for detailed information about my experience, projects, and technical skills. Let's build something amazing together!"}
//           </p>

//           {downloadStatus !== "IDLE" && (
//             <div
//               className={`text-[12px] font-bold max-w-md mx-auto mb-8 py-2 px-4 rounded-md border tracking-wider transition-all duration-300 ${
//                 downloadStatus === "ERROR"
//                   ? "bg-red-500/5 text-red-400 border-red-500/20 animate-pulse"
//                   : downloadStatus === "SUCCESS"
//                     ? "bg-emerald-500/5 text-emerald-400 border-emerald-500/20"
//                     : "bg-zinc-900/80 text-amber-400 border-zinc-800"
//               }`}
//             >
//               STATUS_LOG // {protocolMessage}
//             </div>
//           )}

//           <motion.button
//             onClick={handleDownloadPDF}
//             disabled={downloadStatus === "FETCHING"}
//             className={`rounded-[10px] inline-flex items-center gap-3 px-8 py-4 text-lg transition-all duration-300 disabled:opacity-50 shadow-xl cursor-pointer text-white ${
//               downloadStatus === "ERROR"
//                 ? "bg-red-600 hover:bg-red-700"
//                 : downloadStatus === "SUCCESS"
//                   ? "bg-emerald-600 hover:bg-emerald-700"
//                   : "bg-[#E24C60] hover:bg-red-600"
//             }`}
//             whileHover={{ scale: downloadStatus === "FETCHING" ? 1 : 1.05 }}
//             whileTap={{ scale: downloadStatus === "FETCHING" ? 1 : 0.95 }}
//           >
//             {downloadStatus === "FETCHING" ? (
//               <>
//                 <FaTerminal className="animate-spin text-lg" />
//                 <span>CONNECTING...</span>
//               </>
//             ) : downloadStatus === "ERROR" ? (
//               <>
//                 <FaTerminal />
//                 <span>RETRY ATTEMPT</span>
//               </>
//             ) : downloadStatus === "SUCCESS" ? (
//               <>
//                 <FaCheckCircle />
//                 <span>DOWNLOADED</span>
//               </>
//             ) : (
//               <>
//                 <FaDownload />
//                 <span>Get My Resume</span>
//               </>
//             )}
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaCertificate,
  FaFilePdf,
  FaDownload,
  FaTerminal,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import { motion, Variants } from "framer-motion"; // 🟢 Variants type imported explicitly
import { useState, useCallback } from "react";

interface JobProjectLog {
  id: string;
  role: string;
  projectName: string;
  type: string;
  duration: string;
  location: string;
  points: string[];
}

interface CertLogItem {
  name: string;
  provider: string;
  timeline: string;
  desc: string;
}

interface AwardLogItem {
  id: string;
  title: string;
  category: string;
  year: string;
  institution: string;
  achievementText: string;
  details: string;
}

const PROJECT_EXPERIENCE_DATA: JobProjectLog[] = [
  {
    id: "01",
    role: "Frontend Developer",
    projectName: "Food Website Project",
    type: "Personal Project",
    duration: "January 2024 - February 2024",
    location: "Bhopal, Madhya Pradesh",
    points: [
      "Developed a high-performance food website using HTML5, CSS3, and JavaScript with a focus on modern UI/UX.",
      "Implemented smooth, scroll-triggered animations and reveal effects using Framer Motion for an interactive user experience.",
      "Integrated SwiperJS to create responsive, touch-enabled hero and category sliders for seamless navigation.",
      "Optimized website performance and load times by ensuring clean code structure and efficient asset management.",
      "Designed a fully responsive layout with modern CSS techniques like Flexbox and Grid for all screen sizes.",
    ],
  },
  {
    id: "02",
    role: "Backend Developer",
    projectName: "Quora Post Project",
    type: "Personal Project",
    duration: "May 2024 - May 2024",
    location: "Bhopal, Madhya Pradesh",
    points: [
      "Architected a robust server-side application using Node.js and Express.js framework.",
      "Developed dynamic web pages using EJS template engine to render data efficiently from the server.",
      "Implemented RESTful API endpoints for seamless data flow and business logic handling.",
      "Integrated middleware for request parsing, error handling, and security best practices.",
      "Managed server-side state and logic to ensure smooth user flow without heavy client-side reliance.",
    ],
  },
  {
    id: "03",
    role: "Full-Stack Developer",
    projectName: "VibeStream - Music Platform",
    type: "Personal Project",
    duration: "December 2024 - January 2025",
    location: "Bhopal, Madhya Pradesh",
    points: [
      "Architected a high-performance music streaming platform using Next.js (App Router) for optimized server-side rendering and routing.",
      "Crafted a visually stunning and immersive UI using Aceternity UI and Tailwind CSS, focusing on modern aesthetics and dark-themed components.",
      "Integrated Framer Motion to create fluid interface transitions, including smooth hover effects and interactive player animations.",
      "Implemented responsive music playback controls and dynamic song categorization for a seamless user experience across devices.",
      "Leveraged Next.js API routes for efficient data fetching and state management to handle real-time UI updates during music playback.",
    ],
  },
  {
    id: "04",
    role: "Full-Stack MERN Developer",
    projectName: "RadiAntiX Job Search",
    type: "Personal Project",
    duration: "September 2025 - December 2025",
    location: "Bhopal, Madhya Pradesh",
    points: [
      "Engineered a full-stack web application using React.js and Node.js/Express with a focus on scalable architecture.",
      "Implemented secure User Authentication using JSON Web Tokens (JWT) and Bcryptjs for password hashing.",
      "Integrated Cloudinary, Multer, and DataURI for seamless image upload and cloud-based media management.",
      "Designed a modern UI using Tailwind CSS and Shadcn UI, managing global state efficiently with Redux Toolkit.",
      "Architected a robust database schema with MongoDB and Mongoose, ensuring data integrity and optimized query performance.",
      "Utilized Cookie-parser for secure session handling and CORS for cross-origin resource sharing management.",
    ],
  },
  {
    id: "05",
    role: "Full-Stack Next.js Developer",
    projectName: "ZestCo Grocery Ecosystem",
    type: "Personal Project",
    duration: "January 2026 - April 2026",
    location: "Bhopal, Madhya Pradesh",
    points: [
      "Engineered a high-performance grocery delivery platform using Next.js 15 and Turbopack for optimized server-side rendering (SSR).",
      "Architected a real-time tracking system with Socket.io and WebSockets to provide live delivery updates and instant chat support.",
      "Implemented Secure Role-Based Access Control (RBAC) using Auth.js (NextAuth v5) for Admin, User, and Delivery Boy dashboards.",
      "Integrated Stripe Payment Gateway with automated Webhook handling to ensure secure and robust transaction management.",
      "Designed a responsive, mobile-first UI using Tailwind CSS, Shadcn UI, and Framer Motion for smooth, interactive user experiences.",
      "Managed complex database relationships with MongoDB Atlas and Mongoose, utilizing ObjectIds for optimized data retrieval and integrity.",
    ],
  },
];

const CERTIFICATIONS_DATA: CertLogItem[] = [
  {
    name: "Full Stack Development",
    provider: "Apna College",
    timeline: "2024-2025",
    desc: "Next.js 16, React 19, TailwindCSS, Modern JavaScript Redux & Next.js RESTful APIs development expertise demonstrated through multiple projects.",
  },
  {
    name: "C & C++",
    provider: "Excellence Academics Coaching Center",
    timeline: "2023",
    desc: "C & C++ using through CodeHub and NatureGrain projects.",
  },
];

const AWARDS_DATA: AwardLogItem[] = [
  {
    id: "01",
    title: "Social Welfare Activities",
    category: "Welfare Scheme",
    year: "2022",
    institution: "Bishnugarh Inter College of Science, Hazaribagh (Jharkhand)",
    achievementText: "Recognizes the Best Student in College",
    details:
      "Led a team for Social Welfare Activities during Inter College organizing and managing communities initiatives.",
  },
  {
    id: "02",
    title: "Debate Activities",
    category: "Debate Competition",
    year: "2024",
    institution:
      "Patel College of Science & Technology, Bhopal (Madhya Pradesh)",
    achievementText: "Achievement: ₹ 15,000/",
    details:
      "Second-year excellence recognition in Debate Competition program.",
  },
  {
    id: "03",
    title: "Web Development",
    category: "Website Building",
    year: "2025",
    institution:
      "Patel College of Science & Technology, Bhopal (Madhya Pradesh)",
    achievementText: "Secured 1st position",
    details:
      "Awarded for secured top position among 15 students in the University Web Development Projects.",
  },
  {
    id: "04",
    title: "Full Stack Web Development",
    category: "Website Building",
    year: "2026",
    institution:
      "Patel College of Science & Technology, Bhopal (Madhya Pradesh)",
    achievementText: "Secured 2nd position",
    details:
      "Awarded for secured top position among 20 students in the University for Full Stack Web Development Projects & PPT Presentation.",
  },
];

const gridContainerConfig: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const terminalCardReveal: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(40% 0% 40% 0%)",
    filter: "brightness(0.3) contrast(1.5)",
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    filter: "brightness(1) contrast(1)",
    transition: {
      duration: 0.9,
      ease: [0.25, 1, 0.5, 1] as const,
    },
  },
};

export default function Resume() {
  const [downloadStatus, setDownloadStatus] = useState<
    "IDLE" | "FETCHING" | "SUCCESS" | "ERROR"
  >("IDLE");
  const [protocolMessage, setProtocolMessage] = useState<string>("");

  const handleDownloadPDF = useCallback(async () => {
    if (downloadStatus === "FETCHING") return;

    setDownloadStatus("FETCHING");
    setProtocolMessage("INITIATING HTTP GET REQUEST...");

    try {
      const response = await fetch("/documents/kumarrR.pdf", {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache",
        },
      });

      if (response.status === 200) {
        setProtocolMessage("200 OK: STREAMING RAW BINARY ARTIFACT...");

        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = "kumarrR.pdf";

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(downloadUrl);

        setDownloadStatus("SUCCESS");
        setProtocolMessage("COMPLETED // DISPATCH_SUCCESSFUL");

        setTimeout(() => setDownloadStatus("IDLE"), 4000);
      } else if (response.status === 404) {
        throw new Error("HTTP_ERR_404 // ASSET_NOT_FOUND_ON_SERVER");
      } else {
        throw new Error(`HTTP_ERR_${response.status} // SERVER_PIPELINE_FAULT`);
      }
    } catch (error: any) {
      console.error("Transmission Protocol Fault:", error);
      setDownloadStatus("ERROR");
      setProtocolMessage(error.message || "NET::ERR_CONNECTION_REFUSED");

      setTimeout(() => setDownloadStatus("IDLE"), 5000);
    }
  }, [downloadStatus]);

  return (
    <section
      id="resume"
      className="w-full p-5 bg-transparent relative z-10 border-t border-white/5 scroll-mt-24 font-mono select-none overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none z-0" />

      <div className="text-center mb-16 relative z-10">
        <motion.div
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900/60 border border-neutral-700/50 mb-8 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaFilePdf className="w-6 h-6 text-[#E24C60]" />
          <span className="text-lg font-semibold text-neutral-300">
            Professional Resume
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My <span className="gradient-text text-[#E24C60]">Resume</span>
        </motion.h1>

        <motion.div
          className="w-24 h-1.5 bg-linear-to-r from-red-500 to-red-600 mx-auto mb-8 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        <motion.p
          className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Download my complete resume or view it online to learn more about my
          professional experience, skills, and achievements.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, letterSpacing: "-0.05em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.02em" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full text-center mb-20 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect border border-neutral-700/50 mb-6">
            <FaBriefcase className="w-5 h-5 text-red-400" />
            <span className="text-lg font-semibold  text-neutral-300">
              Work Experience
            </span>
          </div>

          <h3 className="text-4xl md:text-6xl font-black text-[#E24C60] tracking-tighter uppercase relative">
            Professional Journey
            <span className="absolute -inset-x-2 top-0 h-full bg-linear-to-r from-transparent via-[#E24C60]/5 to-transparent blur-md opacity-30 pointer-events-none" />
          </h3>
        </motion.div>

        <motion.div
          variants={gridContainerConfig}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8 w-full mb-32"
        >
          {PROJECT_EXPERIENCE_DATA.map((job: JobProjectLog) => (
            <motion.div
              key={job.id}
              variants={terminalCardReveal}
              whileHover={{
                scale: 1.005,
                borderColor: "rgba(226, 76, 96, 0.35)",
                boxShadow: "0 25px 60px -20px rgba(226, 76, 96, 0.03)",
              }}
              className="w-full bg-[#050506]/95 border border-zinc-900 rounded-[16px] p-6 md:p-8 flex flex-col shadow-2xl transition-all duration-300 relative group/card overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#E24C60]/40 to-transparent -translate-y-full group-hover/card:animate-[scan_2s_linear_infinite] pointer-events-none" />

              <div className="w-full flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-zinc-900/60 pb-5 mb-5 relative z-10 overflow-hidden">
                <div className="flex flex-col items-start w-full md:max-w-[65%] min-w-0">
                  <h4 className="text-[19px] md:text-2xl font-black text-white tracking-wide wrap-break-word w-full">
                    {job.role}{" "}
                    <span className="text-zinc-600 font-medium text-base md:text-lg block md:inline-block wrap-break-word">
                      ({job.projectName})
                    </span>
                  </h4>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[15px] px-2.5 py-2 rounded-[12px] bg-zinc-900 border border-zinc-800 text-[#E24C60] font-black uppercase tracking-wider whitespace-nowrap">
                      {job.type}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end justify-start shrink-0 font-mono w-full md:w-auto mt-1 md:mt-0 min-w-0">
                  <div className="w-full md:w-auto flex flex-wrap">
                    <span className="text-[17px] md:text-[16px] text-[#E24C60] font-bold bg-zinc-900/60 border border-zinc-800/80 rounded-[12px] px-3 py-1 text-left md:text-right wrap-break-word tracking-tight leading-relaxed max-w-full">
                      {job.duration}
                    </span>
                  </div>
                  <span className="text-[14px] text-zinc-500 font-bold tracking-wide mt-2 block text-left md:text-right w-full md:w-auto">
                    {job.location}
                  </span>
                </div>
              </div>

              <ul className="flex flex-col gap-4 w-full relative z-10">
                {job.points.map((point: string, idx: number) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    className="flex items-start gap-4 text-zinc-400 text-[13px] leading-relaxed group/li"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#E24C60] shrink-0 mt-2 shadow-[0_0_8px_#E24C60] group-hover/li:scale-150 transition-transform" />
                    <p className="normal-case font-sans font-normal text-zinc-300/90 group-hover/li:text-white transition-colors text-[17px]">
                      {point}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={gridContainerConfig}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full border-t border-zinc-900 pt-24"
        >
          <motion.div
            variants={terminalCardReveal}
            className="flex flex-col gap-6 w-full"
          >
            <div className="flex flex-col items-center lg:items-start w-full mb-4 text-center lg:text-left">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/60 border border-zinc-800/80 rounded-full mb-3 shadow-inner">
                <FaGraduationCap className="text-[30px] text-[#E24C60]" />
                <span className="text-[18px] font-black tracking-wider text-zinc-400 uppercase">
                  Education
                </span>
              </div>
              <h4 className="text-2xl font-black text-[#E24C60] tracking-tighter uppercase">
                Academic Background
              </h4>
            </div>

            <div className="w-full bg-[#050506]/95 border border-zinc-900 rounded-[16px] p-6 shadow-2xl hover:border-zinc-800 transition-all duration-300 group/edu relative overflow-hidden">
              <h5 className="text-[20px] font-black text-white tracking-wide transition-colors">
                Bachelor of Software Engineering
              </h5>
              <p className="text-[14px] font-bold text-[#E24C60] mt-2 leading-snug font-serif">
                Patel College of Science & Technology,
                <br />
                Bhopal (Madhya Pradesh)
              </p>

              <div className="flex flex-col gap-1 mt-4 border-y border-zinc-900/60 py-3 my-4 text-[16px] font-bold">
                <span className="text-zinc-400 font-medium">
                  August 2022 - Present
                </span>
                <span className="text-zinc-400 font-medium">
                  Bhopal, Madhya Pradesh
                </span>
              </div>

              <div className="text-[16px] font-black text-white tracking-wide mb-4">
                GPA:{" "}
                <span className="text-[#E24C60] text-base bg-zinc-900 border border-zinc-800/60 px-3 py-1.5 rounded-[12px] shadow-inner">
                  7.44/10
                </span>
              </div>

              <p className="text-zinc-400 text-[16px] font-sans font-normal leading-relaxed normal-case border-t border-zinc-900/40 pt-4">
                Final-year Software Engineering student with solid experience in
                MERN Full Stack development. Passionate about backend
                development, database design, and building scalable
                applications.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={terminalCardReveal}
            className="flex flex-col gap-6 w-full"
          >
            <div className="flex flex-col items-center lg:items-start w-full mb-4 text-center lg:text-left">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/60 border border-zinc-800/80 rounded-full mb-3 shadow-inner">
                <FaCertificate className="text-[30px] text-[#E24C60]" />
                <span className="text-[18px] font-black tracking-wider text-zinc-400 uppercase">
                  Certifications
                </span>
              </div>
              <h4 className="text-2xl font-black text-[#E24C60] tracking-tighter uppercase">
                Professional Certifications
              </h4>
            </div>

            <motion.div
              variants={gridContainerConfig}
              className="flex flex-col gap-4 w-full"
            >
              {CERTIFICATIONS_DATA.map((cert: CertLogItem, index: number) => (
                <motion.div
                  key={index}
                  variants={terminalCardReveal}
                  className="w-full bg-[#050506]/95 border border-zinc-900 rounded-[16px] p-6 shadow-2xl hover:border-zinc-800 transition-all duration-300 group/cert relative overflow-hidden"
                >
                  <div className="flex items-start gap-2 text-white font-black text-[18px] transition-colors group-hover/cert:text-[#E24C60]">
                    <FaAward className="text-[#E24C60] text-[25px] shrink-0" />
                    <span className="tracking-wide leading-tight uppercase">
                      {cert.name}
                    </span>
                  </div>
                  <div className="text-[15px] text-[#E24C60] font-bold mt-1 font-serif">
                    {cert.provider} •{" "}
                    <span className="text-zinc-400 font-medium">
                      {cert.timeline}
                    </span>
                  </div>
                  <p className="text-zinc-400 font-sans font-normal text-[16px] leading-relaxed normal-case mt-4 border-t border-zinc-900/40 pt-3">
                    {cert.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={terminalCardReveal}
            className="flex flex-col gap-6 w-full"
          >
            <div className="flex flex-col items-center lg:items-start w-full mb-4 text-center lg:text-left">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/60 border border-zinc-800/80 rounded-full mb-3 shadow-inner">
                <FaAward className="text-[30px] text-[#E24C60]" />
                <span className="text-[18px] font-black tracking-wider text-zinc-400 uppercase">
                  Awards & Scholarships
                </span>
              </div>
              <h4 className="text-2xl font-black text-[#E24C60] tracking-tighter uppercase">
                Awards & Recognition
              </h4>
            </div>

            <motion.div
              variants={gridContainerConfig}
              className="flex flex-col gap-4 w-full"
            >
              {AWARDS_DATA.map((award: AwardLogItem) => (
                <motion.div
                  key={award.id}
                  variants={terminalCardReveal}
                  className="w-full bg-[#050506]/95 border border-zinc-900 rounded-[16px] p-5 shadow-2xl relative overflow-hidden hover:border-zinc-800 transition-all duration-300 group/award"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-[13px] bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 text-[#E24C60] shadow-inner group-hover/award:bg-[#E24C60] group-hover/award:text-black transition-colors duration-300">
                      <FaAward className="text-[28px]" />
                    </div>

                    <div className="flex flex-col grow">
                      <div className="w-full flex items-center justify-between gap-2">
                        <h5 className="text-[18px] font-black text-[#E24C60] tracking-tight group-hover/award:text-[#E24C60] transition-colors uppercase">
                          {award.title}
                        </h5>
                        <span className="text-[15px] font-black text-zinc-600 shrink-0 font-mono">
                          {award.year}
                        </span>
                      </div>
                      <span className="text-[15px] font-bold text-zinc-500 tracking-wider mt-0.5 font-serif">
                        {award.category}
                      </span>

                      <div className="text-[15px] text-zinc-500 mt-2.5 border-t border-zinc-900/60 pt-2.5 font-mono leading-tight">
                        <span className="text-[#E24C60] block text-[18px] font-bold mb-0.5 uppercase">
                          Institution:
                        </span>{" "}
                        {award.institution}
                      </div>

                      <div className="text-[12px] font-black text-[#E24C60] tracking-widest uppercase mt-3 bg-[#E24C60]/5 px-2.5 py-1 rounded-[12px] border border-red-500/10 inline-block self-start shadow-inner">
                        {award.achievementText}
                      </div>

                      <p className="text-zinc-400 font-sans font-normal text-[16px] leading-relaxed normal-case mt-3 border-t border-zinc-900/40 pt-2.5">
                        {award.details}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className={`text-center bg-zinc-900/40 rounded-[20px] mt-10 p-12 border transition-all duration-500 backdrop-blur-md ${
            downloadStatus === "ERROR"
              ? "border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.05)]"
              : downloadStatus === "SUCCESS"
                ? "border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.05)]"
                : "border-neutral-700/50"
          }`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={`w-16 h-16 rounded-[12px] flex items-center justify-center mx-auto mb-6 shadow-lg transition-colors duration-300 ${
              downloadStatus === "ERROR"
                ? "bg-red-500/20 text-red-400"
                : downloadStatus === "SUCCESS"
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "bg-linear-to-r from-red-500 to-red-600 text-white"
            }`}
            animate={
              downloadStatus === "FETCHING"
                ? { scale: [1, 1.1, 1], rotate: [0, 360] }
                : {}
            }
            transition={
              downloadStatus === "FETCHING"
                ? { repeat: Infinity, duration: 1.5 }
                : {}
            }
          >
            {downloadStatus === "ERROR" ? (
              <FaExclamationTriangle className="text-2xl" />
            ) : downloadStatus === "SUCCESS" ? (
              <FaCheckCircle className="text-2xl" />
            ) : (
              <FaDownload className="text-2xl" />
            )}
          </motion.div>

          <h3 className="text-3xl font-bold text-neutral-100 mb-4">
            {downloadStatus === "ERROR"
              ? "Transmission Interrupted"
              : downloadStatus === "SUCCESS"
                ? "Secure Stream Dispatched!"
                : "Ready to collaborate?"}
          </h3>

          <p className="text-neutral-400 text-lg mb-4 max-w-2xl mx-auto">
            {downloadStatus === "ERROR"
              ? "The server failed to stream the compiled resume PDF binary artifact."
              : downloadStatus === "SUCCESS"
                ? "The resume compilation sheet binary sequence was transmitted successfully to storage."
                : "Download my full resume for detailed information about my experience, projects, and technical skills. Let's build something amazing together!"}
          </p>

          {downloadStatus !== "IDLE" && (
            <div
              className={`text-[12px] font-bold max-w-md mx-auto mb-8 py-2 px-4 rounded-md border tracking-wider transition-all duration-300 ${
                downloadStatus === "ERROR"
                  ? "bg-red-500/5 text-red-400 border-red-500/20 animate-pulse"
                  : downloadStatus === "SUCCESS"
                    ? "bg-emerald-500/5 text-emerald-400 border-emerald-500/20"
                    : "bg-zinc-900/80 text-amber-400 border-zinc-800"
              }`}
            >
              STATUS_LOG // {protocolMessage}
            </div>
          )}

          <motion.button
            onClick={handleDownloadPDF}
            disabled={downloadStatus === "FETCHING"}
            className={`rounded-[10px] inline-flex items-center gap-3 px-8 py-4 text-lg transition-all duration-300 disabled:opacity-50 shadow-xl cursor-pointer text-white ${
              downloadStatus === "ERROR"
                ? "bg-red-600 hover:bg-red-700"
                : downloadStatus === "SUCCESS"
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : "bg-[#E24C60] hover:bg-red-600"
            }`}
            whileHover={{ scale: downloadStatus === "FETCHING" ? 1 : 1.05 }}
            whileTap={{ scale: downloadStatus === "FETCHING" ? 1 : 0.95 }}
          >
            {downloadStatus === "FETCHING" ? (
              <>
                <FaTerminal className="animate-spin text-lg" />
                <span>CONNECTING...</span>
              </>
            ) : downloadStatus === "ERROR" ? (
              <>
                <FaTerminal />
                <span>RETRY ATTEMPT</span>
              </>
            ) : downloadStatus === "SUCCESS" ? (
              <>
                <FaCheckCircle />
                <span>DOWNLOADED</span>
              </>
            ) : (
              <>
                <FaDownload />
                <span>Get My Resume</span>
              </>
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
