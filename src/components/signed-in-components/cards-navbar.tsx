import type { CardsNavBarProps } from "../../types/types";

const CardsNavBar = ({ workouts, currIndex, jumpToCard }: CardsNavBarProps) => {
  return (
    <div className="flex items-center justify-center gap-smallButton">
      {workouts.map((workout, i) => (
        <div
          key={workout.id}
          role="button"
          className={`rounded-full bg-slate-light400 dark:bg-slate-light100 ${
            currIndex === i ? "h-4 w-4" : "h-3 w-3 opacity-50"
          }`}
          onClick={() => jumpToCard(i)}
        ></div>
      ))}
    </div>
  );
};

export default CardsNavBar;
