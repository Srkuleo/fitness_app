import { motion } from "framer-motion";
import type { WrapperProp } from "../types/types";

//Wrappers for sign-in and sign-up pages
export const OAuthBtnWrapper = ({ children }: WrapperProp) => {
  return (
    <button
      className="flex w-full items-center justify-center gap-3 
      rounded-xl border-2 border-green-main500 bg-slate-light50 
      py-2 text-sm font-semibold text-slate-main600 transition-all ease-in 
      hover:translate-x-1 hover:bg-slate-light200/90 
      dark:bg-slate-dark800 dark:text-yellow-text50 dark:hover:bg-slate-light500/50"
    >
      {children}
    </button>
  );
};

//Wrappers for signed-in page
export const PageContentWrapper = ({ children }: WrapperProp) => {
  return (
    <div className="mt-24 px-2 text-center xs:mt-32 xs:px-0 md:mt-24">
      {children}
    </div>
  );
};

export const WorkoutCardsCarousel = ({
  children,
  cardInFocus,
}: WrapperProp & { cardInFocus: number }) => {
  const variant = {
    slide: {
      x: `-${cardInFocus * 105}%`,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="mx-auto mb-2 max-w-[370px] overflow-hidden">
      <motion.div
        variants={variant}
        animate="slide"
        className="flex min-h-[540px] gap-carousel"
      >
        {children}
      </motion.div>
    </div>
  );
};


