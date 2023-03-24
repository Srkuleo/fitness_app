import type { ChangingFormProps } from "../../types/types";
import { initWorkout } from "../../utils/variables";
import { SubmitWorkoutBtn } from "../buttons";
import { ChangingFormIcon } from "../svg-components/svg";
import { WorkoutFormWrapper } from "../wrappers";

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
    <>
      <div
        className="fixed top-0 left-0 z-10 h-screen w-screen bg-black/70"
        onClick={() => {
          modifyTempWorkout(initWorkout);
          idleState();
        }}
      ></div>
      <WorkoutFormWrapper>
        <p className="flex items-center gap-2 text-xl font-semibold text-slate-main600 dark:text-slate-light50">
          Changing {workoutName} workout
          {ChangingFormIcon}
        </p>
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
          <SubmitWorkoutBtn />
        </form>
      </WorkoutFormWrapper>
    </>
  );
};

export default ChangingForm;
