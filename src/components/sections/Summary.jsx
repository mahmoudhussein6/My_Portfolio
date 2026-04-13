import { useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCode, FaRocket, FaUserCheck, FaMicrochip, FaTerminal } from "react-icons/fa";
import { PROJECTS_COUNT, EDUCATION } from "../../utils/data";

gsap.registerPlugin(ScrollTrigger);

const Summary = () => {
    const containerRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    useGSAP(() => {
        // Pulsing main icon
        gsap.to(".terminal-icon-pulse", {
            boxShadow: "0 0 20px 2px rgba(168, 85, 247, 0.4)",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }, { scope: containerRef });

    return (
        <section
            id="summary"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="w-full py-20 sm:py-40 relative flex items-center justify-center overflow-hidden bg-transparent min-h-[800px] md:min-h-[900px]"
        >
            {/* Massive Background Text Watermark - Adjusted for better visibility */}
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-white/[0.01] uppercase select-none pointer-events-none tracking-[0.2em] leading-none whitespace-nowrap">
                SUMMARY
            </h2>

            {/* Dynamic Aura Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-purple-600/5 rounded-full blur-[180px] animate-pulse" />

            <div className="z-10 w-full max-w-[1400px] mx-auto px-10 sm:px-20 relative flex flex-col items-center">

                {/* Central Focus Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="summary-main-card relative z-20 w-full max-w-4xl p-[1px] rounded-[50px] bg-gradient-to-br from-purple-500/30 via-transparent to-indigo-500/30 shadow-[0_0_100px_-20px_rgba(168,85,247,0.2)]"
                >
                    <div className="relative bg-[#020617]/95 backdrop-blur-[100px] rounded-[49px] overflow-visible p-8 sm:p-16 md:p-24 border border-white/5 h-full">

                        {/* Interactive Spotlight Overlay */}
                        <motion.div
                            className="pointer-events-none absolute -inset-px rounded-[49px] opacity-30 transition duration-300"
                            style={{
                                background: useMotionTemplate`
                                    radial-gradient(
                                        1000px circle at ${mouseX}px ${mouseY}px,
                                        rgba(168, 85, 247, 0.15),
                                        transparent 80%
                                    )
                                `,
                            }}
                        />

                        {/* Floating Satellites - Responsive Positioning */}
                        <div className="contents">
                            {/* ITI Satellite */}
                            <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: [0, 1.1, 1], opacity: 1 }}
                                animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
                                whileHover={{ scale: 1.1, rotate: -5 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    scale: { type: "spring", delay: 0.2 },
                                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                                    x: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="floating-satellite absolute -top-12 -left-6 sm:top-12 sm:left-12 pointer-events-auto z-50 scale-75 sm:scale-100"
                            >
                                <div className="p-4 sm:p-6 rounded-[24px] sm:rounded-[30px] bg-slate-900/80 backdrop-blur-3xl border border-white/10 shadow-2xl flex flex-col items-center group transition-colors hover:border-purple-500/30 w-[110px] sm:w-[140px]">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-purple-500/10 flex items-center justify-center mb-2 sm:mb-3">
                                        <FaMicrochip className="text-lg sm:text-xl text-purple-400" />
                                    </div>
                                    <p className="text-xl sm:text-2xl font-black text-white">ITI</p>
                                    <p className="text-[7px] sm:text-[8px] text-slate-500 uppercase font-bold tracking-[0.2em] mt-1">Certified</p>
                                </div>
                            </motion.div>

                            {/* Projects Satellite */}
                            <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: [0, 1.1, 1], opacity: 1 }}
                                animate={{ y: [0, 15, 0], x: [0, 12, 0] }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    scale: { type: "spring", delay: 0.3 },
                                    y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                                    x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="floating-satellite absolute -top-12 -right-6 sm:top-12 sm:right-12 pointer-events-auto z-50 scale-75 sm:scale-100"
                            >
                                <div className="p-4 sm:p-6 rounded-[24px] sm:rounded-[30px] bg-slate-900/80 backdrop-blur-3xl border border-white/10 shadow-2xl flex flex-col items-center group transition-colors hover:border-cyan-500/30 w-[110px] sm:w-[140px]">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-2 sm:mb-3">
                                        <FaCode className="text-lg sm:text-xl text-cyan-400" />
                                    </div>
                                    <p className="text-xl sm:text-2xl font-black text-white">{PROJECTS_COUNT}+</p>
                                    <p className="text-[7px] sm:text-[8px] text-slate-500 uppercase font-bold tracking-[0.2em] mt-1">Projects</p>
                                </div>
                            </motion.div>

                            {/* Full Stack Satellite */}
                            <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: [0, 1.1, 1], opacity: 1 }}
                                animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
                                whileHover={{ scale: 1.1, rotate: -8 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    scale: { type: "spring", delay: 0.5 },
                                    y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                                    x: { duration: 7, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="floating-satellite absolute -bottom-12 -left-6 sm:bottom-12 sm:left-12 pointer-events-auto z-50 scale-75 sm:scale-100"
                            >
                                <div className="p-4 sm:p-6 rounded-[24px] sm:rounded-[30px] bg-slate-900/80 backdrop-blur-3xl border border-white/10 shadow-2xl flex flex-col items-center group transition-colors hover:border-pink-500/30 w-[110px] sm:w-[140px]">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-pink-500/10 flex items-center justify-center mb-2 sm:mb-3">
                                        <FaRocket className="text-lg sm:text-xl text-pink-400" />
                                    </div>
                                    <p className="text-lg sm:text-xl font-black text-white text-center">Full Stack</p>
                                    <p className="text-[7px] sm:text-[8px] text-slate-500 uppercase font-bold tracking-[0.2em] mt-1">Capable</p>
                                </div>
                            </motion.div>

                            {/* Experience Satellite */}
                            <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: [0, 1.1, 1], opacity: 1 }}
                                animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    scale: { type: "spring", delay: 0.4 },
                                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                                    x: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                                }}
                                className="floating-satellite absolute -bottom-12 -right-6 sm:bottom-12 sm:right-12 pointer-events-auto z-50 scale-75 sm:scale-100"
                            >
                                <div className="p-4 sm:p-6 rounded-[24px] sm:rounded-[30px] bg-slate-900/80 backdrop-blur-3xl border border-white/10 shadow-2xl flex flex-col items-center group transition-colors hover:border-indigo-500/30 w-[110px] sm:w-[140px]">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-2 sm:mb-3">
                                        <FaUserCheck className="text-lg sm:text-xl text-indigo-400" />
                                    </div>
                                    <p className="text-xl sm:text-2xl font-black text-white text-center">{EDUCATION.GPA}</p>
                                    <p className="text-[7px] sm:text-[8px] text-slate-500 uppercase font-bold tracking-[0.2em] mt-1 text-center">Excellent GPA</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Top Accent Icon */}
                        <div className="flex justify-center mb-12 relative z-10">
                            <div className="terminal-icon-pulse w-20 h-20 rounded-[28px] bg-slate-900 border border-purple-500/20 flex items-center justify-center shadow-2xl relative group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                                <FaTerminal className="text-3xl text-purple-400 group-hover:scale-110 transition-transform" />
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-20 relative z-10">
                            {/* Bio Content */}
                            <div className="flex-1 space-y-10 text-center lg:text-left">
                                <h3 className="summary-title-reveal text-3xl sm:text-6xl md:text-7xl font-black text-white leading-[1] tracking-tighter">
                                    I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">Frontend Developer</span>
                                </h3>

                                <p className="summary-title-reveal text-slate-400 text-xl sm:text-2xl leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
                                    With a strong focus on <span className="text-white italic underline decoration-purple-500/50 decoration-4 underline-offset-8 inline-block">high-performance</span>{" "}
                                    systems and <span className="text-indigo-300">user-centric</span> solutions.
                                </p>
                            </div>

                            {/* Tech Stack List */}
                            <div className="flex-1 w-full max-w-md">
                                <div className="space-y-4">
                                    <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mb-6 border-l-2 border-purple-500 pl-4">Core Arsenal</p>
                                    {[
                                        { name: "React / Redux", icon: <FaCode className="text-blue-400" />, level: "Expert" },
                                        { name: "Angular", icon: <FaCode className="text-red-400" />, level: "Advanced" },
                                        { name: "Next.js / SSR", icon: <FaRocket className="text-white" />, level: "Modern" },
                                        { name: "TypeScript", icon: <FaMicrochip className="text-blue-500" />, level: "Clean" },
                                        { name: "GSAP / Framer", icon: <FaRocket className="text-green-400" />, level: "Motion" }
                                    ].map((tech, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + (i * 0.1) }}
                                            whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
                                            className="tech-pill flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] transition-all group"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
                                                    {tech.icon}
                                                </div>
                                                <span className="text-white font-bold text-lg">{tech.name}</span>
                                            </div>
                                            <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">{tech.level}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>


            </div>
        </section>
    );
};

export default Summary;



