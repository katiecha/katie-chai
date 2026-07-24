export type LinkType = "github" | "demo" | "site" | "figma" | "youtube" | "docs" | "x" | "linkedin" | "mail" | "resume"

export type ProjectLink = {
  label: string
  href: string
  type: LinkType
}

export type Project = {
  name: string
  description: string
  links: ProjectLink[]
  status?: "private"
  inProgress?: boolean
  image?: string
  imagePosition?: string
  videoEmbed?: string
  tags?: string[]   // languages only (TypeScript, Python, C#, …)
  other?: string[]  // other tags — libraries, engines, platforms (React, Unity, …)
}

export type Category = {
  title: string
  emoji: string
  projects: Project[]
  note?: string        // if set, renders as prose instead of rows
  noteLinks?: ProjectLink[]
}

export const SOCIAL_LINKS = {
  github: "https://github.com/katiecha",
  linkedin: "https://www.linkedin.com/in/katie-chai",
  x: "https://x.com/katiechaii",
  email: "katie.h.chai@gmail.com",
  resume: "https://docs.google.com/document/d/1dFJq7Y5QSiKG9yClFOjeBNlUsXZ42uupHCC59a9BNa4/edit?tab=t.0",
}

export const CURRENT_PROJECTS: Project[] = [
  {
    name: "Regolith",
    description: "A research and engineering effort focused on intelligent physical systems for autonomous industry.",
    links: [
      { label: "Website", href: "https://www.katiech.ai/", type: "site" },
      { label: "X", href: "https://x.com/RegolithAi", type: "x" },
    ],
    inProgress: true,
    tags: ["Python"],
  },
  {
    name: "jeancha.ai",
    description: "A sailing game built with React Three Fiber, custom GLSL shaders, and graph-based exploration",
    links: [
      { label: "GitHub", href: "https://github.com/katiecha/jeanch.ai", type: "github" },
      { label: "Site", href: "https://jeanch.ai/", type: "site" },
    ],
    tags: ["TypeScript"],
    other: ["Next.js", "React", "Three.js"],
  },
  {
    name: "Resy Bot",
    description: "An tool to help manage resy reservations. The production version isn't public, but email me if you'd like to learn more.",
    links: [
      { label: "GitHub", href: "https://github.com/katiecha/resybot", type: "github" },
    ],
    status: "private",
    tags: ["Python"],
  },
  {
    name: "NC ASK",
    description: "An RAG educational platform (React, TypeScript, FastAPI, Supabase vector database, Gemini) that provides info about NC autism resources",
    links: [
      { label: "GitHub", href: "https://github.com/katiecha/NC-ASK", type: "github" },
    ],
    tags: ["TypeScript", "Python"],
    other: ["React", "FastAPI"],
  },
]

