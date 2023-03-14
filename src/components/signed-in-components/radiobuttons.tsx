import { initialWorkout } from "../../utils/variables";
import type {
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
import { useTempWorkout } from "../../hooks/useTempWorkout";
import { useEditOptions } from "../../hooks/useEditOptions";

const RBComponent = ({
  workouts,
  addWorkout,
  changeWorkout,
  removeWorkout,
  isEditing,
  toggleEdit,
  selectedId,
  addSelectedId,
}: RBComponentProps) => {
  const { tempWorkout, modifyTempWorkout, modifyTempWorkoutProp, clearField } =
    useTempWorkout(initialWorkout);
  const { editOption, initAddingForm, initChangingForm, defaultEditUi } =
    useEditOptions();

  if (workouts.length === 0) {
    return (
      <div className="flex flex-col items-center rounded-xl bg-slate-light50 px-8 py-12">
        <p className="mb-12 text-xl font-semibold text-slate-light400">
          You {"don't"} have any existing workout.
        </p>
        <p className="mb-2 text-sm italic text-slate-light400">
          Click to add a new workout
        </p>
        <AddButton initAddingForm={initAddingForm} />
        {editOption === "adding" && (
          <AddingForm
            defaultEditUi={defaultEditUi}
            handleAddWorkout={addWorkout}
            tempWorkout={tempWorkout}
            modifyTempWorkout={modifyTempWorkout}
            modifyTempWorkoutProp={modifyTempWorkoutProp}
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
              addSelectedId={addSelectedId}
            />
            {isEditing && (
              <EditingButtons
                workout={workout}
                modifyTempWorkout={modifyTempWorkout}
                initChangingForm={initChangingForm}
                handleRemoveWorkout={removeWorkout}
              />
            )}
          </div>
        );
      })}
      {isEditing && (
        <div className="mt-2 flex gap-4">
          <AddButton initAddingForm={initAddingForm} />
          <DoneButton toggleEdit={toggleEdit} />
        </div>
      )}
      {editOption === "adding" && (
        <AddingForm
          defaultEditUi={defaultEditUi}
          handleAddWorkout={addWorkout}
          tempWorkout={tempWorkout}
          modifyTempWorkout={modifyTempWorkout}
          modifyTempWorkoutProp={modifyTempWorkoutProp}
        />
      )}
      {editOption === "changing" && (
        <ChangingForm
          defaultEditUi={defaultEditUi}
          tempWorkout={tempWorkout}
          handleChangeWorkout={changeWorkout}
          modifyTempWorkout={modifyTempWorkout}
          modifyTempWorkoutProp={modifyTempWorkoutProp}
          clearField={clearField}
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
  addSelectedId,
}: RadioButtonProps) => {
  return (
    <button
      onClick={() => {
        addSelectedId(id);
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
  defaultEditUi,
  handleAddWorkout,
  tempWorkout,
  modifyTempWorkout,
  modifyTempWorkoutProp,
}: AddingFormProps) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 h-screen w-screen bg-black/70"
        onClick={() => {
          modifyTempWorkout(initialWorkout);
          defaultEditUi();
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
            handleAddWorkout(tempWorkout.name, tempWorkout.tooltip);
            modifyTempWorkout(initialWorkout);
            defaultEditUi();
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
  defaultEditUi,
  tempWorkout,
  modifyTempWorkout,
  handleChangeWorkout,
  modifyTempWorkoutProp,
  clearField,
}: ChangingFormProps) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 h-screen w-screen bg-black/70"
        onClick={() => {
          modifyTempWorkout(initialWorkout);
          defaultEditUi();
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
            defaultEditUi();
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

export default RBComponent;
