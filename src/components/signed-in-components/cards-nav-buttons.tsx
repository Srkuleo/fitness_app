import type { NavButtonsProps } from "../../types/types";
import { NextCardArrow, PrevCardArrow } from "../svg-components/svg";

const CardsNavButtons = ({ workouts, prevCard, nextCard }: NavButtonsProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-between">
      <button
        className="text-slate-main600 opacity-70 transition-all ease-out hover:-translate-x-1 hover:opacity-100 disabled:pointer-events-none disabled:opacity-20 dark:text-slate-light100"
        onClick={prevCard}
        disabled={workouts.length < 2}
      >
        {PrevCardArrow}
      </button>
      <button
        className="text-slate-main600 opacity-70 transition-all ease-out hover:translate-x-1 hover:opacity-100 disabled:pointer-events-none disabled:opacity-20 dark:text-slate-light100"
        onClick={nextCard}
        disabled={workouts.length < 2}
      >
        {NextCardArrow}
      </button>
    </div>
  );
};

export default CardsNavButtons;
