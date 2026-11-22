"use client";
import { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Wait for particles.js to be available
    const initParticles = () => {
      if (typeof window !== "undefined" && window.particlesJS) {

        // Configuration based on the official documentation
        const config = {
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 20,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        };

        try {
          // Initialize particles.js
          window.particlesJS("particles-js", config);
        } catch (error) {
          console.error("Error initializing particles.js:", error);
        }
      } else {
        // Retry after a short delay
        setTimeout(initParticles, 100);
      }
    };

    // Start initialization
    initParticles();

    // Cleanup function
    return () => {
      if (window.pJSDom && window.pJSDom.length > 0) {
        window.pJSDom.forEach((pJSDom) => {
          if (pJSDom.pJS && pJSDom.pJS.fn && pJSDom.pJS.fn.vendors) {
            pJSDom.pJS.fn.vendors.destroypJS();
          }
        });
        window.pJSDom = [];
      }
    };
  }, []);

  return (
    <div
      id="particles-js"
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "transparent",
      }}
    />
  );
};

export default ParticlesBackground;
