import { motion } from "framer-motion";
import { useIncrementId } from "../../hooks/useIncrementId";
import type { StatelessCardContentProps } from "../../types/types";
import { initWorkout } from "../../utils/variables";
import { AddIcon, DbIcon } from "../svg";

export const StatelessCardContent = ({
  toggleAdding,
  addWorkout,
  handleEditForm,
}: StatelessCardContentProps) => {
  const { id, incrementId } = useIncrementId();

  return (
    <div
      className="relative mx-auto min-h-[540px] max-w-[370px] rounded-lg 
    border-2 border-dashed border-orange-button500 bg-white 
    pt-12 dark:bg-slate-dark700 xs:rounded-xl md:border-4"
    >
      <p className="font-medium italic text-slate-light400">
        You don&apos;t have any existing workout.
      </p>
      <div className="absolute inset-0 flex items-center justify-center">
        {DbIcon}
      </div>
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="add-workout-btn absolute bottom-12 right-4"
        onClick={() => {
          toggleAdding();
          addWorkout({ ...initWorkout, id: id });
          handleEditForm(id);
          incrementId();
        }}
      >
        {AddIcon}
        New workout
      </motion.button>
    </div>
  );
};