export const CATEGORIES: Category[] = [
  {
    title: "Web Development (TypeScript, JavaScript, HTML/CSS)",
    emoji: "🕸️",
    projects: [
      {
        name: "jeancha.ai",
        description: "A sailing game built with React Three Fiber, custom GLSL shaders, and graph-based exploration",
        links: [
          { label: "GitHub", href: "https://github.com/katiecha/jeanch.ai", type: "github" },
          { label: "Site", href: "https://jeanch.ai/", type: "site" },
        ],
        tags: ["TypeScript"],
        other: ["Next.js", "React", "Three.js"],
      },
      {
        name: "NC ASK",
        description: "An RAG educational platform (React, TypeScript, FastAPI, Supabase vector database, Gemini) that provides info about NC autism resources",
        links: [
          { label: "GitHub", href: "https://github.com/katiecha/NC-ASK", type: "github" },
        ],
        tags: ["TypeScript", "Python"],
        other: ["React", "FastAPI"],
      },
      {
        name: "PO Agent",
        description: "An agent pipeline for pharmacy order batching, with a React dashboard for live results. Private repo. Email me to learn more!",
        links: [
          { label: "GitHub", href: "https://github.com/katiecha/po-agent", type: "github" },
        ],
        status: "private",
        tags: ["Python", "TypeScript"],
        other: ["React", "FastAPI"],
      },
      {
        name: "Paywall Remover",
        description: "A Chrome extension that removes CSS-based paywalls by targeting overlay elements, removing fixed-position obstructions, and optionally opening archive.today.",
        links: [
          { label: "GitHub", href: "https://github.com/katiecha/paywall-remover", type: "github" },
        ],
        tags: ["JavaScript"],
      },
      {
        name: "LinkedIn Queens Solver",
        description: "A DOM bot I use to solve LinkedIn Queens.",
        links: [
          { label: "GitHub", href: "https://github.com/katiecha/dom-bots/blob/main/linkedin-queens.js", type: "github" },
        ],
        tags: ["JavaScript"],
      },
      {
        name: "Adventure Time Game",
        description: "A choose-your-own-adventure game I created based on my favorite TV show, Adventure Time",
        links: [
          { label: "Demo", href: "https://katiecha.github.io/new-media/Katie_Chai_Project.html", type: "demo" },
          { label: "GitHub", href: "https://github.com/katiecha/katiecha.github.io/blob/main/new-media/Katie_Chai_Project.html", type: "github" },
        ],
        tags: ["JavaScript", "HTML"],
      },
      {
        name: "CATCH Website",
        description: "A website / inventory management system for Carolina Adapts Toys for Children (CATCH)",
        links: [
          { label: "Site", href: "https://www.catch-inc.com/", type: "site" },
          { label: "GitHub", href: "https://github.com/cssgunc/catch", type: "github" },
        ],
        tags: ["JavaScript"],
        other: ["React", "Three.js", "Firebase"],
      },
      {
        name: "ReSearch",
        description: "A research discovery platform aggregating faculty across UNC, Duke, and NC State using web scraping.",
        links: [
          { label: "YouTube", href: "https://www.youtube.com/watch?v=qGP18CfBojs", type: "youtube" },
          { label: "GitHub", href: "https://github.com/researph/ReSearch", type: "github" },
        ],
        tags: ["TypeScript", "Python"],
        other: ["Next.js", "React", "Express"],
      },
      {
        name: "Allergy Forecaster",
        description: "An allergy forecasting web app combining the Google Maps Pollen API with custom REST services.",
        links: [
          { label: "YouTube", href: "https://youtu.be/btPoCuaHIxs?si=-YUrUHb5ikpzJXdC", type: "youtube" },
          { label: "GitHub", href: "https://github.com/426finalproject/finalproject", type: "github" },
        ],
        tags: ["JavaScript"],
        other: ["Express"],
      },
      {
        name: "A Cookbook Website",
        description: "A Korean cookbook website with family recipes, built with HTML/CSS.",
        links: [
          { label: "Site", href: "https://katiecha.github.io/a-cookbook/index.html", type: "site" },
          { label: "GitHub", href: "https://github.com/katiecha/katiecha.github.io/tree/main/a-cookbook", type: "github" },
        ],
        tags: ["HTML", "CSS"],
      },
      {
        name: "Genetics of Cancer Website",
        description: "An educational website on cancer genetics with Hotjar instrumentation for user analytics.",
        links: [
          { label: "Site", href: "https://genetics-of-cancer.netlify.app/home", type: "site" },
          { label: "GitHub", href: "https://github.com/katiecha/molecular-biology-and-genetics", type: "github" },
        ],
        tags: ["HTML", "CSS"],
      },
    ],
  },
  {
    title: "AI Infrastructure",
    emoji: "⚙️",
    projects: [
      {
        name: "Research Toolkit",
        description: "A personal collection of Claude Code skills and workflows for AI-assisted research.",
        links: [
          { label: "GitHub", href: "https://github.com/katiecha/research-skills-and-rules", type: "github" },
        ],
      },
      {
        name: "Engineering Toolkit",
        description: "A personal collection of Claude Code skills and workflows for AI-assisted engineering.",
        links: [],
        status: "private",
      },
    ],
  },
  {
    title: "Embedded Systems (C, MIPS, Logisim)",
    emoji: "👾",
    projects: [
      {
        name: "Build Your Own Computer (C)",
        description: "A semester-long project where I built different parts of a computer! This is my C code:",
        links: [
          { label: "GitHub", href: "https://github.com/katiecha/build-your-own-computer/tree/main/c", type: "github" },
        ],
        tags: ["C"],
      },
      {
        name: "BYOC (MIPS)",
        description: "A semester-long project where I built different parts of a computer! This is my MIPS code:",
        links: [
          { label: "GitHub", href: "https://github.com/katiecha/build-your-own-computer/tree/main/MIPS-assembly", type: "github" },
        ],
        tags: ["MIPS"],
      },
      {
        name: "BYOC (Logisim)",
        description: "A semester-long project where I built different parts of a computer! These are my Logisim files:",
        links: [
          { label: "GitHub", href: "https://github.com/katiecha/build-your-own-computer/tree/main/logisim", type: "github" },
        ],
        tags: ["Logisim"],
      },
      {
        name: "Force Sensor",
        description: "An application I created to read force sensor data from my custom input board.",
        links: [
          { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week16/", type: "docs" },
        ],
        tags: ["C"],
      },
      {
        name: "ATtiny LED Blink",
        description: "My first embedded project where I programmed an ATtiny 44 to blink an LED.",
        links: [
          { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week09/", type: "docs" },
        ],
        tags: ["C"],
      },
    ],
  },
  {
    title: "Java",
    emoji: "☕️",
    projects: [
      {
        name: "Password Manager",
        description: "A password manager implementing a Hash Map.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/data-structure-implementations/tree/main/hash-map", type: "github" }],
        tags: ["Java"],
      },
      {
        name: "Patient Priority System",
        description: "A patient priority system implementing a Binary Heap.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/data-structure-implementations/tree/main/binary-heap", type: "github" }],
        tags: ["Java"],
      },
      {
        name: "AVL Tree",
        description: "An implementation of an AVL Tree.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/data-structure-implementations/tree/main/avl-tree", type: "github" }],
        tags: ["Java"],
      },
      {
        name: "Binary Search Tree",
        description: "An implementation of a Binary Search Tree.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/data-structure-implementations/tree/main/binary-search-tree", type: "github" }],
        tags: ["Java"],
      },
      {
        name: "Linked List",
        description: "An implementation of a Linked List.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/data-structure-implementations/tree/main/linked-list", type: "github" }],
        tags: ["Java"],
      },
      {
        name: "Transaction Tracking",
        description: "My first Java program to track transactions.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/data-structure-implementations/tree/main/java-intro", type: "github" }],
        tags: ["Java"],
      },
      {
        name: "Puzzle Game",
        description: "An imitation of a simple Akari Puzzle",
        links: [
          { label: "Demo", href: "https://www.katie-chai.com/work/akari", type: "demo" },
        ],
        tags: ["Java"],
      },
    ],
  },
  {
    title: "Python",
    emoji: "🐍",
    projects: [
      {
        name: "Resy Bot",
        description: "A tool to help manage Resy reservations. The production version isn't public, but email me if you'd like to learn more.",
        links: [
          { label: "GitHub", href: "https://github.com/katiecha/resybot", type: "github" },
        ],
        status: "private",
        tags: ["Python"],
      },
      {
        name: "CV Nailoong",
        description: "A computer vision, facial expression detection system that matches your expressions to images.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/computer-vision-nailoong", type: "github" }],
        tags: ["Python"],
        other: ["TensorFlow", "OpenCV"],
      },
      {
        name: "Wordle",
        description: "A replica of the popular Wordle guessing game.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/comp110-22s-workspace/blob/main/exercises/ex03_wordle.py", type: "github" }],
        tags: ["Python"],
      },
      {
        name: "Turtle Art",
        description: "An experiment with Python's turtle library.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/comp110-22s-workspace/blob/main/exercises/ex04_turtle_art.py", type: "github" }],
        tags: ["Python"],
      },
      {
        name: "CS Class Demographic Study",
        description: "A data science project on my UNC COMP 110 class.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/comp110-22s-workspace/tree/main/exercises/ex08", type: "github" }],
        tags: ["Python"],
      },
      {
        name: "Durham Traffic Stops Study",
        description: "An introductory data science project on Durham traffic stops.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/comp110-22s-workspace/blob/main/exercises/ex07/data_wrangling.ipynb", type: "github" }],
        tags: ["Python"],
      },
    ],
  },
  {
    title: "SAS / R",
    emoji: "📈",
    projects: [
      {
        name: "Darknet Research",
        description: "A computational sociology project on trust and behavior in anonymous digital markets.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/trust-in-illicit-markets", type: "github" }],
        tags: ["R"],
      },
      {
        name: "EPID Research",
        description: "Epidemiology research project for Honors Carolina.",
        links: [],
        status: "private",
        inProgress: true,
        tags: ["R", "SAS"],
      },
      {
        name: "Biostatistics",
        description: "A few projects from my statistical programming class.",
        links: [
          { label: "GitHub", href: "https://github.com/katiecha/biostats", type: "github" },
        ],
        tags: ["SAS"],
      },
    ],
  },
  {
    title: "Unity / C#",
    emoji: "🎮",
    projects: [
      {
        name: "VR Maze Game",
        description: "A VR maze game project made with UNC CARVR.",
        links: [{ label: "GitHub", href: "https://github.com/carolina-ar-vr/VR-Maze-Game", type: "github" }],
        inProgress: true,
        tags: ["C#"],
        other: ["Unity"],
      },
    ],
  },
  {
    title: "Swift",
    emoji: "💨",
    projects: [
      {
        name: "Card Game",
        description: "A few introductory Swift projects that culminate in a simple card game.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/apps", type: "github" }],
        tags: ["Swift"],
      },
      {
        name: "Pomodoro Timer",
        description: "My first Swift project - a pomodoro timer app.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/pomodoro-timer", type: "github" }],
        tags: ["Swift"],
      },
    ],
  },
]

