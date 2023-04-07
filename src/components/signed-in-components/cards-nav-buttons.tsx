import type { CardsNavButtonsProps } from "../../types/types";

export const CardsNavButtons = ({
  workouts,
  InFocus,
  jumpToCard,
}: CardsNavButtonsProps) => {
  return (
    <div className="flex items-center justify-center gap-smallButton">
      {workouts.map((workout, i) => (
        <div
          key={workout.id}
          role="button"
          className={`h-3 w-3 rounded-full bg-slate-light500 dark:bg-slate-light100 ${
            InFocus === i ? "p-2" : "opacity-40"
          }`}
          onClick={() => jumpToCard(i)}
        ></div>
      ))}
    </div>
  );
};
