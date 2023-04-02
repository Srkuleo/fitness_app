import type { StatelessCardsContainerProps } from "../../types/types";
import { DbIcon } from "../svg-components/svg";
import { StatelessAddWorkoutBtn } from "../buttons";
import AddingForm from "./adding-form";

const StatelessCardsContainer = ({
  addingState,
  formState,
  tempWorkout,
  idleState,
  addWorkout,
  modifyTempWorkout,
  modifyProp,
}: StatelessCardsContainerProps) => {
  return (
    <div className="relative z-0 mx-auto">
      <div className="flex h-[500px] w-[380px] flex-col items-center justify-center rounded-xl border-4 border-dashed border-orange-button500 bg-slate-light100 dark:bg-slate-dark800">
        <p className="font-medium italic text-slate-light400">
          You {"don't"} have any existing workout.
        </p>
        <div className="py-4">{DbIcon}</div>
        <StatelessAddWorkoutBtn addingState={addingState} />
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
    </div>
  );
};

export default StatelessCardsContainer;
