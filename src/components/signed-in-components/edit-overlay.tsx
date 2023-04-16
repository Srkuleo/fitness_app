import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { EditOverlayProps } from "../../types/types";
import { buttonsVariant } from "../../utils/variables";
import { EditIcon, RemoveIcon } from "../svg-components/svg";
import { RemoveModal } from "./modals";

export const EditOverlay = ({
  handleEditForm,
  closeEditOverlay,
  workout,
  removeWorkout,
  switchInFocus,
}: EditOverlayProps) => {
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [buttons, setButtons] = useState({
    remove: false,
    edit: false,
  });

  const overlayVariant = {
    hidden: {
      opacity: 0,
    },
    "fade-in": {
      opacity: 1,
      transition: { duration: 0.1, ease: "easeOut" },
    },
    "fade-out": {
      opacity: 0,
      transition: { duration: 0.05, ease: "easeIn" },
    },
  };

  return (
    <>
      <motion.div
        variants={overlayVariant}
        initial="hidden"
        animate="fade-in"
        exit="fade-out"
        className="absolute inset-0 z-10 bg-slate-light500/70 dark:bg-slate-dark800/80"
      />
      <motion.button
        variants={overlayVariant}
        initial="hidden"
        animate="fade-in"
        exit="fade-out"
        className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full bg-red-removeBtn100 p-2 text-red-button700 shadow-md ring-1 ring-red-button400 hover:bg-red-button500 hover:text-slate-light50 hover:ring-red-button700"
        onHoverStart={() => setButtons({ ...buttons, remove: true })}
        onHoverEnd={() => setButtons({ ...buttons, remove: false })}
        onClick={() => {
          setShowRemoveModal(true);
        }}
      >
        <AnimatePresence>
          {buttons.remove && (
            <motion.span
              variants={buttonsVariant}
              initial="hidden"
              animate="show"
              exit="hide"
              className="overflow-hidden pl-2 text-xs"
            >
              Remove
            </motion.span>
          )}
        </AnimatePresence>
        {RemoveIcon}
      </motion.button>
      <motion.button
        variants={overlayVariant}
        initial="hidden"
        animate="fade-in"
        exit="fade-out"
        className="center absolute left-[50%] top-[50%] z-10 flex items-center gap-2 rounded-full bg-green-light100 p-2 text-green-dark700 shadow-md ring-1 ring-green-light400 hover:bg-green-dark600 hover:text-slate-light50 hover:ring-green-dark700"
        onHoverStart={() => setButtons({ ...buttons, edit: true })}
        onHoverEnd={() => setButtons({ ...buttons, edit: false })}
        onClick={() => {
          handleEditForm(workout.id);
          closeEditOverlay();
        }}
      >
        <EditIcon className="h-8 w-8" strokeWidth={2} />
        <AnimatePresence>
          {buttons.edit && (
            <motion.span
              variants={buttonsVariant}
              initial="hidden"
              animate="show"
              exit="hide"
              className="overflow-hidden pr-2"
            >
              Edit
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
      <AnimatePresence>
        {showRemoveModal && (
          <RemoveModal
            onClose={() => setShowRemoveModal(false)}
            workout={workout}
            removeWorkout={removeWorkout}
            switchInFocus={switchInFocus}
          />
        )}
      </AnimatePresence>
    </>
  );
};
