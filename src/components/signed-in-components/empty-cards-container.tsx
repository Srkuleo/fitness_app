import type { EmptyCardsContainerProps } from "../../types/types";
import { DbIcon } from "../svg-components/svg";
import { NewWorkoutBtn } from "../buttons";
import AddingForm from "./adding-form";

const EmptyCardsContainer = ({
  addingState,
  formState,
  tempWorkout,
  idleState,
  addWorkout,
  modifyTempWorkout,
  modifyProp,
}: EmptyCardsContainerProps) => {
  return (
    <>
      <div className="relative z-0 flex min-h-[450px] min-w-[340px] flex-col items-center justify-center rounded-xl border-4 border-dashed border-orange-button500 bg-slate-light100 px-4 dark:bg-slate-dark800">
        <p className="font-medium italic text-slate-light400">
          You {"don't"} have any existing workout.
        </p>
        <div className="py-4">{DbIcon}</div>
        <NewWorkoutBtn addingState={addingState} />
      </div>
      {formState === "adding" && (
        <AddingForm
          tempWorkout={tempWorkout}
          idleState={idleState}
          addWorkout={addWorkout}
          modifyTempWorkout={modifyTempWorkout}
          modifyProp={modifyProp}
        />
      )}
    </>
  );
};

export default EmptyCardsContainer;
