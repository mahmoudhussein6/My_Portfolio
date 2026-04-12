import { useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);

    useGSAP(() => {
        gsap.from(".footer-content", {
            y: 20,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 95%",
            },
        });
    }, { scope: footerRef });

    return (
        <footer ref={footerRef} className="w-full py-12 bg-slate-950 flex flex-col items-center justify-center gap-6 border-t border-white/5">
            <div className="footer-content flex gap-8">
                <a href="https://github.com" target="_blank" className="text-slate-500 hover:text-purple-400 transition-all text-3xl hover:-translate-y-1 inline-block"><FaGithub /></a>
                <a href="https://linkedin.com" target="_blank" className="text-slate-500 hover:text-purple-400 transition-all text-3xl hover:-translate-y-1 inline-block"><FaLinkedin /></a>
                <a href="https://twitter.com" target="_blank" className="text-slate-500 hover:text-purple-400 transition-all text-3xl hover:-translate-y-1 inline-block"><FaTwitter /></a>
            </div>
            <p className="footer-content text-slate-600 text-sm font-medium tracking-wide">
                © 2026 <span className="text-slate-400">MAHMOUD HUSSEIN KAMAL</span>. ALL RIGHTS RESERVED.
            </p>
        </footer>
    );
};

export default Footer;
