import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PageTransitionLoader = ({ onComplete, onMidpoint }) => {
    const loaderRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: onComplete
        });

        // Entrance animation
        tl.to(".transition-panel", {
            y: "0%",
            duration: 0.8,
            stagger: 0.05,
            ease: "expo.inOut",
            onComplete: onMidpoint
        })
        .from(".transition-content", {
            opacity: 0,
            y: 20,
            duration: 0.4,
        }, "-=0.3")
        .to({}, { duration: 0.8 }) // Hold for a bit
        .to(".transition-content", {
            opacity: 0,
            y: -20,
            duration: 0.3,
        })
        // Exit animation
        .to(".transition-panel", {
            y: "-100%",
            duration: 0.8,
            stagger: -0.05,
            ease: "expo.inOut"
        });
    }, { scope: loaderRef });

    return (
        <div ref={loaderRef} className="fixed inset-0 z-[1000] pointer-events-none overflow-hidden">
            {/* Split Panels */}
            <div className="transition-panel absolute inset-0 bg-slate-950 z-0 translate-y-full" />
            <div className="transition-panel absolute inset-0 bg-purple-600/10 z-0 translate-y-full backdrop-blur-sm" />
            <div className="transition-panel absolute inset-0 bg-slate-900 z-0 translate-y-full" />

            <div className="transition-content relative z-10 h-full flex flex-col items-center justify-center">
                <div className="relative">
                    <div className="w-24 h-24 rounded-2xl bg-slate-950 border border-purple-500/30 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-transparent animate-pulse" />
                        <div className="w-12 h-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
                    </div>
                </div>
                <div className="mt-8 text-center px-6">
                    <h2 className="text-2xl font-black text-white tracking-widest uppercase">
                        Initializing <span className="text-purple-500">Gallery</span>
                    </h2>
                    <div className="mt-2 flex items-center justify-center gap-1">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-500/50 animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.5)] animate-scan z-20" />
        </div>
    );
};

export default PageTransitionLoader;
