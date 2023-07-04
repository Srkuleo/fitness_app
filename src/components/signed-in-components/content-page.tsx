import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useCardInFocus } from "../../hooks/useCardInFocus";
import type { WorkoutProps } from "../../types/types";
import {
  CarouselNav,
  EditMenu,
  EditMenuButton,
  WorkoutButtons,
} from "../buttons";
import { EditMenuWrapper } from "../wrappers";

export const ContentPage = ({ workouts }: { workouts: WorkoutProps[] }) => {
  const { cardInFocus, prevCard, nextCard, jumpToCard, switchInFocus } =
    useCardInFocus(workouts);
  const [showEditMenu, setShowEditMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="m-auto max-w-full overflow-x-hidden px-2 xs:max-w-sm md:rounded-xl md:border-2 md:border-orange-button500 md:bg-white md:px-0 md:dark:bg-slate-dark800">
        <motion.div
          animate={{
            transition: { duration: 0.4, ease: "easeOut" },
            transform: `translateX(-${cardInFocus * 100}%)`,
          }}
          className="flex items-center"
        >
          {workouts.map((workout) => (
            <div
              key={workout.id}
              className="flex min-w-full flex-col items-center py-4 md:py-8"
            >
              <p className="mb-2 text-2xl font-semibold text-slate-main600 dark:text-slate-light200">
                {workout.title}
              </p>
              <p className="mb-8 text-slate-light500 dark:text-slate-light300/90">
                {workout.description}
              </p>
              <WorkoutButtons />
            </div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {showEditMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15, ease: "easeOut" },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.1, ease: "easeIn" },
            }}
            className="absolute inset-0 bg-black/30 md:z-10"
            onClick={() => setShowEditMenu(false)}
          />
        )}
      </AnimatePresence>

      <EditMenuWrapper>
        <EditMenuButton openMenu={() => setShowEditMenu(true)} />
        <AnimatePresence>
          {showEditMenu && (
            <EditMenu
              showForm={() => setShowForm(true)}
              hideEditMenu={() => setShowEditMenu(false)}
            />
          )}
        </AnimatePresence>
      </EditMenuWrapper>

      <CarouselNav
        workouts={workouts}
        cardInFocus={cardInFocus}
        prevCard={prevCard}
        nextCard={nextCard}
      />
    </>
  );
};
