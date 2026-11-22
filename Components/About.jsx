"use client";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

const About = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center space-x-4">
            <img
              src={`${base}/jax.jpg`}
              alt="Jax Riddell"
              className="w-40 h-40 rounded-full"
            />
            <div className="flex flex-col items-center">
              <h1 className="text-6xl font-bold mb-3">Jax Riddell</h1>
              <h2 className="text-3xl max-w-2xl">IT & Systems Support</h2>
              <p className="text-stone-400 mt-3 text-lg">
                B.S. Computer Science · Lamar University · Expected Dec 2026
              </p>
              <span className="text-stone-400 mt-3 text-medium">
                CompTIA Security+ (SY0-701)
              </span>
              <div className="flex flex-col sm:flex-row items-center space-y-4 mt-4 sm:space-y-0 sm:space-x-4">
                <InteractiveHoverButton
                  href={`${base}/Jax_Riddell_Res.pdf`}
                  download="Jax_Riddell_Resume.pdf"
                  className="border-white bg-white text-black hover:bg-stone-700 hover:text-white"
                >
                  Download Resume
                </InteractiveHoverButton>
                <InteractiveHoverButton
                  href="mailto:riddelljax@protonmail.com"
                  className="border-white bg-white text-black hover:bg-stone-700 hover:text-white"
                >
                  Contact Me
                </InteractiveHoverButton>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center">
            <p className="text-stone-400 mt-3 text-md max-w-2xl">
              I'm a Computer Science student at Lamar University, graduating in
              December 2026. Right now I work full time as a Help Desk Support
              Representative at Neches Federal Credit Union, where I
              troubleshoot hardware and software issues, manage tickets, and
              explain technical problems to non-technical users. Working in a
              financial institution has shown me how much security and clear
              communication matter in everyday IT work. Outside of work and
              school, I build homelabs to get hands-on experience. My Active
              Directory lab includes Windows Server, Group Policy, Splunk SIEM
              monitoring, and an osTicket help desk, and my pfSense lab covers
              network segmentation, DHCP, and NAT. I'm currently extending the
              Active Directory lab into Azure with Entra ID Connect and
              Microsoft Sentinel. I hold CompTIA Security+, Microsoft AZ-900,
              Microsoft SC-900, and I'm studying for the CCNA. My technical
              interests are cloud security, security monitoring, and identity
              and access management. I enjoy the investigative side of security,
              like reading logs, working out what happened, and figuring out how
              to prevent it from happening again. After graduation, I'm looking
              for an entry-level SOC analyst or cloud security role in the
              Houston area. My longer-term goal is to grow into cloud security
              engineering, where I can combine my systems background with
              building secure environments.
            </p>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center space-y-4">
            <img
              src={`${base}/jax.jpg`}
              alt="Jax Riddell"
              className="w-24 h-24 rounded-full"
            />
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold mb-3">Jax Riddell</h1>
              <h2 className="text-xl text-center px-4">IT & Systems Support</h2>
              <p className="text-stone-400 mt-2 text-sm text-center px-4">
                B.S. Computer Science · Lamar University · Expected Dec 2026
              </p>
              <span className="text-stone-400 mt-2 text-sm">
                CompTIA Security+ (SY0-701)
              </span>
              <div className="flex flex-col items-center space-y-4 mt-4 w-full px-4">
                <InteractiveHoverButton
                  href={`${base}/Jax_Riddell_Res.pdf`}
                  download="Jax_Riddell_Resume.pdf"
                  className="border-white bg-white text-black hover:bg-stone-700 hover:text-white"
                >
                  Download Resume
                </InteractiveHoverButton>
                <InteractiveHoverButton
                  href="mailto:riddelljax@protonmail.com"
                  className="border-white bg-white text-black hover:bg-stone-700 hover:text-white"
                >
                  Contact Me
                </InteractiveHoverButton>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-stone-400 mt-3 text-lg max-w-2xl">
                  CS student at Lamar University graduating December 2026. Help
                  Desk Support Representative at Neches Federal Credit Union,
                  assisting users, troubleshooting enterprise systems, and
                  supporting infrastructure across multiple branches. Focused on
                  IT security and cloud infrastructure. CompTIA Security+ and
                  Microsoft Azure Fundamentals (AZ-900) certified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
