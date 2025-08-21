import "./App.css";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="main">
      <HeroSection />
      <About />
      <Skills />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </section>
  );
}

export default App;
