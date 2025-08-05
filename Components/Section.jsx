"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Section = ({
  children,
  sectionId,
  className = "",
  delay = 0,
  fullHeight = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: "-100px 0px -100px 0px",
  });

  const containerClasses = fullHeight
    ? "min-h-screen flex items-center justify-center"
    : "py-20";

  return (
    <motion.section
      ref={ref}
      data-section={sectionId}
      className={`${containerClasses} ${className}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-4">{children}</div>
    </motion.section>
  );
};

export default Section;
