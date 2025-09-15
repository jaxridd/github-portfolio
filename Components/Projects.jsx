const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ClaimLens",
      image: "/claimlens.png",
      description: "AI Fact-Checking Web App",
      url: "https://claim-lens-six.vercel.app/",
    },
    {
      id: 2,
      title: "Disney+ Clone",
      image: "/disney+clone.png",
      description:
        "Developed a Disney+ Clone web application using React.js, replicating the user interface and functionality of the original platform with a focus on displaying movies and shows using data from TMDb API.",
      url: "https://disney-clone-brown-sigma.vercel.app/",
    },
    {
      id: 3,
      title: "Cache Simulator",
      image:
        "https://via.placeholder.com/400x250/1a1a1a/ffffff?text=Cache+Simulator",
      description:
        "Demonstration on the impact of cache design decisions on system performance through detailed analysis and experimentation.",
      url: "https://github.com/jaxridd/Cache-Simulator",
    },
  ];

  return (
    <div>
      <div className="flex flex-col w-full max-w-3xl mx-auto px-4 mb-5">
        <h1 className="text-2xl font-bold mb-4 text-left mt-10">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer block"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors duration-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">
                  {project.description}
                </p>
              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
