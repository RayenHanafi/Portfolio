import { useState } from "react";
import Typewriter from "typewriter-effect";

function MeSection() {
  const [secondLine, setSecondLine] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-12 mt-8 sm:mt-[60px] mb-8 sm:mb-[50px] w-full flex-1">
      {/* <!-- Text --> */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-left -order-2 lg:order-1 lg:mt-14">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi, I'm Rayen")
                .callFunction(() => {
                  setSecondLine(true); // trigger ICT Student after typing finishes
                })
                .start();
            }}
            options={{
              loop: false,
              delay: 100,
            }}
          />
        </div>
        {secondLine && (
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            <Typewriter
              options={{
                strings: ["ICT Student"],
                autoStart: true,
                loop: false,
                delay: 100,
                deleteSpeed: 999999999,
              }}
            />
          </div>
        )}
        <p className="mt-4 lg:mt-[20px] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          A 3rd year engineering student passioned by Cybersecurity, AI and
          everything in between, also I have a deep interest in design that's
          why I'm constantly learning, building and challenging to fulfill my
          passion.
        </p>
        <p className="mt-2 lg:mt-[5px] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
          Welcome to my digital space where I showcase what I do, what I love,
          and where I'm headed.
        </p>
        <button id="contactBtn" className="btn mt-6 lg:mt-10" type="button">
          <a href="#contact">Contact me</a>
        </button>
      </div>

      {/* <!-- Image --> */}
      <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2 pt-10">
        <img
          src="/images/hacker.png"
          alt="pic"
          className="w-full max-w-sm lg:max-w-none h-auto"
        />
      </div>
    </div>
  );
}

export default MeSection;
