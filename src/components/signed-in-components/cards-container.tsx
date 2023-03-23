import { initialWorkout } from "../../utils/variables";
import type {
  AddingFormProps,
  ChangingFormProps,
  CardsContainerProps,
  WorkoutProps,
} from "../../types/types";
import {
  AddingWorkoutIcon,
  ChangingWorkoutIcon,
  DbIcon,
} from "../svg-components/svg";
import { SubmitWorkoutButton, NewWorkoutBtn, StartButton } from "../buttons";
import { WorkoutFormWrapper } from "../wrappers";
import { EditBar } from "./edit-bar";
import { useTempWorkout } from "../../hooks/useTempWorkout";
import { useFormState } from "../../hooks/useFormState";
import { useCurrIndex } from "../../hooks/useCurrIndex";

const CardsContainer = ({
  workouts,
  addWorkout,
  changeWorkout,
  removeWorkout,
  isEditing,
  toggleEdit,
}: CardsContainerProps) => {
  const { tempWorkout, modifyTempWorkout, modifyTempWorkoutProp, clearField } =
    useTempWorkout(initialWorkout);
  const { formState, addingState, changingState, idleState } = useFormState();
  const { currIndex, handleNextIndex, handlePrevIndex, switchOnRemove } =
    useCurrIndex(workouts);

  const currWorkout = workouts[currIndex];

  if (currWorkout) {
    return (
      <div className="relative flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <button
            className="rounded-full border-2 border-orange-button600 bg-slate-light100 p-3 text-slate-main600 hover:bg-green-light300/30 disabled:pointer-events-none disabled:opacity-40"
            onClick={handlePrevIndex}
            disabled={workouts.length < 2}
          >
            Prev
          </button>
          <WorkoutCard
            id={currWorkout.id}
            name={currWorkout.name}
            tooltip={currWorkout.tooltip}
          />
          <button
            className="rounded-full border-2 border-orange-button600 bg-slate-light100 p-3 text-slate-main600 hover:bg-green-light300/30 disabled:pointer-events-none disabled:opacity-40"
            onClick={handleNextIndex}
            disabled={workouts.length < 2}
          >
            Next
          </button>
        </div>
        {isEditing && (
          <EditBar
            workout={currWorkout}
            changingState={changingState}
            removeWorkout={removeWorkout}
            switchOnRemove={switchOnRemove}
            addingState={addingState}
            modifyTempWorkout={modifyTempWorkout}
            toggleEdit={toggleEdit}
          />
        )}
        {formState === "adding" && (
          <AddingForm
            idleState={idleState}
            addWorkout={addWorkout}
            tempWorkout={tempWorkout}
            modifyTempWorkout={modifyTempWorkout}
            modifyTempWorkoutProp={modifyTempWorkoutProp}
          />
        )}
        {formState === "changing" && (
          <ChangingForm
            idleState={idleState}
            tempWorkout={tempWorkout}
            changeWorkout={changeWorkout}
            modifyTempWorkout={modifyTempWorkout}
            modifyTempWorkoutProp={modifyTempWorkoutProp}
            clearField={clearField}
          />
        )}
      </div>
    );
  }

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
          idleState={idleState}
          addWorkout={addWorkout}
          tempWorkout={tempWorkout}
          modifyTempWorkout={modifyTempWorkout}
          modifyTempWorkoutProp={modifyTempWorkoutProp}
        />
      )}
    </>
  );
};

const WorkoutCard = ({ id, name, tooltip }: WorkoutProps) => {
  return (
    <div
      className="relative flex h-[450px] w-[340px] flex-col items-center overflow-hidden rounded-[24px] border-4 border-orange-button600 bg-slate-light50
      p-4 dark:border-orange-button500 dark:bg-gradient-to-tr dark:from-slate-dark700 dark:to-slate-dark800"
    >
      <div key={id} className="mx-auto flex flex-col items-center gap-4">
        <p className="text-2xl font-medium text-slate-main600 dark:text-slate-light200">
          {name}
        </p>
        <p className="text-sm text-slate-light400">{tooltip}</p>
        <StartButton />
      </div>
      <div className="absolute -left-[100px] top-[220px] h-[280px] w-[280px] rounded-full bg-[#87BF92]"></div>
      <div className="absolute left-[230px] top-[330px] h-[160px] w-[160px] rounded-full bg-[#709A69]"></div>
    </div>
  );
};

const AddingForm = ({
  idleState,
  addWorkout,
  tempWorkout,
  modifyTempWorkout,
  modifyTempWorkoutProp,
}: AddingFormProps) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 z-10 h-screen w-screen bg-black/70"
        onClick={() => {
          modifyTempWorkout(initialWorkout);
          idleState();
        }}
      ></div>
      <WorkoutFormWrapper>
        <p className="flex items-center gap-2 text-xl font-semibold text-slate-main600 dark:text-slate-light50">
          Adding new workout
          {AddingWorkoutIcon}
        </p>
        <form
          className="grid max-w-[550px] grid-cols-5 items-center gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            addWorkout(tempWorkout.name, tempWorkout.tooltip);
            modifyTempWorkout(initialWorkout);
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
            onChange={modifyTempWorkoutProp}
            className="workout-input-field col-span-2"
          />
          <input
            type="text"
            name="tooltip"
            id="tooltip"
            value={tempWorkout.tooltip}
            placeholder="Tooltip"
            required
            onChange={modifyTempWorkoutProp}
            className="workout-input-field col-span-2 col-start-4"
          />
          <SubmitWorkoutButton />
        </form>
      </WorkoutFormWrapper>
    </>
  );
};

const ChangingForm = ({
  idleState,
  tempWorkout,
  modifyTempWorkout,
  changeWorkout,
  modifyTempWorkoutProp,
  clearField,
}: ChangingFormProps) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 z-10 h-screen w-screen bg-black/70"
        onClick={() => {
          modifyTempWorkout(initialWorkout);
          idleState();
        }}
      ></div>
      <WorkoutFormWrapper>
        <p className="flex items-center gap-2 text-xl font-semibold text-slate-main600 dark:text-slate-light50">
          Changing {tempWorkout.name} workout
          {ChangingWorkoutIcon}
        </p>
        <form
          className="grid max-w-[550px] grid-cols-5 items-center gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            changeWorkout(tempWorkout);
            modifyTempWorkout(initialWorkout);
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
            onChange={modifyTempWorkoutProp}
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
            onChange={modifyTempWorkoutProp}
            onFocus={clearField}
            className="workout-input-field col-span-2 col-start-4"
          />
          <SubmitWorkoutButton />
        </form>
      </WorkoutFormWrapper>
    </>
  );
};

export default CardsContainer;
