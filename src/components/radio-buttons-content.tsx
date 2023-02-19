import Image from "next/image";
import { initialWorkouts } from "../types/types";
import { StartIcon, SelectedIcon } from "../components/svg";
import { darkModeAtom } from "../pages/signed-in";
import { useAtom } from "jotai/react";
import { useState } from "react";

const RadioButtonsContent = () => {
  const [isDark] = useAtom(darkModeAtom);
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
    <div
      className={`relative flex h-screen flex-col items-center ${
        isDark
          ? "bg-gradient-to-br from-slate-dark900 to-slate-main600"
          : "bg-gradient-to-br from-slate-light100 to-slate-light50"
      }`}
    >
      <Image
        src="/SVG/pattern.svg"
        alt="pattern"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
      <h1 className="z-10 mt-36 mb-24 bg-gradient-to-r from-orange-button500 to-red-button500 bg-clip-text text-5xl font-bold text-tp">
        Welcome, Srkuleo.
      </h1>
      <h3
        className={`z-10 mb-6 text-xl font-semibold ${
          isDark ? "text-yellow-text50" : "text-slate-main600"
        }`}
      >
        Choose your workout for today:
      </h3>
      <div className="z-10 flex flex-col gap-2 rounded-xl">
        {workouts.map((workout) => {
          return (
            <button
              onClick={() => {
                toggleIsSelected(workout.id);
              }}
              key={workout.id}
              className={`${
                isDark
                  ? "focus:shadow-outline-blue bg-slate-light50 from-green-dark800 to-green-main500 focus:bg-gradient-to-r  "
                  : "focus:shadow-outline-green bg-gradient-to-r from-sky-light200 to-slate-light300 focus:from-sky-dark700 focus:to-slate-light400 "
              } rounded-lg p-3 text-xl text-slate-main600 focus:text-yellow-text50`}
            >
              <div className="flex items-center gap-18">
                <div className="w-[30ch] text-left">
                  <p className="font-semibold">{workout.workout}</p>
                  <p className="text-sm italic">{workout.tooltip}</p>
                </div>
                {workout.selected ? (
                  <SelectedIcon stroke="#0369a1" fill="#7dd3fc" />
                ) : (
                  <SelectedIcon />
                )}
              </div>
            </button>
          );
        })}
      </div>
      <button className="z-10 mt-12 flex items-center gap-1 rounded-xl bg-gradient-to-r from-orange-button500 to-red-button500 px-8 py-2 text-lg font-semibold uppercase text-yellow-text50 hover:from-orange-button600 hover:to-red-button700">
        Start
        {StartIcon}
      </button>
    </div>
  );
};

export default RadioButtonsContent;
