import { useState } from "react";
import type { WorkoutProps } from "../types/types";

export const useCurrIndex = (index: number, workouts: WorkoutProps[]) => {
  const [currIndex, setCurrIndex] = useState(index);

  const isFirstCard = currIndex === 0;
  const isLastCard = currIndex === workouts.length - 1;

  function prevCard() {
    const newIndex = isFirstCard ? workouts.length - 1 : currIndex - 1;
    setCurrIndex(newIndex);
  }

  function nextCard() {
    const newIndex = isLastCard ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  }

  function switchOnRemove() {
    if (isLastCard) {
      setCurrIndex(currIndex - 1);
    } else {
      setCurrIndex(currIndex);
    }
  }

  function jumpToCard(index: number) {
    setCurrIndex(index);
  }

  return { currIndex, prevCard, nextCard, switchOnRemove, jumpToCard };
};
