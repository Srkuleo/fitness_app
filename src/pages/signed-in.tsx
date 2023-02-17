import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import NoteSetLogo from "../components/logos/note-set-logo";
import {
  SignedInPageWrapper,
  FixedLogoWrapper,
  HeadingTextWrapper,
} from "../components/wrappers";
import {
  ArrowDownIcon,
  UserIcon,
  EditIcon,
  LogsIcon,
  DarkModeIcon,
  LightModeIcon,
  SignOutIcon,
  StartIcon,
  SelectedIcon,
} from "../components/svg";
import { type RadioButtonProps } from "../types/types";
import { useState } from "react";
import { atom, Provider as JotaiProvider } from "jotai";
import { useAtom } from "jotai/react";

export const darkModeAtom = atom(false);

const SignedIn: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>NoteSet</title>
        <meta name="description" content="Personalized workout tracker" />
      </Head>
      <main>
        <JotaiProvider>
          <SignedInPageWrapper>
            <FixedLogoWrapper>
              <NoteSetLogo />
            </FixedLogoWrapper>
            <HeadingTextWrapper>Welcome, Srkuleo!</HeadingTextWrapper>
            <OptionsMenu />
            <WorkoutRadioButtons />
          </SignedInPageWrapper>
        </JotaiProvider>
      </main>
    </>
  );
};

const OptionsMenu = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isDark, setIsDark] = useAtom(darkModeAtom);

  function toggleDropDown() {
    setShowDropDown(!showDropDown);
  }

  function toggleDarkMode() {
    setIsDark(!isDark);
  }

  return (
    <div className="fixed top-7 right-18 flex flex-col items-end gap-2">
      <button
        onClick={toggleDropDown}
        className={`${
          isDark ? "hover:bg-green-light400/70" : "hover:bg-green-dark600"
        } m-0 flex items-center gap-3 rounded-lg bg-green-dark700 px-3 py-1 font-medium text-yellow-text50 transition-all ease-out`}
      >
        Options
        {ArrowDownIcon}
      </button>
      {showDropDown && (
        <div className="flex flex-col rounded-lg bg-slate-light50 p-1 text-green-dark700">
          <Link
            className="flex items-center gap-2 from-green-main500 to-green-dark700 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50"
            href="/"
          >
            {UserIcon}
            Srkuleo
          </Link>
          <button className="flex items-center gap-2 from-green-main500 to-green-dark700 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50">
            {EditIcon}
            Edit
          </button>
          <button className="flex items-center gap-2 from-green-main500 to-green-dark700 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50">
            {LogsIcon}
            View logs
          </button>
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 from-green-main500 to-green-dark700 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50"
          >
            {isDark ? LightModeIcon : DarkModeIcon}
            {isDark ? "Light mode" : "Dark mode"}
          </button>
          <div className="my-1 border-b border-green-main500/20"></div>
          <Link
            className="flex items-center gap-2 from-green-main500 to-green-dark700 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50"
            href="/"
          >
            {SignOutIcon}
            Sign out
          </Link>
        </div>
      )}
    </div>
  );
};

const WorkoutRadioButtons = () => {
  const [isDark] = useAtom(darkModeAtom);
  const [workouts, setWorkouts] = useState(initialWorkouts);

  function toggleIsSelected(id: number) {
    const newWorkouts = workouts.map((workout) => {
      if (workout.id === id) {
        return {
          ...workout,
          selected: true,
        };
      } else {
        return {
          ...workout,
          selected: false,
        };
      }
    });
    setWorkouts(newWorkouts);
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <h3
        className={`mb-2 text-xl font-semibold ${
          isDark ? "text-yellow-text50" : "text-slate-main600"
        }`}
      >
        Choose your workout for today:
      </h3>
      <div className="flex flex-col gap-2 rounded-xl">
        {workouts.map((workout) => {
          return (
            <button
              onClick={() => {
                toggleIsSelected(workout.id);
              }}
              key={workout.id}
              className={`${
                isDark
                  ? "focus:shadow-outline-blue bg-slate-light50 from-green-dark800 to-green-main500 focus:bg-gradient-to-r  "
                  : "focus:shadow-outline-green bg-gradient-to-r from-sky-light300 to-slate-light300 focus:from-sky-dark700 focus:to-slate-light400 "
              } rounded-lg p-3 text-xl text-slate-main600 focus:text-yellow-text50`}
            >
              <div className="flex items-center gap-18">
                <div className="w-[30ch] text-left">
                  <p className="font-semibold">{workout.workout}</p>
                  <p className="text-sm italic">{workout.tooltip}</p>
                </div>
                {workout.selected ? (
                  <SelectedIcon stroke="#0369a1" fill="#7dd3fc" />
                ) : (
                  <SelectedIcon />
                )}
              </div>
            </button>
          );
        })}
      </div>
      <button className="mt-12 flex items-center gap-1 rounded-xl bg-gradient-to-r from-orange-button500 to-red-button500 px-8 py-2 text-lg font-semibold uppercase text-yellow-text50 hover:from-orange-button600 hover:to-red-button700">
        Start
        {StartIcon}
      </button>
    </div>
  );
};

const initialWorkouts: RadioButtonProps[] = [
  {
    id: 1,
    workout: "Upper 1",
    tooltip: "Mix profile day, both chest and back highly activated.",
    selected: false,
  },
  {
    id: 2,
    workout: "Lower 1",
    tooltip: "Quad heavy day, with few glute/hamstrings exercises.",
    selected: false,
  },
  {
    id: 3,
    workout: "Upper 2",
    tooltip: "Heavy back day, with complementary chest exercises.",
    selected: false,
  },
  {
    id: 4,
    workout: "Lower 2",
    tooltip: "All arounder. Leg press + DL, heavy compound day.",
    selected: false,
  },
];

export default SignedIn;
