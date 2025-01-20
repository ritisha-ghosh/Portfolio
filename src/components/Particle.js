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
            value: 140, // Slightly reduce the number of particles
            density: {
              enable: true,
              value_area: 1000, // Increase value area for more space between particles
            },
          },
          color: {
            value: "#ffffff", // Set particles to white
          },
          shape: {
            type: ["circle", "star"], // Set shape to circle and star
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.2, // Make particles more transparent
            random: true, // Randomize opacity
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 2.5, // Slightly reduce size of particles
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
            speed: 2, // Slightly increase speed for more dynamic movement
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
              mode: "bubble", // Change to bubble effect on hover
            },
            onclick: {
              enable: true,
              mode: "push", // Change to push on click
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
              distance: 150, // Reduce distance for bubble effect
              size: 6, // Make bubble particles smaller
              duration: 1.5, // Reduce duration for bubble effect
              opacity: 0.7, // Reduce opacity for bubble effect
              speed: 2, // Reduce speed for bubble effect
            },
            connect: {
              distance: 80,
              line_linked: {
                opacity: 0.5,
              },
            },
            repulse: {
              distance: 100, // Adjust distance for repulse effect
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
              particles: {
                size: 1, // Make particles smaller on click
              },
            },
            remove: {
              particles_nb: 2,
            },
            trail: {
              delay: 0.005,
              quantity: 5,
              particles: {
                color: "#ffffff", // Set trail particles to white
                opacity: 0.5,
                size: 4, // Make trail particles smaller
                move: {
                  speed: 5,
                },
              },
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
