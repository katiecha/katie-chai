export type LinkType = "github" | "demo" | "site" | "figma" | "youtube" | "docs" | "x" | "linkedin"

export type ProjectLink = {
  label: string
  href: string
  type: LinkType
}

export type Project = {
  name: string
  description: string
  links: ProjectLink[]
  status?: "in-progress"
}

export type Category = {
  title: string
  emoji: string
  projects: Project[]
}

export const CURRENT_PROJECTS: Project[] = [
  {
    name: "Regolith",
    description: "A workspace for agents and the humans who work with them.",
    links: [
      { label: "Website", href: "https://regolith.computer", type: "site" },
      { label: "X", href: "https://x.com/regolithapp", type: "x" },
    ],
  },
  {
    name: "Resy Bot",
    description: "An open-source tool to help manage Resy reservations.",
    links: [
      { label: "GitHub", href: "https://github.com/katiecha/resy-bot", type: "github" },
    ],
  },
  {
    name: "NC ASK",
    description: "An RAG educational platform built with React, TypeScript, FastAPI, and a Supabase vector database that provides info about NC autism resources using Gemini.",
    links: [
      { label: "GitHub", href: "https://github.com/katiecha/nc-ask", type: "github" },
    ],
  },
]

export const CATEGORIES: Category[] = [
  {
    title: "TypeScript / React / JavaScript",
    emoji: "👩‍💻",
    projects: [
      {
        name: "jeancha.ai",
        description: "An interactive sailing experience built with React Three Fiber and custom GLSL shaders, made for my dad.",
        links: [
          { label: "Site", href: "https://jeancha.ai", type: "site" },
          { label: "GitHub", href: "https://github.com/katiecha/jeancha", type: "github" },
        ],
      },
      {
        name: "LinkedIn Queens Solver",
        description: "A DOM bot I use to solve LinkedIn Queens.",
        links: [
          { label: "GitHub", href: "https://github.com/katiecha/linkedin-queens-solver", type: "github" },
        ],
      },
      {
        name: "Adventure Time Game",
        description: "A choose-your-own-adventure game written in JavaScript based on my favorite TV show.",
        links: [
          { label: "Demo", href: "https://katiecha.github.io/adventure-time-game", type: "demo" },
          { label: "GitHub", href: "https://github.com/katiecha/adventure-time-game", type: "github" },
        ],
      },
      {
        name: "CATCH Website",
        description: "A website and inventory management system for Carolina Adapts Toys for Children, built with React.",
        links: [
          { label: "Site", href: "https://catch.web.unc.edu", type: "site" },
          { label: "GitHub", href: "https://github.com/katiecha/catch-website", type: "github" },
        ],
      },
      {
        name: "ReSearch",
        description: "A research discovery platform aggregating faculty across UNC, Duke, and NC State using web scraping.",
        links: [
          { label: "YouTube", href: "https://youtube.com", type: "youtube" },
          { label: "GitHub", href: "https://github.com/katiecha/research", type: "github" },
        ],
      },
      {
        name: "Allergy Forecaster",
        description: "An allergy forecasting web app combining the Google Maps Pollen API with custom REST services.",
        links: [
          { label: "YouTube", href: "https://youtube.com", type: "youtube" },
          { label: "GitHub", href: "https://github.com/katiecha/allergy-forecaster", type: "github" },
        ],
      },
      {
        name: "A Cookbook Website",
        description: "A Korean cookbook website with family recipes, built with HTML/CSS.",
        links: [
          { label: "Site", href: "https://katiecha.github.io/cookbook", type: "site" },
          { label: "GitHub", href: "https://github.com/katiecha/cookbook", type: "github" },
        ],
      },
      {
        name: "Clement.ly",
        description: "A planner app that allows users to track their tasks, built with React for a database class.",
        links: [
          { label: "Figma", href: "https://figma.com", type: "figma" },
          { label: "GitHub", href: "https://github.com/katiecha/clemently", type: "github" },
          { label: "YouTube", href: "https://youtube.com", type: "youtube" },
        ],
      },
      {
        name: "Genetics of Cancer Website",
        description: "An educational website on cancer genetics with Hotjar instrumentation for user analytics.",
        links: [
          { label: "Site", href: "https://katiecha.github.io/genetics-of-cancer", type: "site" },
          { label: "GitHub", href: "https://github.com/katiecha/genetics-of-cancer", type: "github" },
        ],
      },
    ],
  },
  {
    title: "Embedded / C / MIPS / Logisim",
    emoji: "🔌",
    projects: [
      {
        name: "Build Your Own Computer (C)",
        description: "A semester-long project where I built different parts of a computer in C.",
        links: [
          { label: "GitHub", href: "https://github.com/katiecha/byoc-c", type: "github" },
        ],
      },
      {
        name: "Build Your Own Computer (MIPS)",
        description: "A semester-long project where I built different parts of a computer in MIPS assembly.",
        links: [
          { label: "GitHub", href: "https://github.com/katiecha/byoc-mips", type: "github" },
        ],
      },
      {
        name: "Build Your Own Computer (Logisim)",
        description: "A semester-long project where I built different parts of a computer in Logisim.",
        links: [
          { label: "GitHub", href: "https://github.com/katiecha/byoc-logisim", type: "github" },
        ],
      },
      {
        name: "Force Sensor",
        description: "An application I created to read force sensor data from my custom input board.",
        links: [
          { label: "Docs", href: "https://katiecha.github.io/force-sensor", type: "docs" },
        ],
      },
      {
        name: "ATtiny LED Blink",
        description: "My first embedded project where I programmed an ATtiny 44 to blink an LED.",
        links: [
          { label: "Docs", href: "https://katiecha.github.io/attiny-led", type: "docs" },
        ],
      },
    ],
  },
  {
    title: "Java",
    emoji: "☕",
    projects: [
      {
        name: "Password Manager",
        description: "A password manager implementing a Hash Map.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/password-manager", type: "github" }],
      },
      {
        name: "Patient Priority System",
        description: "A patient priority system implementing a Binary Heap.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/patient-priority", type: "github" }],
      },
      {
        name: "AVL Tree",
        description: "An implementation of an AVL Tree.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/avl-tree", type: "github" }],
      },
      {
        name: "Binary Search Tree",
        description: "An implementation of a Binary Search Tree.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/bst", type: "github" }],
      },
      {
        name: "Linked List",
        description: "An implementation of a Linked List.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/linked-list", type: "github" }],
      },
      {
        name: "Transaction Tracking",
        description: "My first Java program to track transactions.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/transaction-tracking", type: "github" }],
      },
      {
        name: "Puzzle Game (Akari)",
        description: "An imitation of a simple Akari Puzzle Game.",
        links: [
          { label: "Demo", href: "https://katiecha.github.io/akari", type: "demo" },
          { label: "GitHub", href: "https://github.com/katiecha/akari", type: "github" },
        ],
      },
    ],
  },
  {
    title: "Python",
    emoji: "🐍",
    projects: [
      {
        name: "CV Nailoong",
        description: "A computer vision, facial expression detection system that matches your expressions to images.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/cv-nailoong", type: "github" }],
      },
      {
        name: "Wordle",
        description: "A replica of the popular Wordle guessing game.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/wordle", type: "github" }],
      },
      {
        name: "Turtle Art",
        description: "An experiment with Python's turtle library.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/turtle-art", type: "github" }],
      },
      {
        name: "CS Class Demographic Study",
        description: "A data science project on my UNC COMP 110 class.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/comp110-demographics", type: "github" }],
      },
      {
        name: "Durham Traffic Stops Study",
        description: "An introductory data science project on Durham traffic stops.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/durham-traffic", type: "github" }],
      },
    ],
  },
  {
    title: "SAS / R",
    emoji: "📊",
    projects: [
      {
        name: "Darknet Research",
        description: "A computational sociology project on trust and behavior in anonymous digital markets.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/darknet-research", type: "github" }],
      },
      {
        name: "EPID Research",
        description: "Epidemiology research project for Honors Carolina.",
        links: [],
        status: "in-progress",
      },
      {
        name: "Biostatistics",
        description: "A few projects from my statistical programming class.",
        links: [
          { label: "Guide", href: "https://katiecha.github.io/biostatistics", type: "docs" },
          { label: "GitHub", href: "https://github.com/katiecha/biostatistics", type: "github" },
        ],
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
        links: [{ label: "GitHub", href: "https://github.com/katiecha/vr-maze", type: "github" }],
        status: "in-progress",
      },
    ],
  },
  {
    title: "Swift",
    emoji: "📱",
    projects: [
      {
        name: "Card Game",
        description: "A few introductory Swift projects that culminate in a simple card game.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/swift-card-game", type: "github" }],
      },
    ],
  },
]

export const UIUX_PROJECTS: Project[] = [
  {
    name: "Carolina Adapts Toys for Children",
    description: "Website design and redesign for CATCH.",
    links: [],
    status: "in-progress",
  },
  {
    name: "Special Olympics",
    description: "UX research and website redesign and rebuild.",
    links: [{ label: "Project", href: "#", type: "site" }],
    status: "in-progress",
  },
  {
    name: "App Team Carolina",
    description: "Various projects from the UI/UX Design Academy.",
    links: [],
  },
  {
    name: "Jeni's Ice Cream",
    description: "UI redesign of the Jeni's Ice Cream App.",
    links: [],
    status: "in-progress",
  },
]
