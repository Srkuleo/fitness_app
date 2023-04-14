import { useTempWorkout } from "../../hooks/useTempWorkout";
import type { WorkoutCardProps } from "../../types/types";
import { EditOverlay } from "./edit-overlay";
import { FormBtns, StartBtn } from "../buttons";
import { AnimatePresence } from "framer-motion";

export const WorkoutCard = ({
  workout,
  editingId,
  handleEditingId,
  changeWorkout,
  removeWorkout,
  switchInFocus,
  isEditing,
  closeEdit,
  isAdding,
  toggleAdding,
}: WorkoutCardProps) => {
  const { tempWorkout, handleInput } = useTempWorkout(workout);

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isAdding) {
      toggleAdding();
    }
    changeWorkout(tempWorkout);
    handleEditingId(undefined);
  }

  function handleFormReset(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isAdding) {
      removeWorkout(workout.id);
      switchInFocus();
    } else {
      handleEditingId(undefined);
    }
  }

  return (
    <div className="workout-card-layout">
      <AnimatePresence>
        {isEditing && (
          <EditOverlay
            workout={workout}
            handleEditingId={handleEditingId}
            removeWorkout={removeWorkout}
            switchInFocus={switchInFocus}
            closeEdit={closeEdit}
          />
        )}
      </AnimatePresence>
      {editingId === workout.id ? (
        <form
          className="flex flex-col items-center p-4"
          onSubmit={handleFormSubmit}
          onReset={handleFormReset}
        >
          <div>
            <input
              className="workout-input-field"
              required
              type="text"
              name="title"
              placeholder={workout.title}
              value={tempWorkout.title}
              onChange={handleInput}
            />
          </div>
          <div>
            <input
              className="workout-input-field"
              required
              type="text"
              name="description"
              placeholder={workout.description}
              value={tempWorkout.description}
              onChange={handleInput}
            />
          </div>
          <FormBtns />
        </form>
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
