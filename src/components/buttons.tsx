import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import type { CarouselNavProps } from "../types/types";
import {
  DarkModeIcon,
  LightModeIcon,
  PrevCardArrow,
  NextCardArrow,
  CancelIcon,
  AddIcon,
  EditIcon,
  RemoveIcon,
  EditBarIcon,
} from "./svg";

//Navbar buttons
export const GitHubButton = () => {
  return (
    <motion.a
      whileTap={{ scale: 0.95 }}
      href="https://github.com/Srkuleo/noteset"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        className="h-7 w-7 text-slate-light50"
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
    </motion.a>
  );
};

export const ModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

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
        <LightModeIcon className="h-7 w-7 text-slate-light50" />
      ) : (
        <DarkModeIcon className="h-7 w-7 text-slate-main600" />
      )}
    </button>
  );
};

export const OptionsMenuButton = ({ openMenu }: { openMenu: () => void }) => {
  return (
    <button onClick={openMenu}>
      <svg
        className="h-7 w-7 text-slate-light50"
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
    <motion.button
      whileTap={{ scale: 0.95 }}
      autoFocus={true}
      onClick={closeMenu}
      className="fixed left-8 top-8 rounded-xl bg-slate-light100 p-1 dark:bg-slate-dark700 dark:ring-1 dark:ring-slate-light500"
    >
      <CancelIcon
        className="h-7 w-7 text-slate-dark700 dark:text-slate-light100"
        strokeWidth={1.8}
      />
    </motion.button>
  );
};

//Sign button
export const SignButton = ({ page }: { page: "sign in" | "sign up" }) => {
  return (
    <motion.div className="flex" whileTap={{ scale: 0.95 }}>
      <Link
        href={page === "sign in" ? "/signed-in" : "/"}
        className="min-w-full rounded-3xl bg-green-main500 p-3 text-center font-semibold text-slate-light50 shadow-md ring-inset dark:bg-green-dark600 dark:ring-2 dark:ring-green-main500"
      >
        {page === "sign in" ? "Sign in" : "Sign up"}
      </Link>
    </motion.div>
  );
};

//Signed in page buttons
export const StartBtn = () => {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className="rounded-xl bg-gradient-to-r from-orange-button500
      to-red-button500 px-6 py-2 font-semibold uppercase text-slate-light200
      shadow-md dark:shadow-slate-dark950"
    >
      Start
    </motion.button>
  );
};

export const EditMenuButton = ({ openMenu }: { openMenu: () => void }) => {
  return (
    <button
      onClick={openMenu}
      className="rounded-full bg-green-main500 p-3 shadow-lg dark:bg-green-dark600 dark:shadow-black"
    >
      <EditBarIcon className="h-7 w-7 text-slate-light50" strokeWidth={1.3} />
    </button>
  );
};

export const EditMenu = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{
        width: "auto",
        transition: { duration: 0.15, ease: "easeOut" },
      }}
      exit={{
        width: 0,
        transition: { duration: 0.1, ease: "easeIn" },
      }}
      className="flex flex-row-reverse gap-4 rounded-full bg-white px-4 py-2  shadow-sm dark:bg-slate-dark700/90 dark:shadow-black"
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
  );
};

export const CarouselNav = ({
  workouts,
  cardInFocus,
  prevCard,
  nextCard,
}: CarouselNavProps) => {
  return (
    <div className="mb-8 flex justify-center gap-8">
      <button
        disabled={workouts.length === 1}
        onClick={prevCard}
        className="text-slate-light500 
        disabled:opacity-30 dark:text-slate-light300"
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
        disabled={workouts.length === 1}
        onClick={nextCard}
        className="text-slate-light500 disabled:pointer-events-none disabled:opacity-30 dark:text-slate-light300"
      >
        {NextCardArrow}
      </button>
    </div>
  );
};
