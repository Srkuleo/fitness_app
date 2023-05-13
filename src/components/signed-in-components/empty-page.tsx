import { motion } from "framer-motion";
import { AddIcon, DbIcon } from "../svg";

export const EmptyPage = () => {
  return (
    <>
      <div className="center absolute left-[50%] flex flex-col items-center min-w-full gap-4 top-[50%] xs:min-h-[540px] xs:max-w-[370px] xs:min-w-0 xs:rounded-2xl xs:border-2 xs:border-dashed xs:border-orange-dark700 xs:bg-white xs:dark:border-orange-button600 xs:dark:bg-slate-dark800">
        {DbIcon}
        <p className="text-center font-medium italic text-slate-light500 dark:text-slate-light400">
          You don&apos;t have any existing workout.
        </p>
      </div>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="add-workout-btn absolute bottom-16 right-8 xs:bottom-12 xs:right-4"
      >
        <AddIcon className="h-6 w-6 xs:h-5 xs:w-5" strokeWidth={2} />
        New workout
      </motion.button>
    </>
  );
};
