import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import NavArrow from "./NavArrow";

function ProjectSection() {
  const Projects = [
    {
      id: 1,
      title: "BookStore",
      image: "/images/books.avif",
      description:
        "A bookstore web page designed using the Symfony framework. This is a full-stack web application featuring both backend and frontend components for managing a bookstore. Users can browse, search, and view details about books. The project demonstrates CRUD operations, user authentication, and responsive design",
    },
    {
      id: 2,
      title: "BookStore2",
      image: "/images/books.avif",
      description:
        "Another bookstore project built with Symfony framework with CRUD, authentication, and responsive design.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const sliderRef = useRef(null);
  const totalNbCards = Projects.length;

  useEffect(() => {
    function updateCardWidth() {
      if (sliderRef.current) {
        const firstCard = sliderRef.current.children[0];
        if (firstCard) {
          setCardWidth(firstCard.offsetWidth + 12); // +12 for the gap
        }
      }
    }
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const sliderStyle = {
    transform: `translateX(-${currentIndex * cardWidth}px)`,
    transition: "transform 0.5s ease",
  };

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center mt-16 sm:mt-[110px] w-full px-4"
    >
      <div className="title">Projects</div>
      {/* <!-- Project Container --> */}
      <div className="relative w-full max-w-6xl">
        <div className="overflow-hidden">
          {/* <!-- Card Slider--> */}
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 gap-3"
            style={sliderStyle}
          >
            {Projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
        {/* <!--Left Arrow--> */}
        {currentIndex > 0 && (
          <NavArrow
            id={"prevBtn"}
            d={"M15 19l-7-7 7-7"}
            onClick={() => setCurrentIndex((i) => i - 1)}
          />
        )}
        {/* <!--Right Arrow--> */}
        {currentIndex < totalNbCards - 1 && (
          <NavArrow
            id={"nextBtn"}
            d={"M9 5l7 7-7 7"}
            onClick={() => setCurrentIndex((i) => i + 1)}
          />
        )}
      </div>
    </section>
  );
}

export default ProjectSection;
