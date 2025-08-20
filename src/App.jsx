import "./App.css";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <section className="main">
      <HeroSection />
      <About />
      <Skills />
      <ProjectSection />
    </section>
  );
}

export default App;
