import { useState, useCallback } from "react";
import type { WorkoutProps } from "../types/types";

export const useTempWorkout = (initialWorkout: WorkoutProps) => {
  const [tempWorkout, setTempWorkout] = useState(initialWorkout);

  const modifyTempWorkout = useCallback((selectedWorkout: WorkoutProps) => {
    setTempWorkout(selectedWorkout);
  }, []);

  const modifyTempWorkoutProp = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTempWorkout({
        ...tempWorkout,
        [e.target.name]: e.target.value,
      });
    },
    [tempWorkout]
  );

  const clearField = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setTempWorkout({
        ...tempWorkout,
        [e.target.name]: "",
      });
    },
    [tempWorkout]
  );

  return { tempWorkout, modifyTempWorkout, modifyTempWorkoutProp, clearField };
};
