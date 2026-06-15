# 🌌 Paradox | Modern Interactive Portfolio 

An ultra-modern, high-fidelity personal portfolio engineered with **Next.js 15 (App Router)**, **TypeScript**, and **Tailwind CSS**. Paradox focuses on fluid motion design, physics-based micro-interactions, and flawless performance to deliver an immersive user journey. 
  
---                  
          
## 🛠️ Tech Stack & Core Architecture       

* **Framework:** Next.js 15 (App Router) with strict TypeScript compilation.
* **Styling Engine:** Tailwind CSS with custom utility extensions and keyframe animations.
* **Motion & Interactions:** Custom physics-based magnetic vectors and smooth inertial scrolling.
* **Architecture Pattern:** Decoupled Atomic Structure & Declarative Data Mapping.  

--- 

## 📂 Project Folder Structure 

```text
paradox/
├── public/                  # Static Asset Pipeline
│   └── testimonials/        # Ingested client media files, SVGs, and brand graphics
├── src/                     # Core Application Bundle Source
│   ├── app/                 # Next.js Routing Engine & Layout Orchestration
│   │   ├── layout.tsx       # Root layout shell (Viewport, Metadata, Font Injectors)
│   │   ├── page.tsx         # Primary index route controller / Main viewport tree
│   │   └── globals.css      # Core style manifests, Tailwind layers, and animations
│   ├── components/          # Atomic UI Functional Paradigms
│   │   ├── Magnetic/        # Physics-based interactive cursor friction wrappers
│   │   │   └── index.tsx    
│   │   ├── SmoothScroll/    # Global inertial scroll synchronization layer
│   │   │   └── index.tsx    
│   │   ├── providers/       # Global state providers, theme contexts, and telemetry
│   │   └── sections/        # High-order compound modular interface blocks
│   │       ├── About.tsx    # Professional bio matrix and interactive metrics
│   │       ├── Hero.tsx     # Immediate landing viewport with kinetic layouts
│   │       ├── Navbar.tsx   # Fluid floating micro-interactive navigation bar
│   │       ├── Projects.tsx # Filterable layout grids serving dynamic project cards
│   │       └── TechMarquee.tsx # Hardware-accelerated infinite ticking tech slider
│   ├── data/                # Declarative Configuration Matrices
│   │   └── projects.ts      # Strictly typed data schemas for mapped project items
│   └── ui/                  # Reusable core design tokens & primitive UI layout blocks
├── .gitignore               # System-level version control file excluder
├── next.config.ts           # Advanced Next.js compilation presets & engine hooks
├── package.json             # Core dependency management definitions
├── tailwind.config.ts       # Utility-first declarative design token dictionary
└── tsconfig.json            # Compiler ruleset for strict static type safety
```


--- 

🔍 Comprehensive Directory Specifications 
📂 public/
Houses all static assets that are served directly by the server without Webpack/Turbopack compilation. It is optimized for instant pathing via next/image using direct server roots.

📂 src/app/
The structural backbone of the Next.js App Router configuration.

layout.tsx: Defines the global application shell. Responsible for injecting primary system fonts (e.g., JetBrains Mono), managing global SEO metadata API states, and managing root viewports.

page.tsx: The main interface landing controller. It acts as a clean entry point that imports and stacks modular layout layers from the sections folder.

globals.css: Configures custom Tailwind directives (@tailwind base, components, utilities) along with complex CSS keyframe engines used for smooth motion transitions.

📂 src/components/
Modular structural building blocks decoupled into focused sub-functional roles:

Magnetic/: A high-fidelity interaction module using DOM coordinate metrics. It wraps around layout anchors (buttons, social nodes) to apply magnetic pulling friction based on real-time mouse vectors.

SmoothScroll/: Integrates a custom inertial scrolling wrapper. It intercepts sudden mechanical jumps, normalizes trackpad gestures, and guarantees consistent scroll inertia across all client browsers.

sections/: Modular page blocks (Hero, About, Projects). Isolating layouts into dedicated files guarantees codebase maintainability and eliminates bloated file states.

📂 src/data/ 
Implements a declarative data configuration layout pattern to keep layout templates clean.

projects.ts: Centralizes typed TypeScript objects representing personal projects. Instead of hardcoding cards within UI trees, structural data arrays are maintained here and mapped dynamically into the templates using linear .map() operations.

🚀 Getting Started Locally
Follow these steps to run the Paradox portfolio project on your local machine:

1. Clone the Repository
Bash
git clone [https://github.com/justkmr/paradox.git](https://github.com/justkmr/paradox.git)
cd paradox
2. Install Project Dependencies
Bash
npm install
# or
yarn install
3. Launch the Development Engine
Bash
npm run dev
# or
yarn dev

Open http://localhost:3000 inside your browser to view the application live.

⚡ Production Compilation & Optimization
To compile the application bundle down to optimized, highly compressed static chunks for deployment:

Bash
npm run build
npm run start

📄 License
This repository is licensed under the MIT License. See the LICENSE file for more details.


---

