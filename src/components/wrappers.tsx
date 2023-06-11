import { motion } from "framer-motion";
import type { WrapperProp } from "../types/types";

//Wrappers for sign-in and sign-up pages
export const OAuthBtnWrapper = ({ children }: WrapperProp) => {
  return (
    <motion.button
      whileTap={{
        translateX: 4,
        transition: { duration: 0.1, ease: "easeOut" },
      }}
      className="flex w-full items-center justify-center gap-3 
      rounded-xl border-2 border-green-main500 bg-slate-light50 
      py-2 text-sm font-semibold text-slate-main600 
      dark:bg-slate-dark800 dark:text-slate-light50"
    >
      {children}
    </motion.button>
  );
};

//Wrappers for signed-in page
export const EditMenuWrapper = ({ children }: WrapperProp) => {
  return (
    <div className="absolute right-4 top-18 flex flex-col items-center gap-3 xs:right-8 sm:right-16 md:top-24 lg:right-24 2xl:right-28">
      {children}
    </div>
  );
};
