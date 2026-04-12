import project1 from "../assets/projects/Smart.png";
import project2 from "../assets/projects/Fresh.png";
import project3 from "../assets/projects/Meal.png";
import project4 from "../assets/projects/bg.png";
import project5 from "../assets/projects/Weather.png";
import project6 from "../assets/projects/Movie.png";
import project7 from "../assets/projects/portfolio.png";
import project8 from "../assets/beni.png";
import project9 from "../assets/download.png";
import project10 from "../assets/projects/p10.png";
import project11 from "../assets/projects/Costco.png";
import logo1 from '../assets/HackerRank.png'
import logo2 from '../assets/maharatechiti.png'

import profileImg from "../assets/kottp.png";

export const INTERNSHIP = [
  {
    title: "Frontend Developer & Cross Platform Mobile Development (Feb 2025 – July 2025)",
    image: project9,
    description: `Completed intensive training in HTML, CSS, JavaScript, TypeScript, and modern frameworks like ReactJS and Angular. Learned Cross Platform Mobile Development using Flutter and React Native.
    Built real-world projects simulating industry practices, applying API integration, Firebase, and state management.
    Participated in team-based development following Agile methodologies and Git version control.
    Improved UI/UX design principles, component reusability, and performance optimization`
  }
];

export const HERO_CONTENT = {
  greeting: "Hi, I'm Mahmoud Hussein Kamal",
  description: "Frontend Developer | React | Angular | JavaScript | UI/UX",
  image: profileImg,
  intro: "Frontend Developer with hands-on experience building scalable, responsive web and mobile applications using React, Angular, and modern JavaScript frameworks.",
  experience: "Skilled in API integration, state management, and cross-platform development with React Native. Strong UI/UX background with experience in agile team environments.",
  highlights: [
    "Expertise in HTML5, CSS3, JavaScript, and TypeScript.",
    "Proficient in React, Angular, Next.js, and Redux Toolkit.",
    "Mobile development with React Native and Flutter.",
    "Skilled in Firebase, FastAPI, and JWT Auth.",
    "Strong UI/UX design background using Figma and XD."
  ]
};

import { FaBriefcase, FaCode, FaRocket, FaUsers, FaGithub } from "react-icons/fa";

export const ABOUT_TEXT = {
  intro: "I am a Frontend Developer with hands-on experience building scalable, responsive web and mobile applications. I specialize in React, Angular, and modern JavaScript frameworks, with a strong focus on high-performance, user-centric digital solutions.",
  cards: [
    {
      title: "Experience",
      icon: FaBriefcase,
      text: "Over 3 years of evolving professional experience in the tech landscape."
    },
    {
      title: "Tech Stack",
      icon: FaCode,
      text: "Specialized in React, Angular, Next.js, and Mobile development with React Native."
    },
    {
      title: "Fast Learner",
      icon: FaRocket,
      text: "Committed to continuous learning and adapting to solving complex problems."
    },
    {
      title: "Team Player",
      icon: FaUsers,
      text: "Thrive in collaborative environments delivering high-quality, scalable solutions."
    },
    {
      title: "Open Source",
      icon: FaGithub,
      text: "Active contributor to open-source and always exploring new technology frontiers."
    }
  ]
};

export const EXPERIENCES = [
  {
    year: "Feb 2025 – July 2025",
    role: "Frontend Developer & Cross Platform Mobile Intern",
    company: "ITI",
    description: `Completed intensive training in HTML, CSS, JavaScript, TypeScript, and modern frameworks like React.js and Angular. Learned Cross Platform Mobile Development using Flutter and React Native. Built real-world projects simulating industry practices, applying API integration, Firebase, and state management.`,
    technologies: ["React", "Angular", "React Native", "Flutter", "Firebase"],
  },
  {
    year: "Nov 2022 – Present",
    role: "Freelance Frontend Developer",
    company: "Freelance",
    description: `Designed and developed responsive web applications for clients across e-commerce and services. Built secure authentication systems with JWT, React Router, and Firebase.`,
    technologies: ["React", "JWT", "Firebase", "Responsive Design"],
    projects: [
      { name: "Khatwa", links: { live: "#" } },
      { name: "Note Application", links: { github: "https://github.com/kottp6/NoteApplicationReact" } },
      { name: "MovicEg Website", links: { live: "https://www.moviceg.com/" } },
      { name: "Tech-seeds", links: { live: "https://tech-seeds.vercel.app/" } }
    ]
  },
  {
    year: "Feb 2023 – Present",
    role: "Freelance UI/UX Developer",
    company: "Freelance",
    description: `Designed user interfaces and improved user experience across platforms.`,
    technologies: ["Figma", "Adobe XD", "Behance"],
    projects: [
      { name: "FeL7za Mobile App" },
      { name: "Medicine Website" }
    ]
  }
];


