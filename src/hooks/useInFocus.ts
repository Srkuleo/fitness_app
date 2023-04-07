import { useState } from "react";
import type { WorkoutProps } from "../types/types";

export const useInFocus = (workouts: WorkoutProps[]) => {
  const [InFocus, setInFocus] = useState(0);

  const isFirstCard = InFocus === 0;
  const isLastCard = InFocus === workouts.length - 1;

  function prevCard() {
    const newFocus = isFirstCard ? workouts.length - 1 : InFocus - 1;
    setInFocus(newFocus);
  }

  function nextCard() {
    const newFocus = isLastCard ? 0 : InFocus + 1;
    setInFocus(newFocus);
  }

  function switchInFocus() {
    if (isFirstCard) {
      setInFocus(0);
    } else {
      setInFocus(InFocus - 1);
    }
  }

  function jumpToCard(index: number) {
    setInFocus(index);
  }

  return { InFocus, prevCard, nextCard, switchInFocus, jumpToCard };
};
