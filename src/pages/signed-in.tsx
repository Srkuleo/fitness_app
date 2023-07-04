import type { NextPage } from "next";
import Head from "next/head";
import { useWorkouts } from "../hooks/useWorkouts";
import { NavBar } from "../components/sign-components/nav-bar";
import { EmptyPage } from "../components/signed-in-components/empty-page";
import { ContentPage } from "../components/signed-in-components/content-page";
import Link from "next/link";
import { LogsIcon, SignOutIcon, UserIcon } from "../components/svg";

const SignedIn: NextPage = () => {
  const { workouts, addWorkout, reset, initial } = useWorkouts();

  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>NoteSet</title>
        <meta name="description" content="Personalized workout tracker" />
      </Head>

      <main className="flex min-h-screen flex-col">
        <NavBar />
        {!workouts ? <EmptyPage /> : <ContentPage workouts={workouts} />}
        <Footer />

        <Helpers reset={reset} initial={initial} />
      </main>
    </>
  );
};

const Footer = () => {
  return (
    <div className="flex w-full justify-center gap-6 bg-green-dark600 pb-4 dark:bg-green-dark800 md:mx-auto md:w-1/2 md:gap-8 md:rounded-t-xl lg:w-2/5 2xl:w-1/3 md:pb-0">
      <Link
        className="flex flex-col items-center p-2 text-slate-light50 dark:text-green-light400"
        href="/"
      >
        {UserIcon}
        <p className="text-[9px] uppercase leading-4 tracking-wider text-white">
          profile
        </p>
      </Link>
      <button className="flex flex-col items-center p-2 text-slate-light50 dark:text-slate-light400">
        {LogsIcon}
        <p className="text-[9px] uppercase leading-4 tracking-wider text-white">
          logs
        </p>
      </button>
      <Link
        className="flex flex-col items-center p-2 text-slate-light50 dark:text-green-light400"
        href="/"
      >
        {SignOutIcon}
        <p className="text-[9px] uppercase leading-4 tracking-wider text-white">
          sign out
        </p>
      </Link>
    </div>
  );
};

const Helpers = ({
  reset,
  initial,
}: {
  reset: () => void;
  initial: () => void;
}) => {
  return (
    <div className="absolute left-4 top-16 flex gap-2 md:top-20">
      <button
        onClick={reset}
        className="rounded-full bg-slate-light400 p-2 text-xs text-slate-light50"
      >
        R
      </button>
      <button
        onClick={initial}
        className="rounded-full bg-slate-light400 p-2 text-xs text-slate-light50"
      >
        S
      </button>
    </div>
  );
};

export default SignedIn;
