import { animate, stagger, timeline } from "motion";
import {
  getThreshold,
  getInnerDOMElements,
  getCurrentBreakpointBoundries,
  getDOMElements,
} from "./utils";
import { standardOptions } from "./navigation";

// Breakpoint for large screens for thresholds on InteractionObserver
const dynamicThreshold = getThreshold(1024);

// Grab all the sections we want to animate
const sections = getDOMElements(".section");
console.log(sections);

// Creating a InteractionObserver interface for animations
const observer = new IntersectionObserver(
  (entries) => {
    // When threshold is met IntersectionObserverEntry section is acted on
    entries.forEach((entry) => {
      if (entry.isIntersecting === true) {
        animateSections(entry.target);
        // In the future we can add a property to each section object to run animations post initial animations
        // entry.target.ranAlready = true;
      }
    });
  },
  { threshold: [dynamicThreshold] }
);

// Giving IntersectionObserver targets to watch
sections.forEach((section) => {
  observer.observe(section);
});

function animateMainSectionDesktop(section, tokens) {
  timeline([
    [section, { transform: "scale(1)", opacity: 1 }, standardOptions],
    [
      tokens,
      { transform: ["scale(.75)", "scale(1)"], opacity: [0, 1] },
      { duration: 1, delay: stagger(0.5), easing: "ease-in-out" },
    ],
  ]);
  observer.unobserve(section);
}

function animateSecondarySection(section) {
  animate(section, { transform: "scale(1)", opacity: 1 }, standardOptions);
  observer.unobserve(section);
}

// Animation function 🧨
function animateSections(section) {
  // Grab all the token swatches we want to animate
  const tokens = getDOMElements(".token-swatch", section);
  const tokensAreVisible = getCurrentBreakpointBoundries(768);

  // Main sections on desktop
  if (tokensAreVisible && tokens) {
    animateMainSectionDesktop(section, tokens);
  }
  // Secondary sections or small screens
  if (!tokens || !tokensAreVisible) {
    animateSecondarySection(section);
  }
}
