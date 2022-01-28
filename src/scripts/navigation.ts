import {
  animate,
  timeline,
} from "motion";
import {
  StyleKeyframesDefinition
} from "@motionone/dom/types/animate/types";
import {
  CustomAnimationSettings
} from "@motionone/types";
import { getDOMElements } from "../utils/general";

export const standardOptions: CustomAnimationSettings = {
  duration: 1,
  easing: "ease-in-out",
};

const navigationKeyframes: StyleKeyframesDefinition = {
  transform: "translateY(0)",
  opacity: 1,
};

const sequence: [
  string,
  StyleKeyframesDefinition,
  CustomAnimationSettings

][] = [
  [".intro", navigationKeyframes, standardOptions],
  [".main-header", navigationKeyframes, standardOptions],
];

if (getDOMElements(".main-header")) {
  // Run hero and main navigation animations
  timeline(sequence);
} else {
  animate(".main-header", navigationKeyframes, standardOptions);
}
