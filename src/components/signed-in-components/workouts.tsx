import { motion } from "framer-motion";
import type { PageContentProps } from "../../types/types";
import { StartBtn } from "../buttons";

export const Workouts = ({
  workouts,
  cardInFocus,
}: Pick<PageContentProps, "workouts"> & { cardInFocus: number }) => {
  const variant = {
    slide: {
      x: `-${cardInFocus * 100}%`,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <div className="my-auto overflow-hidden xs:mx-auto xs:max-w-[370px]">
      <motion.div
        variants={variant}
        animate="slide"
        className="flex xs:min-h-[540px]"
      >
        {workouts.map((workout) => (
          <div
            key={workout.id}
            className="flex min-w-full flex-col items-center p-4 xs:rounded-2xl xs:border-2 xs:border-orange-dark700 xs:bg-white xs:dark:border-orange-button600 xs:dark:bg-slate-dark800"
          >
            <div className="mb-2">
              <p className="text-2xl font-medium text-slate-main600 dark:text-slate-light200">
                {workout.title}
              </p>
            </div>
            <div className="mb-4 w-full px-6">
              <p className="break-words text-center text-sm text-slate-light400 dark:text-slate-light300/80">
                {workout.description}
              </p>
            </div>
            <StartBtn />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
