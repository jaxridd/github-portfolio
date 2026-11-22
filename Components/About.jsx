"use client";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

const buttonClass =
  "border-white bg-white text-black hover:bg-stone-700 hover:text-white";

const About = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img
              src={`${base}/jax.jpg`}
              alt="Jax Riddell"
              width={160}
              height={160}
              className="w-24 h-24 md:w-40 md:h-40 rounded-full"
            />
            <div className="flex flex-col items-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-3">
                Jax Riddell
              </h1>
              <p className="text-xl md:text-3xl max-w-2xl">
                IT &amp; Systems Support
              </p>
              <p className="text-stone-400 mt-2 md:mt-3 text-sm md:text-lg px-4 md:px-0">
                B.S. Computer Science · Lamar University · Expected Dec 2026
              </p>
              <p className="text-stone-400 mt-2 md:mt-3 text-sm md:text-base px-4 md:px-0">
                CompTIA Security+ (SY0-701), Microsoft AZ-900, Microsoft SC-900
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <InteractiveHoverButton
                  href={`${base}/Jax_Riddell_Resume.pdf`}
                  download="Jax_Riddell_Resume.pdf"
                  className={buttonClass}
                >
                  Download Resume
                </InteractiveHoverButton>
                <InteractiveHoverButton
                  href="mailto:riddelljax@protonmail.com"
                  className={buttonClass}
                >
                  Contact Me
                </InteractiveHoverButton>
              </div>
            </div>
          </div>
          <p className="text-stone-400 text-base max-w-2xl">
            I&apos;m a Computer Science student at Lamar University, graduating
            in December 2026. Right now I work full time as a Help Desk Support
            Representative at Neches Federal Credit Union, where I troubleshoot
            hardware and software issues, manage tickets, and explain technical
            problems to non-technical users. Working in a financial institution
            has shown me how much security and clear communication matter in
            everyday IT work. Outside of work and school, I build homelabs to
            get hands-on experience. My Active Directory lab includes Windows
            Server, Group Policy, Splunk SIEM monitoring, and an osTicket help
            desk, and my pfSense lab covers network segmentation, DHCP, and
            NAT. I&apos;m currently extending the Active Directory lab into
            Azure with Entra ID Connect and Microsoft Sentinel. I hold CompTIA
            Security+, Microsoft AZ-900, Microsoft SC-900, and I&apos;m studying
            for the CCNA. My technical interests are cloud security, security
            monitoring, and identity and access management. I enjoy the
            investigative side of security, like reading logs, working out what
            happened, and figuring out how to prevent it from happening again.
            After graduation, I&apos;m looking for an entry-level SOC analyst or
            cloud security role in the Houston area. My longer-term goal is to
            grow into cloud security engineering, where I can combine my systems
            background with building secure environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
