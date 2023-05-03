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
      className="flex min-w-full items-center justify-center gap-3 
      rounded-xl border-2 border-green-main500 bg-slate-light50 
      py-2 text-sm font-semibold text-slate-main600 
      dark:bg-slate-dark800 dark:text-yellow-text50"
    >
      {children}
    </motion.button>
  );
};
