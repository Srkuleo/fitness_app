import type {
  StatefulCardsContainerProps,
  WorkoutProps,
} from "../../types/types";
import { StartBtn } from "../buttons";
import { WorkoutCardsCarousel, WorkoutCardLayout } from "../wrappers";

const StatefulCardsContainer = ({
  currIndex,
  workouts,
}: StatefulCardsContainerProps) => {
  return (
    <WorkoutCardsCarousel currIndex={currIndex}>
      {workouts.map((workout) => (
        <WorkoutCard
          key={workout.id}
          name={workout.name}
          tooltip={workout.tooltip}
        />
      ))}
    </WorkoutCardsCarousel>
  );
};

const WorkoutCard = ({
  name,
  tooltip,
}: Pick<WorkoutProps, "name" | "tooltip">) => {
  return (
    <WorkoutCardLayout>
      <p className="text-2xl font-medium text-slate-main600 dark:text-slate-light200">
        {name}
      </p>
      <p className="text-sm text-slate-light400">{tooltip}</p>
      <StartBtn />
    </WorkoutCardLayout>
  );
};

export default StatefulCardsContainer;
