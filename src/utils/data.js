import { 
    FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, 
    FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaBriefcase, 
    FaCode, FaRocket, FaUsers, FaGithub 
} from "react-icons/fa";
import { 
    SiTailwindcss, SiJavascript, SiTypescript, SiFramer, 
    SiMongodb, SiAngular, SiReact, SiNextdotjs, SiFirebase, 
    SiRedux, SiReactquery, SiDjango, SiFastapi, SiFlask 
} from "react-icons/si";

export const navLinks = [
    { id: "summary", title: "Summary" },
    { id: "about", title: "About" },
    { id: "services", title: "Services" },
    { id: "experience", title: "Experience" },
    { id: "certifications", title: "Certifications" },
    { id: "skills", title: "Skills" },
    { id: "contact", title: "Contact" },
];

export const HERO_CONTENT = {
    greeting: "Hi, I'm Mahmoud Hussein Kamal",
    description: "Frontend Developer | React | Angular | JavaScript | UI/UX",
    image: "https://res.cloudinary.com/dojghbhxq/image/upload/q_auto/f_auto/v1776099727/kottp-removebg-preview_dpl0lq.png",
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

export const CONTACT = {
    address: "Cairo , Egypt",
    phoneNo: "+20 128 884 5234",
    email: "kottpkamal@gmail.com",
};

export const EDUCATION = {
    image: "https://res.cloudinary.com/dojghbhxq/image/upload/v1776033218/beni_jlvwou.png",
    Name: "Bachelor of Computer and Information, Beni-Suef University (2019 - 2023)",
    GPA: "3.6",
    GradPro: "Excellent (A+)",
};

export const CERTIFICATIONS = [
    {
        title: "ITI Certification - Frontend development & cross platform (2024)",
        icon: FaBriefcase,
        color: "#22c55e",
    },
    {
        title: "React – The Complete Guide (Udemy, 2025)",
        icon: FaReact,
        color: "#61DAFB",
    },
    {
        title: "Frontend Developer (Route)",
        icon: FaCode,
        color: "#9333ea",
    },
    {
        title: "JavaScript (HackerRank)",
        icon: SiJavascript,
        color: "#F7DF1E",
    },
    {
        title: "React (HackerRank)",
        icon: FaReact,
        color: "#61DAFB",
    },
    {
        title: "Database Management (Maharatech)",
        icon: FaDatabase,
        color: "#00758f",
    },
];

export const skills = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "React Native", icon: SiReact, color: "#61DAFB" },
    { name: "Javascript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Sass", icon: FaSass, color: "#CC6699" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "FastAPI", icon: SiFastapi, color: "#05998B" },
    { name: "Flask", icon: SiFlask, color: "#FFFFFF" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
];

export const PROJECTS_COUNT = 23;

export const featuredProjects = [
    {
        title: "Handmade E-Commerce Website",
        description: "Full-stack platform connecting customers and vendors for handcrafted products. Features include real-time admin control and vendor management.",
        tags: ["React", "Firebase", "Context API", "Tailwind"],
        image: "https://res.cloudinary.com/dojghbhxq/image/upload/w_500,h_400,c_fill,f_auto,q_auto/v1776034103/p10_afzqqv.png",
        source_code_link: "https://github.com/mahmoudhussein6/HandMade_Website_GraduationProject",
        live_link: "https://hand-made-website-graduation-projec-seven.vercel.app/",
    },
    {
        title: "Smart Assistant Glasses (SAG)",
        description: "Accessibility-focused system with website & dashboard for product orders and analytics. Built with Angular, TS, and Bootstrap.",
        tags: ["Angular", "TypeScript", "Bootstrap"],
        image: "https://res.cloudinary.com/dojghbhxq/image/upload/w_500,h_400,c_fill,f_auto,q_auto/v1776033208/Smart_drkjt1.png",
        source_code_link: "https://github.com/mahmoudhussein6/SmartAssistantGlassesCode",
        live_link: "https://www.linkedin.com/posts/mahmoud-hussein-0bb055242_sag-smartassistantglasses-aiforaccessibility-activity-7085287650022035457-ZIgo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADwp108BQ3qGUZG-G2cUIIkoBXGE6x2CfFc",
    },
    {
        title: "Terllo | Workspace OS",
        description: "Premium, high-performance project management application inspired by Trello, designed for modern, intelligence-driven teams.",
        tags: ["React", "Zustand", "GSAP", "Tailwind"],
        image: "https://res.cloudinary.com/dojghbhxq/image/upload/w_600,h_400,c_fill,f_auto,q_auto/v1776033218/terllo_jlvwou.jpg",
        source_code_link: "https://github.com/mahmoudhussein6/terllo-clone",
        live_link: "https://terllo-clone-six.vercel.app/#/dashboard",
    },
    {
        title: "Echo System",
        description: "An online marketing company in Beni Suef, we help you grow and reach more customers through photography, design, paid advertising.",
        tags: ["React", "Tailwind", "JavaScript", "Framer Motion"],
        image: "https://res.cloudinary.com/dojghbhxq/image/upload/w_400,h_400,c_fill,f_auto,q_auto/v1776033001/echo_vq4ovb.jpg",
        source_code_link: "https://github.com/mahmoudhussein6/echoSystem",
        live_link: "https://echo-system-gamma.vercel.app/",
    },
];

export const experiences = [
    {
        title: "Frontend Developer & Cross Platform Mobile Intern",
        company_name: "ITI",
        iconBg: "#383E56",
        date: "Feb 2025 – July 2025",
        points: [
            "Completed intensive training in HTML, CSS, JavaScript, TypeScript, and modern frameworks like React.js and Angular.",
            "Learned Cross Platform Mobile Development using Flutter and React Native.",
            "Built real-world projects simulating industry practices, applying API integration, Firebase, and state management.",
            "Participated in team-based development following agile methodologies and Git version control.",
        ],
    },
    {
        title: "Freelance Frontend Developer",
        company_name: "Freelance",
        iconBg: "#E6DEDD",
        date: "Nov 2022 – Present",
        points: [
            "Designed and developed responsive web applications for clients across e-commerce and services.",
            "Built secure authentication systems with JWT, React Router, and Firebase.",
            "Key projects include Khatwa, Note Application, MovicEg, and Tech-seeds.",
        ],
    },
    {
        title: "Freelance UI/UX Developer",
        company_name: "Freelance",
        iconBg: "#383E56",
        date: "Feb 2023 – Present",
        points: [
            "Designed user interfaces and improved user experience across platforms.",
            "Worked on mobile application (FeL7za) and medical website designs.",
        ],
    },

];

export const services = [
    { 
        title: "Frontend Development", 
        icon: FaReact,
        description: "Building high-performance, scalable web applications using React, Angular, and Next.js with clean architecture and pixel-perfect UI."
    },
    { 
        title: "UI/UX Design", 
        icon: SiFramer,
        description: "Designing intuitive user experiences and modern interfaces with focused on usability, accessibility, and high-impact aesthetics."
    },
    { 
        title: "Backend Integration", 
        icon: FaNodeJs,
        description: "Integrating complex APIs, Firebase, and real-time databases with efficient state management for seamless end-to-end functionality."
    },
];
