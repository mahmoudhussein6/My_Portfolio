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
        className="group relative flex justify-center w-full"
    >
        {/* Radiant Glow Behind */}
        <div 
            className="absolute inset-0 rounded-[20px] sm:rounded-[30px] opacity-0 group-hover:opacity-20 transition-opacity blur-xl z-0" 
            style={{ backgroundColor: skill.color }}
        />

        <div className="relative z-10 w-full max-w-[120px] aspect-square sm:w-36 sm:aspect-auto sm:h-36 flex flex-col items-center justify-center bg-slate-900/40 backdrop-blur-xl rounded-[20px] sm:rounded-[30px] border border-white/5 group-hover:border-white/20 transition-all duration-300 shadow-2xl">
            <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-950/50 border border-white/5 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <skill.icon className="w-7 h-7 sm:w-9 sm:h-9 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" style={{ color: skill.color }} />
            </div>
            <p className="text-slate-400 group-hover:text-white mt-3 sm:mt-4 text-[10px] sm:text-xs md:text-sm font-bold tracking-widest uppercase transition-colors text-center px-1">
                {skill.name}
            </p>
        </div>
    </motion.div>
));

SkillItem.displayName = "SkillItem";

const Skills = () => {
    const containerRef = useRef(null);

    return (
        <div ref={containerRef} className="py-20 flex flex-col items-center justify-center relative overflow-visible px-4">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-600/5 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

            <div className="text-center mb-16 sm:mb-20 relative z-10">
                <p className="text-purple-400 font-black uppercase tracking-[0.4em] text-[10px] sm:text-sm mb-4">Core Arsenal</p>
                <h2 className="text-4xl sm:text-7xl font-black text-white leading-none tracking-tighter">
                    Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Skills</span>
                </h2>
            </div>

            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-8 lg:gap-12 justify-items-center max-w-6xl w-full relative z-10">
                {skills.map((skill, index) => (
                    <SkillItem key={skill.name} skill={skill} index={index} />
                ))}
            </div>
        </div>
    );
};


const WrappedSkills = SectionWrapper(Skills, "skills");
export default WrappedSkills;
