import {
  animate,
  timeline,
  AnimationListOptions,
  MotionKeyframesDefinition,
  AcceptedElements,
} from "motion";
import { getDOMElements } from "./utils";

export const standardOptions: AnimationListOptions = {
  duration: 1,
  easing: "ease-in-out",
};

const navigationKeyframes: MotionKeyframesDefinition = {
  transform: "translateY(0)",
  opacity: 1,
};

const sequence: [
  AcceptedElements,
  MotionKeyframesDefinition,
  AnimationListOptions
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
