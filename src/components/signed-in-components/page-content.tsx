import { useCardInFocus } from "../../hooks/useCardInFocus";
import type { PageContentProps } from "../../types/types";
import { Workouts } from "./workouts";
import { EditBar, CarouselNavigation } from "../buttons";

export const PageContent = ({
  workouts,
  addWorkout,
  editBar,
  toggleEditBar,
}: PageContentProps) => {
  const { cardInFocus, prevCard, nextCard, switchInFocus, jumpToCard } =
    useCardInFocus(workouts);

  return (
    <div className="h-full">
      <Workouts workouts={workouts} cardInFocus={cardInFocus} />

      {editBar && <EditBar toggleEditBar={toggleEditBar} />}

      <CarouselNavigation
        cardInFocus={cardInFocus}
        workouts={workouts}
        prevCard={prevCard}
        nextCard={nextCard}
      />
    </div>
  );
};
