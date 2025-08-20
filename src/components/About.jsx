function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center mt-16 sm:mt-[110px] w-full max-w-5xl px-4 "
    >
      <div className="title">About me</div>
      <p className="text-center text-lg sm:text-xl lg:text-2xl leading-relaxed">
        An engineering student from Tunisia, currently studying ICT engineering
        at INSAT. I've always been fascinated by how things work, especially in
        the world of cybersecurity, software, and AI. Over the past couple of
        years, I've explored multiple paths, from coding in Python and Java to
        diving into reverse engineering and CTF challenges. Also, lately I've
        been getting into the world of UI/UX design. With my previous experience
        in social media design using Figma, I aim to be a successful freelancer
        alongside my cybersecurity career goal.
      </p>
      <button className="btn mt-6 sm:mt-9">View Resume</button>
    </section>
  );
}

export default About;
