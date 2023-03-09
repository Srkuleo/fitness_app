import type { RadioButtonProps, WorkoutsAction } from "../types/types";

export const workoutsReducer = (
  workouts: RadioButtonProps[],
  action: WorkoutsAction
) => {
  switch (action.type) {
    case "added": {
      return [
        ...workouts,
        {
          id: action.workout?.id,
          name: action.workout?.name,
          tooltip: action.workout?.tooltip,
        },
      ];
    }
    case "edited": {
      return workouts.map((w) => {
        if (w.id === action.workout?.id) {
          return action.workout;
        } else {
          return w;
        }
      });
    }
    case "deleted": {
      return workouts.filter((w) => w.id !== action.workout?.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
};
