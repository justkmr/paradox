

export interface ProjectType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
  featured?: boolean;
  category: "fullstack" | "frontend" | "backend";
  role: string;
  members: string;
  date: {
    short: string; 
    full: string;  
  };
}

export const PROJECTS_DATA: ProjectType[] = [
  {
    id: "p1",
    title: "ZESTCO",
    subtitle: "REALTIME SUPPLY PIPELINE",
    description: "ZestCo Engine: A robust, high-performance grocery delivery infrastructure built with Next.js 15. Engineered for low-latency real-time tracking via Socket.io, integrated with Secure RBAC and Stripe Webhooks for a production-ready, seamless user ecosystem.",
    tech: ["Next.js 15", "Socket.io", "Stripe API", "Tailwind CSS", "Node.js"],
    image: "/projects/zestco.jpg",
     liveLink: "https://zestco.vercel.app",
    githubLink: "https://github.com/justkmr/zestCo",
    category: "fullstack",
    role: "Full-Stack Developer",
    members: "1",
    featured: true,
    date: {
      short: "Jan 2026 - Apr 2026",
      full: "January 2026 - April 2026"
    }
  },
  {
    id: "p2",
    title: "RADIANTIX",
    subtitle: "FULL STACK JOB PORTAL ARCHITECTURE",
    description: "A high-performance full-stack job portal built with React 19 and Node.js, featuring secure JWT authentication, Redux state management, and Cloudinary media integration.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Redux Toolkit", "Cloudinary", "Tailwind CSS", "Framer Motion"],
    image: "/projects/radiantix.jpg",
    liveLink: "https://job-portal-project-q2jt.onrender.com/",
    githubLink: "https://github.com/justkmr/Job-Portal-Project",
    category: "fullstack",
    role: "Lead Developer",
    members: "1",
    featured: true,
    date: {
      short: "Sep 2025 - Dec 2025",
      full: "Sept 2025 - December 2025"
    }
  },
  
  {
    id: "p3",
    title: "Food Website",
    subtitle: "WHERE GOOD FOOD MEETS GREAT MOOD",
    description: "A visually stunning and high-performance food platform built with JavaScript and Framer Motion, featuring smooth interactive sliders and a fully responsive modern UI.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
    image: "/projects/food.jpg",
    githubLink: "https://github.com/justkmr",
    featured: true,
    category: "frontend",
    date: {
      short: "Jan 2024 - Feb 2024",
      full: "Jan 2024 - February 2024"
    },
    role: "Frontend Developer",
    members: "1"
  },
  {
    id: "p4",
    title: "VibeStream - Music Platform",
    subtitle: "FOLLOW THE BEAT & SING THE SONG",
    description: "An immersive music streaming application built with Next.js and Aceternity UI, featuring fluid Framer Motion animations and high-performance server-side rendering.",
    tech: ["Next.js", "TypeScript", "Aceternity UI", "Framer Motion", "Tailwind", "Swipeable.js"],
    image: "/projects/music.jpg",
    githubLink: "https://github.com/justkmr",
    featured: true,
    category: "frontend",
    date: {
      short: "Jan 2024 - Feb 2024",
      full: "Jan 2024 - February 2024"
    },
    role: "Frontend Developer",
    members: "1"
  },
  {
    id: "p5",
    title: "Quora Post Project",
    subtitle: "DISCOVER, SHARE, GROW, REPEAT!",
    description: "Architected a robust server-side application using Node.js and Express.js framework.Developed dynamic web pages using EJS template engine to render data efficiently from the server.",
    tech: ["Node.js", "Express.js", "EJS", "Method-Overriding", "CSS", "UUID"],
    image: "/projects/quora.jpg",
    githubLink: "https://github.com/justkmr",
    featured: false,
    category: "backend",
    date: {
      short: "May 2024 - May 2024",
      full: "May 2024 - May 2024"
    },
    role: "Backend Developer",
    members: "1"
  },
  {
    id: "p6",
    title: "Business Template Website",
    subtitle: "DISCOVER, SHARE, GROW, REPEAT!",
    description: "Desktop system for restaurant operations with table reservations, customer loyalty, billing, employee management, and revenue analytics.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    image: "/projects/business.jpg",
    githubLink: "https://github.com/justkmr",
    featured: true,
    category: "frontend",
    date: {
      short: "May 2024 - May 2024",
      full: "May 2024 - May 2024"
    },
    role: "Frontend Developer",
    members: "1"
  },
];