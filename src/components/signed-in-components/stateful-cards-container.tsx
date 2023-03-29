import type {
  StatefulCardsContainerProps,
  WorkoutProps,
} from "../../types/types";
import { StartBtn } from "../buttons";
import { WorkoutCardsCarousel } from "../wrappers";

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
    <div className="min-h-[520px] min-w-[400px]">
      <div className="relative h-full w-full overflow-hidden rounded-[24px] border-4 border-orange-button600 bg-slate-light50 dark:border-orange-button500 dark:bg-gradient-to-tr dark:from-slate-main600 dark:to-slate-dark800">
        <div className="flex flex-col items-center gap-4 p-4">
          <p className="text-2xl font-medium text-slate-main600 dark:text-slate-light200">
            {name}
          </p>
          <p className="text-sm text-slate-light400">{tooltip}</p>
          <StartBtn />
        </div>
        <div className="absolute top-[350px] left-[224px] h-[290px] w-[290px] rounded-full bg-[#caeed2] dark:bg-[#69ab69]/70"></div>
        <div className="absolute top-[416px] left-[290px] h-[160px] w-[160px] rounded-full bg-[#b4c6b1] dark:bg-[#4a784a]/80"></div>
      </div>
    </div>
  );
};

export default StatefulCardsContainer;
