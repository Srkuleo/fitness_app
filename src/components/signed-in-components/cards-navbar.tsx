import type { CardsNavBarProps } from "../../types/types";

const CardsNavBar = ({ workouts, currIndex, jumpToCard }: CardsNavBarProps) => {
  return (
    <div className="flex items-center justify-center gap-smallButton">
      {workouts.map((workout, i) => (
        <div
          key={workout.id}
          role="button"
          className={`h-3 w-3 rounded-full bg-slate-main600 dark:bg-slate-light100 ${
            currIndex === i ? "p-2" : "opacity-40"
          }`}
          onClick={() => jumpToCard(i)}
        ></div>
      ))}
    </div>
  );
};

export default CardsNavBar;
