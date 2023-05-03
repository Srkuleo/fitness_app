import { motion } from "framer-motion";
import { AddIcon, DbIcon } from "../svg";

export const EmptyPage = () => {
  return (
    <div className="relative flex min-w-full flex-grow flex-col items-center justify-center gap-4 xs:my-auto xs:min-h-[540px] xs:min-w-[370px] xs:flex-grow-0 xs:rounded-2xl xs:border-2 xs:border-dashed xs:border-orange-dark700 xs:bg-white xs:dark:border-orange-button600 xs:dark:bg-slate-dark800">
      {DbIcon}
      <p className="font-medium italic text-slate-light500 dark:text-slate-light400">
        You don&apos;t have any existing workout.
      </p>

      <motion.button
        whileTap={{ scale: 0.95 }}
        className="add-workout-btn absolute bottom-20 right-8 xs:bottom-12 xs:right-4"
      >
        <AddIcon className="h-6 w-6 xs:h-5 xs:w-5" strokeWidth={2} />
        New workout
      </motion.button>
    </div>
  );
};
