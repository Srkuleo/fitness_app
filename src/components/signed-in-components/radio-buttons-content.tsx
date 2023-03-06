import { useState } from "react";
import { type RadioButtonProps } from "../../types/types";
import { RadioButtonHeading } from "../headings";
import RadioButtons from "./radiobuttons";
import { StartButton } from "../buttons";

const initialWorkout: RadioButtonProps = {
  id: 0,
  name: "",
  tooltip: "",
  selected: false,
};

const RadioButtonsContent = ({
  isAdding,
  toggleAdding,
}: {
  isAdding: boolean;
  toggleAdding: () => void;
}) => {
  const [workouts, setWorkouts] = useState<RadioButtonProps[]>([]);
  const [newWorkout, setNewWorkout] =
    useState<RadioButtonProps>(initialWorkout);
  const [currentId, setCurrentId] = useState(0);

  function toggleIsSelected(id: number) {
    if (workouts) {
      const newWorkouts = workouts.map((workout) => {
        if (workout.id === id) {
          return {
            ...workout,
            selected: true,
          };
        } else {
          return {
            ...workout,
            selected: false,
          };
        }
      });
      setWorkouts(newWorkouts);
    }
  }

  function handleValue(e: React.ChangeEvent<HTMLInputElement>) {
    e.stopPropagation();
    setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setWorkouts([...workouts, { ...newWorkout, id: currentId + 1 }]);
    setCurrentId(currentId + 1);
    console.log(currentId, workouts[0]?.id);
    setNewWorkout(initialWorkout);
  }

  return (
    <div className="relative z-0 mx-auto flex flex-col items-center">
      <RadioButtonHeading />
      {workouts.length === 0 ? (
        <div className="space-y-2 rounded-lg bg-slate-light50 py-32 px-16 text-center text-lg font-semibold text-slate-main600">
          <p>You don`t have any existing workout available.</p>
          <button
            className="rounded-lg bg-slate-main600 px-8 py-2 text-base text-slate-light50 hover:bg-slate-main600/80"
            onClick={toggleAdding}
          >
            Add a workout
          </button>
        </div>
      ) : (
        <>
          <RadioButtons
            workouts={workouts}
            toggleIsSelected={toggleIsSelected}
          />
          <StartButton />
        </>
      )}
      {isAdding && (
        <div
          role="button"
          onClick={toggleAdding}
          className="fixed top-0 z-20 h-screen w-screen cursor-default bg-black/70"
        >
          <div className="center absolute top-[50%] left-[50%] m-auto flex flex-col items-center gap-10 rounded-lg bg-slate-light50 p-20">
            <form
              onSubmit={handleSubmit}
              className="space-x-10"
              onClick={(e: React.MouseEvent<HTMLFormElement>) =>
                e.stopPropagation()
              }
            >
              <input
                required
                className="input-field"
                type="text"
                placeholder="Workout"
                name="name"
                value={newWorkout.name}
                onChange={handleValue}
              />
              <input
                required
                className="input-field"
                type="text"
                placeholder="Tooltip"
                name="tooltip"
                value={newWorkout.tooltip}
                onChange={handleValue}
              />
              <button
                type="submit"
                className="rounded-lg bg-slate-main600 px-8 py-2 text-slate-light50 hover:bg-slate-main600/80"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// const initialWorkouts: RadioButtonProps[] = [
//   {
//     id: 1,
//     workout: "Upper1",
//     tooltip: "Balanced upperback/chest day with complementary arms exercises.",
//     selected: false,
//   },
//   {
//     id: 2,
//     workout: "Lower 1",
//     tooltip: "Quad heavy day, with few glute/hamstrings exercises.",
//     selected: false,
//   },
//   {
//     id: 3,
//     workout: "Upper 2",
//     tooltip: "Heavy back/chest day with good shoulder activation.",
//     selected: false,
//   },
//   {
//     id: 4,
//     workout: "Lower 2",
//     tooltip: "All arounder. Leg press + DL, heavy compound day.",
//     selected: false,
//   },
// ];

export default RadioButtonsContent;
