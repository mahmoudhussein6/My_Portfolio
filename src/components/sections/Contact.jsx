import { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import { CONTACT } from "../../utils/data";
import { FaPaperPlane, FaUser, FaEnvelope, FaMessage } from "react-icons/fa6";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            const subject = encodeURIComponent(`Collaboration Inquiry from ${form.name}`);
            const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
            
            // Direct mailto link - opens in a separate action
            window.open(`mailto:${CONTACT.email}?subject=${subject}&body=${body}`, "_blank");
            
            setStatus("success");
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-20 relative flex flex-col items-center justify-center overflow-visible">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
            
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-4xl relative z-10"
            >
                {/* Glass Card Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-black text-xs uppercase tracking-[0.4em] mb-4"
                    >
                        Connectivity
                    </motion.div>
                    <h2 className="text-5xl sm:text-7xl font-black text-white leading-tight tracking-tighter">
                        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Collaborate</span>
                    </h2>
                    <p className="text-slate-400 mt-4 text-lg font-medium italic">
                        Ready to bring your next big idea to life? Reach out and let's make it happen.
                    </p>
                </div>

                {/* Main Glass Form */}
                <div className="relative group">
                    {/* Floating Accent Orbs */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700" />

                    <div className="bg-slate-950/40 backdrop-blur-2xl p-8 sm:p-12 rounded-[40px] border border-white/10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] group-hover:border-purple-500/30 transition-all duration-700">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Name Field */}
                                <div className="space-y-3">
                                    <label className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest ml-1">
                                        <FaUser className="text-purple-500" />
                                        Identity
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="What's your name?"
                                            required
                                            className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-5 px-6 text-white placeholder:text-slate-600 outline-none focus:border-purple-500 focus:bg-white/[0.05] transition-all duration-300 font-medium"
                                        />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="space-y-3">
                                    <label className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest ml-1">
                                        <FaEnvelope className="text-purple-500" />
                                        Electronic Mail
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Enter your address"
                                        required
                                        className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-5 px-6 text-white placeholder:text-slate-600 outline-none focus:border-purple-500 focus:bg-white/[0.05] transition-all duration-300 font-medium"
                                    />
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="space-y-3">
                                <label className="flex items-center gap-2 text-xs font-black text-slate-500 uppercase tracking-widest ml-1">
                                    <FaMessage className="text-purple-500" />
                                    Communication
                                </label>
                                <textarea
                                    rows="6"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="What are you thinking about?"
                                    required
                                    className="w-full bg-white/[0.03] border border-white/5 rounded-3xl py-6 px-6 text-white placeholder:text-slate-600 outline-none focus:border-purple-500 focus:bg-white/[0.05] transition-all duration-300 font-medium resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6">
                                <div className="text-slate-500 text-sm italic font-medium">
                                    * Usually responds within 24 hours.
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={loading}
                                    className="relative group/btn w-full sm:w-auto overflow-hidden rounded-2xl p-[1px] bg-gradient-to-r from-purple-500/50 to-indigo-500/50 hover:from-purple-500 hover:to-indigo-500 transition-all duration-500"
                                >
                                    <div className="bg-slate-950/90 py-5 px-12 rounded-2xl flex items-center justify-center gap-4 transition-all duration-500 group-hover/btn:bg-transparent">
                                        <span className="text-white font-black uppercase tracking-widest">
                                            {loading ? "Transmitting..." : "Initiate Contact"}
                                        </span>
                                        <FaPaperPlane className={`text-purple-400 group-hover/btn:text-white transition-all ${loading ? 'animate-ping' : 'group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1'}`} />
                                    </div>
                                </motion.button>
                            </div>

                            {/* Status Message */}
                            {status === "success" && (
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 font-bold text-center mt-6">
                                    Message transmitted successfully! I'll be in touch soon.
                                </motion.p>
                            )}
                            {status === "error" && (
                                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 font-bold text-center mt-6">
                                    Operational error. Please try direct email or check your connection.
                                </motion.p>
                            )}
                        </form>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
