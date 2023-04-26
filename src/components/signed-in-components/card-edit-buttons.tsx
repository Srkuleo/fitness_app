import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useIncrementId } from "../../hooks/useIncrementId";
import type { CardEditButtonsProps } from "../../types/types";
import {
  initWorkout,
  buttonsVariant,
  editOverlayVariant,
} from "../../utils/variables";
import { AddIcon, DoneIcon } from "../svg";

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
    <motion.div
      variants={editOverlayVariant}
      initial="hidden"
      animate="fade-in"
      exit="fade-out"
      className="flex justify-around"
    >
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
        <AnimatePresence>
          {expandAddBtn && (
            <motion.span
              variants={buttonsVariant}
              initial="hidden"
              animate="show"
              exit="hide"
              className="overflow-hidden pr-2 text-sm"
            >
              Add
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <motion.button
        className="flex items-center gap-2 rounded-full bg-slate-light300 p-2 text-slate-main600 shadow-sm dark:bg-slate-light400 dark:text-slate-light50"
        onHoverStart={() => setExpandDoneBtn(true)}
        onHoverEnd={() => setExpandDoneBtn(false)}
        onClick={closeEditOverlay}
      >
        {DoneIcon}
        <AnimatePresence>
          {expandDoneBtn && (
            <motion.span
              variants={buttonsVariant}
              initial="hidden"
              animate="show"
              exit="hide"
              className="overflow-hidden pr-2 text-sm"
            >
              Done
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
};
