import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { experiences } from "../../utils/data";
import SectionWrapper from "../common/SectionWrapper";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ExperienceCard = ({ experience, index }) => {
    const cardRef = useRef(null);
    
    // Tilt Effect
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
        <div className="flex w-full mb-12 md:mb-16 relative pl-4 sm:pl-12 md:pl-24">
            {/* Timeline Marker (Aligned Left) */}
            <div className="absolute left-0 md:left-4 top-8 flex items-center justify-center z-20">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-slate-900 border-2 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center justify-center text-purple-400">
                    <FaBriefcase className="text-lg md:text-2xl" />
                </div>
            </div>

            {/* Content Card */}
            <motion.div 
                ref={cardRef}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="experience-card w-full max-w-4xl p-[1px] rounded-[30px] sm:rounded-[40px] bg-gradient-to-br from-white/10 via-transparent to-transparent shadow-2xl transition-all duration-300 group"
            >
                <div className="relative bg-slate-900/60 backdrop-blur-3xl rounded-[29px] sm:rounded-[39px] p-6 sm:p-10 md:p-14 border border-white/5 overflow-hidden">
                    {/* Dynamic Accent Background */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] group-hover:bg-purple-500/10 transition-colors" />
                    
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
                        <div>
                            <h3 className="text-xl sm:text-3xl md:text-5xl font-black text-white mb-2 leading-tight tracking-tighter">
                                {experience.title}
                            </h3>
                            <p className="text-base sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                                {experience.company_name}
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 self-start md:self-center">
                            <FaCalendarAlt className="text-purple-400" />
                            <span className="text-slate-300 font-bold text-[10px] sm:text-sm uppercase tracking-widest">{experience.date}</span>
                        </div>
                    </div>

                    <ul className="space-y-5">
                        {experience.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-4 text-slate-300 text-lg leading-relaxed">
                                <span className="mt-2.5 w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </div>
    );
};

const Experience = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        // Vertical Timeline Line Drawing (Keep GSAP for scrub)
        gsap.from(".timeline-line", {
            scaleY: 0,
            transformOrigin: "top",
            duration: 1.5,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 90%",
                end: "bottom 90%",
                scrub: 1,
            },
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="py-24 relative overflow-visible">
            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="mb-24 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <p className="text-purple-400 font-black uppercase tracking-[0.5em] text-xs mb-4">Milestones</p>
                    <h2 className="text-5xl sm:text-7xl font-black text-white leading-none tracking-tighter">
                        Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Experience</span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Vertical Timeline Line (Left Aligned) */}
                    <div className="absolute left-4 md:left-11 top-0 w-1 h-full">
                        <div className="w-full h-full bg-slate-800 rounded-full overflow-hidden">
                            <div className="timeline-line w-full h-full bg-gradient-to-b from-purple-500 via-indigo-500 to-transparent" />
                        </div>
                    </div>

                    <div className="relative flex flex-col">
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                            >
                                <ExperienceCard index={index} experience={experience} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const WrappedExperience = SectionWrapper(Experience, "experience");
export default WrappedExperience;


