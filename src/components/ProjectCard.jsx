function ProjectCard({ project }) {
  return (
    <div className="projectCard">
      {/* <!-- Project Image Side --> */}
      <div className="w-full md:w-1/2 relative h-48 md:h-auto">
        <img
          className="w-full h-full object-cover"
          src={project.image}
          alt={project.title}
        />
      </div>

      {/* <!-- Project Info Side --> */}
      <div className="w-full md:w-1/2 p-3 sm:p-4 lg:p-12 flex flex-col justify-center text-gray-800">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-0sm:mb-6 lg:mb-8 text-gray-900">
          {project.title}
        </h3>

        <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-0 sm:mb-1 lg:mb-6 text-gray-800">
          Description
        </h4>

        <p className="text-xs sm:text-base lg:text-lg leading-relaxed text-gray-700">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
