import type { Project, ProjectLink } from "@/app/work/data"

export type { Project, ProjectLink }

export type MediaItem = {
  label: string
  image: string
}

export const ENGINEERING_PROJECTS: Project[] = [
  {
    name: "Soft Robotic Jellyfish",
    description:
      'A robot that is able to "swim" in water for noninvasive exploration of underwater ecosystems, based on Florida Atlantic University\'s soft robotic jellyfish.',
    image: "/images/play/jellyfish.jpg",
    links: [
      { label: "YouTube", href: "https://www.youtube.com/watch?v=B3q6MmOUwK0", type: "youtube" },
      { label: "Instructables", href: "https://www.instructables.com/Soft-Robotic-Jellyfish/", type: "site" },
    ],
  },
  {
    name: "Face Shields",
    description:
      "A face shield service project that utilized laser cutting and 3D printing initially but eventually moved to injection molding.",
    image: "/images/play/face-shields.jpg",
    links: [
      { label: "YouTube", href: "https://www.youtube.com/watch?v=vZcQNL63mP8", type: "youtube" },
    ],
  },
  {
    name: "Digitized CPR Dummy",
    description:
      "A digitized CPR dummy that I designed from scratch using Fusion 360, Autodesk Eagle, 3D printing, molding/casting, and more!",
    image: "/images/play/cpr-dummy.jpg",
    imagePosition: "object-top",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/projects/final-project/", type: "docs" },
    ],
  },
  {
    name: "Accessible Toys",
    description:
      "Children's toys with adapted internal circuitry to increase accessibility for children with special needs.",
    image: "/images/play/accessible-toys.jpg",
    links: [
      { label: "CATCH Toy Catalog", href: "https://www.catch-inc.com/toy-catalog", type: "site" },
    ],
  },
  {
    name: "Light Painting Machine",
    description:
      "A light painting machine I manufactured with classmates that used long exposure photography to capture these images.",
    videoEmbed: "https://www.youtube.com/embed/xmMpi_Dm4RQ",
    links: [
      { label: "YouTube", href: "https://www.youtube.com/watch?v=xmMpi_Dm4RQ", type: "youtube" },
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week15/", type: "docs" },
    ],
  },
  {
    name: "Input Circuit Board",
    description: "An input circuit board I designed on Autodesk Eagle and surface mount soldered.",
    image: "/images/play/light-painting.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week11/", type: "docs" },
    ],
  },
  {
    name: "Output Circuit Board",
    description: "An output circuit board I designed on Autodesk Eagle and surface mount soldered.",
    image: "/images/play/input-board.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week17/", type: "docs" },
    ],
  },
  {
    name: "Networking Experiment",
    description: "A networking experiment I developed on Autodesk Eagle and soldered / breadboarded.",
    image: "/images/play/output-board.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week12/", type: "docs" },
    ],
  },
  {
    name: "DIY Oscilloscope",
    description: "A DIY oscilloscope I soldered together and used to test various circuitry projects.",
    image: "/images/play/networking.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week14/", type: "docs" },
    ],
  },
  {
    name: "Living Hinge",
    description: "A laser cut living hinge as well as some other laser cutting projects.",
    image: "/images/play/oscilloscope.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week04/", type: "docs" },
    ],
  },
  {
    name: "Coffee Table",
    description: "A CNC (computer controlled machining) coffee table for my dad.",
    image: "/images/play/living-hinge.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week08/", type: "docs" },
    ],
  },
  {
    name: "Soap & Mold",
    description: "CNC soap mold & bar of soap created for my mom.",
    image: "/images/play/coffee-table.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week10/", type: "docs" },
    ],
  },
]

export const IG_POSTS: MediaItem[] = [
  { label: "Late Night with Toys (Spring 2023)", image: "/images/play/ig-post-1.png" },
  { label: "Donuts with CATCH Promotion", image: "/images/play/ig-post-2.jpg" },
  { label: "BMES Collab Event", image: "/images/play/ig-post-3.jpg" },
  { label: "GBM Schedule 2023", image: "/images/play/ig-post-4.jpg" },
  { label: "LDOC Recap", image: "/images/play/ig-post-5.png" },
  { label: "Donuts with CATCH", image: "/images/play/ig-post-6.png" },
  { label: "BMES x CATCH Crossover Event", image: "/images/play/ig-post-7.png" },
  { label: "GBM Schedule", image: "/images/play/ig-post-8.png" },
  { label: "Merch Reveal (Firetruck Edition)", image: "/images/play/ig-post-9.png" },
]

export type Highlight = {
  label: string
  cover: string
  frames: string[]
}

export const IG_HIGHLIGHTS: Highlight[] = [
  { label: "Toys", cover: "/images/play/ig-story-3.png", frames: ["/images/play/ig-story-3.png"] },
  {
    label: "Fundraisers",
    cover: "/images/play/ig-story-4.png",
    frames: ["/images/play/ig-story-4.png", "/images/play/ig-story-1.jpg", "/images/play/ig-story-2.jpg"],
  },
  { label: "Collabs", cover: "/images/play/ig-story-5.png", frames: ["/images/play/ig-story-5.png"] },
  { label: "FAQs", cover: "/images/play/ig-story-6.png", frames: ["/images/play/ig-story-6.png"] },
  { label: "Spotlight", cover: "/images/play/ig-story-7.png", frames: ["/images/play/ig-story-7.png"] },
  { label: "Press", cover: "/images/play/ig-story-8.png", frames: ["/images/play/ig-story-8.png"] },
]

export const MERCH: MediaItem[] = [
  { label: "CATCH T-Shirt", image: "/images/play/merch-1.jpg" },
  { label: "CATCH Hat", image: "/images/play/merch-2.jpg" },
  { label: "Student Union Cube Painting", image: "/images/play/merch-3.jpg" },
  { label: "Toy Tally Poster", image: "/images/play/merch-4.jpg" },
]
