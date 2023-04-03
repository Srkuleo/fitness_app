import { type NextPage } from "next";
import Head from "next/head";
import { useWorkouts } from "../hooks/useWorkouts";
import { useOpen } from "../hooks/useOpen";
import { useEdit } from "../hooks/useEdit";
import BackgroundPattern from "../components/svg-components/background-pattern";
import {
  FixedLogo,
  OptionsMenu,
} from "../components/signed-in-components/options-navbar";
import { PageContentWrapper } from "../components/wrappers";
import { CardsHeading } from "../components/headings";
import { CardsContent } from "../components/signed-in-components/cards-content";

const SignedIn: NextPage = () => {
  const { workouts, addWorkout, changeWorkout, removeWorkout } = useWorkouts([
    { id: 1, name: "Upper 1", tooltip: "Good one, could be better." },
    { id: 2, name: "Upper 2", tooltip: "A little bit better, imo." },
    { id: 3, name: "Lower 1", tooltip: "The best one so far!" },
    { id: 4, name: "Lower 2", tooltip: "The best one so far!" },
    { id: 5, name: "Lower 3", tooltip: "The best one so far!" },
    { id: 6, name: "Full body", tooltip: "This one is hella hard..." },
  ]);
  const { isOpen, openDropDown, closeDropDown } = useOpen();
  const { isEditing, toggleEdit } = useEdit();

  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>NoteSet</title>
        <meta name="description" content="Personalized workout tracker" />
      </Head>
      <main>
        <BackgroundPattern />
        <FixedLogo />
        <OptionsMenu
          workouts={workouts}
          isOpen={isOpen}
          openDropDown={openDropDown}
          toggleEdit={toggleEdit}
        />
        <PageContentWrapper closeDropDown={closeDropDown}>
          <CardsHeading workouts={workouts} />
          <CardsContent
            workouts={workouts}
            addWorkout={addWorkout}
            changeWorkout={changeWorkout}
            removeWorkout={removeWorkout}
            isEditing={isEditing}
            toggleEdit={toggleEdit}
          />
        </PageContentWrapper>
      </main>
    </>
  );
};

export default SignedIn;
