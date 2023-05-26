import { motion } from "framer-motion";
import { AddIcon, DbIcon } from "../svg";

export const EmptyPage = () => {
  return (
    <div className="my-auto flex flex-grow flex-col items-center justify-center text-center xs:min-w-[370px] md:relative md:mx-auto md:min-h-[520px] md:flex-none md:rounded-xl md:border-2 md:border-dashed md:border-orange-button500 md:bg-white dark:md:bg-slate-dark800">
      {DbIcon}
      <p className="mt-4 text-lg font-bold text-slate-light400 dark:text-slate-light400">
        Nothing to choose from
      </p>
      <p className="text-sm font-semibold italic text-slate-light400/80 dark:text-slate-light500">
        No workouts available
      </p>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="add-workout-btn absolute bottom-16 right-8 md:bottom-8 md:right-4"
      >
        <AddIcon className="h-5 w-5" strokeWidth={2} />
        Add workout
      </motion.button>
    </div>
  );
};
