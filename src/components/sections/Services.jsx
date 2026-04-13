import { motion } from "framer-motion";
import { services } from "../../utils/data";
import SectionWrapper from "../common/SectionWrapper";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const ServiceCard = ({ index, title, icon: Icon, description }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="group relative bg-slate-900/40 backdrop-blur-xl p-10 rounded-[40px] border border-white/5 hover:border-purple-500/30 transition-all duration-500 flex flex-col items-center text-center h-full"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[40px]" />
        
        <div className="w-20 h-20 rounded-2xl bg-slate-800 flex items-center justify-center mb-8 border border-white/5 group-hover:bg-purple-600 transition-all duration-500 shadow-xl group-hover:shadow-purple-500/20">
            <Icon className="text-4xl text-purple-400 group-hover:text-white transition-colors" />
        </div>

        <h3 className="text-white text-2xl font-black mb-4 tracking-tight group-hover:text-purple-300 transition-colors">
            {title}
        </h3>
        <p className="text-slate-400 font-medium leading-relaxed">
            {description}
        </p>
    </motion.div>
);

const Services = () => {
    const containerRef = useRef(null);

    return (
        <div ref={containerRef} className="py-20 relative px-4 sm:px-0">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <p className="text-purple-400 font-black uppercase tracking-[0.5em] text-xs mb-4">What I Offer</p>
                    <h2 className="text-5xl sm:text-7xl font-black text-white leading-none tracking-tighter">
                        Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Services</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <ServiceCard key={index} index={index} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Services, "services");
