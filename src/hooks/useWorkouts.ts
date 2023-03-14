import { useCallback, useReducer } from "react";
import type { WorkoutProps, WorkoutsAction } from "../types/types";

let nextId = 4;

export const useWorkouts = (initialWorkouts: WorkoutProps[]) => {
  const [workouts, dispatch] = useReducer(workoutsReducer, initialWorkouts);

  const addWorkout = useCallback((name: string, tooltip: string) => {
    dispatch({
      type: "adding",
      workout: {
        id: nextId++,
        name: name,
        tooltip: tooltip,
      },
    });
  }, []);

  const changeWorkout = useCallback((workout: WorkoutProps) => {
    dispatch({
      type: "editing",
      workout: workout,
    });
  }, []);

  const removeWorkout = useCallback((id: number) => {
    dispatch({
      type: "removing",
      id: id,
    });
  }, []);

  return { workouts, addWorkout, changeWorkout, removeWorkout };
};

const workoutsReducer = (workouts: WorkoutProps[], action: WorkoutsAction) => {
  switch (action.type) {
    case "adding": {
      const { id, name, tooltip } = action.workout;
      return [
        ...workouts,
        {
          id: id,
          name: name,
          tooltip: tooltip,
        },
      ];
    }
    case "editing": {
      const { id } = action.workout;
      return workouts.map((w) => {
        if (w.id === id) {
          return action.workout;
        } else {
          return w;
        }
      });
    }
    case "removing": {
      return workouts.filter((w) => w.id !== action.id);
    }
  }
};
