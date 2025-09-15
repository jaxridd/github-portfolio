import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaDatabase,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const Technologies = () => {
  const technologies = [
    { name: "React", icon: FaReact, color: "text-blue-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Python", icon: FaPython, color: "text-blue-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
  ];

  return (
    <div>
      <div className="flex flex-col w-full max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4 text-left">Technologies</h1>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={tech.name}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 flex-shrink-0 w-24 h-25"
              >
                <div className="flex flex-col items-center justify-center h-full space-y-2">
                  <div
                    className={`text-2xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent />
                  </div>
                  <h3 className="text-xs font-medium text-center text-white/90 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </h3>
                </div>

                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
