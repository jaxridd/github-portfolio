"use client";

const Section = ({
  children,
  sectionId,
  className = "",
  delay = 0,
  fullHeight = true,
}) => {
  const containerClasses = fullHeight
    ? "min-h-screen flex items-center justify-center"
    : "py-20";

  return (
    <section
      data-section={sectionId}
      className={`${containerClasses} ${className} relative z-10`}
    >
      <div className="w-full max-w-6xl mx-auto px-4">{children}</div>
    </section>
  );
};

export default Section;
