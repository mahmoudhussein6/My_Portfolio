import { useRef, memo, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "../../utils/data";
import SectionWrapper from "../common/SectionWrapper";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { useTransition } from "../common/TransitionContext";

const ProjectCard = memo(({ title, description, tags, image, source_code_link, live_link, index }) => {

    const cardRef = useRef(null);

    // ... (rest of ProjectCard component same)
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

    const onMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const onMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.1, ease: "circOut" }}
            className="w-full h-full flex flex-col"
        >
            <motion.div
                ref={cardRef}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="group relative flex-1 flex flex-col bg-slate-950/80 backdrop-blur-3xl rounded-[32px] border border-white/10 hover:border-purple-500/50 transition-all duration-700 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] overflow-visible"
            >
                {/* Dynamic Shine Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-30 pointer-events-none overflow-hidden rounded-[32px]">
                    <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 animate-shine" />
                </div>

                {/* Modern Terminal Header */}
                <div className="px-6 py-4 flex items-center justify-between border-b border-white/5 bg-white/[0.02]">
                    <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/40 border border-red-500/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40 border border-yellow-500/20" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/40 border border-green-500/20" />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500/50 animate-pulse" />
                        <div className="text-[9px] text-slate-500 font-black uppercase tracking-[0.3em]">PROJECT_OS_{index + 1}</div>
                    </div>
                </div>

                {/* Content Wrapper */}
                <div className="p-2 flex flex-col flex-1">
                    {/* Visual Area */}
                    <div className="relative rounded-[24px] overflow-hidden aspect-[16/11] sm:aspect-[16/10] bg-slate-900 border border-white/5">
                        <img
                            src={image}
                            alt={title}
                            loading="lazy"
                            decodings="async"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[40%] group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40" />

                        {/* Interactive Buttons Overlay */}
                        <div className="absolute top-4 right-4 flex flex-col gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                            {source_code_link && (
                                <button onClick={() => window.open(source_code_link, "_blank")} className="w-10 h-10 rounded-xl bg-slate-950/90 border border-white/10 flex items-center justify-center text-white text-lg hover:bg-purple-600 transition-colors shadow-2xl">
                                    <FaGithub />
                                </button>
                            )}
                            {live_link && (
                                <button onClick={() => window.open(live_link, "_blank")} className="w-10 h-10 rounded-xl bg-purple-600/90 border border-white/10 flex items-center justify-center text-white text-lg hover:bg-white hover:text-purple-600 transition-colors shadow-2xl">
                                    <FaExternalLinkAlt />
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Meta Info */}
                    <div className="p-6 sm:p-8 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-4">
                            <FaCode className="text-purple-500" />
                            <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">Stack.Intelligence</span>
                        </div>

                        <h3 className="text-2xl sm:text-4xl font-black text-white mb-3 sm:mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500">
                            {title}
                        </h3>

                        <p className="text-slate-400 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 flex-1 italic">
                            {description}
                        </p>

                        {/* Staggered Tech Pills */}
                        <div className="flex flex-wrap gap-2.5 pt-6 border-t border-white/5">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs font-bold text-slate-400 hover:text-white hover:bg-purple-500/20 hover:border-purple-500/40 transition-all cursor-default"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Animated Inner Shine */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>
        </motion.div>
    );
});

ProjectCard.displayName = "ProjectCard";

const Projects = () => {
    const containerRef = useRef(null);
    const featuredProjects = useMemo(() => projects.slice(0, 4), []);
    const { transitionTo } = useTransition();


    return (
        <div ref={containerRef} className="py-24 relative overflow-visible min-h-screen">
            {/* Background Atmosphere Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] animate-pulse delay-1000 pointer-events-none" />

            {/* Background Watermark */}
            <h2 className="absolute top-0 left-0 text-[18vw] font-black text-white/[0.01] uppercase pointer-events-none select-none tracking-tighter leading-none -translate-x-1/4">
                WORK
            </h2>

            <div className="relative z-10 w-full overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 mb-20">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                        <div className="space-y-4">
                            <p className="text-purple-400 font-black uppercase tracking-[0.5em] text-xs">Innovation Gallery</p>
                            <h2 className="text-5xl sm:text-8xl font-black text-white leading-none tracking-tighter">
                                Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Creations</span>
                            </h2>
                        </div>

                        <p className="text-slate-400 text-lg max-w-xl leading-relaxed lg:text-right font-medium italic">
                            A curated selection of my most impactful digital solutions. Swipe to explore the highlights.
                        </p>
                    </div>
                </div>

                {/* Responsive Projects Grid */}
                <div className="max-w-7xl mx-auto px-0 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={index} index={index} {...project} />
                    ))}

                    {/* View More Card */}
                    <div className="h-full cursor-pointer lg:col-span-2 xl:col-span-1" onClick={() => transitionTo("/projects")}>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="h-full min-h-[500px] group relative p-[1px] rounded-[32px] bg-gradient-to-br from-purple-500/20 to-indigo-600/20 hover:from-purple-500 hover:to-indigo-600 shadow-2xl transition-all duration-500"
                        >
                            <div className="bg-slate-950/90 h-full backdrop-blur-xl px-10 py-24 rounded-[31px] flex flex-col items-center justify-center gap-8 border border-white/10 group-hover:bg-transparent transition-all duration-500">
                                <div className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                                    <FaCode className="text-6xl text-purple-400 group-hover:text-white transition-colors" />
                                </div>
                                <div className="text-center">
                                    <p className="text-white font-black text-4xl uppercase tracking-tighter">Explore More</p>
                                    <p className="text-slate-400 font-bold uppercase tracking-widest mt-4 group-hover:text-purple-200 transition-colors italic">Full Project Gallery</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>

                {/* Bottom CTA Button */}
                <div className="flex justify-center mt-10">
                    <motion.button
                        onClick={() => transitionTo("/projects")}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 rounded-2xl bg-slate-900 border border-white/10 hover:border-purple-500/50 text-white font-bold flex items-center gap-4 transition-all shadow-xl backdrop-blur-md group"
                    >
                        <span>Explore Full Portfolio</span>
                        <FaExternalLinkAlt className="text-sm text-purple-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                </div>

            </div>

        </div>
    );
};

const WrappedProjects = SectionWrapper(Projects, "projects");
export default WrappedProjects;


