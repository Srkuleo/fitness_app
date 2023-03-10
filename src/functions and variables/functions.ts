import type { WorkoutProps, WorkoutsAction } from "../types/types";

export const workoutsReducer = (
  workouts: WorkoutProps[],
  action: WorkoutsAction
) => {
  switch (action.type) {
    case "added": {
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
    case "edited": {
      const { id } = action.workout;
      return workouts.map((w) => {
        if (w.id === id) {
          return action.workout;
        } else {
          return w;
        }
      });
    }
    case "deleted": {
      const { id } = action.workout;
      return workouts.filter((w) => w.id !== id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
};
