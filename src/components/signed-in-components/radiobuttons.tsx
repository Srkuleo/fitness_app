import { useState } from "react";
import { initialWorkout } from "../../functions and variables/variables";
import type {
  WorkoutProps,
  RBComponentProps,
  RadioButtonProps,
  AddingFormProps,
  ChangingFormProps,
} from "../../types/types";
import {
  AddingWorkoutIcon,
  ChangingWorkoutIcon,
  SelectedIcon,
} from "../svg-components/svg";
import {
  AddButton,
  DoneButton,
  EditingButtons,
  SubmitWorkoutButton,
} from "../buttons";
import { WorkoutFormWrapper } from "../wrappers";

const RBComponent = ({
  workouts,
  isEditing,
  toggleEdit,
  handleAddWorkout,
  handleChangeWorkout,
  handleDeleteWorkout,
  selectedId,
  handleId,
}: RBComponentProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [tempWorkout, setTempWorkout] = useState(initialWorkout);

  function toggleAdding() {
    setIsAdding(!isAdding);
  }

  function toggleChanging() {
    setIsChanging(!isChanging);
  }

  function modifyTempWorkout(selectedWorkout: WorkoutProps) {
    setTempWorkout(selectedWorkout);
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setTempWorkout({
      ...tempWorkout,
      [e.target.name]: e.target.value,
    });
  }

  function clearInput(e: React.FocusEvent<HTMLInputElement>) {
    setTempWorkout({
      ...tempWorkout,
      [e.target.name]: "",
    });
  }

  if (workouts.length === 0) {
    return (
      <div>
        <p>You {"don't"} have any existing workout.</p>
        <AddButton toggleAdding={toggleAdding} />
        {isAdding && (
          <AddingForm
            toggleAdding={toggleAdding}
            handleAddWorkout={handleAddWorkout}
            tempWorkout={tempWorkout}
            handleInput={handleInput}
            modifyTempWorkout={modifyTempWorkout}
            clearInput={clearInput}
          />
        )}
      </div>
    );
  }

  return (
    <div
      className={`${
        isEditing
          ? "min-w-[480px] max-w-[500px]"
          : "min-w-[430px] max-w-[450px]"
      } flex max-h-[295px] flex-col gap-2 overflow-y-auto scroll-smooth pr-4 scrollbar-thin scrollbar-track-slate-light50/50 scrollbar-thumb-slate-light300 scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg dark:scrollbar-track-slate-dark700/30 dark:scrollbar-thumb-slate-dark700`}
    >
      {workouts.map((workout) => {
        return (
          <div key={workout.id} className="flex items-center gap-4">
            <RadioButton
              id={workout.id}
              name={workout.name}
              tooltip={workout.tooltip}
              selectedId={selectedId}
              handleId={handleId}
            />
            {isEditing && (
              <EditingButtons
                workout={workout}
                modifyTempWorkout={modifyTempWorkout}
                toggleChanging={toggleChanging}
                handleDeleteWorkout={handleDeleteWorkout}
              />
            )}
          </div>
        );
      })}
      {isEditing && (
        <div className="mt-2 flex gap-4">
          <AddButton toggleAdding={toggleAdding} />
          <DoneButton toggleEdit={toggleEdit} />
        </div>
      )}
      {isAdding && (
        <AddingForm
          toggleAdding={toggleAdding}
          handleAddWorkout={handleAddWorkout}
          tempWorkout={tempWorkout}
          handleInput={handleInput}
          modifyTempWorkout={modifyTempWorkout}
          clearInput={clearInput}
        />
      )}
      {isChanging && (
        <ChangingForm
          toggleChanging={toggleChanging}
          tempWorkout={tempWorkout}
          handleChangeWorkout={handleChangeWorkout}
          modifyTempWorkout={modifyTempWorkout}
          handleInput={handleInput}
          clearInput={clearInput}
        />
      )}
    </div>
  );
};

const RadioButton = ({
  id,
  name,
  tooltip,
  selectedId,
  handleId,
}: RadioButtonProps) => {
  return (
    <button
      onClick={() => {
        handleId(id);
      }}
      className={`${
        id === selectedId
          ? "bg-gradient-to-r from-green-dark600/90 to-green-dark700 text-yellow-text50"
          : "bg-slate-light50"
      } w-full overflow-hidden rounded-lg px-6 py-4`}
    >
      <div className="flex items-center justify-between">
        <div className="text-left">
          <p
            className={`${
              id !== selectedId && "text-slate-main600"
            } text-xl font-medium`}
          >
            {name}
          </p>
          <p
            className={`${id !== selectedId && "text-slate-light400"} text-sm`}
          >
            {tooltip}
          </p>
        </div>
        {id === selectedId ? (
          <SelectedIcon stroke="#fefce8" />
        ) : (
          <SelectedIcon />
        )}
      </div>
    </button>
  );
};

const AddingForm = ({
  toggleAdding,
  handleAddWorkout,
  tempWorkout,
  modifyTempWorkout,
  handleInput,
  clearInput,
}: AddingFormProps) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 h-screen w-screen bg-black/70"
        onClick={toggleAdding}
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
            handleAddWorkout(tempWorkout);
            modifyTempWorkout(initialWorkout);
            toggleAdding();
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
            onChange={handleInput}
            onFocus={clearInput}
            className="workout-input-field col-span-2"
          />
          <input
            type="text"
            name="tooltip"
            id="tooltip"
            value={tempWorkout.tooltip}
            placeholder="Tooltip"
            required
            onChange={handleInput}
            className="workout-input-field col-span-2 col-start-4"
          />
          <SubmitWorkoutButton />
        </form>
      </WorkoutFormWrapper>
    </>
  );
};

const ChangingForm = ({
  toggleChanging,
  tempWorkout,
  modifyTempWorkout,
  handleChangeWorkout,
  handleInput,
  clearInput,
}: ChangingFormProps) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 h-screen w-screen bg-black/70"
        onClick={() => {
          modifyTempWorkout(initialWorkout);
          toggleChanging();
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
            handleChangeWorkout(tempWorkout);
            modifyTempWorkout(initialWorkout);
            toggleChanging();
          }}
        >
          <input
            type="text"
            name="name"
            id="tooltip"
            value={tempWorkout.name}
            placeholder="Workout Name"
            required
            onChange={handleInput}
            onFocus={clearInput}
            className="workout-input-field col-span-2"
          />
          <input
            type="text"
            name="tooltip"
            id="tooltip"
            value={tempWorkout.tooltip}
            placeholder="Tooltip"
            required
            onChange={handleInput}
            className="workout-input-field col-span-2 col-start-4"
          />
          <SubmitWorkoutButton />
        </form>
      </WorkoutFormWrapper>
    </>
  );
};

export default RBComponent;
