import type { CardNavArrowsProps } from "../../types/types";
import { NextCardArrow, PrevCardArrow } from "../svg-components/svg";

export const CardNavArrows = ({
  workouts,
  prevCard,
  nextCard,
}: CardNavArrowsProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-between">
      <button
        className="group rounded-full bg-slate-light300/80 p-2 text-slate-main600 transition-all ease-out hover:bg-slate-light400/60 disabled:pointer-events-none disabled:opacity-20 dark:bg-slate-dark700/80 dark:text-slate-light50 dark:hover:bg-slate-main600/80"
        onClick={prevCard}
        disabled={workouts.length < 2}
      >
        {PrevCardArrow}
      </button>
      <button
        className="group rounded-full bg-slate-light300/80 p-2 text-slate-main600 transition-all ease-out hover:bg-slate-light400/60 disabled:pointer-events-none disabled:opacity-20 dark:bg-slate-dark700/80 dark:text-slate-light50 dark:hover:bg-slate-main600/80"
        onClick={nextCard}
        disabled={workouts.length < 2}
      >
        {NextCardArrow}
      </button>
    </div>
  );
};
