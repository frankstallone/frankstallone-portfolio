import { animate } from "motion";

const dynamicThreshold = window.innerWidth >= 1024 ? "0.25" : "0.1";

// Simple aninmation for the initial
animate(
  ".intro",
  { transform: "translateY(0)", opacity: 1 },
  { duration: 1 },
  { easing: "ease-in-out" }
);

// Creating the InteractionObserver
const observer = new IntersectionObserver(
  (entries) => {
    // Each section gets observed
    entries.forEach((entry) => {
      // Animate each section with  animateSections()
      if (entry.isIntersecting === true) animateSections(entry.target);
    });
  },
  { threshold: [dynamicThreshold] }
);

// Grab all the sections we want to animate
const sections = document.querySelectorAll(".section");

// Taking all sections and attaching IntersectionObserver to them
sections.forEach((section) => {
  observer.observe(section);
});

// Anitmation function
function animateSections(section) {
  animate(
    section,
    { transform: "scale(1)", opacity: 1 },
    { duration: 1 },
    { easing: "ease-in-out" }
  );
}
