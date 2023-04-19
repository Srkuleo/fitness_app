import type { NextPage } from "next";
import Head from "next/head";
import { useWorkouts } from "../hooks/useWorkouts";
import { useEditOverlay } from "../hooks/useEditOverlay";
import {
  FixedLogo,
  OptionsMenu,
} from "../components/signed-in-components/options-navbar";
import { PageContentWrapper } from "../components/wrappers";
import { CardsHeading } from "../components/headings";
import { CardsContent } from "../components/signed-in-components/cards-content";

const SignedIn: NextPage = () => {
  const { workouts, addWorkout, changeWorkout, removeWorkout } = useWorkouts([
    { id: 0, title: "Upper 1", description: "Good one, could be better." },
    { id: 1, title: "Upper 2", description: "A little bit better, imo." },
    { id: 2, title: "Lower 1", description: "The best one so far!" },
    { id: 3, title: "Lower 2", description: "The best one so far!" },
  ]);
  const { isOpenEditOverlay, openEditOverlay, closeEditOverlay } =
    useEditOverlay();

  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>NoteSet</title>
        <meta name="description" content="Personalized workout tracker" />
      </Head>
      <main>
        <FixedLogo />
        <OptionsMenu workouts={workouts} openEditOverlay={openEditOverlay} />
        <PageContentWrapper>
          <CardsHeading workouts={workouts} />
          <CardsContent
            workouts={workouts}
            addWorkout={addWorkout}
            changeWorkout={changeWorkout}
            removeWorkout={removeWorkout}
            isOpenEditOverlay={isOpenEditOverlay}
            closeEditOverlay={closeEditOverlay}
          />
        </PageContentWrapper>
      </main>
    </>
  );
};

export default SignedIn;
