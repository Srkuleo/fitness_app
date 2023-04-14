import { useState } from "react";
import type { WorkoutProps } from "../types/types";

export const useCardInFocus = (workouts: WorkoutProps[]) => {
  const [cardInFocus, setInFocus] = useState(0);

  const isFirstCard = cardInFocus === 0;
  const isLastCard = cardInFocus === workouts.length - 1;

  function prevCard() {
    const newFocus = isFirstCard ? workouts.length - 1 : cardInFocus - 1;
    setInFocus(newFocus);
  }

  function nextCard() {
    const newFocus = isLastCard ? 0 : cardInFocus + 1;
    setInFocus(newFocus);
  }

  function switchInFocus() {
    if (isFirstCard) {
      setInFocus(0);
    } else {
      setInFocus(cardInFocus - 1);
    }
  }

  function jumpToCard(index: number) {
    setInFocus(index);
  }

  return { cardInFocus, prevCard, nextCard, switchInFocus, jumpToCard };
};
