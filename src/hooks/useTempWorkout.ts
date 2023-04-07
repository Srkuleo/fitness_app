import { useState } from "react";
import type { WorkoutProps } from "../types/types";

export const useTempWorkout = (workout: WorkoutProps) => {
  const [tempWorkout, setTempWorkout] = useState(workout);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setTempWorkout({ ...tempWorkout, [e.target.name]: e.target.value });
  }

  return { tempWorkout, handleInput };
};
