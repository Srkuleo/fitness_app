import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import type { CarouselNavigationProps } from "../types/types";
import {
  DarkModeIcon,
  LightModeIcon,
  DoneIcon,
  PrevCardArrow,
  NextCardArrow,
  CancelIcon,
} from "./svg";

//Navbar buttons
export const GitHubButton = () => {
  return (
    <a
      href="https://github.com/Srkuleo/noteset"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        className="h-6 w-6 text-slate-light50 hover:text-slate-light300 dark:hover:text-slate-light400 sm:h-7 sm:w-7 md:text-slate-main600 md:hover:text-slate-light500 md:dark:text-slate-light50"
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
        <LightModeIcon className="h-6 w-6 text-slate-light50 hover:text-slate-light300 dark:hover:text-slate-light400 sm:h-7 sm:w-7" />
      ) : (
        <DarkModeIcon className="h-6 w-6 text-slate-main600 hover:text-slate-main600/60 sm:h-7 sm:w-7" />
      )}
    </button>
  );
};

export const OptionsMenuButton = ({ openMenu }: { openMenu: () => void }) => {
  return (
    <button onClick={openMenu}>
      <svg
        className="h-6 w-6 text-slate-light50 hover:text-slate-light300 dark:hover:text-slate-light400 sm:h-7 sm:w-7 md:text-slate-main600 md:hover:text-slate-light500 md:dark:text-slate-light50"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
    </button>
  );
};

export const CloseButton = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <button
      onClick={closeMenu}
      className="fixed left-8 top-8 rounded-xl bg-white p-1 dark:bg-slate-main600"
    >
      <CancelIcon
        className="h-7 w-7 text-slate-main600 dark:text-white"
        strokeWidth={1.8}
      />
    </button>
  );
};

//Sign button
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

export const CarouselNavigation = ({
  workouts,
  prevCard,
  nextCard,
  cardInFocus,
  jumpToCard,
}: CarouselNavigationProps) => {
  return (
    <div className="mb-2 flex items-center justify-center gap-8">
      <button
        className="text-slate-dark700 disabled:pointer-events-none disabled:opacity-20 dark:text-slate-light50"
        onClick={prevCard}
        disabled={workouts.length < 2}
      >
        {PrevCardArrow}
      </button>

      <div className="flex items-center justify-center gap-carouselNavBtns">
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

export const FormBtns = () => {
  return (
    <div className="mt-2 flex gap-2">
      <motion.button
        whileTap={{ scale: 0.95 }}
        type="reset"
        className="rounded-full bg-slate-light300 p-2 text-sm text-slate-main600 shadow-sm dark:bg-slate-light400 dark:text-slate-light50"
      >
        <CancelIcon className="h-5 w-5" strokeWidth={2} />
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="rounded-full bg-slate-light300 p-2 text-sm text-slate-main600 shadow-sm dark:bg-slate-light400 dark:text-slate-light50"
      >
        {DoneIcon}
      </motion.button>
    </div>
  );
};
