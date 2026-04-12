import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaSass, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiTypescript, SiFramer, SiMongodb, SiAngular, SiReact, SiNextdotjs, SiFirebase, SiRedux, SiReactquery, SiDjango, SiFastapi, SiFlask } from "react-icons/si";
import project1 from "../assets/projects/Smart.png";
import project2 from "../assets/projects/Fresh.png";
import project6 from "../assets/projects/Movie.png";
import project10 from "../assets/projects/p10.png";
import project11 from "../assets/projects/Costco.png";
import project4 from "../assets/projects/bg.png";
import project5 from "../assets/projects/Weather.png";
import project7 from "../assets/projects/portfolio.png";
import project8 from "../assets/projects/terllo.jpg";
import project9 from "../assets/projects/vet.jpg";
import project12 from "../assets/projects/ramdan.jpg";
import project13 from "../assets/projects/cv.jpg";
import project14 from "../assets/projects/khatwa.jpg";
import project15 from "../assets/projects/movicEg.jpg";
import project16 from "../assets/projects/todolist.jpg";
import project17 from "../assets/projects/dhaker.jpg";
import project18 from "../assets/projects/prayer.jpg";
import project19 from "../assets/projects/quran.jpg";
import project20 from "../assets/projects/expense.jpg";
import project21 from "../assets/projects/adminDash.jpg";
import project22 from "../assets/projects/store.jpg";
import project23 from "../assets/projects/question.jpg";
import project24 from "../assets/projects/echo.jpg";
export const navLinks = [
    { id: "summary", title: "Summary" },
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "experience", title: "Experience" },
    { id: "contact", title: "Contact" },
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

