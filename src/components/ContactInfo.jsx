function ContactInfo() {
  return (
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
      <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8 text-white">
        Message Me On
      </h3>
      <div className="flex flex-col gap-4 sm:gap-5 w-full">
        {/* <!-- Email --> */}
        <div className="flex items-center">
          <img
            className="w-10 h-10 sm:w-[50px] sm:h-[50px] object-contain"
            src="/images/icone/envelope-solid.svg"
            alt="email icon"
          />
          <p className="text-sm sm:text-base lg:text-lg px-3 sm:px-5 break-all">
            rayen.hanafi@insat.ucar.tn
          </p>
        </div>
        {/* <!-- LinkedIn --> */}
        <div className="flex items-center">
          <a href="https://linkedin.com/in/rayen-hanafi">
            <img
              className="w-10 h-10 sm:w-[50px] sm:h-[50px] object-contain"
              src="/images/icone/linkedin-brands.svg"
              alt="LinkedIn icon"
            />
          </a>
          <p className="text-sm sm:text-base lg:text-lg px-3 sm:px-5 break-all">
            linkedin.com/in/rayen-hanafi/
          </p>
        </div>
        {/* <!-- Discord --> */}
        <div className="flex items-center">
          <img
            className="w-10 h-10 sm:w-[50px] sm:h-[50px] object-contain"
            src="/images/icone/discord-brands.svg"
            alt="Discord icon"
          />
          <p className="text-sm sm:text-base lg:text-lg px-3 sm:px-5">
            rayen02
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
