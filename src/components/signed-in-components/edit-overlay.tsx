import { useState } from "react";
import { EditIcon, RemoveIcon } from "../svg-components/svg";
import type { EditOverlayProps } from "../../types/types";
import { AnimatePresence, motion } from "framer-motion";
import { RemoveModal } from "./remove-modal";

export const EditOverlay = ({
  handleEditingId,
  workout,
  removeWorkout,
  switchInFocus,
  closeEdit,
}: EditOverlayProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        exit={{
          opacity: 0,
          x: "100%",
          transition: { duration: 0.1, ease: "easeIn" },
        }}
        className="absolute inset-0 z-10 bg-slate-light500/70 dark:bg-slate-dark800/80"
      />
      <motion.button
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.1, ease: "easeIn" },
        }}
        className="absolute right-4 top-4 z-10 rounded-full bg-red-removeBtn100 p-2 text-red-button700 shadow-md ring-1 ring-red-button400 transition-all ease-out hover:bg-red-button500 hover:text-slate-light50 hover:ring-red-button700"
        onClick={() => {
          setShowModal(true);
        }}
      >
        {RemoveIcon}
      </motion.button>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.2, ease: "easeOut" },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.1, ease: "easeIn" },
        }}
        className="center absolute left-[50%] top-[50%] z-10 rounded-full bg-green-light100 p-2 text-green-dark700 shadow-md ring-1 ring-green-light400 transition-all ease-out hover:bg-green-dark600 hover:text-slate-light50 hover:ring-green-dark700"
        onClick={() => {
          handleEditingId(workout.id);
          closeEdit();
        }}
      >
        <EditIcon className="h-8 w-8" strokeWidth={2} />
      </motion.button>
      <AnimatePresence>
        {showModal && (
          <RemoveModal
            onClose={() => setShowModal(false)}
            workout={workout}
            removeWorkout={removeWorkout}
            switchInFocus={switchInFocus}
          />
        )}
      </AnimatePresence>
    </>
  );
};
