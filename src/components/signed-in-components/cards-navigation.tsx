import type { CardsNavigationProps } from "../../types/types";
import { PrevIcon, NextIcon } from "../svg-components/svg";

const CardsNavigation = ({
  workouts,
  prevCard,
  nextCard,
}: CardsNavigationProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-between">
      <button
        className="relative p-1 text-slate-main600 transition-all ease-out hover:-translate-x-1 disabled:pointer-events-none disabled:opacity-20 dark:text-slate-light100"
        onClick={prevCard}
        disabled={workouts.length < 2}
      >
        {PrevIcon}
      </button>
      <button
        className="relative p-1 text-slate-main600 transition-all ease-out hover:translate-x-1 disabled:pointer-events-none disabled:opacity-20 dark:text-slate-light100"
        onClick={nextCard}
        disabled={workouts.length < 2}
      >
        {NextIcon}
      </button>
    </div>
  );
};

export default CardsNavigation;
