import { useState } from "react";
import type { WorkoutProps } from "../types/types";

export const useCurrIndex = (workouts: WorkoutProps[]) => {
  const [currIndex, setCurrentIndex] = useState(0);
  const last = currIndex === workouts.length - 1;
  const first = currIndex === 0;

  function handleNextIndex() {
    if (last) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currIndex + 1);
    }
  }

  function handlePrevIndex() {
    if (first) {
      setCurrentIndex(workouts.length - 1);
    } else {
      setCurrentIndex(currIndex - 1);
    }
  }

  function switchOnRemove() {
    if (last) {
      setCurrentIndex(currIndex - 1);
    } else {
      setCurrentIndex(currIndex);
    }
  }

  return { currIndex, handleNextIndex, handlePrevIndex, switchOnRemove };
};
