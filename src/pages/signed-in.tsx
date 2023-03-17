import { type NextPage } from "next";
import Head from "next/head";
import { useWorkouts } from "../hooks/useWorkouts";
import { useEdit } from "../hooks/useEdit";
import { useHandleId } from "../hooks/useHandleId";
import type { WorkoutProps } from "../types/types";
import BackgroundPattern from "../components/svg-components/background-pattern";
import {
  FixedLogo,
  OptionsMenu,
} from "../components/signed-in-components/fixed-components";
import { RadioButtonContentWrapper } from "../components/wrappers";
import { RadioButtonHeading } from "../components/headings";
import RBComponent from "../components/signed-in-components/rb-component";
import { StartButton } from "../components/buttons";

const initialWorkouts: WorkoutProps[] = [
  { id: 1, name: "Upper 1", tooltip: "Good one, could be better." },
  { id: 2, name: "Upper 2", tooltip: "A little bit better, imo." },
  { id: 3, name: "Lower 1", tooltip: "The best one so far!" },
];

const SignedIn: NextPage = () => {
  const { workouts, addWorkout, changeWorkout, removeWorkout } =
    useWorkouts(initialWorkouts);
  const { isEditing, toggleEdit } = useEdit();
  const { selectedId, addSelectedId, removeSelectedId } = useHandleId();

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
          toggleEdit={toggleEdit}
          removeSelectedId={removeSelectedId}
        />
        <RadioButtonContentWrapper>
          <RadioButtonHeading />
          <RBComponent
            workouts={workouts}
            addWorkout={addWorkout}
            changeWorkout={changeWorkout}
            removeWorkout={removeWorkout}
            isEditing={isEditing}
            toggleEdit={toggleEdit}
            selectedId={selectedId}
            addSelectedId={addSelectedId}
          />
          {workouts.length > 0 && <StartButton />}
        </RadioButtonContentWrapper>
      </main>
    </>
  );
};

export default SignedIn;