export const projects = [
    {
        title: "Handmade E-Commerce Website",
        description: "Full-stack platform connecting customers and vendors for handcrafted products. Features include real-time admin control and vendor management.",
        tags: ["React", "Firebase", "Context API", "Tailwind"],
        image: project10,
        source_code_link: "https://github.com/mahmoudhussein6/HandMade_Website_GraduationProject",
        live_link: "https://hand-made-website-graduation-projec-seven.vercel.app/",
    },
    {
        title: "Smart Assistant Glasses (SAG)",
        description: "Accessibility-focused system with website & dashboard for product orders and analytics. Built with Angular, TS, and Bootstrap.",
        tags: ["Angular", "TypeScript", "Bootstrap"],
        image: project1,
        source_code_link: "https://github.com/mahmoudhussein6/SmartAssistantGlassesCode",
        live_link: "https://www.linkedin.com/posts/mahmoud-hussein-0bb055242_sag-smartassistantglasses-aiforaccessibility-activity-7085287650022035457-ZIgo?utm_source=share&utm_medium=member_desktop&rcm=ACoAADwp108BQ3qGUZG-G2cUIIkoBXGE6x2CfFc",
    },
    {
        title: "Terllo | Workspace OS",
        description: "Premium, high-performance project management application inspired by Trello, designed for modern, intelligence-driven teams.",
        tags: ["React", "Zustand", "GSAP", "Tailwind"],
        image: project8,
        source_code_link: "https://github.com/mahmoudhussein6/terllo-clone",
        live_link: "https://terllo-clone-six.vercel.app/#/dashboard",
    },
    {
        title: "Echo System",
        description: "An online marketing company in Beni Suef, we help you grow and reach more customers through photography, design, paid advertising.",
        tags: ["React", "Tailwind", "JavaScript", "Framer Motion"],
        image: project24,
        source_code_link: "https://github.com/mahmoudhussein6/echoSystem",
        live_link: "https://echo-system-gamma.vercel.app/",
    },
    {
        title: "Fresh Cart",
        description: "E-commerce website using React, TailwindCSS, and JWT Auth. Integrated React Query for caching and Context API.",
        tags: ["React", "TailwindCSS", "React Query", "JWT"],
        image: project2,
        source_code_link: "https://github.com/mahmoudhussein6/FreshCart",
        live_link: "https://www.linkedin.com/posts/mahmoud-hussein-0bb055242_react-webdevelopment-tailwindcss-activity-7253044158003638272-4jW6/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADwp108BQ3qGUZG-G2cUIIkoBXGE6x2CfFc",
    },
    {
        title: "Vanilla JS E-Commerce",
        description: "Built with HTML, CSS, and JavaScript featuring separate Admin/User roles, API integration, and persistent cart.",
        tags: ["JavaScript", "HTML5", "CSS3", "API"],
        image: project11,
        source_code_link: "https://github.com/mahmoudhussein6/E-commerce_Appliction",
        live_link: "https://e-commerce-appliction-six.vercel.app/index.html",
    },
    {
        title: "Veterinary Pharmacy Management System",
        description: "Professional inventory management system designed specifically for veterinary pharmacies, aimed at tracking products.",
        tags: ["React", "Tailwind", "Firebase"],
        image: project9,
        source_code_link: "https://github.com/mahmoudhussein6/Veterinary_Pharmacy_Management_System",
        live_link: "https://veterinary-pharmacy-management-syst.vercel.app/",
    },
    {
        title: "Portfolio Website",
        description: "A modern, responsive, and interactive portfolio website built with React, Tailwind CSS, Framer Motion, and Anime.js.",
        tags: ["React", "TailwindCSS", "GSAP", "React Hook Form", "ZOD"],
        image: project7,
        source_code_link: "https://github.com/mahmoudhussein6/My_Portfolio",
        live_link: "https://my-portfolio-theta-eosin-83.vercel.app/",
    },
    {
        title: "Ramadan Challenge Tracker",
        description: "A beautiful, responsive web application to track spiritual progress during Ramadan. Built with React and Tailwind CSS.",
        tags: ["React", "TailwindCSS", "Framer Motion"],
        image: project12,
        source_code_link: "https://github.com/mahmoudhussein6/RamadanPlan",
        live_link: "https://ramadan-plan.vercel.app/",
    },
    {
        title: "ProCV Builder",
        description: "High-performance, responsive web application built with React, allowing real-time resume creation and PDF export.",
        tags: ["React", "GSAP", "html2canvas", "jspdf"],
        image: project13,
        source_code_link: "https://github.com/mahmoudhussein6/CV_Builder",
        live_link: "https://cv-builder-kappa-six.vercel.app/",
    },
    {
        title: "Khatwa - Your First Step",
        description: "Khatwa is a comprehensive platform designed to bridge the gap between ambitious individuals and their dreams in Spain. , Khatwa provides expert guidance and legal support.",
        tags: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "React Helmet Async"],
        image: project14,
        source_code_link: "https://github.com/mahmoudhussein6/Khatwa",
        live_link: "https://www.khatwa.es/",
    },
    {
        title: "MovicEg",
        description: "This website is a modern, responsive platform designed to showcase a wide range of fire safety and HVAC products. It allows users to explore products.",
        tags: ["React", "JavaScript", "TailwindCSS", "Framer Motion", "EmailJS"],
        image: project15,
        source_code_link: "https://github.com/mahmoudhussein6/movicApp",
        live_link: "https://movic-app.vercel.app/",
    },
    {
        title: "Task Flow - To-Do App",
        description: "Task Flow is a high-performance, aesthetically pleasing to-do list application,It features a modern glassmorphic UI, smooth transitions, and persistent data storage.",
        tags: ["React", "JavaScript", "TailwindCSS", "Framer Motion", "localStorage"],
        image: project16,
        source_code_link: "https://github.com/mahmoudhussein6/to_do_list",
        live_link: "https://to-do-list-nu-two-20.vercel.app/",
    },
    {
        title: "Weather App",
        description: "Weather App is a responsive web application that displays the current weather conditions for a specified location.",
        tags: ["React", "JavaScript", "TailwindCSS", "Framer Motion", "Weather API"],
        image: project5,
        source_code_link: "https://github.com/mahmoudhussein6/WeatherAppReact",
        live_link: "https://weather-app-react-bay-eta.vercel.app/",
    },
    {
        title: "Movies App",
        description: "Movies App is a responsive web application that displays the current movies information for a specified location.",
        tags: ["Angular", "TypeScript", "TailwindCSS", "TMDB API", "RxJS"],
        image: project6,
        source_code_link: "https://github.com/mahmoudhussein6/Movie_Application",
        live_link: "https://movie-application-cbut.vercel.app/movies",
    },
    {
        title: "Note Taking App",
        description: "Note Taking App (React) A clean and efficient Note Taking Application built with React, allowing users to create, update, and delete notes with a modern and responsive user interface.",
        tags: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "localStorage"],
        image: project4,
        source_code_link: "https://github.com/mahmoudhussein6/NoteApplicationReact",
        live_link: "https://note-application-react.vercel.app/",
    },
    {
        title: "تطبيق اذكر الله",
        description: "تطبيق إلكتروني عصري للأذكار والتسبيح، مصمم بلمسات جمالية متميزة وتجربة مستخدم سلسة. يهدف التطبيق إلى مساعدتك في الحفاظ على أورادك اليومية بكل سهولة.",
        tags: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "React Icons"],
        image: project17,
        source_code_link: "https://github.com/mahmoudhussein6/Dhaker-App",
        live_link: "https://dhaker-app.vercel.app/",
    },
    {
        title: "موقع مواقيت الصلاة",
        description:"موقع ويب عصري، جذاب، واحترافي لعرض مواقيت الصلاة بدقة عالية، مصمم خصيصاً بتجربة مستخدم مميزة وتصميم فريد.",
        tags: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "React Hook Form", "Axios", "Aladhan API"],
        image: project18,
        source_code_link: "https://github.com/mahmoudhussein6/prayer-times",
        live_link: "https://prayer-times-blond.vercel.app/",
    },
    {
        title: "القرآن الكريم",
        description:"تجربة قرآنية رقمية فاخرة، تجمع بين جمال التصميم وسهولة الاستخدام.",
        tags: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Axios", "mp3quran.net API", "alquran.cloud API"],
        image: project19,
        source_code_link: "https://github.com/mahmoudhussein6/Quran-App",
        live_link: "https://quran-app-olive.vercel.app/",
    },
    {
        title: "Expense Tracker",
        description: "A Modern and responsive Expense Tracker application built with React, designed to help users manage their personal finances by tracking income and expenses easily and efficiently.",
        tags: ["React", "TypeScript", "TailwindCSS", "Context API", "localStorage","React Icons"],
        image: project20,
        source_code_link: "https://github.com/mahmoudhussein6/Expense_Tracker",
        live_link: "https://expense-tracker-gamma-vert-12.vercel.app/",
    },
    {
        title: "Admin Dashboard - Manager Pro",
        description: "A modern, responsive admin dashboard built with Angular 21, featuring NgRx state management, interactive charts, and a clean Material Design-inspired UI.",
        tags: ["Angular", "TypeScript", "Material UI", "NgRx", "RxJS", "Chart.js", "SCSS"],
        image: project21,
        source_code_link: "https://github.com/mahmoudhussein6/Admin_Dashboard",
        live_link: "https://admin-dashboard-woad-eight-46.vercel.app/dashboard",
    },
    {
        title: "Mini E-Commerce Application",
        description: "Build a responsive mini e-commerce frontend using Vite + React.js, showcasing your understanding of modern React practices.",
        tags: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Axios", "React Router", "Fake Store API", "React Hook Form", "ZOD"],
        image: project22,
        source_code_link: "https://github.com/mahmoudhussein6/E-commerce_Appliction_React",
        live_link: "https://e-commerce-appliction-react.vercel.app/",
    },
    {
        title: "Questions & Answers For React",
        description: "Questions & Answers For React is a responsive web application that displays the current questions and answers.",
        tags: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
        image: project23,
        source_code_link: "https://github.com/mahmoudhussein6/Question_For_React_V1",
        live_link: "https://question-for-react-v1-27lx.vercel.app/",
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
    { title: "Frontend Development", icon: FaReact },
    { title: "UI/UX Design", icon: SiFramer },
    { title: "Backend Integration", icon: FaNodeJs },
];