export const PROJECTS = [
  {
    title: "Handmade E-Commerce Website",
    image: project10,
    description: "Full-stack platform connecting customers and vendors for handcrafted products. Features include real-time admin control and vendor management.",
    technologies: ["React", "Firebase", "Context API", "Tailwind"],
    liveDemo: "https://hand-made-website-graduation-projec-seven.vercel.app/"
  },
  {
    title: "Smart Assistant Glasses (SAG)",
    image: project1,
    description: "Accessibility-focused system with website & dashboard for product orders and analytics. Built with Angular, TS, and Bootstrap.",
    technologies: ["Angular", "TypeScript", "Bootstrap"],
    liveDemo: "#"
  },
  {
    title: "Terllo | Workspace OS",
    image: project4,
    description: "Premium, high-performance project management application inspired by Trello, designed for modern, intelligence-driven teams.",
    technologies: ["React", "Zustand", "GSAP", "Tailwind"],
    liveDemo: "#"
  },
  {
    title: "Fresh Cart",
    image: project2,
    description: "E-commerce website using React, TailwindCSS, and JWT Auth. Integrated React Query for caching and Context API.",
    technologies: ["React", "TailwindCSS", "React Query", "JWT"],
    liveDemo: "#"
  },
  {
    title: "Vanilla JS E-Commerce",
    image: project11,
    description: "Built with HTML, CSS, and JavaScript featuring separate Admin/User roles, API integration, and persistent cart.",
    technologies: ["JavaScript", "HTML5", "CSS3", "API"],
    liveDemo: "https://e-commerce-appliction-six.vercel.app/"
  },
  {
    title: "Pharmacy Management System",
    image: project5,
    description: "Professional inventory management system designed specifically for veterinary pharmacies, aimed at tracking products.",
    technologies: ["React", "Tailwind", "Firebase"],
    liveDemo: "#"
  },
  {
    title: "Ramadan Challenge Tracker",
    image: project7,
    description: "A beautiful, responsive web application to track spiritual progress during Ramadan. Built with React and Tailwind CSS.",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
    liveDemo: "#"
  },
  {
    title: "ProCV Builder",
    image: project6,
    description: "High-performance, responsive web application built with React, allowing real-time resume creation and PDF export.",
    technologies: ["React", "GSAP", "html2canvas", "jspdf"],
    liveDemo: "#"
  },
];

export const CONTACT = {
  address: "Cairo , Egypt",
  phoneNo: "+20 128 884 5234",
  email: "kottpkamal@gmail.com",
};

export const EDUCATION = {
  image: project8,
  Name: "Bachelor of Computer and Information, Beni-Suef University (2019 - 2023)",
  GPA: "3.6 (Excellent)",
  GradPro: "Excellent (A+)",
};

export const CERTIFICATIONS = [
  {
    title: "React – The Complete Guide (Udemy, 2025)",
    image: project10,
    link: "#"
  },
  {
    title: "Frontend Developer (Route)",
    image: logo1,
    link: "#"
  },
  {
    title: "JavaScript (HackerRank)",
    image: logo1,
    link: "https://www.hackerrank.com/certificates/5b25918b328b"
  },
  {
    title: "React (HackerRank)",
    image: logo1,
    link: "https://www.hackerrank.com/certificates/38e90f0cb576"
  },
  {
    title: "Database Management (Maharatech)",
    image: logo2,
    link: "https://maharatech.gov.eg/mod/customcert/view.php?id=7655&downloadown=1"
  },
];