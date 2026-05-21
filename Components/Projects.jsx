const projects = [
  {
    title: "Active Directory Homelab",
    subtitle: "Windows Server 2025 · VirtualBox",
    period: "Mar 2026 – Apr 2026",
    highlights: [
      "Deployed Windows Server 2025 domain controller in VirtualBox with AD DS, DNS, and dual-adapter internal networking.",
      "Provisioned users, security groups, and OUs via PowerShell; enforced password and lockout policies with GPOs.",
      "Forwarded domain logs to Splunk SIEM on Ubuntu for real-time alerting.",
      "Deployed osTicket on IIS with MySQL to simulate enterprise help desk workflows.",
    ],
  },
  {
    title: "pfSense Firewall Homelab",
    subtitle: "pfSense · LAN/WAN segmentation",
    period: "Jan 2026 – Feb 2026",
    highlights: [
      "Configured pfSense with LAN/WAN segmentation, DHCP scopes, and NAT rules.",
      "Troubleshot Layer 2/Layer 3 issues including DHCP conflicts and routing failures.",
      "Validated connectivity with ICMP testing and DHCP lease verification.",
    ],
  },
];

const Projects = () => {
  return (
    <div>
      <div className="flex flex-col w-full max-w-3xl mx-auto px-4 mt-10 mb-5">
        <h1 className="text-2xl font-bold mb-6 text-left">Projects</h1>
        <div className="space-y-10">
          {projects.map((project) => (
            <article key={project.title}>
              <h2 className="text-lg font-bold text-left">{project.title}</h2>
              <div className="flex flex-wrap gap-x-6 gap-y-1 mt-1">
                <h3 className="text-sm text-stone-300 text-left">
                  {project.subtitle}
                </h3>
                <h4 className="text-sm text-stone-500 text-left">
                  {project.period}
                </h4>
              </div>
              <ul className="list-disc list-inside mt-3 space-y-2 text-stone-300 text-sm">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
