import { useState } from "react";
import type { WorkoutProps } from "../types/types";

export const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<WorkoutProps[] | undefined>();

  function addWorkout(workout: WorkoutProps) {
    if (!workouts) {
      setWorkouts([workout]);
    } else {
      setWorkouts([...workouts, workout]);
    }
  }

  function reset() {
    setWorkouts(undefined);
  }
  
  function initial() {
    setWorkouts([
      { id: 0, title: "Upper 1", description: "Good one, could be better." },
      { id: 1, title: "Upper 2", description: "A little bit better, imo." },
      { id: 2, title: "Lower 1", description: "The best one so far!" },
      { id: 3, title: "Lower 2", description: "The best one so far!" },
    ]);
  }

  return { workouts, addWorkout, reset, initial };
};
