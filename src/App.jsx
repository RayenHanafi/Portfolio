import "./App.css"; // or wherever your CSS file is
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ParticlesComponent from "./components/particles";

function App() {
  return (
    <div>
      {/* Main content - will be in front of particles */}
      <section className="main">
        <ParticlesComponent />
        <HeroSection />
        <About />
        <Skills />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </section>
    </div>
  );
}

export default App;
