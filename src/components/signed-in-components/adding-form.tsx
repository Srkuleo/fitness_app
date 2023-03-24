import type { AddingFormProps } from "../../types/types";
import { initWorkout } from "../../utils/variables";
import { SubmitWorkoutBtn } from "../buttons";
import { AddingFormIcon } from "../svg-components/svg";
import { WorkoutFormWrapper } from "../wrappers";

const AddingForm = ({
  idleState,
  addWorkout,
  tempWorkout,
  modifyTempWorkout,
  modifyProp,
}: AddingFormProps) => {
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
          Adding new workout
          {AddingFormIcon}
        </p>
        <form
          className="grid max-w-[550px] grid-cols-5 items-center gap-4"
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
      </WorkoutFormWrapper>
    </>
  );
};

export default AddingForm
