import Hero from "../components/sections/Hero";
import Summary from "../components/sections/Summary";
import About from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <div className="relative z-0">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <Summary />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <div className="relative z-0">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
