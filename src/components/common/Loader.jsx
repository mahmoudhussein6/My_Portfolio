import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "../../assets/Mahmoud_Hussein_logoo.png";

const Loader = ({ finishLoading }) => {
    const loaderRef = useRef(null);
    const [progress, setProgress] = useState(0);

    // Progress Counter Logic
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                const diff = Math.random() * 15;
                return Math.min(prev + diff, 100);
            });
        }, 150);
        return () => clearInterval(timer);
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                // Exit Animation
                gsap.to(".loader-panel", {
                    y: "-100%",
                    duration: 1.2,
                    stagger: 0.1,
                    ease: "expo.inOut",
                    onComplete: finishLoading
                });
            },
        });

        tl.from(".loader-logo-container", {
            scale: 0.5,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        })
        .from(".loader-letter", {
            y: 30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.03,
            ease: "back.out(2)"
        }, "-=0.5")
        .to(".loader-progress-bar", {
            width: "100%",
            duration: 2,
            ease: "power2.inOut"
        }, "-=1")
        .to({}, { duration: 0.5 }); // Small pause at 100%
    }, { scope: loaderRef });

    const name = "MAHMOUD HUSSEIN";

    return (
        <div ref={loaderRef} className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950 overflow-hidden">
            {/* Split Background Panels for Exit Effect */}
            <div className="loader-panel absolute inset-0 bg-slate-950 z-0" />
            <div className="loader-panel absolute inset-0 bg-slate-900 z-0" />

            {/* High-Tech Grid Background */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                 style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.15) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
            
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-purple-500/5 to-slate-950/0 pointer-events-none z-0" />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-10 px-6">
                {/* Logo with Glow Ring */}
                <div className="loader-logo-container relative">
                    <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse" />
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 p-4 rounded-2xl sm:rounded-3xl bg-slate-900 border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden group">
                        <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/5 to-transparent rotate-45 animate-shimmer" />
                        <img src={logo} alt="Logo" className="w-full h-full object-contain filter brightness-125 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                    </div>
                </div>
                
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl sm:text-4xl md:text-6xl font-black text-white flex flex-wrap justify-center tracking-tighter">
                        {name.split("").map((char, index) => (
                            <span key={index} className="loader-letter inline-block">
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))}
                        <span className="loader-letter inline-block text-purple-500">.</span>
                    </h1>
                    
                    {/* Status Info */}
                    <div className="mt-8 flex flex-col items-center gap-4 w-64">
                        <div className="flex justify-between w-full text-[10px] font-black text-slate-500 uppercase tracking-widest">
                            <span>Initializing Core</span>
                            <span>{Math.round(progress)}%</span>
                        </div>
                        
                        {/* Custom Progress Bar */}
                        <div className="w-full h-[3px] bg-slate-800 rounded-full overflow-hidden relative">
                            <div className="loader-progress-bar absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
                        </div>

                        <div className="text-[9px] text-purple-500/50 font-bold uppercase tracking-[0.4em] animate-pulse">
                            System Optimizing
                        </div>
                    </div>
                </div>
            </div>

            {/* Scanning Line Effect */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.5)] animate-scan z-20 pointer-events-none" />
        </div>
    );
};

export default Loader;
