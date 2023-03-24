import type { CardsNavigationProps } from "../../types/types";
import { PrevIcon, NextIcon } from "../svg-components/svg";

const CardsNavigation = ({
  workouts,
  handlePrevIndex,
  handleNextIndex,
}: CardsNavigationProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-between p-1">
      <button
        className="relative z-10 p-2 text-slate-main600 transition-all ease-out hover:-translate-x-1 disabled:pointer-events-none disabled:opacity-20 dark:text-slate-light100"
        onClick={handlePrevIndex}
        disabled={workouts.length < 2}
      >
        {PrevIcon}
      </button>
      <button
        className="relative z-10 p-2 text-slate-main600 transition-all ease-out hover:translate-x-1 disabled:pointer-events-none disabled:opacity-20 dark:text-slate-light100"
        onClick={handleNextIndex}
        disabled={workouts.length < 2}
      >
        {NextIcon}
      </button>
    </div>
  );
};

export default CardsNavigation;
