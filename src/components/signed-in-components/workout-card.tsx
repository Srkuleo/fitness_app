import { useTempWorkout } from "../../hooks/useTempWorkout";
import type { WorkoutCardProps } from "../../types/types";
import { EditIcon, RemoveIcon } from "../svg-components/svg";
import { StartBtn, SubmitFormBtn } from "../buttons";

export const WorkoutCard = ({
  workout,
  editingId,
  handleEditingId,
  changeWorkout,
  removeWorkout,
  switchInFocus,
  isEditing,
  toggleEdit,
}: WorkoutCardProps) => {
  const { tempWorkout, handleInput } = useTempWorkout(workout);

  return (
    <div className="workout-card-layout">
      {isEditing && (
        <>
          <div className="absolute inset-0 z-10 bg-slate-light500/70 dark:bg-slate-dark800/80" />
          <button
            className="absolute right-4 top-4 z-10 rounded-full bg-red-removeBtn100 p-2 text-red-button700 shadow-md ring-1 ring-red-button400 transition-all ease-out hover:bg-red-button500 hover:text-slate-light50 hover:ring-red-button700"
            onClick={() => {
              removeWorkout(workout.id);
              switchInFocus();
            }}
          >
            {RemoveIcon}
          </button>
          <button
            className="center absolute left-[50%] top-[50%] z-10 rounded-full bg-green-light100 p-2 text-green-dark700 shadow-md ring-1 ring-green-light400 transition-all ease-out hover:bg-green-dark600 hover:text-slate-light50 hover:ring-green-dark700"
            onClick={() => {
              handleEditingId(workout.id);
              toggleEdit();
            }}
          >
            <EditIcon className="h-8 w-8" strokeWidth={2} />
          </button>
        </>
      )}
      {editingId === workout.id ? (
        <form
          className="flex flex-col items-center p-4"
          onSubmit={(e) => {
            e.preventDefault();
            changeWorkout(tempWorkout);
            handleEditingId(undefined);
          }}
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

          <SubmitFormBtn />
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
