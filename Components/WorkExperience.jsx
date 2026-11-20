const experiences = [
  {
    title: "Help Desk Support Representative",
    organization: "Neches Federal Credit Union",
    period: "June 2026 – Present",
    highlights: [
      "Managed Active Directory account life-cycle and access control across a regulated financial institution, provisioning permissions and enforcing least-privilege access to protect member PII in compliance with GLBA.",
      "Resolved 250+ help desk tickets via Track-It, including MFA/authentication troubleshooting and secure document management, applying sound judgment to balance security requirements with member service needs.",
      "Configured and deployed workstation images across 7 branch locations, maintaining network asset documentation (IP allocation, device inventory) to support security and operational continuity.",
      "Diagnosed member MFA delivery failures by verifying codes were sent in login logs, then worked with the carrier to identify message blocking as the root cause.",
    ],
  },
  {
    title: "CS Success Tutor",
    organization: "Lamar University — Computer Science Department",
    period: "Jan 2025 – Dec 2025",
    highlights: [
      "Tutored undergraduates in Data Structures & Algorithms, Java, and object-oriented development and communicated complex technical concepts clearly and documented common solutions for recurring issues.",
      "Provided technical support to users by diagnosing and resolving software, OS, and environment issues across Linux and Windows systems",
    ],
  },
];

const WorkExperience = () => {
  return (
    <div>
      <div className="flex flex-col w-full max-w-3xl mx-auto px-4 mt-10">
        <h1 className="text-2xl font-bold mb-6 text-left">Experience</h1>
        <div className="space-y-10">
          {experiences.map((job) => (
            <article key={job.title}>
              <h2 className="text-lg font-bold text-left">{job.title}</h2>
              <div className="flex flex-wrap gap-x-6 gap-y-1 mt-1">
                <h3 className="text-sm text-stone-300 text-left">
                  {job.organization}
                </h3>
                <h4 className="text-sm text-stone-500 text-left">
                  {job.period}
                </h4>
              </div>
              <ul className="list-disc list-inside mt-3 space-y-2 text-stone-300 text-sm">
                {job.highlights.map((item) => (
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

export default WorkExperience;
