import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "transparent", // Make background transparent
          },
        },
        particles: {
          number: {
            value: 50, // Adjust the number of particles
            density: {
              enable: true,
              value_area: 1000, // Increase value area for more space between particles
            },
          },
          color: {
            value: "#ffffff", // White particles
          },
          shape: {
            type: "circle", // Change shape to circle
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.3, // Increase transparency for a more subtle effect
            random: true, // Randomize opacity
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3, // Make particles a little bit bigger
            random: true,
            anim: {
              enable: true,
              speed: 10,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: false, // Disable line linking for a cleaner look
          },
          move: {
            enable: true,
            speed: 1, // Adjust speed for particle movement
            direction: "none",
            random: true, // Randomize movement direction
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
              mode: "bubble", // Change to bubble for a more interactive feel
            },
            onclick: {
              enable: true,
              mode: "repulse", // Change to repulse on click
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
              distance: 200,
              size: 10,
              duration: 2,
              opacity: 0.8,
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
      }}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1, // Ensure particles are behind other content
      }}
    />
  );
}

export default Particle;
