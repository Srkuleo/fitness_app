import { AnimatePresence, motion } from "framer-motion";
import { useIncrementId } from "../../hooks/useIncrementId";
import type { CardEditButtonsProps } from "../../types/types";
import { initWorkout, buttonsVariant } from "../../utils/variables";
import { AddIcon, DoneIcon } from "../svg-components/svg";
import { useState } from "react";

export const CardEditButttons = ({
  workouts,
  addWorkout,
  closeEditOverlay,
  jumpToCard,
  handleEditForm,
  toggleAdding,
}: CardEditButtonsProps) => {
  const [expandAddBtn, setExpandAddBtn] = useState(false);
  const [expandDoneBtn, setExpandDoneBtn] = useState(false);
  const { id, incrementId } = useIncrementId();

  return (
    <div className="flex justify-around">
      <AnimatePresence>
        <motion.button
          className="flex items-center gap-2 rounded-full bg-slate-light300 p-2 text-slate-main600 shadow-sm dark:bg-slate-light400 dark:text-slate-light50"
          onHoverStart={() => setExpandAddBtn(true)}
          onHoverEnd={() => setExpandAddBtn(false)}
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
          {expandAddBtn && (
            <motion.span
              variants={buttonsVariant}
              initial="hidden"
              animate="show"
              exit="hide"
              className="overflow-hidden text-sm"
            >
              Add
            </motion.span>
          )}
        </motion.button>
      </AnimatePresence>
      <AnimatePresence>
        <motion.button
          className="flex items-center gap-2 rounded-full bg-slate-light300 p-2 text-slate-main600 shadow-sm dark:bg-slate-light400 dark:text-slate-light50"
          onHoverStart={() => setExpandDoneBtn(true)}
          onHoverEnd={() => setExpandDoneBtn(false)}
          onClick={closeEditOverlay}
        >
          {DoneIcon}
          {expandDoneBtn && (
            <motion.span
              variants={buttonsVariant}
              initial="hidden"
              animate="show"
              exit="hide"
              className="overflow-hidden text-sm"
            >
              Done
            </motion.span>
          )}
        </motion.button>
      </AnimatePresence>
    </div>
  );
};
