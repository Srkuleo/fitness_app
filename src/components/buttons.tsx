import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import type { CarouselNavigationProps, OptionsMenuProps } from "../types/types";
import {
  DarkModeIcon,
  LightModeIcon,
  PrevCardArrow,
  NextCardArrow,
  CancelIcon,
  AddIcon,
  DoneIcon,
  EditIcon,
  RemoveIcon,
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

export const CloseButton = ({
  closeMenu,
}: Pick<OptionsMenuProps, "closeMenu">) => {
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

export const EditBar = ({ toggleEditBar }: { toggleEditBar: () => void }) => {
  return (
    <div className="mb-8 flex justify-center gap-4">
      <button className="rounded-full bg-red-removeBtn600 p-2 text-red-removeBtn100 shadow-md dark:bg-red-removeBtn100 dark:text-red-removeBtn600">
        <RemoveIcon className="h-6 w-6" strokeWidth={2} />
      </button>
      <button className="rounded-full bg-green-main500 p-2 text-green-light200 shadow-md dark:bg-green-light200 dark:text-green-dark700">
        <EditIcon className="h-6 w-6" strokeWidth={2} />
      </button>
      <button className="rounded-full bg-slate-main600 p-2 text-white shadow-md dark:bg-white dark:text-slate-main600">
        <AddIcon className="h-6 w-6" strokeWidth={2} />
      </button>
      <button
        onClick={toggleEditBar}
        className="rounded-full bg-slate-main600 p-2 text-white shadow-md dark:bg-white dark:text-slate-main600"
      >
        <DoneIcon className="h-6 w-6" strokeWidth={2} />
      </button>
    </div>
  );
};

export const CarouselNavigation = ({
  workouts,
  prevCard,
  nextCard,
  cardInFocus,
}: CarouselNavigationProps) => {
  return (
    <div className="mb-8 flex items-center justify-center gap-8">
      <button
        className="text-slate-dark700 disabled:pointer-events-none disabled:opacity-20 dark:text-slate-light50"
        onClick={prevCard}
        disabled={workouts.length < 2}
      >
        {PrevCardArrow}
      </button>

      <div className="flex items-center justify-center gap-1">
        {workouts.map((workout, i) => (
          <div
            key={workout.id}
            className={`rounded-full bg-slate-light500 dark:bg-slate-light100 ${
              cardInFocus === i
                ? "h-3 w-3 opacity-100 xs:h-4 xs:w-4"
                : "h-2 w-2 opacity-40 xs:h-3 xs:w-3"
            }`}
          />
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
