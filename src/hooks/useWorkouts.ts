import { useState } from "react";
import type { WorkoutProps } from "../types/types";

export const useWorkouts = () => {
  const [workouts, setWorkouts] = useState<WorkoutProps[] | undefined>();

  function reset() {
    setWorkouts(undefined);
  }

  function initial() {
    setWorkouts([
      {
        id: 0,
        title: "Upper 1",
        description: "Good one, could be better.",
        mainBlock: ["weighted pullups", "db bench", "ohp"],
        superSets: [
          "heavy lateral/heavy cable row",
          "lte/ez curls",
          "hi cable row/l-t-h",
        ],
      },
      {
        id: 1,
        title: "Upper 2",
        description: "A little bit better, imo.",
        mainBlock: ["weighted dips", "lat pulldown"],
        superSets: ["one arm chest press/rdf", "spider curls/tricep kickback"],
      },
      {
        id: 2,
        title: "Lower 1",
        description: "The best one so far!",
        mainBlock: ["back squat", "RDL", "hip thrust"],
        superSets: [
          "hamstring curls/leg extensions",
          "calves/leg raises",
          "cable Y raises/rdf",
        ],
      },
      {
        id: 3,
        title: "Lower 2",
        description: "The best one so far!",
        mainBlock: ["leg press"],
        superSets: [
          "lying ham curls/sissy",
          "glute kickback/psoas raises",
          "calves/QL crunchies",
          "db lateral/rcf",
        ],
      },
    ]);
  }

  return { workouts, reset, initial };
};
