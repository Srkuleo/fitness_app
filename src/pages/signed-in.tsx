import type { NextPage } from "next";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { useWorkouts } from "../hooks/useWorkouts";
import { useOpenOptionsMenu } from "../hooks/useOpenOptionsMenu";
import { NavBar } from "../components/sign-components/nav-bar";
import { OptionsMenuButton } from "../components/buttons";
import { OptionsMenu } from "../components/signed-in-components/options-menu";
import { EmptyPage } from "../components/signed-in-components/empty-page";
import { ContentPage } from "../components/signed-in-components/content-page";

const SignedIn: NextPage = () => {
  const { workouts, addWorkout, reset, initial } = useWorkouts();
  const { isOpenOptionsMenu, openMenu, closeMenu } = useOpenOptionsMenu();

  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>NoteSet</title>
        <meta name="description" content="Personalized workout tracker" />
      </Head>

      <main className="flex min-h-screen flex-col">
        <NavBar>
          <OptionsMenuButton openMenu={openMenu} />
          <AnimatePresence>
            {isOpenOptionsMenu && <OptionsMenu closeMenu={closeMenu} />}
          </AnimatePresence>
        </NavBar>

        {!workouts ? <EmptyPage /> : <ContentPage workouts={workouts} />}

        <Helpers reset={reset} initial={initial} />
      </main>
    </>
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
    <div className="absolute left-4 top-16 flex max-h-[150px] max-w-[70px] flex-col items-start gap-2 md:top-20">
      <button
        onClick={reset}
        className="rounded-full bg-slate-light400 p-3 px-4 text-xs text-slate-light50"
      >
        R
      </button>
      <button
        onClick={initial}
        className="rounded-full bg-slate-light400 p-3 px-4 text-xs text-slate-light50"
      >
        S
      </button>
    </div>
  );
};

export default SignedIn;
