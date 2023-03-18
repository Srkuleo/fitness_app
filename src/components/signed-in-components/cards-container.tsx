import { initialWorkout } from "../../utils/variables";
import type {
  AddingFormProps,
  ChangingFormProps,
  WorkoutCardProps,
  CardsContainerProps,
} from "../../types/types";
import {
  AddingWorkoutIcon,
  ChangingWorkoutIcon,
  SelectedIcon,
  DbIcon,
} from "../svg-components/svg";
import {
  AddButton,
  DoneButton,
  EditingButtons,
  SubmitWorkoutButton,
  NewWorkoutBtn,
} from "../buttons";
import { WorkoutFormWrapper } from "../wrappers";
import { useTempWorkout } from "../../hooks/useTempWorkout";
import { useEditOptions } from "../../hooks/useEditOptions";

const CardsContainer = ({
  workouts,
  addWorkout,
  changeWorkout,
  removeWorkout,
  isEditing,
  toggleEdit,
  selectedId,
  addSelectedId,
}: CardsContainerProps) => {
  const { tempWorkout, modifyTempWorkout, modifyTempWorkoutProp, clearField } =
    useTempWorkout(initialWorkout);
  const { editOption, initAddingForm, initChangingForm, defaultEditUi } =
    useEditOptions();

  if (workouts.length === 0) {
    return (
      <>
        <div className="relative z-0 flex min-h-[450px] min-w-[340px] flex-col items-center justify-center rounded-xl border-4 border-dashed border-orange-button500 bg-slate-light100 px-4 dark:bg-slate-dark800">
          <div className="pb-4">{DbIcon}</div>
          <NewWorkoutBtn initAddingForm={initAddingForm} />
        </div>
        {editOption === "adding" && (
          <AddingForm
            defaultEditUi={defaultEditUi}
            handleAddWorkout={addWorkout}
            tempWorkout={tempWorkout}
            modifyTempWorkout={modifyTempWorkout}
            modifyTempWorkoutProp={modifyTempWorkoutProp}
          />
        )}
      </>
    );
  }

  return (
    <div className="flex gap-2">
      {workouts.map((workout) => {
        return (
          <div key={workout.id} className="flex items-center gap-4">
            <WorkoutCard
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
        <div className="relative z-0 mt-2 flex flex-col gap-4">
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

const WorkoutCard = ({
  id,
  name,
  tooltip,
  selectedId,
  addSelectedId,
}: WorkoutCardProps) => {
  return (
    <button
      onClick={() => {
        addSelectedId(id);
      }}
      className={`${
        id === selectedId
          ? "bg-orange-button500/90 text-yellow-text50 dark:bg-orange-button600/80"
          : "bg-slate-light50 dark:bg-gradient-to-tr dark:from-slate-dark700 dark:to-slate-dark800"
      } relative z-0 flex h-[450px] w-[340px] flex-col overflow-hidden rounded-[24px] border-4 border-orange-button600 p-4 dark:border-orange-button500`}
    >
      <div className="mx-auto flex flex-col items-center gap-4">
        <p
          className={`${
            id === selectedId
              ? "text-slate-light50"
              : "text-slate-main600 dark:text-slate-light200"
          } text-2xl font-medium`}
        >
          {name}
        </p>
        <p
          className={`${
            id === selectedId ? "text-slate-light300" : "text-slate-light400"
          } text-sm text-slate-light400`}
        >
          {tooltip}
        </p>
        <div className="absolute top-4 right-5">
          <SelectedIcon stroke="#f8fafc" />
        </div>
      </div>
      <div className="absolute -left-[100px] top-[220px] h-[280px] w-[280px] rounded-full bg-[#87BF92]"></div>
      <div className="absolute left-[230px] top-[330px] h-[160px] w-[160px] rounded-full bg-[#709A69]"></div>
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
        className="fixed top-0 left-0 z-10 h-screen w-screen bg-black/70"
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
        className="fixed top-0 left-0 z-10 h-screen w-screen bg-black/70"
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

export default CardsContainer;
