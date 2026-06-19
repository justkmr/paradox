export interface TechNodeItem {
  name: string;
  level: string;
  iconKey: string;
}

export interface TechCategoryBlock {
  id: string;
  title: string;
  items: TechNodeItem[];
}

export const TECH_STACK_DATA: TechCategoryBlock[] = [
  {
    id: "01",
    title: "Frontend Development",
    items: [
      { name: "JavaScript", level: "Intermediate", iconKey: "js" },
      { name: "React.js", level: "Proficient", iconKey: "react" },
      { name: "TypeScript", level: "Advanced", iconKey: "ts" },
      { name: "TailwindCSS", level: "Advanced", iconKey: "tailwind" },
      { name: "Redux", level: "Intermediate", iconKey: "redux" },
      { name: "Next.js", level: "Proficient", iconKey: "next" },
      { name: "Framer Motion", level: "Advanced", iconKey: "motion" },
      { name: "Shadcn UI", level: "Proficient", iconKey: "shadcn" },
     
    { name: "Axios API", level: "Proficient", iconKey: "axios" }
    ],
  },
  {
    id: "02",
    title: "Backend Development",
    items: [
      { name: "Node.js", level: "Proficient", iconKey: "node" },
      { name: "Express.js", level: "Proficient", iconKey: "express" },
      { name: "Bcrypt.js", level: "Proficient", iconKey: "lock" },
      { name: "Next.js", level: "Proficient", iconKey: "next" },
      { name: "Redux", level: "Intermediate", iconKey: "redux" },
      { name: "Jwt", level: "Intermediate", iconKey: "jwt" },
      { name: "Mongoose", level: "Proficient", iconKey: "mongoose" },
    ],
  },
  {
    id: "03",
    title: "Database Systems",
    items: [
      { name: "MySQL", level: "Intermediate", iconKey: "mysql" },
      { name: "SQL", level: "Intermediate", iconKey: "sql" },
      { name: "MongoDB", level: "Advanced", iconKey: "mongodb" },
    ],
  },
  {
    id: "04",
    title: "Development Tools",
    items: [
      { name: "VS Code", level: "Advanced", iconKey: "vscode" },
      { name: "Git Engine", level: "Advanced", iconKey: "git" },
      { name: "Postman", level: "Stable", iconKey: "postman" },
      { name: "Docker", level: "Beginner", iconKey: "docker" },
      { name: "Vite", level: "Proficient", iconKey: "vite" },
      { name: "npm / pnpm", level: "Proficient", iconKey: "package" },
      { name: "ESLint & Prettier", level: "Proficient", iconKey: "eslint" },
    ],
  },
  {
    id: "05",
    title: "Cloud & Deployment",
    items: [
      { name: "Render", level: "Stable", iconKey: "render" },
      { name: "Vercel", level: "Advanced", iconKey: "vercel" },
      { name: "Cloudinary", level: "Stable", iconKey: "cloudinary" },
      { name: "GitHub", level: "ADVANCED", iconKey: "github" },
    ],
  },
  {
    id: "06",
    title: "AI & Automation",
    items: [
      { name: "ChatGPT", level: "ADVANCED", iconKey: "chatgpt" },
      { name: "Claude AI", level: "ADVANCED", iconKey: "claude" },
      { name: "Gemini", level: "STABLE", iconKey: "gemini" },
    ],
  },
];
