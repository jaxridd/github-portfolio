const experiences = [
  {
    title: "CS Success Tutor",
    organization: "Lamar University — Computer Science Department",
    period: "Jan 2025 – Dec 2025",
    highlights: [
      "Provided technical support for students across Linux and Windows environments, diagnosing software and OS-level issues.",
      "Used ticketing systems to prioritize requests, document resolutions, and track recurring problems.",
      "Explained systems concepts including networking, operating systems, and security fundamentals during tutoring sessions.",
    ],
  },
  {
    title: "Produce — Perishables Representative",
    organization: "H-E-B",
    period: "Aug 2023 – Present",
    highlights: [
      "Responded to inventory and workflow issues under time pressure in a high-volume retail environment.",
      "Coordinated with team members through a shared ticketing workflow for stock exceptions and operational blockers.",
      "Maintained accuracy and communication standards during peak customer traffic.",
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
