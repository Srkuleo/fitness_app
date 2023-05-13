import { motion } from "framer-motion";
import { AddIcon, DbIcon } from "../svg";

export const EmptyPage = () => {
  return (
    <div className="my-auto flex flex-grow flex-col items-center justify-center gap-4 xs:min-w-[370px] md:relative md:mx-auto md:min-h-[520px] md:flex-none md:rounded-xl md:border-2 md:border-dashed md:border-orange-button500 md:bg-slate-dark800">
      {DbIcon}
      <p>You don&apos;t have any workouts.</p>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="add-workout-btn absolute bottom-16 right-8 xs:bottom-12"
      >
        <AddIcon className="h-5 w-5" strokeWidth={2} />
        Add workout
      </motion.button>
    </div>
  );
};
