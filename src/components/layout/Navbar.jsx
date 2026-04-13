import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../utils/data";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const navRef = useRef(null);
    const location = useLocation();

    useGSAP(() => {
        gsap.from(".nav-item", {
            y: -20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
        });
    }, { scope: navRef });

    useGSAP(() => {
        if (toggle) {
            gsap.to(".mobile-menu", {
                x: 0,
                duration: 0.5,
                ease: "power3.out",
            });
            gsap.from(".mobile-nav-item", {
                x: 50,
                opacity: 0,
                duration: 0.4,
                stagger: 0.1,
                ease: "power2.out",
                delay: 0.2,
            });
        } else {
            gsap.to(".mobile-menu", {
                x: "100%",
                duration: 0.5,
                ease: "power3.in",
            });
        }
    }, [toggle]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isHome = location.pathname === "/";

    return (
        <header>
            <nav
                ref={navRef}
                className={`w-full flex items-center py-4 fixed top-0 z-40 transition-all duration-500 ${scrolled ? "bg-slate-900/80 backdrop-blur-lg border-b border-white/5 py-3" : "bg-transparent"
                    }`}
            >
                {/* ... container content ... */}
                <div className="w-full h-full max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-16">
                    <Link
                        to="/"
                        className="flex items-center gap-2"
                        onClick={() => {
                            setActive("");
                            window.scrollTo(0, 0);
                        }}
                    >
                        <span className="text-white text-[20px] font-bold cursor-pointer flex items-center tracking-tight">
                            MAHMOUD <span className="text-purple-500 ml-1">.</span>
                        </span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-6">
                        <ul className="list-none flex flex-row gap-5 xl:gap-8">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`nav-item ${active === link.title ? "text-purple-400" : "text-slate-400"
                                        } hover:text-white text-[13px] xl:text-[15px] font-semibold cursor-pointer transition-colors uppercase tracking-wider`}
                                    onClick={() => setActive(link.title)}
                                >
                                    <a href={isHome ? `#${link.id}` : `/#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>

                        {/* Desktop Socials */}
                        <div className="flex items-center gap-4 pl-6 border-l border-white/10">
                            <a href="https://github.com/mahmoudhussein6/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                <FaGithub size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/mahmoud-hussein-0bb055242" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors text-blue-400/80">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="https://wa.me/201288845234" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors text-green-400/80">
                                <FaWhatsapp size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex flex-1 justify-end items-center">
                        <div
                            className="w-[28px] h-[28px] cursor-pointer z-50 text-white hover:text-purple-400 transition-colors"
                            onClick={() => setToggle(!toggle)}
                        >
                            {toggle ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                        </div>

                        <div
                            className={`mobile-menu fixed top-0 right-0 w-[80%] h-screen bg-slate-950/95 backdrop-blur-xl shadow-2xl z-40 flex flex-col items-center justify-center translate-x-full border-l border-white/5`}
                        >
                            <ul className="list-none flex items-center flex-col gap-8">
                                {navLinks.map((link) => (
                                    <li
                                        key={link.id}
                                        className={`mobile-nav-item ${active === link.title ? "text-purple-400" : "text-slate-400"
                                            } font-bold cursor-pointer text-[28px] uppercase tracking-widest`}
                                        onClick={() => {
                                            setToggle(false);
                                            setActive(link.title);
                                        }}
                                    >
                                        <a href={isHome ? `#${link.id}` : `/#${link.id}`}>{link.title}</a>
                                    </li>
                                ))}
                            </ul>

                            {/* Mobile Socials */}
                            <div className="flex items-center gap-10 mt-12 pt-8 border-t border-white/10 w-[200px] justify-center">
                                <a href="https://github.com/mahmoudhussein6/" target="_blank" rel="noreferrer" className="text-slate-400">
                                    <FaGithub size={30} />
                                </a>
                                <a href="https://www.linkedin.com/in/mahmoud-hussein-0bb055242" target="_blank" rel="noreferrer" className="text-blue-400/80">
                                    <FaLinkedin size={30} />
                                </a>
                                <a href="https://wa.me/201288845234" target="_blank" rel="noreferrer" className="text-green-400/80">
                                    <FaWhatsapp size={30} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
