import { motion } from "framer-motion";
import { 
    FaHtml5, FaCss3Alt, FaJs, FaReact, 
    FaNodeJs, FaGithub, FaAngular, FaCode, FaLaptopCode, FaDatabase
} from "react-icons/fa6";
import { 
    SiTailwindcss, SiFramer, SiNextdotjs, SiTypescript, 
    SiFlutter, SiFirebase, SiVite, SiDocker 
} from "react-icons/si";

const icons = [
    { Icon: FaHtml5, color: "text-orange-500/30", size: 45, duration: 25, delay: 0 },
    { Icon: FaCss3Alt, color: "text-blue-500/30", size: 55, duration: 28, delay: 2 },
    { Icon: FaJs, color: "text-yellow-500/40", size: 40, duration: 22, delay: 5 },
    { Icon: FaReact, color: "text-cyan-400/40", size: 65, duration: 30, delay: 1 },
    { Icon: FaNodeJs, color: "text-green-500/30", size: 50, duration: 35, delay: 3 },
    { Icon: SiTailwindcss, color: "text-sky-400/30", size: 35, duration: 24, delay: 7 },
    { Icon: SiFramer, color: "text-purple-500/30", size: 60, duration: 32, delay: 4 },
    { Icon: FaGithub, color: "text-white/20", size: 45, duration: 29, delay: 6 },
    { Icon: SiNextdotjs, color: "text-white/30", size: 50, duration: 34, delay: 8 },
    { Icon: SiTypescript, color: "text-blue-400/30", size: 40, duration: 26, delay: 10 },
    { Icon: FaAngular, color: "text-red-500/30", size: 55, duration: 31, delay: 11 },
    { Icon: SiFlutter, color: "text-blue-300/30", size: 45, duration: 33, delay: 13 },
    { Icon: SiFirebase, color: "text-yellow-600/30", size: 40, duration: 27, delay: 14 },
    { Icon: FaCode, color: "text-purple-400/25", size: 35, duration: 23, delay: 15 },
    { Icon: SiVite, color: "text-yellow-400/30", size: 40, duration: 29, delay: 17 },
    { Icon: SiDocker, color: "text-blue-500/30", size: 50, duration: 36, delay: 19 },
    { Icon: FaLaptopCode, color: "text-indigo-400/30", size: 45, duration: 28, delay: 20 },
    { Icon: FaDatabase, color: "text-emerald-400/30", size: 40, duration: 30, delay: 22 },
];

const FloatingElements = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {icons.map((item, index) => (
                <motion.div
                    key={index}
                    className={`absolute ${item.color}`}
                    style={{
                        left: `${(index * 13) % 100}%`, // Semi-stable random-ish start
                        top: `${(index * 27) % 100}%`,
                        willChange: "transform",
                    }}
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, -30, 30, 0],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "easeInOut",
                    }}
                >
                    <item.Icon size={item.size} />
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingElements;
