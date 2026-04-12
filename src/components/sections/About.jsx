import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import SectionWrapper from "../common/SectionWrapper";
import { ABOUT_TEXT } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ index, title, text, icon: Icon }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleSpotlightMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={(e) => {
                handleMouseMove(e);
                handleSpotlightMove(e);
            }}
            onMouseLeave={handleMouseLeave}
            className="group relative w-full h-full perspective-1000"
        >
            <div className="absolute -inset-px rounded-[30px] bg-gradient-to-b from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[30px] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            400px circle at ${mouseX}px ${mouseY}px,
                            rgba(168, 85, 247, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />

            <div
                className="bg-slate-900/40 backdrop-blur-xl rounded-[30px] p-8 border border-white/5 flex flex-col items-center text-center h-full transition-all duration-500 group-hover:border-purple-500/30 group-hover:bg-slate-900/60"
                style={{ transform: "translateZ(50px)" }}
            >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-purple-500/20">
                    <Icon className="text-4xl text-purple-400 group-hover:text-purple-300 transition-colors" />
                </div>

                <h3 className="text-white text-[24px] font-bold mb-4 tracking-tight">
                    {title}
                </h3>
                <p className="text-slate-400 text-[16px] leading-relaxed font-medium">
                    {text}
                </p>

                {/* Decorative dots */}
                <div className="absolute bottom-4 right-4 flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-purple-500" />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const About = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".about-title-anim", {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            },
        });

        gsap.from(".service-card-wrapper", {
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            },
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="py-20 relative px-4 sm:px-0">
            {/* Background elements */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="about-title-anim">
                    <p className="sm:text-[18px] text-[14px] text-purple-400 uppercase tracking-widest font-bold mb-2">
                        Introduction
                    </p>
                    <h2 className="text-white font-black md:text-[70px] sm:text-[60px] xs:text-[50px] text-[40px] leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
                            Overview
                        </span>
                    </h2>

                   
                </div>

                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ABOUT_TEXT.cards.map((card, index) => (
                        <div key={index} className="service-card-wrapper h-full">
                            <ServiceCard index={index} {...card} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const WrappedAbout = SectionWrapper(About, "about");
export default WrappedAbout;
