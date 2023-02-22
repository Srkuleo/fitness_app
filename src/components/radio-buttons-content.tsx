import Image from "next/image";
import { initialWorkouts } from "../types/types";
import { StartIcon, SelectedIcon } from "./icons/svg";
import { useState } from "react";

const RadioButtonsContent = () => {
  const [workouts, setWorkouts] = useState(initialWorkouts);

  function toggleIsSelected(id: number) {
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

  return (
    <div className="light-bg dark:dark-bg relative flex h-screen flex-col items-center">
      <Image
        src="/SVG/pattern.svg"
        alt="pattern"
        fill={true}
        priority={true}
        style={{ objectFit: "cover" }}
        className="relative z-0"
      />
      <h1 className="relative z-0 mt-36 mb-24 bg-gradient-to-r from-orange-button500 to-red-button500 bg-clip-text text-5xl font-bold text-tp">
        Welcome, Srkuleo.
      </h1>
      <h3 className="relative z-0 mb-6 text-xl font-semibold text-slate-main600 dark:text-yellow-text50">
        Choose your workout for today:
      </h3>
      <div className="relative z-0 flex flex-col gap-2 rounded-xl">
        {workouts.map((workout) => {
          return (
            <button
              onClick={() => {
                toggleIsSelected(workout.id);
              }}
              key={workout.id}
              className={`${
                workout.selected
                  ? "bg-gradient-to-r from-sky-dark800 to-sky-dark700 text-yellow-text50"
                  : "bg-slate-light50"
              } rounded-lg px-6 py-4`}
            >
              <div className="flex items-center justify-between gap-14">
                <div className="text-left">
                  <p
                    className={`${
                      !workout.selected && "text-slate-main600"
                    } text-xl font-medium`}
                  >
                    {workout.workout}
                  </p>
                  <p
                    className={`${
                      !workout.selected && "text-slate-light400"
                    } text-sm`}
                  >
                    {workout.tooltip}
                  </p>
                </div>
                {workout.selected ? (
                  <SelectedIcon stroke="#fefce8" />
                ) : (
                  <SelectedIcon />
                )}
              </div>
            </button>
          );
        })}
      </div>
      <button className="relative z-0 mt-12 flex items-center gap-1 rounded-xl bg-gradient-to-r from-orange-button500 to-red-button500 px-8 py-2 text-lg font-semibold uppercase text-yellow-text50 hover:from-orange-button600 hover:to-red-button700">
        Start
        {StartIcon}
      </button>
    </div>
  );
};

export default RadioButtonsContent;
