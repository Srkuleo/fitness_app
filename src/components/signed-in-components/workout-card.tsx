import { AnimatePresence } from "framer-motion";
import type { WorkoutCardProps } from "../../types/types";
import { EditOverlay } from "./edit-overlay";
import { EditForm } from "./edit-form";
import { StartBtn } from "../buttons";

export const WorkoutCard = ({
  workout,
  editForm,
  handleEditForm,
  changeWorkout,
  removeWorkout,
  switchInFocus,
  isOpenEditOverlay,
  closeEditOverlay,
  isAdding,
  toggleAdding,
}: WorkoutCardProps) => {
  return (
    <div className="workout-card-layout">
      <AnimatePresence>
        {isOpenEditOverlay && (
          <EditOverlay
            workout={workout}
            handleEditForm={handleEditForm}
            removeWorkout={removeWorkout}
            switchInFocus={switchInFocus}
            closeEditOverlay={closeEditOverlay}
          />
        )}
      </AnimatePresence>

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
      <div className="absolute left-[224px] top-[350px] h-[290px] w-[290px] rounded-full bg-[#caeed2] dark:bg-[#629e62]" />
      <div className="absolute left-[290px] top-[416px] h-[160px] w-[160px] rounded-full bg-[#b6e3ae] dark:bg-[#608160]" />
    </div>
  );
};
