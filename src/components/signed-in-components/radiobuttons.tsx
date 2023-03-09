import { initialWorkout } from "../../functions and variables/variables";
import { type RadioButtonProps } from "../../types/types";
import { Fragment, useState } from "react";
import { SelectedIcon } from "../svg-components/svg";

const RadioButtons = (props: {
  workouts: RadioButtonProps[];
  isEditing: boolean;
  handleAddWorkout: ({
    name,
    tooltip,
  }: Pick<RadioButtonProps, "name" | "tooltip">) => void;
  handleChangeWorkout: (workout: RadioButtonProps) => void;
  handeDeleteWorkout: (workout: RadioButtonProps) => void;
}) => {
  const {
    workouts,
    isEditing,
    handleAddWorkout,
    handleChangeWorkout,
    handeDeleteWorkout,
  } = props;
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [newWorkout, setNewWorkout] = useState(initialWorkout);
  const [tempWorkout, setTempWorkout] = useState<RadioButtonProps>();

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (isAdding) {
      setNewWorkout({
        ...newWorkout,
        [e.target.name]: e.target.value,
      });
    } else if (isChanging && tempWorkout) {
      setTempWorkout({
        ...tempWorkout,
        [e.target.name]: e.target.value,
      });
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {workouts.map((workout) => {
        return (
          <div key={workout.id} className="flex items-center gap-4">
            <div className="flex">
              <button
                onClick={() => {
                  setSelectedId(workout.id);
                }}
                className={`${
                  workout.id === selectedId
                    ? "bg-gradient-to-r from-green-dark600/90 to-green-dark700 text-yellow-text50"
                    : "bg-slate-light50"
                } w-[350px] rounded-lg px-6 py-4`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p
                      className={`${
                        workout.id !== selectedId && "text-slate-main600"
                      } text-xl font-medium`}
                    >
                      {workout.name}
                    </p>
                    <p
                      className={`${
                        workout.id !== selectedId && "text-slate-light400"
                      } text-sm`}
                    >
                      {workout.tooltip}
                    </p>
                  </div>
                  {workout.id === selectedId ? (
                    <SelectedIcon stroke="#fefce8" />
                  ) : (
                    <SelectedIcon />
                  )}
                </div>
              </button>
            </div>
            {isEditing && (
              <div className="space-x-2">
                <button
                  className="input-field bg-slate-light50 font-semibold text-slate-main600 dark:text-slate-main600"
                  onClick={() => {
                    setTempWorkout(workout);
                    setIsChanging(true);
                  }}
                >
                  Change
                </button>
                <button
                  className="input-field bg-slate-light50 font-semibold text-slate-main600 dark:text-slate-main600"
                  onClick={() => handeDeleteWorkout(workout)}
                >
                  Delete
                </button>
              </div>
            )}
            {isChanging && tempWorkout && (
              <>
                <div
                  className="fixed top-0 left-0 h-screen w-screen bg-black/50"
                  onClick={() => setIsChanging(false)}
                ></div>
                <form
                  className="center fixed top-[50%] left-[50%] z-10 space-x-10 bg-slate-light200 p-20 text-slate-main600"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleChangeWorkout(tempWorkout);
                    setIsChanging(false);
                  }}
                >
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={tempWorkout.name}
                    placeholder="Workout Name"
                    required
                    onChange={(e) => handleInput(e)}
                    className="input-field"
                  />
                  <input
                    type="text"
                    name="tooltip"
                    id="tooltip"
                    value={tempWorkout.tooltip}
                    placeholder="Tooltip"
                    required
                    onChange={(e) => handleInput(e)}
                    className="input-field"
                  />
                  <button
                    type="submit"
                    className="input-field bg-slate-light50 dark:text-slate-main600"
                  >
                    Add
                  </button>
                </form>
              </>
            )}
          </div>
        );
      })}
      {isEditing && (
        <button
          className="input-field bg-slate-light50 text-base font-semibold transition-all duration-200 ease-in hover:translate-x-3 hover:bg-slate-light400 hover:text-yellow-text50 dark:text-slate-main600 dark:hover:text-yellow-text50"
          onClick={() => setIsAdding(true)}
        >
          Add a new workout
        </button>
      )}
      {isAdding && (
        <>
          <div
            className="fixed top-0 left-0 h-screen w-screen bg-black/50"
            onClick={() => setIsAdding(false)}
          ></div>

          <form
            className="center fixed top-[50%] left-[50%] z-10 space-x-10 bg-slate-light200 p-20 text-slate-main600"
            onSubmit={(e) => {
              e.preventDefault();
              handleAddWorkout(newWorkout);
              setNewWorkout(initialWorkout);
              setIsAdding(false);
            }}
          >

            <input
              type="text"
              name="name"
              id="tooltip"
              value={newWorkout.name}
              placeholder="Workout Name"
              required
              onChange={(e) => handleInput(e)}
              className="input-field"
            />
            <input
              type="text"
              name="tooltip"
              id="tooltip"
              value={newWorkout.tooltip}
              placeholder="Tooltip"
              required
              onChange={(e) => handleInput(e)}
              className="input-field"
            />
            <button
              type="submit"
              className="input-field bg-slate-light50 dark:text-slate-main600"
            >
              Add
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default RadioButtons;
