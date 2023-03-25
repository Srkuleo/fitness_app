import type { CardsContentProps } from "../../types/types";
import { useTempWorkout } from "../../hooks/useTempWorkout";
import { useFormState } from "../../hooks/useFormState";
import { useCurrIndex } from "../../hooks/useCurrIndex";
import { initWorkout } from "../../utils/variables";
import StatelessCardsContainer from "./stateless-cards-container";
import StatefulCardsContainer from "./stateful-cards-container";
import CardsNavBar from "./cards-navbar";
import CardsEditBar from "./cards-editbar";
import AddingForm from "./adding-form";
import ChangingForm from "./changing-form";

export const CardsContent = ({
  workouts,
  addWorkout,
  changeWorkout,
  removeWorkout,
  isEditing,
  toggleEdit,
}: CardsContentProps) => {
  const { tempWorkout, modifyTempWorkout, modifyProp, clearField } =
    useTempWorkout(initWorkout);
  const { formState, addingState, changingState, idleState } = useFormState();
  const { currIndex, prevCard, nextCard, switchOnRemove, jumpToCard } =
    useCurrIndex(workouts);

  const currWorkout = workouts[currIndex];

  if (!currWorkout) {
    return (
      <StatelessCardsContainer
        addingState={addingState}
        formState={formState}
        tempWorkout={tempWorkout}
        idleState={idleState}
        addWorkout={addWorkout}
        modifyTempWorkout={modifyTempWorkout}
        modifyProp={modifyProp}
      />
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <StatefulCardsContainer
        currWorkout={currWorkout}
        workouts={workouts}
        prevCard={prevCard}
        nextCard={nextCard}
      />
      <CardsNavBar
        workouts={workouts}
        currIndex={currIndex}
        jumpToCard={jumpToCard}
      />
      {isEditing && (
        <CardsEditBar
          currWorkout={currWorkout}
          changingState={changingState}
          removeWorkout={removeWorkout}
          switchOnRemove={switchOnRemove}
          addingState={addingState}
          modifyTempWorkout={modifyTempWorkout}
          toggleEdit={toggleEdit}
        />
      )}
      {formState === "adding" && (
        <AddingForm
          tempWorkout={tempWorkout}
          idleState={idleState}
          addWorkout={addWorkout}
          modifyTempWorkout={modifyTempWorkout}
          modifyProp={modifyProp}
        />
      )}
      {formState === "changing" && (
        <ChangingForm
          tempWorkout={tempWorkout}
          workoutName={currWorkout.name}
          idleState={idleState}
          changeWorkout={changeWorkout}
          modifyTempWorkout={modifyTempWorkout}
          modifyProp={modifyProp}
          clearField={clearField}
        />
      )}
    </div>
  );
};
