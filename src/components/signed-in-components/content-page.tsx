import { AnimatePresence, motion } from "framer-motion";
import { useCardInFocus } from "../../hooks/useCardInFocus";
import type { WorkoutProps } from "../../types/types";
import { CarouselNav } from "../buttons";
import { AddIcon, CancelIcon, EditIcon, PreviewIcon, RemoveIcon } from "../svg";
// import { useState } from "react";

export const ContentPage = ({
  workouts,
  showEditBar,
  closeEditBar,
}: {
  workouts: WorkoutProps[];
  showEditBar: boolean;
  closeEditBar: () => void;
}) => {
  const { cardInFocus, prevCard, nextCard, switchInFocus } =
    useCardInFocus(workouts);
  // const [showForm, setShowForm] = useState(false);

  return (
    <>
      <AnimatePresence>
        {showEditBar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: 72,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              transition: { delay: 0.3, duration: 0.15, ease: "easeIn" },
            }}
            className="absolute z-10 flex gap-6"
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="rounded-xl bg-white p-2 shadow-md dark:shadow-slate-dark900 "
            >
              <AddIcon
                className="h-5 w-5 text-slate-main600"
                strokeWidth={1.8}
              />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="rounded-xl bg-white p-2 shadow-md dark:shadow-slate-dark900 "
            >
              <EditIcon
                className="h-5 w-5 text-green-dark600 dark:text-slate-main600"
                strokeWidth={1.8}
              />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="rounded-xl bg-white p-2 shadow-md dark:shadow-slate-dark900 "
            >
              <RemoveIcon
                className="h-5 w-5 text-red-removeBtn600"
                strokeWidth={1.8}
              />
            </motion.button>
            <motion.button
              onClick={closeEditBar}
              whileTap={{ scale: 0.9 }}
              className="rounded-xl bg-white p-2 shadow-md dark:shadow-slate-dark900 "
            >
              <CancelIcon
                className="h-5 w-5 text-slate-main600"
                strokeWidth={1.8}
              />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex max-w-full flex-1 overflow-x-hidden px-2 xs:max-w-sm md:m-auto md:max-h-[520px] md:rounded-xl md:border-2 md:border-orange-button500 md:bg-white md:px-0 md:dark:bg-slate-dark800">
        <motion.div
          animate={{
            transition: { duration: 0.4, ease: "easeOut" },
            transform: `translateX(-${cardInFocus * 100}%)`,
          }}
          className="flex w-full"
        >
          {workouts.map((workout) => (
            <div
              key={workout.id}
              className="flex h-full min-w-full flex-col items-center justify-center py-4 md:py-8"
            >
              <p className="mb-2 text-2xl font-semibold text-slate-main600 dark:text-slate-light200">
                {workout.title}
              </p>
              <p className="mb-8 text-slate-light500 dark:text-slate-light300/90">
                {workout.description}
              </p>
              <div className="flex gap-2">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="rounded-xl bg-white px-3 py-2 text-slate-main600 shadow-md dark:shadow-slate-dark900"
                >
                  {PreviewIcon}
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="rounded-xl bg-gradient-to-r from-orange-button500
      to-red-button500 px-6 py-2 font-semibold uppercase text-slate-light200 shadow-md dark:shadow-slate-dark900"
                >
                  Start
                </motion.button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <CarouselNav
        workouts={workouts}
        cardInFocus={cardInFocus}
        prevCard={prevCard}
        nextCard={nextCard}
      />
    </>
  );
};
