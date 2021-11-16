import { animate, stagger, timeline } from "motion";

// Breakpoint for large screens for thresholds on InteractionObserver
const dynamicThreshold = window.innerWidth >= 1024 ? "0.25" : "0.1";

// Grab all the sections we want to animate
const sections = document.querySelectorAll(".section");

// Creating a InteractionObserver interface for animations
const observer = new IntersectionObserver(
  (entries) => {
    // When threshold is met IntersectionObserverEntry section is acted on
    entries.forEach((entry) => {
      // console.log(`Before: ${entry.target.ranAlready}`);
      // Animate each section with animateSections() when intersecting
      if (entry.isIntersecting === true) {
        animateSections(entry.target);
        entry.target.ranAlready = true;
        // observer.unobserve(entry.target);
      }
      // console.log(`After: ${entry.target.ranAlready}`);
    });
  },
  { threshold: [dynamicThreshold] }
);

// Giving IntersectionObserver targets to watch
sections.forEach((section) => {
  observer.observe(section);
});

// Anitmation function
function animateSections(section) {
  // Grab all the token swatches we want to animate
  const tokens = section.querySelectorAll(".token-swatch");
  const tokensAreVisible = window.innerWidth >= 768;
  console.log(section.ranAlready);

  // If we have tokens showing and there are tokens in the section
  if (tokensAreVisible && tokens) {
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
  } else {
    animate(
      section,
      { transform: "scale(1)", opacity: 1 },
      { duration: 1 },
      { easing: "ease-in-out" }
    );
  }
}
