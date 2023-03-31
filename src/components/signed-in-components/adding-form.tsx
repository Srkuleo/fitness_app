import type { AddingFormProps } from "../../types/types";
import { initWorkout } from "../../utils/variables";
import { SubmitWorkoutBtn } from "../buttons";
import { AddingFormIcon } from "../svg-components/svg";

const AddingForm = ({
  idleState,
  addWorkout,
  tempWorkout,
  modifyTempWorkout,
  modifyProp,
}: AddingFormProps) => {
  return (
    <div
      className="relative z-10"
      role="dialog"
      aria-labelledby="adding-form-title"
      aria-modal={true}
    >
      <div className="fixed inset-0 bg-slate-dark900 bg-opacity-80 dark:bg-slate-dark950 dark:bg-opacity-75" />
      <div
        className="fixed inset-0 overflow-y-auto"
        onClick={() => {
          modifyTempWorkout(initWorkout);
          idleState();
        }}
      >
        <div className="flex min-h-full items-center justify-center">
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative mx-2 rounded-lg bg-gradient-to-br from-slate-dark800 to-slate-dark900 px-4 pt-5 pb-4 sm:mx-0 sm:p-6 sm:pb-4"
          >
            <AddingFormIcon />
            <h1
              id="adding-form-title"
              className="mb-8 text-center text-xl font-semibold text-slate-main600 dark:text-slate-light50"
            >
              Adding new workout
            </h1>
            <form
              className="grid grid-cols-5 items-center gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                addWorkout(tempWorkout.name, tempWorkout.tooltip);
                modifyTempWorkout(initWorkout);
                idleState();
              }}
            >
              <input
                autoFocus
                type="text"
                name="name"
                id="tooltip"
                value={tempWorkout.name}
                placeholder="Workout Name"
                required
                onChange={modifyProp}
                className="workout-input-field col-span-2"
              />
              <input
                type="text"
                name="tooltip"
                id="tooltip"
                value={tempWorkout.tooltip}
                placeholder="Tooltip"
                required
                onChange={modifyProp}
                className="workout-input-field col-span-2 col-start-4"
              />
              <SubmitWorkoutBtn />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddingForm;
