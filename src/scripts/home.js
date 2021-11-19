import { animate, stagger, timeline } from "motion";
import {
  getSections,
  getThreshold,
  getTokens,
  getCurrentBreakpointBoundries,
} from "./utils";

// Breakpoint for large screens for thresholds on InteractionObserver
const dynamicThreshold = getThreshold(1024);

// Grab all the sections we want to animate
const sections = getSections();

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
  const sequence = [
    [
      section,
      { transform: "scale(1)", opacity: 1 },
      { duration: 1 },
      { easing: "ease-in-out" },
    ],
    [
      tokens,
      { transform: ["scale(.75)", "scale(1)"], opacity: [0, 1] },
      { duration: 1, delay: stagger(0.5) },
      { easing: "ease-in-out" },
    ],
  ];

  timeline(sequence);
  observer.unobserve(section);
}

function animateSecondarySection(section) {
  animate(
    section,
    { transform: "scale(1)", opacity: 1 },
    { duration: 1 },
    { easing: "ease-in-out" }
  );
  observer.unobserve(section);
}

// Anitmation function
function animateSections(section) {
  // Grab all the token swatches we want to animate
  const tokens = getTokens(section);
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
