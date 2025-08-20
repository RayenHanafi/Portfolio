function Navbar() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 w-full text-lg sm:text-[22px] text-center gap-4 sm:gap-0">
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>
  );
}

export default Navbar;
