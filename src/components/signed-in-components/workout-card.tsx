import type { WorkoutCardProps } from "../../types/types";
import { EditForm } from "./edit-form";
import { StartBtn } from "../buttons";

export const WorkoutCard = ({
  workout,
  editForm,
  handleEditForm,
  changeWorkout,
  removeWorkout,
  switchInFocus,
  isAdding,
  toggleAdding,
}: WorkoutCardProps) => {
  return (
    <div
      className="relative min-h-full min-w-full rounded-lg border-2 
      border-orange-dark700 bg-white 
      dark:border-orange-button600 dark:bg-gradient-to-br
      dark:odd:from-slate-dark800 dark:odd:to-slate-dark700 
      dark:even:from-slate-dark700 dark:even:to-slate-dark800
      xs:rounded-xl md:border-4"
    >
      {editForm === workout.id ? (
        <EditForm
          workout={workout}
          isAdding={isAdding}
          toggleAdding={toggleAdding}
          changeWorkout={changeWorkout}
          handleEditForm={handleEditForm}
          removeWorkout={removeWorkout}
          switchInFocus={switchInFocus}
        />
      ) : (
        <div className="flex flex-col items-center p-4">
          <div className="mb-2">
            <p className="text-2xl font-medium text-slate-main600 dark:text-slate-light200">
              {workout.title}
            </p>
          </div>
          <div className="mb-4 w-full px-6">
            <p className="break-words text-center text-sm text-slate-light400 dark:text-slate-light300/80">
              {workout.description}
            </p>
          </div>
          <StartBtn />
        </div>
      )}
    </div>
  );
};
