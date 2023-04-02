import type { ChangingFormProps } from "../../types/types";
import { initWorkout } from "../../utils/variables";
import { SubmitFormBtn } from "../buttons";
import { ChangingFormIcon } from "../svg-components/svg";

const ChangingForm = ({
  tempWorkout,
  workoutName,
  idleState,
  modifyTempWorkout,
  changeWorkout,
  modifyProp,
  clearField,
}: ChangingFormProps) => {
  return (
    <div
      className="relative z-10"
      role="dialog"
      aria-labelledby="changing-form-title"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-slate-dark900 bg-opacity-80 dark:bg-black dark:bg-opacity-70" />
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
            className="relative m-2 rounded-lg bg-gradient-to-br from-slate-dark800 to-slate-dark900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
          >
            <ChangingFormIcon />
            <h1
              id="changing-form-title"
              className="mb-8 text-center text-xl font-semibold text-slate-main600 dark:text-slate-light50"
            >
              Changing {workoutName} workout
            </h1>
            <form
              className="grid max-w-[550px] grid-cols-5 items-center gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                changeWorkout(tempWorkout);
                modifyTempWorkout(initWorkout);
                idleState();
              }}
            >
              <input
                type="text"
                name="name"
                id="tooltip"
                value={tempWorkout.name}
                placeholder="Workout Name"
                required
                onChange={modifyProp}
                onFocus={clearField}
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
                onFocus={clearField}
                className="workout-input-field col-span-2 col-start-4"
              />
              <SubmitFormBtn />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangingForm;
