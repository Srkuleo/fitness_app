import { useEditForm } from "../../hooks/useEditForm";
import { useCardInFocus } from "../../hooks/useCardInFocus";
import type { CardsContentProps } from "../../types/types";
import { WorkoutCardsCarousel } from "../wrappers";
import { StatelessCardContent } from "./stateless-cards-content";
import { WorkoutCard } from "./workout-card";
import { CarouselNavigation } from "../buttons";
import { CardEditButttons } from "./card-edit-buttons";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export const CardsContent = ({
  workouts,
  addWorkout,
  changeWorkout,
  removeWorkout,
  isOpenEditOverlay,
  closeEditOverlay,
}: CardsContentProps) => {
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
        closeEditOverlay={closeEditOverlay}
        toggleAdding={() => setIsAdding(true)}
      />
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <WorkoutCardsCarousel cardInFocus={cardInFocus}>
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
            editForm={editForm}
            handleEditForm={handleEditForm}
            changeWorkout={changeWorkout}
            removeWorkout={removeWorkout}
            switchInFocus={switchInFocus}
            isOpenEditOverlay={isOpenEditOverlay}
            closeEditOverlay={closeEditOverlay}
            isAdding={isAdding}
            toggleAdding={() => setIsAdding(false)}
          />
        ))}
      </WorkoutCardsCarousel>
      <CarouselNavigation
        cardInFocus={cardInFocus}
        workouts={workouts}
        jumpToCard={jumpToCard}
        prevCard={prevCard}
        nextCard={nextCard}
      />
      <AnimatePresence>
        {isOpenEditOverlay && (
          <CardEditButttons
            workouts={workouts}
            addWorkout={addWorkout}
            jumpToCard={jumpToCard}
            closeEditOverlay={closeEditOverlay}
            handleEditForm={handleEditForm}
            toggleAdding={() => setIsAdding(true)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
