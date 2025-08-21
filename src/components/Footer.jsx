function Footer() {
  return (
    <footer className="mt-16 sm:mt-[110px] w-full max-w-7xl flex flex-col items-center justify-center gap-4 sm:gap-5 mb-6 px-4">
      <div className="w-full h-[3px] sm:h-[5px] rounded-4xl bg-gradient-to-r from-pink-200 via-pink-100 to-orange-100 hover:bg-gradient-to-br"></div>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full px-2 gap-4 sm:gap-0">
        <p className="text-sm sm:text-base lg:text-lg text-center sm:text-left">
          © 2025 All Right Reserved Rayen Hanafi Portofilo
        </p>
        <div className="flex justify-center items-center gap-3">
          <a href="https://github.com/RayenHanafi/">
            <img
              className="w-8 h-8 sm:w-[40px] sm:h-[40px] object-contain"
              src="/images/icone/github-brands.svg"
              alt="GitHub"
            />
          </a>
          <a href="https://linkedin.com/in/rayen-hanafi">
            <img
              className="w-8 h-8 sm:w-[40px] sm:h-[40px] object-contain"
              src="/images/icone/linkedin-brands.svg"
              alt="LinkedIn icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
