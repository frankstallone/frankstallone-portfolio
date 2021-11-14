import { animate, timeline } from "motion";

// Hero and main navigation animations
const introSequence = [
  [
    ".intro",
    { transform: "translateY(0)", opacity: 1 },
    { duration: 1 },
    { easing: "ease-in-out" },
  ],
  [
    ".main-header",
    { transform: "translateY(0)", opacity: 1 },
    { duration: 1 },
    { easing: "ease-in-out" },
  ],
];

if (document.querySelector(".main-header")) {
  // Run hero and main navigation animations
  timeline(introSequence);
} else {
  animate(
    ".main-header",
    { transform: "translateY(0)", opacity: 1 },
    { duration: 1 },
    { easing: "ease-in-out" }
  );
}
