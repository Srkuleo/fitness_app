import { useCardInFocus } from "../../hooks/useCardInFocus";
import type { PageContentProps } from "../../types/types";
import { EmptyPage } from "./empty-page";
import { Workouts } from "./workouts";
import { EditBar, CarouselNavigation } from "../buttons";

export const PageContent = ({
  workouts,
  addWorkout,
  changeWorkout,
  removeWorkout,
  editBar,
  toggleEditBar,
}: PageContentProps) => {
  const { cardInFocus, prevCard, nextCard, switchInFocus, jumpToCard } =
    useCardInFocus(workouts);

  const currWorkout = workouts[cardInFocus];

  if (!currWorkout) {
    return <EmptyPage />;
  }

  return (
    <>
      <Workouts workouts={workouts} cardInFocus={cardInFocus} />

      {editBar && <EditBar toggleEditBar={toggleEditBar} />}

      <CarouselNavigation
        cardInFocus={cardInFocus}
        workouts={workouts}
        prevCard={prevCard}
        nextCard={nextCard}
      />
    </>
  );
};
