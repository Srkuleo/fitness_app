import { type NextPage } from "next";
import Head from "next/head";
import { useWorkouts } from "../hooks/useWorkouts";
import { useEdit } from "../hooks/useEdit";
import type { WorkoutProps } from "../types/types";
import BackgroundPattern from "../components/svg-components/background-pattern";
import {
  FixedLogo,
  OptionsMenu,
} from "../components/signed-in-components/fixed-components";
import { CardsContentWrapper } from "../components/wrappers";
import { CardsContainerHeading } from "../components/headings";
import CardsContainer from "../components/signed-in-components/cards-container";

const initialWorkouts: WorkoutProps[] = [
  { id: 1, name: "Upper 1", tooltip: "Good one, could be better." },
  { id: 2, name: "Upper 2", tooltip: "A little bit better, imo." },
  { id: 3, name: "Lower 1", tooltip: "The best one so far!" },
  { id: 4, name: "Lower 2", tooltip: "The best one so far!" },
  { id: 5, name: "Lower 3", tooltip: "The best one so far!" },
];

const SignedIn: NextPage = () => {
  const { workouts, addWorkout, changeWorkout, removeWorkout } =
    useWorkouts(initialWorkouts);
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
        <OptionsMenu toggleEdit={toggleEdit} />
        <CardsContentWrapper>
          <CardsContainerHeading workouts={workouts} />
          <CardsContainer
            workouts={workouts}
            addWorkout={addWorkout}
            changeWorkout={changeWorkout}
            removeWorkout={removeWorkout}
            isEditing={isEditing}
            toggleEdit={toggleEdit}
          />
        </CardsContentWrapper>
      </main>
    </>
  );
};

export default SignedIn;
