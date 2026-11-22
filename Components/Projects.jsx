const projects = [
  {
    title: "Active Directory Homelab",
    github: "https://github.com/jaxridd/active-directory-homelab",
    subtitle: "Windows Server 2025 · VirtualBox",
    period: "Mar 2026 – Apr 2026",
    highlights: [
      "Deployed a Windows Server 2025 domain controller with AD DS and DNS to simulate an enterprise identity environment, provisioning users, security groups, and OUs via PowerShell.",
      "Configured Group Policy Objects for password enforcement, account lockout, and desktop restrictions to simulate enterprise security policy management, and integrated Splunk SIEM with real-time alerts for account lockouts, privilege escalation, and unauthorized user creation.",
      "Deployed osTicket on IIS with MySQL, simulating ticket-based password resets and account troubleshooting resolved through Active Directory.",
      "Extended the environment to Azure by configuring hybrid identity via Microsoft Entra Connect, enrolling the domain controller in Azure Arc, and deploying Microsoft Sentinel with custom analytics rules for authentication threat detection.",
    ],
  },
  {
    title: "pfSense Firewall Homelab",
    github: "https://github.com/jaxridd/pfsense-homelab",
    subtitle: "pfSense · LAN/WAN segmentation",
    period: "Jan 2026 – Feb 2026",
    highlights: [
      "Deployed and configured a pfSense firewall in VirtualBox with LAN/WAN segmentation, DHCP, and NAT to secure a virtualized internal network.",
      "Diagnosed and resolved DHCP conflicts, routing failures, and interface misconfiguration through systematic Layer 2/Layer 3 troubleshooting.",
    ],
  },
  {
    title: "AI Assistant Project Placeholder",
    subtitle: "In Progress",
    period: "Nov 2026 – Present",
    highlights: [],
  },
];

const Projects = () => {
  return (
    <div>
      <div className="flex flex-col w-full max-w-3xl mx-auto px-4 mt-10 mb-5">
        <h2 className="text-2xl font-bold mb-6 text-left">Projects</h2>
        <div className="space-y-10">
          {projects.map((project) => (
            <article key={project.title + project.github}>
              <h3 className="text-lg font-bold text-left">{project.title}</h3>
              {project.github && (
                <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="text-sm text-stone-300 text-left underline"
              >
                GitHub Link
              </a>
              )}
              <div className="flex flex-wrap gap-x-6 gap-y-1 mt-1">
                <p className="text-sm text-stone-300 text-left">
                  {project.subtitle}
                </p>
                <p className="text-sm text-stone-400 text-left">
                  {project.period}
                </p>
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
