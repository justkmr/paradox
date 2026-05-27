export const personal = {
  name: 'Pintu Kumar',
  title: 'Full Stack Developer',
  subtitle: 'Software Engineer',
  location: 'India',
  email: 'mrkumarrr12@gmail.com',
  bio: "I'm a passionate full stack developer who loves building modern, performant web applications. I thrive at the intersection of great design and clean code — turning ideas into polished digital experiences.",
  bio2: "When I'm not coding, I'm exploring new technologies, contributing to open source, and finding creative solutions to complex problems.",
  github: 'https://github.com/Pintu-Kumar-1709',
  linkedin: 'https://www.linkedin.com/in/pintu-kumar-12x',
  twitter: 'https://twitter.com/babu_sajan_12',
  instagram: 'https://www.instagram.com/babu_sajan_12',
  facebook: 'https://www.facebook.com/Mrkumar.Sajan.12x',
  available: true,
}

export const skills = {
  languages: [
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 82 },
    { name: 'Java', level: 70 },
    { name: 'C / C++', level: 65 },
  ],
  frontend: [
    { name: 'React.js', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'Redux', level: 78 },
    { name: 'Framer Motion', level: 72 },
    { name: 'Shadcn UI', level: 80 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'MySQL', level: 72 },
    { name: 'Socket.io', level: 75 },
    { name: 'FastAPI', level: 60 },
  ],
  tools: ['Git', 'GitHub', 'Docker', 'Vercel', 'Postman', 'Figma', 'Canva', 'VS Code', 'NPM', 'Cloudinary', 'Stripe'],
}

export const projects = [
  {
    id: 1,
    title: 'Full Stack E-Commerce Platform',
    description: 'A feature-rich e-commerce application with real-time inventory, Stripe payments, and admin dashboard. Built with Next.js, Node.js, MongoDB and Socket.io.',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Socket.io'],
    github: 'https://github.com/Pintu-Kumar-1709',
    live: '#',
    featured: true,
    year: '2024',
  },
  {
    id: 2,
    title: 'Real-Time Chat Application',
    description: 'A modern chat app with rooms, private messaging, typing indicators, and file sharing. Powered by Socket.io and React.',
    tags: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Pintu-Kumar-1709',
    live: '#',
    featured: true,
    year: '2024',
  },
  {
    id: 3,
    title: 'Developer Portfolio Website',
    description: 'A stunning, performant portfolio website built with Next.js, Tailwind CSS, and smooth scroll-based animations.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    github: 'https://github.com/Pintu-Kumar-1709',
    live: '#',
    featured: false,
    year: '2025',
  },
  {
    id: 4,
    title: 'Task Management Dashboard',
    description: 'A Kanban-style project management tool with drag and drop, team collaboration, and real-time updates.',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/Pintu-Kumar-1709',
    live: '#',
    featured: false,
    year: '2024',
  },
]

export const experiences = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Freelance',
    duration: '2023 — Present',
    description: 'Building custom web applications for clients across various domains. Delivering end-to-end solutions from UI design to backend APIs and deployment.',
    highlights: [
      'Built 10+ production web apps',
      'Worked with clients from India & abroad',
      'Delivered projects on time with 100% client satisfaction',
    ],
    type: 'work',
  },
  {
    id: 2,
    role: 'Full Stack Web Development',
    company: 'Self-Learning & Projects',
    duration: '2022 — 2023',
    description: 'Intensively learned full stack development through building real-world projects, online courses, and contributing to open source.',
    highlights: [
      'Mastered React, Node.js, MongoDB stack',
      'Built 5+ complete web applications',
      'Learned Docker, CI/CD, and cloud deployment',
    ],
    type: 'education',
  },
  {
    id: 3,
    role: 'Frontend Developer Intern',
    company: 'Tech Startup (Remote)',
    duration: '2023',
    description: 'Developed responsive UI components and improved website performance. Collaborated with design team to implement pixel-perfect interfaces.',
    highlights: [
      'Improved page load speed by 40%',
      'Built reusable React component library',
      'Implemented responsive designs for 3 products',
    ],
    type: 'work',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Product Manager',
    company: 'TechCorp India',
    text: "Pintu delivered exceptional work on our e-commerce platform. His attention to detail, clean code, and proactive communication made the project a huge success. Highly recommend!",
    avatar: 'RS',
  },
  {
    id: 2,
    name: 'Priya Mehta',
    role: 'Startup Founder',
    company: 'FinanceFlow',
    text: "Working with Pintu was a fantastic experience. He understood our requirements perfectly and built a robust, scalable application ahead of schedule. Will definitely work again.",
    avatar: 'PM',
  },
  {
    id: 3,
    name: 'Amit Singh',
    role: 'CTO',
    company: 'DevAgency',
    text: "Pintu's technical skills are impressive — especially his full stack expertise. He wrote clean, maintainable code and was always open to feedback. A great developer to have on your team.",
    avatar: 'AS',
  },
]