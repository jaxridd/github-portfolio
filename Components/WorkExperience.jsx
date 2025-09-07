import React from "react";

const WorkExperience = () => {
  return (
    <div>
      <div className="flex flex-col w-full max-w-3xl mx-auto px-4 mt-10">
        <h1 className="text-2xl font-bold mb-4 text-left">Work Experience</h1>
          <h2 className="text-lg font-bold mb-4 text-left">AI/ML Spectral Modeling Research</h2>
          <div className="flex gap-10">
            <h3 className="text-sm font-bold mb-4 text-left">Lamar University - Computer Science Department </h3>
            <h4 className="text-sm font-bold mb-4 text-left">July 2025 - Present</h4>
          </div>
          <ul className="list-disc list-inside">
            <li>Selected for a competitive, year-long AI/ML research assistantship focused on modeling noisy GQD spectral data to
            predict chromophore structures</li>
            <li>Research project integrates cyber twin protocols, TD-PiFCI+DFT spectral computation, and quantum modeling to
            enhance spectral prediction accuracy under real-world noise conditions.</li>
            <li>Contributed to data preprocessing, anomaly detection, and building predictive models using scikit-learn, Gaussian
            Process Regression, and Random Forests</li>
            <li>Participated in collaborative coding, weekly planning, and scientific documentation using tools like Python,
            NumPy, Pandas, and Matplotlib.</li>
          </ul>
        </div>
    </div>
  );
};

export default WorkExperience;