export const UIUX_PROJECTS: Project[] = [
  {
    name: "Carolina Adapts Toys for Children",
    description: "Design and redesign of the website for a student-run nonprofit that adapts toys for kids the toy market overlooks.",
    links: [{ label: "Project", href: "/work/catch", type: "site" }],
    inProgress: true,
    image: "/images/uiux-catch.png",
  },
  {
    name: "Special Olympics",
    description: "UX research, redesign, and rebuild of the Special Olympics PA site: simpler navigation for volunteers and more donations.",
    links: [{ label: "Project", href: "/work/special-olympics", type: "site" }],
    inProgress: true,
    image: "/images/uiux-special-olympics.png",
  },
  {
    name: "App Team Carolina",
    description: "A semester of UI/UX mockups from App Team Carolina's Design Academy: restaurant, dating, health, and app-redesign concepts.",
    links: [{ label: "Project", href: "/work/app-team-carolina", type: "site" }],
    inProgress: true,
    image: "/images/uiux-app-team.png",
  },
  {
    name: "Jeni's Ice Cream",
    description: "A self-directed concept redesign of the Jeni's app, reimagining flavor discovery, gifting, and how frozen pints get ordered.",
    links: [{ label: "Project", href: "/work/jenis", type: "site" }],
    inProgress: true,
    image: "/images/uiux-jenis.jpg",
  },
]
