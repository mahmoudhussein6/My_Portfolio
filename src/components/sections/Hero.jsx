import { useRef, useState, memo } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HERO_CONTENT } from "../../constants";
import { FaDownload, FaArrowRight, FaReact, FaAngular, FaJs, FaCode, FaPalette } from "react-icons/fa";
import { SiNextdotjs, SiFlutter, SiFirebase, SiTypescript, SiSupabase, SiFastapi } from "react-icons/si";
import { Link } from "react-router-dom";
import { useTransition } from "../common/TransitionContext";

const Hero = () => {
    const containerRef = useRef(null);
    const { transitionTo } = useTransition();
// ... (rest as before until button)


    // GSAP animations for initial entrance
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

        tl.fromTo(".hero-badge", 
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 }
        )
        .fromTo(".hero-title-line",
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.1 },
            "-=0.4"
        )
        .fromTo(".hero-desc",
            { opacity: 0, x: -20 },
            { opacity: 1, x: 0, duration: 0.8 },
            "-=0.6"
        )
        .fromTo(".skill-badge",
            { opacity: 0, scale: 0.8, y: 10 },
            { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.05 },
            "-=0.6"
        )
        .fromTo(".hero-btns",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
            "-=0.4"
        )
        .fromTo(".hero-img-box",
            { scale: 0.9, opacity: 0, rotationY: 20 },
            { scale: 1, opacity: 1, rotationY: 0, duration: 1.2 },
            "-=0.8"
        );

        // Floating animation for image
        gsap.to(".hero-floating-element", {
            y: 15,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: {
                each: 0.5,
                from: "random",
            }
        });
    }, { scope: containerRef });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Interactive mouse spotlight effect
    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const { left, top } = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    const spotlightBackground = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.15), transparent 80%)`;

    // Tilt Effect for the Image
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const onTiltMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const resetTilt = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-transparent px-6 sm:px-16"
        >
            {/* Spotlight Overlay */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-500"
                style={{
                    background: spotlightBackground
                }}
            />

            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] animate-pulse delay-1000" />

            {/* Grid Pattern with Embedded Noise */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            <div className="z-10 max-w-7xl w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 pt-32 lg:pt-36">

                {/* Content Side */}
                <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="hero-badge mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-purple-500/30 text-purple-300 text-sm font-semibold backdrop-blur-md shadow-lg shadow-purple-500/5">
                        <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-ping" />
                        Available for Freelance
                    </div>

                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight">
                        <div className="hero-title-line overflow-hidden">
                            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400">Mahmoud</span>
                        </div>
                        <div className="hero-title-line overflow-hidden mt-2">
                            Hussein <span className="text-purple-500">.</span>
                        </div>
                    </h1>

                    <div className="hero-desc mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                        {[
                            { title: "Frontend Developer", icon: <FaCode />, color: "text-blue-400", bg: "group-hover:bg-blue-400/10", border: "group-hover:border-blue-400/30" },
                            { title: "React", icon: <FaReact />, color: "text-cyan-400", bg: "group-hover:bg-cyan-400/10", border: "group-hover:border-cyan-400/30" },
                            { title: "Angular", icon: <FaAngular />, color: "text-red-500", bg: "group-hover:bg-red-500/10", border: "group-hover:border-red-500/30" },
                            { title: "JavaScript", icon: <FaJs />, color: "text-yellow-400", bg: "group-hover:bg-yellow-400/10", border: "group-hover:border-yellow-400/30" },
                            { title: "UI/UX", icon: <FaPalette />, color: "text-pink-400", bg: "group-hover:bg-pink-400/10", border: "group-hover:border-pink-400/30" },
                            { title: "Firebase", icon: <SiFirebase />, color: "text-amber-500", bg: "group-hover:bg-amber-500/10", border: "group-hover:border-amber-500/30" },
                            { title: "Supabase", icon: <SiSupabase />, color: "text-emerald-500", bg: "group-hover:bg-emerald-500/10", border: "group-hover:border-emerald-500/30" },
                            { title: "Fast API", icon: <SiFastapi />, color: "text-teal-500", bg: "group-hover:bg-teal-500/10", border: "group-hover:border-teal-500/30" },
                        ].map((role, i) => (
                            <div key={i} className={`skill-badge flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-slate-900/50 border border-white/5 backdrop-blur-md transition-all duration-300 group cursor-default ${role.bg} ${role.border}`}>
                                <span className={`text-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 ${role.color}`}>
                                    {role.icon}
                                </span>
                                <span className="text-slate-300 text-sm font-semibold tracking-wide">
                                    {role.title}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-5">
                        <motion.button
                            onClick={() => transitionTo("/projects")}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="hero-btns px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-lg shadow-xl shadow-purple-500/20 flex items-center gap-3 group transition-all"
                        >
                            View Projects
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>


                        <motion.a
                            href="https://drive.google.com/file/d/1zcLz1J0v168kVXoCX6b9sVkhLnJMTtu0/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                            whileTap={{ scale: 0.95 }}
                            className="hero-btns px-8 py-4 rounded-2xl bg-slate-900/50 border border-slate-700 text-slate-200 font-bold text-lg backdrop-blur-md flex items-center gap-3 hover:text-white transition-all shadow-lg"
                        >
                            Download CV
                            <FaDownload className="text-purple-400 text-sm" />
                        </motion.a>
                    </div>

                    {/* Tech Stack Mini Display */}
                    <div className="hero-btns mt-12 flex flex-wrap gap-6 opacity-60 hover:opacity-100 transition-all duration-500">
                        {[
                            { icon: <FaReact />, color: "hover:text-cyan-400" },
                            { icon: <SiNextdotjs />, color: "hover:text-white" },
                            { icon: <FaAngular />, color: "hover:text-red-500" },
                            { icon: <SiTypescript />, color: "hover:text-blue-500" },
                            { icon: <SiFlutter />, color: "hover:text-blue-400" },
                            { icon: <SiFirebase />, color: "hover:text-yellow-500" }
                        ].map((tech, i) => (
                            <div key={i} className={`text-2xl text-slate-500 transition-colors duration-300 ${tech.color}`}>
                                {tech.icon}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual Side */}
                <div className="flex-1 w-full max-w-xl relative">
                    <motion.div
                        onMouseMove={onTiltMove}
                        onMouseLeave={resetTilt}
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="hero-img-box relative z-10 w-full aspect-square sm:aspect-auto sm:h-[500px] rounded-[40px] overflow-hidden border-2 border-white/5 bg-slate-900/40 backdrop-blur-sm group shadow-2xl shadow-purple-500/10"
                    >
                        {/* Dynamic Background inside Image Container */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <img
                            src={HERO_CONTENT.image}
                            alt="Mahmoud"
                            className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />

                        {/* Floating Cards (Glassmorphism) - Stacked at the bottom */}
                        <motion.div
                            className="hero-floating-element absolute bottom-[108px] left-0 right-0 mx-6 p-4 rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-white/10 shadow-2xl z-20"
                            style={{ transform: "translateZ(60px)" }}
                        >
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 text-lg">
                                        <FaJs />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Top Proficiency</p>
                                        <p className="text-white font-bold text-sm">JavaScript/TypeScript Expert</p>
                                    </div>
                                </div>
                                <div className="hidden sm:block h-8 w-[1px] bg-white/10" />
                                <div className="hidden sm:block text-right">
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Availability</p>
                                    <p className="text-green-400 font-bold text-sm">Full-time</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="hero-floating-element absolute bottom-6 left-0 right-0 mx-6 p-4 rounded-2xl bg-slate-900/70 backdrop-blur-xl border border-white/10 shadow-2xl z-20"
                            style={{ transform: "translateZ(80px)" }}
                        >
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-lg">
                                        <FaReact />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Primary Stack</p>
                                        <p className="text-white font-bold text-sm">React & Next.js Ecosystem</p>
                                    </div>
                                </div>
                                <div className="hidden sm:block h-8 w-[1px] bg-white/10" />
                                <div className="hidden sm:block text-right">
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Professional</p>
                                    <p className="text-white font-bold text-sm">3+ Yrs Exp</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Abstract Shapes behind image */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl animate-bounce duration-[4000ms]" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
                </div>
            </div>

            {/* Scroll Button */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
                <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-purple-500"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
