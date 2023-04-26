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
    <div className="mt-12 max-w-fit px-2 text-center xs:mx-auto xs:max-w-[450px] xs:px-0 md:mt-24">
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
      x: `-${cardInFocus * 100}%`,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-[540px] max-w-fit overflow-hidden xs:mx-auto xs:max-w-[400px]">
      <motion.div
        variants={variant}
        animate="slide"
        className="flex min-h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

export const ModalWrapper = ({ children }: WrapperProp) => {
  const fadeVariant = {
    hidden: { opacity: 0 },
    "fade-in": {
      opacity: 1,
      transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] },
      "fade-out": {
        opacity: 0,
        transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
      },
    },
  };

  const flyVariant = {
    lower: { opacity: 0, y: "25%" },
    "fly-in": {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] },
    },
    "fly-out": {
      opacity: 0,
      y: "25%",
      transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
    },
  };

  return (
    <div>
      <motion.div
        variants={fadeVariant}
        initial="hidden"
        animate="fade-in"
        exit="fade-out"
        className="fixed inset-0 bg-slate-dark800 bg-opacity-75 dark:bg-slate-dark950 dark:bg-opacity-90"
      />

      <motion.div
        variants={flyVariant}
        initial="lower"
        animate="fly-in"
        exit="fly-out"
        className="fixed inset-0 overflow-y-auto"
      >
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-slate-light50 text-left shadow-xl transition-all dark:bg-slate-dark800 sm:my-8 sm:w-full sm:max-w-lg">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
