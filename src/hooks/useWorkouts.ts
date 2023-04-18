import { useState } from "react";
import type { WorkoutProps } from "../types/types";

export const useWorkouts = (initialWorkouts: WorkoutProps[]) => {
  const [workouts, setWorkouts] = useState(initialWorkouts);

  function addWorkout(workout: WorkoutProps) {
    const newWorkout = {
      ...workout,
    };
    setWorkouts([...workouts, newWorkout]);
  }

  function changeWorkout(editedWorkout: WorkoutProps | undefined) {
    if (!editedWorkout) return undefined;

    const newList = workouts.map((workout) => {
      if (workout.id !== editedWorkout.id) return workout;

      return {
        ...workout,
        title: editedWorkout.title,
        description: editedWorkout.description,
      };
    });

    setWorkouts(newList);
  }

  function removeWorkout(id: number) {
    const newList = workouts.filter((workout) => workout.id !== id);
    setWorkouts(newList);
  }

  return {
    workouts,
    addWorkout,
    changeWorkout,
    removeWorkout,
  };
};
