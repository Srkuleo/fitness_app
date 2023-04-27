import { motion } from "framer-motion";
import { useIncrementId } from "../../hooks/useIncrementId";
import type { CardEditButtonsProps } from "../../types/types";
import { initWorkout } from "../../utils/variables";
import { AddIcon, DoneIcon } from "../svg";

export const CardEditButttons = ({
  workouts,
  addWorkout,
  closeEditOverlay,
  jumpToCard,
  handleEditForm,
  toggleAdding,
}: CardEditButtonsProps) => {
  const { id, incrementId } = useIncrementId();

  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: { delay: 0.1, duration: 0.05, ease: "easeIn" },
      }}
      className="flex justify-around xs:justify-center xs:gap-48"
    >
      <motion.button
        whileTap={{ scale: 0.95 }}
        className="rounded-full bg-slate-light300 p-2 text-slate-main600 shadow-sm dark:bg-slate-light400 dark:text-slate-light50"
        onClick={() => {
          closeEditOverlay();
          toggleAdding();
          addWorkout({ ...initWorkout, id: id });
          handleEditForm(id);
          console.log(id);
          incrementId();
          jumpToCard(workouts.length);
        }}
      >
        {AddIcon}
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.95 }}
        className="rounded-full bg-slate-light300 p-2 text-slate-main600 shadow-sm dark:bg-slate-light400 dark:text-slate-light50"
        onClick={closeEditOverlay}
      >
        {DoneIcon}
      </motion.button>
    </motion.div>
  );
};
