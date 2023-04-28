import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useEditForm } from "../../hooks/useEditForm";
import { useCardInFocus } from "../../hooks/useCardInFocus";
import type { CardsContentProps } from "../../types/types";
import { StatelessCardContent } from "./stateless-cards-content";
import { WorkoutCardsCarousel } from "../wrappers";
import { WorkoutCard } from "./workout-card";
import { EditBar, CarouselNavigation } from "../buttons";

export const CardsContent = ({
  workouts,
  addWorkout,
  changeWorkout,
  removeWorkout,
  editBar,
  toggleEditBar,
}: CardsContentProps & { toggleEditBar: () => void; editBar: boolean }) => {
  const [isAdding, setIsAdding] = useState(false);
  const { cardInFocus, prevCard, nextCard, switchInFocus, jumpToCard } =
    useCardInFocus(workouts);
  const { editForm, handleEditForm } = useEditForm();

  const currWorkout = workouts[cardInFocus];

  if (!currWorkout) {
    return (
      <StatelessCardContent
        addWorkout={addWorkout}
        handleEditForm={handleEditForm}
        toggleAdding={() => setIsAdding(true)}
      />
    );
  }

  return (
    <>
      <WorkoutCardsCarousel cardInFocus={cardInFocus}>
        <AnimatePresence>
          {workouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              editForm={editForm}
              handleEditForm={handleEditForm}
              changeWorkout={changeWorkout}
              removeWorkout={removeWorkout}
              switchInFocus={switchInFocus}
              isAdding={isAdding}
              toggleAdding={() => setIsAdding(false)}
            />
          ))}
        </AnimatePresence>
      </WorkoutCardsCarousel>

      {editBar && <EditBar toggleEditBar={toggleEditBar} />}

      <CarouselNavigation
        cardInFocus={cardInFocus}
        workouts={workouts}
        jumpToCard={jumpToCard}
        prevCard={prevCard}
        nextCard={nextCard}
      />
    </>
  );
};
