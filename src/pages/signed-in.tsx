import type { NextPage } from "next";
import Head from "next/head";
import { useWorkouts } from "../hooks/useWorkouts";
import { useOpenOptionsMenu } from "../hooks/useOpenOptionsMenu";
import { useEditBar } from "../hooks/useEditBar";
import { AnimatePresence } from "framer-motion";
import { NavBar } from "../components/sign-components/nav-bar";
import { OptionsMenuButton } from "../components/buttons";
import { OptionsMenu } from "../components/signed-in-components/options-menu";
import { EmptyPage } from "../components/signed-in-components/empty-page";

const SignedIn: NextPage = () => {
  const { workouts, addWorkout, reset, initial } = useWorkouts();
  const { isOpenOptionsMenu, openMenu, closeMenu } = useOpenOptionsMenu();
  const { editBar, toggleEditBar } = useEditBar();

  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>NoteSet</title>
        <meta name="description" content="Personalized workout tracker" />
      </Head>
      <main className="h-screen flex flex-col">
        <NavBar>
          <OptionsMenuButton openMenu={openMenu} />
          <AnimatePresence>
            {isOpenOptionsMenu && (
              <OptionsMenu
                toggleEditBar={toggleEditBar}
                closeMenu={closeMenu}
              />
            )}
          </AnimatePresence>
        </NavBar>

        <Helpers reset={reset} initial={initial} />

        {!workouts ? <EmptyPage /> : <></>}
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
    <div className="absolute bottom-16 left-2 z-10 flex max-h-[150px] max-w-[70px] flex-col items-start gap-2 xs:right-2 xs:top-16 md:right-20 md:top-20">
      <button
        onClick={reset}
        className="rounded-full bg-white p-3 text-xs text-slate-main600"
      >
        Reset
      </button>
      <button
        onClick={initial}
        className="rounded-full bg-white p-3 text-xs text-slate-main600"
      >
        Initial
      </button>
    </div>
  );
};

export default SignedIn;
