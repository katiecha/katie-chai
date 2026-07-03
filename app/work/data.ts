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
  image?: string
}

export type Category = {
  title: string
  emoji: string
  projects: Project[]
}

export const SOCIAL_LINKS = {
  github: "https://github.com/katiecha",
  linkedin: "http://www.linkedin.com/in/katie-chai",
  x: "https://x.com/katiechaii",
  resume: "https://www.katiech.ai/",
}

export const CURRENT_PROJECTS: Project[] = [
  {
    name: "Regolith",
    description: "A workspace for agents and the humans who work with them.",
    links: [
      { label: "Website", href: "https://www.katiech.ai/", type: "site" },
      { label: "X", href: "https://x.com/RegolithAi", type: "x" },
    ],
  },
  {
    name: "Resy Bot",
    description: "An open-source tool to help manage Resy reservations.",
    links: [
      { label: "GitHub", href: "https://github.com/katiecha/resybot", type: "github" },
    ],
  },
  {
    name: "NC ASK",
    description: "An RAG educational platform built with React, TypeScript, FastAPI, and a Supabase vector database that provides info about NC autism resources using Gemini.",
    links: [
      { label: "GitHub", href: "https://github.com/katiecha/NC-ASK", type: "github" },
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
          { label: "Site", href: "https://jeanch.ai/happy-fathers-day", type: "site" },
          { label: "GitHub", href: "https://github.com/katiecha/jeanch.ai", type: "github" },
        ],
      },
      {
        name: "LinkedIn Queens Solver",
        description: "A DOM bot I use to solve LinkedIn Queens.",
        links: [
          { label: "GitHub", href: "https://github.com/katiecha/dom-bots/blob/main/linkedin-queens.js", type: "github" },
        ],
      },
      {
        name: "Adventure Time Game",
        description: "A choose-your-own-adventure game written in JavaScript based on my favorite TV show.",
        links: [
          { label: "Demo", href: "https://katiecha.github.io/new-media/Katie_Chai_Project.html", type: "demo" },
          { label: "GitHub", href: "https://github.com/katiecha/katiecha.github.io/blob/main/new-media/Katie_Chai_Project.html", type: "github" },
        ],
      },
      {
        name: "CATCH Website",
        description: "A website and inventory management system for Carolina Adapts Toys for Children, built with React.",
        links: [
          { label: "Site", href: "https://www.catch-inc.com/", type: "site" },
          { label: "GitHub", href: "https://github.com/cssgunc/catch", type: "github" },
        ],
      },
      {
        name: "ReSearch",
        description: "A research discovery platform aggregating faculty across UNC, Duke, and NC State using web scraping.",
        links: [
          { label: "YouTube", href: "https://www.youtube.com/watch?v=qGP18CfBojs", type: "youtube" },
          { label: "GitHub", href: "https://github.com/researph/ReSearch", type: "github" },
        ],
      },
      {
        name: "Allergy Forecaster",
        description: "An allergy forecasting web app combining the Google Maps Pollen API with custom REST services.",
        links: [
          { label: "YouTube", href: "https://youtu.be/btPoCuaHIxs?si=-YUrUHb5ikpzJXdC", type: "youtube" },
          { label: "GitHub", href: "https://github.com/426finalproject/finalproject", type: "github" },
        ],
      },
      {
        name: "A Cookbook Website",
        description: "A Korean cookbook website with family recipes, built with HTML/CSS.",
        links: [
          { label: "Site", href: "https://katiecha.github.io/a-cookbook/index.html", type: "site" },
          { label: "GitHub", href: "https://github.com/katiecha/katiecha.github.io/tree/main/a-cookbook", type: "github" },
        ],
      },
      {
        name: "Genetics of Cancer Website",
        description: "An educational website on cancer genetics with Hotjar instrumentation for user analytics.",
        links: [
          { label: "Site", href: "https://genetics-of-cancer.netlify.app/home", type: "site" },
          { label: "GitHub", href: "https://github.com/katiecha/molecular-biology-and-genetics", type: "github" },
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
          { label: "GitHub", href: "https://github.com/katiecha/build-your-own-computer/tree/main/c", type: "github" },
        ],
      },
      {
        name: "Build Your Own Computer (MIPS)",
        description: "A semester-long project where I built different parts of a computer in MIPS assembly.",
        links: [
          { label: "GitHub", href: "https://github.com/katiecha/build-your-own-computer/tree/main/MIPS-assembly", type: "github" },
        ],
      },
      {
        name: "Build Your Own Computer (Logisim)",
        description: "A semester-long project where I built different parts of a computer in Logisim.",
        links: [
          { label: "GitHub", href: "https://github.com/katiecha/build-your-own-computer/tree/main/logisim", type: "github" },
        ],
      },
      {
        name: "Force Sensor",
        description: "An application I created to read force sensor data from my custom input board.",
        links: [
          { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week16/", type: "docs" },
        ],
      },
      {
        name: "ATtiny LED Blink",
        description: "My first embedded project where I programmed an ATtiny 44 to blink an LED.",
        links: [
          { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week09/", type: "docs" },
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
        links: [{ label: "GitHub", href: "https://github.com/katiecha/data-structure-implementations/tree/main/hash-map", type: "github" }],
      },
      {
        name: "Patient Priority System",
        description: "A patient priority system implementing a Binary Heap.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/data-structure-implementations/tree/main/binary-heap", type: "github" }],
      },
      {
        name: "AVL Tree",
        description: "An implementation of an AVL Tree.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/data-structure-implementations/tree/main/avl-tree", type: "github" }],
      },
      {
        name: "Binary Search Tree",
        description: "An implementation of a Binary Search Tree.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/data-structure-implementations/tree/main/binary-search-tree", type: "github" }],
      },
      {
        name: "Linked List",
        description: "An implementation of a Linked List.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/data-structure-implementations/tree/main/linked-list", type: "github" }],
      },
      {
        name: "Transaction Tracking",
        description: "My first Java program to track transactions.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/data-structure-implementations/tree/main/java-intro", type: "github" }],
      },
      {
        name: "Puzzle Game (Akari)",
        description: "An imitation of a simple Akari Puzzle Game.",
        links: [
          { label: "Demo", href: "https://www.katie-chai.com/work/akari", type: "demo" },
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
        links: [{ label: "GitHub", href: "https://github.com/katiecha/computer-vision-nailoong", type: "github" }],
      },
      {
        name: "Wordle",
        description: "A replica of the popular Wordle guessing game.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/comp110-22s-workspace/blob/main/exercises/ex03_wordle.py", type: "github" }],
      },
      {
        name: "Turtle Art",
        description: "An experiment with Python's turtle library.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/comp110-22s-workspace/blob/main/exercises/ex04_turtle_art.py", type: "github" }],
      },
      {
        name: "CS Class Demographic Study",
        description: "A data science project on my UNC COMP 110 class.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/comp110-22s-workspace/tree/main/exercises/ex08", type: "github" }],
      },
      {
        name: "Durham Traffic Stops Study",
        description: "An introductory data science project on Durham traffic stops.",
        links: [{ label: "GitHub", href: "https://github.com/katiecha/comp110-22s-workspace/blob/main/exercises/ex07/data_wrangling.ipynb", type: "github" }],
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
        links: [{ label: "GitHub", href: "https://github.com/katiecha/trust-in-illicit-markets", type: "github" }],
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
          { label: "Guide", href: "https://katiecha.github.io/new-media/accessibility-guide/", type: "docs" },
          { label: "GitHub", href: "https://github.com/katiecha/katiecha.github.io/tree/main/new-media/accessibility-guide", type: "github" },
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
        links: [{ label: "GitHub", href: "https://github.com/carolina-ar-vr/VR-Maze-Game", type: "github" }],
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
        links: [{ label: "GitHub", href: "https://github.com/katiecha/apps", type: "github" }],
      },
    ],
  },
]

export const UIUX_PROJECTS: Project[] = [
  {
    name: "Carolina Adapts Toys for Children",
    description: "Website design & redesign.",
    links: [],
    status: "in-progress",
    image: "/images/uiux-catch.png",
  },
  {
    name: "Special Olympics",
    description: "UX research and website redesign + rebuild.",
    links: [{ label: "Project", href: "https://www.katie-chai.com/work/special-olympics", type: "site" }],
    status: "in-progress",
    image: "/images/uiux-special-olympics.png",
  },
  {
    name: "App Team Carolina",
    description: "Various projects from the UI/UX Design Academy.",
    links: [{ label: "Project", href: "https://www.katie-chai.com/work/app-team-carolina", type: "site" }],
    image: "/images/uiux-app-team.png",
  },
  {
    name: "Jeni's Ice Cream",
    description: "UI redesign of the Jeni's Ice Cream App.",
    links: [],
    status: "in-progress",
    image: "/images/uiux-jenis.jpg",
  },
]
