import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import type {
  CarouselNavArrowsProps,
  CarouselNavBtnsProps,
} from "../types/types";
import { buttonsVariant } from "../utils/variables";
import {
  DarkModeIcon,
  LightModeIcon,
  DoneIcon,
  PrevCardArrow,
  NextCardArrow,
  CancelIcon,
} from "./svg-components/svg";
import { DiscardModal, SubmitModal } from "./signed-in-components/modals";

//Sign pages buttons
export const GitHubButton = () => {
  return (
    <a
      href="https://github.com/Srkuleo/noteset"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        className="h-7 w-7 text-slate-light50 hover:text-slate-light300 dark:hover:text-slate-light400 md:text-slate-main600 md:hover:text-slate-light500 md:dark:text-slate-light50"
        aria-hidden="true"
        version="1.1"
        viewBox="0 0 16 16"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
        ></path>
      </svg>
    </a>
  );
};

export const ModeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function toggleMode() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  if (!mounted) return <></>;

  return (
    <button onClick={toggleMode}>
      {resolvedTheme === "dark" ? (
        <LightModeIcon className="h-7 w-7 text-slate-light50 hover:text-slate-light300 dark:hover:text-slate-light400" />
      ) : (
        <DarkModeIcon className="h-7 w-7 text-slate-main600 hover:text-slate-main600/60" />
      )}
    </button>
  );
};

export const SignButton = ({ page }: { page: "sign in" | "sign up" }) => {
  return (
    <Link href={page === "sign in" ? "/signed-in" : "/"} className="sign-btn">
      {page === "sign in" ? "Sign in" : "Sign up"}
    </Link>
  );
};

//Signed in page buttons
export const StartBtn = () => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className="rounded-xl bg-gradient-to-r from-orange-button500
      to-red-button500 px-6 py-2 font-semibold uppercase text-slate-light200
      shadow-md hover:from-orange-button600 hover:to-red-button700"
    >
      Start
    </motion.button>
  );
};

export const CarouselNavArrows = ({
  workouts,
  prevCard,
  nextCard,
}: CarouselNavArrowsProps) => {
  return (
    <div className="absolute inset-0 flex items-center justify-between">
      <button
        className="text-slate-dark700 disabled:pointer-events-none disabled:opacity-20 dark:text-slate-light50"
        onClick={prevCard}
        disabled={workouts.length < 2}
      >
        {PrevCardArrow}
      </button>
      <button
        className="text-slate-dark700 disabled:pointer-events-none disabled:opacity-20 dark:text-slate-light50"
        onClick={nextCard}
        disabled={workouts.length < 2}
      >
        {NextCardArrow}
      </button>
    </div>
  );
};

export const CarouselNavBtns = ({
  workouts,
  cardInFocus,
  jumpToCard,
}: CarouselNavBtnsProps) => {
  return (
    <div className="gap-carouselNavBtns flex items-center justify-center">
      {workouts.map((workout, i) => (
        <div
          key={workout.id}
          role="button"
          className={`h-3 w-3 rounded-full bg-slate-light500 dark:bg-slate-light100 ${
            cardInFocus === i ? "p-2" : "opacity-40"
          }`}
          onClick={() => jumpToCard(i)}
        ></div>
      ))}
    </div>
  );
};

export const FormBtns = () => {
  const [showCancel, setShowCancel] = useState(false);
  const [showDone, setShowDone] = useState(false);
  const [discardModal, setDiscardModal] = useState(false);
  const [submitModal, setSubmitModal] = useState(false);

  return (
    <>
      <div className="mt-2 flex gap-2">
        <motion.button
          type="button"
          onClick={() => setDiscardModal(true)}
          className="flex items-center gap-1 rounded-full bg-slate-light300 p-2 text-sm text-slate-main600 shadow-sm dark:bg-slate-light400 dark:text-slate-light50"
          onHoverStart={() => setShowCancel(true)}
          onHoverEnd={() => setShowCancel(false)}
        >
          <AnimatePresence>
            {showCancel && (
              <motion.span
                variants={buttonsVariant}
                initial="hidden"
                animate="show"
                exit="hide"
                className="overflow-hidden pl-2"
              >
                Cancel
              </motion.span>
            )}
          </AnimatePresence>
          {CancelIcon}
        </motion.button>

        <motion.button
          type="button"
          onClick={() => setSubmitModal(true)}
          className="flex items-center gap-1 rounded-full bg-slate-light300 p-2 text-sm text-slate-main600 shadow-sm dark:bg-slate-light400 dark:text-slate-light50"
          onHoverStart={() => setShowDone(true)}
          onHoverEnd={() => setShowDone(false)}
        >
          {DoneIcon}
          <AnimatePresence>
            {showDone && (
              <motion.span
                variants={buttonsVariant}
                initial="hidden"
                animate="show"
                exit="hide"
                className="overflow-hidden pr-2"
              >
                Done
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {discardModal && (
          <DiscardModal onClose={() => setDiscardModal(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {submitModal && <SubmitModal onClose={() => setSubmitModal(false)} />}
      </AnimatePresence>
    </>
  );
};
