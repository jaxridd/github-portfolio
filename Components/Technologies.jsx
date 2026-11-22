import {
  FaLinux,
  FaWindows,
  FaPython,
  FaAws,
  FaShieldAlt,
  FaNetworkWired,
  FaServer,
  FaDatabase,
  FaGitAlt,
  FaTerminal,
} from "react-icons/fa";
import { SiVirtualbox } from "react-icons/si";

const skillCategories = [
  {
    title: "Operating Systems",
    skills: [
      { name: "Linux / UNIX", icon: FaLinux, color: "text-yellow-500" },
      { name: "Windows", icon: FaWindows, color: "text-blue-400" },
    ],
  },
  {
    title: "Systems & Networking",
    skills: [
      { name: "TCP/IP & DNS", icon: FaNetworkWired, color: "text-cyan-400" },
      { name: "Active Directory", icon: FaServer, color: "text-blue-300" },
      { name: "Firewalls & NAT", icon: FaShieldAlt, color: "text-orange-400" },
      { name: "VirtualBox", icon: SiVirtualbox, color: "text-blue-500" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      { name: "AWS", icon: FaAws, color: "text-amber-400" },
      { name: "Bash / CLI", icon: FaTerminal, color: "text-blue-400" },
      { name: "SQL", icon: FaDatabase, color: "text-sky-400" },
      { name: "Python", icon: FaPython, color: "text-blue-500" },
    ],
  },
];

const Technologies = () => {
  return (
    <div>
      <div className="flex flex-col w-full max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-2 text-left">Technical Skills</h2>
        <p className="text-stone-400 text-sm mb-6 text-left">
          DHCP · DNS · routing · Group Policy · SIEM · ticketing workflows
        </p>
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-semibold text-stone-400 uppercase tracking-wide mb-3 text-left">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((tech) => {
                  const IconComponent = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 flex-shrink-0 w-24 h-24"
                    >
                      <div className="flex flex-col items-center justify-center h-full space-y-2">
                        <div
                          className={`text-2xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent />
                        </div>
                        <p className="text-xs font-medium text-center text-white/90 group-hover:text-white transition-colors duration-300">
                          {tech.name}
                        </p>
                      </div>
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
