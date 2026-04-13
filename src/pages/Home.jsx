import { lazy, Suspense } from "react";
import Hero from "../components/sections/Hero";

const Summary = lazy(() => import("../components/sections/Summary"));
const About = lazy(() => import("../components/sections/About"));
const Services = lazy(() => import("../components/sections/Services"));
const Experience = lazy(() => import("../components/sections/Experience"));
const Certifications = lazy(() => import("../components/sections/Certifications"));
const Skills = lazy(() => import("../components/sections/Skills"));
const Projects = lazy(() => import("../components/sections/Projects"));
const Contact = lazy(() => import("../components/sections/Contact"));
const Footer = lazy(() => import("../components/layout/Footer"));

const Home = () => {
  return (
    <div className="relative z-0">
      <div className="relative">
        <Hero />
      </div>
      <Suspense fallback={<div className="h-20" />}>
        <Summary />
        <About />
        <Services />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <div className="relative z-0">
          <Contact />
          <Footer />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
