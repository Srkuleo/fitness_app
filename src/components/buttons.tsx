import Link from "next/link";
import type { ModeButtonProps } from "../types/types";
import {
  DarkModeIcon,
  LightModeIcon,
  AddIcon,
  DoneIcon,
} from "./svg-components/svg";

//Sign pages buttons
export const GitHubButton = () => {
  return (
    <a
      href="https://github.com/Srkuleo/noteset"
      target="_blank"
      rel="noreferrer"
      className="rounded-full p-smallButton hover:bg-slate-light300 dark:hover:bg-slate-light500/50"
    >
      <svg
        className="h-7 w-7 text-slate-main600 dark:text-slate-light50"
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

export const ModeButton = ({ theme, toggleMode }: ModeButtonProps) => {
  return (
    <button
      onClick={toggleMode}
      className="rounded-full p-smallButton hover:bg-slate-light300 dark:hover:bg-slate-light500/50"
    >
      {theme === "dark" ? (
        <LightModeIcon className="h-7 w-7" />
      ) : (
        <DarkModeIcon className="h-7 w-7 text-slate-main600" />
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
    <button
      className="rounded-xl bg-gradient-to-r from-orange-button500 relative z-10
      to-red-button500 px-6 py-2 font-semibold uppercase text-slate-light200
      shadow-md hover:from-orange-button600 hover:to-red-button700"
    >
      Start
    </button>
  );
};

export const StatelessAddWorkoutBtn = ({
  addingState,
}: {
  addingState: () => void;
}) => {
  return (
    <button
      className="flex items-center gap-2 rounded-lg bg-green-dark700 p-2 text-xs italic text-slate-light200 shadow-sm hover:bg-green-dark600"
      onClick={addingState}
    >
      {AddIcon}
      Add a new workout
    </button>
  );
};

export const SubmitFormBtn = () => {
  return (
    <button
      type="submit"
      className="col-start-3 mx-auto mt-4 rounded-full bg-slate-light400 p-mediumButton text-slate-light50 transition-all ease-out hover:bg-slate-main600"
    >
      {DoneIcon}
    </button>
  );
};
