import type { NextPage } from "next";
import Head from "next/head";
import { useWorkouts } from "../hooks/useWorkouts";
import { useOpenOptionsMenu } from "../hooks/useOpenOptionsMenu";
import { useEditBar } from "../hooks/useEditBar";
import { AnimatePresence } from "framer-motion";
import { NavBar } from "../components/sign-components/nav-bar";
import { OptionsMenuButton } from "../components/buttons";
import { OptionsMenu } from "../components/signed-in-components/options-menu";
import { PageContent } from "../components/signed-in-components/page-content";

const SignedIn: NextPage = () => {
  const { workouts, addWorkout, changeWorkout, removeWorkout } = useWorkouts([
    { id: 0, title: "Upper 1", description: "Good one, could be better." },
    { id: 1, title: "Upper 2", description: "A little bit better, imo." },
    { id: 2, title: "Lower 1", description: "The best one so far!" },
    { id: 3, title: "Lower 2", description: "The best one so far!" },
  ]);
  const { isOpenOptionsMenu, openMenu, closeMenu } = useOpenOptionsMenu();
  const { editBar, toggleEditBar } = useEditBar();

  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>NoteSet</title>
        <meta name="description" content="Personalized workout tracker" />
      </Head>
      <main>
        <NavBar>
          <OptionsMenuButton openMenu={openMenu} />
        </NavBar>

        <AnimatePresence>
          {isOpenOptionsMenu && (
            <OptionsMenu toggleEditBar={toggleEditBar} closeMenu={closeMenu} />
          )}
        </AnimatePresence>

        <PageContent
          workouts={workouts}
          addWorkout={addWorkout}
          changeWorkout={changeWorkout}
          removeWorkout={removeWorkout}
          editBar={editBar}
          toggleEditBar={toggleEditBar}
        />
      </main>
    </>
  );
};

export default SignedIn;
