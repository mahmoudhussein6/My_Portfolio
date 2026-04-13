import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { FiHome, FiAlertCircle } from "react-icons/fi";

const NotFound = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background glow pulse animation
      gsap.to(glowRef.current, {
        opacity: 0.8,
        scale: 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 404 Number Glitch / Entry Animation
      gsap.from(".glitch-text", {
        y: -50,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "bounce.out",
        delay: 0.2,
      });

      // Subtitle & Button Entry
      gsap.from(".fade-up", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.8,
      });
      
      // Floating animation for the 404 numbers
      gsap.to(".float-anim", {
        y: 15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="min-h-screen pt-20 flex flex-col items-center justify-center relative overflow-hidden bg-slate-900"
    >
      {/* Dynamic Background Glow */}
      <div 
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="z-10 text-center px-4">
        {/* Animated 404 Text */}
        <div ref={textRef} className="flex items-center justify-center gap-4 mb-6">
          <span className="glitch-text float-anim text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-blue-500 drop-shadow-lg">
            4
          </span>
          <div className="glitch-text float-anim flex items-center justify-center w-24 h-24 md:w-32 md:h-32 rounded-full border-8 border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.5)] bg-slate-800 relative">
            <div className="absolute w-full h-full rounded-full border-t-4 border-l-4 border-blue-400 animate-spin" style={{ animationDuration: '3s' }} />
            <FiAlertCircle className="text-4xl md:text-5xl text-purple-400" />
          </div>
          <span className="glitch-text float-anim text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-bl from-blue-400 to-purple-500 drop-shadow-lg">
            4
          </span>
        </div>

        {/* Messaging */}
        <h2 className="fade-up text-3xl md:text-4xl font-bold text-slate-100 mb-4 tracking-tight">
          Oops! Page Not Found
        </h2>
        <p className="fade-up text-slate-400 max-w-md mx-auto mb-10 text-lg">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Button */}
        <div className="fade-up">
          <Link 
            to="/" 
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 rounded-full text-lg font-semibold overflow-hidden transition-all hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
            <FiHome className="relative z-10 text-xl group-hover:animate-bounce" />
            <span className="relative z-10">Back to Earth</span>
          </Link>
        </div>
      </div>
      
      {/* Decorative stars/particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full opacity-20 animate-pulse"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 2 + 's',
              animationDuration: Math.random() * 3 + 2 + 's'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFound;
