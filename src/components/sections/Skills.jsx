import { useRef, memo } from "react";
import { motion } from "framer-motion";
import { skills } from "../../utils/data";
import SectionWrapper from "../common/SectionWrapper";

const SkillItem = memo(({ skill, index }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
            duration: 0.5, 
            delay: index * 0.05,
            ease: [0.23, 1, 0.32, 1] 
        }}
        whileHover={{ 
            y: -10,
            scale: 1.05,
            transition: { duration: 0.2 }
        }}
        className="group relative"
    >
        {/* Radiant Glow Behind */}
        <div 
            className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-20 transition-opacity blur-xl z-0" 
            style={{ backgroundColor: skill.color }}
        />

        <div className="relative z-10 w-24 h-24 sm:w-36 sm:h-36 flex flex-col items-center justify-center bg-slate-900/40 backdrop-blur-xl rounded-[24px] sm:rounded-[30px] border border-white/5 group-hover:border-white/20 transition-all duration-300 shadow-2xl">
            <div className="p-4 rounded-2xl bg-slate-950/50 border border-white/5 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <skill.icon size={36} color={skill.color} className="filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
            </div>
            <p className="text-slate-400 group-hover:text-white mt-4 text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors">
                {skill.name}
            </p>
        </div>
    </motion.div>
));

SkillItem.displayName = "SkillItem";

const Skills = () => {
    const containerRef = useRef(null);

    return (
        <div ref={containerRef} className="py-20 flex flex-col items-center justify-center relative overflow-visible">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="text-center mb-20 relative z-10">
                <p className="text-purple-400 font-black uppercase tracking-[0.4em] text-sm mb-4">Core Arsenal</p>
                <h2 className="text-5xl sm:text-7xl font-black text-white leading-none tracking-tighter">
                    Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Skills</span>
                </h2>
            </div>

            <div className="flex flex-wrap gap-8 sm:gap-12 justify-center max-w-6xl relative z-10">
                {skills.map((skill, index) => (
                    <SkillItem key={skill.name} skill={skill} index={index} />
                ))}
            </div>
        </div>
    );
};

const WrappedSkills = SectionWrapper(Skills, "skills");
export default WrappedSkills;
