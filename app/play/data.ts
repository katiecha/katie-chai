export type PlayLink = {
  label: string
  href: string
  icon: "youtube" | "docs" | "site"
}

export type EngineeringProject = {
  name: string
  description: string
  image: string
  links: PlayLink[]
}

export type MediaItem = {
  label: string
  image: string
}

export const ENGINEERING_PROJECTS: EngineeringProject[] = [
  {
    name: "Soft Robotic Jellyfish",
    description:
      'A robot that is able to "swim" in water for noninvasive exploration of underwater ecosystems, based on Florida Atlantic University\'s soft robotic jellyfish.',
    image: "/images/play/jellyfish.jpg",
    links: [
      { label: "YouTube", href: "https://www.youtube.com/watch?v=B3q6MmOUwK0", icon: "youtube" },
      { label: "Instructables", href: "https://www.instructables.com/Soft-Robotic-Jellyfish/", icon: "site" },
    ],
  },
  {
    name: "Face Shields",
    description:
      "A face shield service project that utilized laser cutting and 3D printing initially but eventually moved to injection molding.",
    image: "/images/play/face-shields.jpg",
    links: [
      { label: "YouTube", href: "https://www.youtube.com/watch?v=vZcQNL63mP8", icon: "youtube" },
    ],
  },
  {
    name: "Digitized CPR Dummy",
    description:
      "A digitized CPR dummy that I designed from scratch using Fusion 360, Autodesk Eagle, 3D printing, molding/casting, and more!",
    image: "/images/play/cpr-dummy.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/projects/final-project/", icon: "docs" },
    ],
  },
  {
    name: "Accessible Toys",
    description:
      "Children's toys with adapted internal circuitry to increase accessibility for children with special needs.",
    image: "/images/play/accessible-toys.jpg",
    links: [
      { label: "CATCH Toy Catalog", href: "https://www.catch-inc.com/toy-catalog", icon: "site" },
    ],
  },
  {
    name: "Light Painting Machine",
    description:
      "A light painting machine I manufactured with classmates that used long exposure photography to capture these images.",
    image: "/images/play/light-painting.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week15/", icon: "docs" },
    ],
  },
  {
    name: "Input Circuit Board",
    description: "An input circuit board I designed on Autodesk Eagle and surface mount soldered.",
    image: "/images/play/input-board.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week11/", icon: "docs" },
    ],
  },
  {
    name: "Output Circuit Board",
    description: "An output circuit board I designed on Autodesk Eagle and surface mount soldered.",
    image: "/images/play/output-board.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week17/", icon: "docs" },
    ],
  },
  {
    name: "Networking Experiment",
    description: "A networking experiment I developed on Autodesk Eagle and soldered / breadboarded.",
    image: "/images/play/networking.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week12/", icon: "docs" },
    ],
  },
  {
    name: "DIY Oscilloscope",
    description: "A DIY oscilloscope I soldered together and used to test various circuitry projects.",
    image: "/images/play/oscilloscope.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week14/", icon: "docs" },
    ],
  },
  {
    name: "Living Hinge",
    description: "A laser cut living hinge as well as some other laser cutting projects.",
    image: "/images/play/living-hinge.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week04/", icon: "docs" },
    ],
  },
  {
    name: "Coffee Table",
    description: "A CNC (computer controlled machining) coffee table for my dad.",
    image: "/images/play/coffee-table.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week08/", icon: "docs" },
    ],
  },
  {
    name: "Soap & Mold",
    description: "CNC soap mold & bar of soap created for my mom.",
    image: "/images/play/soap-mold.png",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week10/", icon: "docs" },
    ],
  },
]

export const IG_POSTS: MediaItem[] = [
  { label: "Late Night with Toys (Spring 2023)", image: "/images/play/ig-post-1.png" },
  { label: "Donuts with CATCH Promotion", image: "/images/play/ig-post-2.jpg" },
  { label: "BMES Collab Event", image: "/images/play/ig-post-3.jpg" },
  { label: "GBM Schedule 2023", image: "/images/play/ig-post-4.jpg" },
  { label: "LDOC Recap", image: "/images/play/ig-post-5.jpg" },
]

export const IG_STORIES: string[] = [
  "/images/play/ig-story-1.jpg",
  "/images/play/ig-story-2.jpg",
  "/images/play/ig-story-3.png",
  "/images/play/ig-story-4.png",
  "/images/play/ig-story-5.png",
  "/images/play/ig-story-6.png",
  "/images/play/ig-story-7.png",
  "/images/play/ig-story-8.png",
]

export const MERCH: MediaItem[] = [
  { label: "Student Union Cube Painting", image: "/images/play/merch-1.jpg" },
  { label: "Toy Tally Poster", image: "/images/play/merch-2.jpg" },
  { label: "", image: "/images/play/merch-3.jpg" },
  { label: "", image: "/images/play/merch-4.jpg" },
]
