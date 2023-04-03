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
      <div className="mb-2">
        <p className="text-2xl font-medium text-slate-main600 dark:text-slate-light200">
          {name}
        </p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-slate-light400 dark:text-slate-light300/80">
          {tooltip}
        </p>
      </div>
      <StartBtn />
    </WorkoutCardLayout>
  );
};

export default StatefulCardsContainer;
