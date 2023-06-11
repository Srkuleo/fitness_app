import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCardInFocus } from "../../hooks/useCardInFocus";
import type { WorkoutProps } from "../../types/types";
import { EditMenuWrapper } from "../wrappers";
import { CarouselNav, EditMenu, EditMenuButton, StartBtn } from "../buttons";

export const ContentPage = ({ workouts }: { workouts: WorkoutProps[] }) => {
  const { cardInFocus, prevCard, nextCard, jumpToCard, switchInFocus } =
    useCardInFocus(workouts);
  const [showEditMenu, setShowEditMenu] = useState(false);

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
              className="flex min-w-full flex-col items-center py-4"
            >
              <p className="mb-2 text-2xl font-semibold text-slate-main600 dark:text-slate-light200">
                {workout.title}
              </p>
              <p className="mb-8 text-slate-light500 dark:text-slate-light300/90">
                {workout.description}
              </p>
              <div className="mb-8 flex flex-col gap-2 text-center text-slate-dark700 dark:text-slate-light100">
                <div className="flex gap-4">
                  <p className="flex-1 px-2 text-sm font-semibold uppercase">
                    Main block
                  </p>
                  <p className="flex-1 px-2 text-sm font-semibold uppercase">
                    Supersets
                  </p>
                </div>

                <div className="flex gap-4 italic text-slate-light500 dark:text-slate-light300/80">
                  <ul className="flex flex-1 flex-col justify-center rounded-xl bg-white/90 px-2 py-4 text-sm shadow-sm dark:bg-slate-dark800 md:bg-none md:shadow-none">
                    {workout.mainBlock.map((exercise) => (
                      <li className="mb-2" key={exercise}>
                        {exercise}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-1 flex-col justify-center rounded-xl bg-white/90 px-2 py-4 text-sm shadow-sm dark:bg-slate-dark800 md:bg-none md:shadow-none">
                    {workout.superSets.map((exercise) => (
                      <li className="mb-2" key={exercise}>
                        {exercise}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <StartBtn />
            </div>
          ))}
        </motion.div>
      </div>

      {showEditMenu && (
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setShowEditMenu(false)}
        />
      )}
      <EditMenuWrapper>
        <EditMenuButton openMenu={() => setShowEditMenu(true)} />
        <AnimatePresence>{showEditMenu && <EditMenu />}</AnimatePresence>
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
