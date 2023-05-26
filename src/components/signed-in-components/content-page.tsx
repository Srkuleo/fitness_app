import { AnimatePresence, motion } from "framer-motion";
import { useCardInFocus } from "../../hooks/useCardInFocus";
import type { WorkoutProps } from "../../types/types";
import { StartBtn } from "../buttons";
import {
  AddIcon,
  EditBarIcon,
  EditIcon,
  NextCardArrow,
  PrevCardArrow,
  RemoveIcon,
} from "../svg";
import { useState } from "react";

export const ContentPage = ({ workouts }: { workouts: WorkoutProps[] }) => {
  const { cardInFocus, prevCard, nextCard, jumpToCard, switchInFocus } =
    useCardInFocus(workouts);
  const [showEditMenu, setShowEditMenu] = useState(false);

  return (
    <>
      <div className="m-auto max-w-full overflow-x-hidden md:max-w-[380px] md:rounded-xl md:border-2 md:border-orange-button500 md:bg-white md:dark:bg-slate-dark800">
        <motion.div
          animate={{
            transition: { duration: 0.4, ease: "easeOut" },
            transform: `translateX(-${cardInFocus * 100}%)`,
          }}
          className="flex"
        >
          {workouts.map((workout) => (
            <div
              key={workout.id}
              className="flex min-w-full flex-col items-center py-4"
            >
              <p className="mb-2 text-2xl font-semibold text-slate-main600 dark:text-slate-light200">
                {workout.title}
              </p>
              <p className="mb-4 text-slate-light500 dark:text-slate-light300/90">
                {workout.description}
              </p>
              <StartBtn />
            </div>
          ))}
        </motion.div>
      </div>

      {showEditMenu && (
        <div
          className="absolute inset-0 "
          onClick={() => setShowEditMenu(false)}
        />
      )}

      <div className="absolute bottom-20 right-4 flex flex-col-reverse items-center gap-2 xs:right-8 sm:right-16 lg:right-24 2xl:right-28">
        <button
          onClick={() => setShowEditMenu(!showEditMenu)}
          className="rounded-full bg-green-main500 p-3 dark:bg-green-dark600"
        >
          <EditBarIcon
            className="h-7 w-7 text-slate-light50"
            strokeWidth={1.3}
          />
        </button>
        <AnimatePresence>
          {showEditMenu && (
            <motion.div
              initial={{ height: 0 }}
              animate={{
                height: "auto",
                transition: { duration: 0.15, ease: "easeOut" },
              }}
              exit={{
                height: 0,
                transition: { duration: 0.1, ease: "easeIn" },
              }}
              className="flex flex-col-reverse gap-4 rounded-full bg-white px-2 py-4 dark:bg-slate-dark700/90"
            >
              <AddIcon
                className="h-7 w-7 text-slate-light500 dark:text-slate-light50"
                strokeWidth={1.7}
              />
              <RemoveIcon
                className="h-7 w-7 text-red-removeBtn600 dark:text-red-button400"
                strokeWidth={1.7}
              />
              <EditIcon
                className="h-7 w-7 text-green-main500 dark:text-green-light400"
                strokeWidth={1.7}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mb-8 flex justify-center gap-8">
        <button
          onClick={prevCard}
          className={`${
            workouts.length === 1 && "pointer-events-none opacity-30"
          } text-slate-light500 dark:text-slate-light300`}
        >
          {PrevCardArrow}
        </button>
        <div className="flex items-center gap-1">
          {workouts.map((workout, i) => (
            <div
              key={workout.id}
              className={
                cardInFocus === i
                  ? "h-4 w-4 rounded-full bg-slate-light500 dark:bg-slate-light300"
                  : "h-3 w-3 rounded-full bg-slate-light300 dark:bg-slate-light500"
              }
            />
          ))}
        </div>
        <button
          onClick={nextCard}
          className={`${
            workouts.length === 1 && "pointer-events-none opacity-30"
          } text-slate-light500 dark:text-slate-light300`}
        >
          {NextCardArrow}
        </button>
      </div>
    </>
  );
};
