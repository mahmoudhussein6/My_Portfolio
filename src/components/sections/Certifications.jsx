import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../../utils/data";
import SectionWrapper from "../common/SectionWrapper";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";

const CertificationCard = ({ index, title, icon: Icon, color }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative bg-slate-900/40 backdrop-blur-xl rounded-[32px] border border-white/5 overflow-hidden hover:border-purple-500/30 transition-all duration-500 flex flex-col sm:flex-row items-center gap-8 p-6"
    >
        <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none"
            style={{ backgroundColor: color }} 
        />
        
        <div className="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden bg-slate-800 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
            <Icon 
                className="text-4xl transition-all duration-700 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]" 
                style={{ color: color }} 
            />
        </div>

        <div className="flex-1 text-center sm:text-left">
            <h3 className="text-white text-xl font-bold mb-3 leading-tight group-hover:text-purple-400 transition-colors">
                {title}
            </h3>
            <div className="flex items-center justify-center sm:justify-start gap-4">
                <span className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest">
                    <FaAward className="text-purple-500" />
                    Verified License
                </span>
            </div>
        </div>
    </motion.div>
);

const Certifications = () => {
    return (
        <div className="py-20 relative px-4 sm:px-0">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <p className="text-purple-400 font-black uppercase tracking-[0.5em] text-xs mb-4">Continuous Learning</p>
                    <h2 className="text-5xl sm:text-7xl font-black text-white leading-none tracking-tighter">
                        Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Excellence</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {CERTIFICATIONS.map((cert, index) => (
                        <CertificationCard key={index} index={index} {...cert} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Certifications, "certifications");
