import Navbar from "./Navbar";
import MeSection from "./MeSection";

function HeroSection() {
  return (
    <section
      id="home"
      className="flex flex-col bg-[#7B7B7B]/20 py-5 sm:py-[20px] px-4 sm:px-8 lg:px-[60px] mt-8 sm:mt-[95px] rounded-[40px] w-full max-w-7xl min-h-auto lg:h-auto shadow-2xl"
    >
      <Navbar />
      <MeSection />
    </section>
  );
}

export default HeroSection;
