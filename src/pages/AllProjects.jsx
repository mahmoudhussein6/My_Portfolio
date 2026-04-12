import { motion } from "framer-motion";
import { projects } from "../utils/data";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AllProjects = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 py-20 px-6 sm:px-16 pt-32">
            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div>
                        <Link 
                            to="/" 
                            className="inline-flex items-center gap-2 text-purple-400 font-bold uppercase tracking-widest text-xs mb-6 hover:text-white transition-colors group"
                        >
                            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            Back to Portfolio
                        </Link>
                        <h1 className="text-5xl sm:text-8xl font-black text-white leading-none tracking-tighter">
                            Full <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Portfolio</span>
                        </h1>
                        <p className="mt-6 text-slate-400 text-lg max-w-2xl font-medium italic">
                            A comprehensive collection of my technical explorations, client work, and internal experimental project development.
                        </p>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-slate-900/40 backdrop-blur-xl rounded-[32px] border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-500 shadow-2xl flex flex-col h-full"
                        >
                            {/* Image Box */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    loading="lazy"
                                    decodings="async"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[40%] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                                
                                {/* Quick Links */}
                                <div className="absolute top-4 right-4 flex gap-2">
                                    {project.source_code_link && (
                                        <button onClick={() => window.open(project.source_code_link, "_blank")} className="w-10 h-10 rounded-xl bg-slate-950/90 border border-white/10 flex items-center justify-center text-white hover:bg-purple-600 transition-colors">
                                            <FaGithub />
                                        </button>
                                    )}
                                    {project.live_link && (
                                        <button onClick={() => window.open(project.live_link, "_blank")} className="w-10 h-10 rounded-xl bg-purple-600/90 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-purple-600 transition-colors">
                                            <FaExternalLinkAlt />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Info Box */}
                            <div className="p-8 flex flex-col flex-1">
                                <h3 className="text-2xl font-black text-white mb-2">{project.title}</h3>
                                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1 italic">
                                    {project.description}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-slate-500 whitespace-nowrap">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProjects;
