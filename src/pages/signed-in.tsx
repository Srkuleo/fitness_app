import { type NextPage } from "next";
import Head from "next/head";
import { Pattern } from "../components/svg-components/circle-pattern";
import { Curve } from "../components/svg-components/curve-pattern";
import NavBar from "../components/signed-in-components/nav-bar";
import { RadioButtonContentWrapper } from "../components/wrappers";
import { RadioButtonHeading } from "../components/headings";
import RadioButtons from "../components/signed-in-components/radiobuttons";
import { StartButton } from "../components/buttons";
import { type RadioButtonProps } from "../types/types";
import { useReducer, useState } from "react";
import { workoutsReducer } from "../functions and variables/functions";

let nextId = 0;

const initialWorkouts: RadioButtonProps[] = [
  { id: nextId++, name: "Upper 1", tooltip: "Good one, could be better." },
  { id: nextId++, name: "Upper 2", tooltip: "A little bit better, imo." },
  { id: nextId++, name: "Lower 1", tooltip: "The best one so far!" },
];

const SignedIn: NextPage = () => {
  const [workouts, dispatch] = useReducer(workoutsReducer, initialWorkouts);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }

  function toggleEdit() {
    setIsEditing(!isEditing);
  }

  function handleAddWorkout({
    name,
    tooltip,
  }: Pick<RadioButtonProps, "name" | "tooltip">) {
    dispatch({
      type: "added",
      workout: {
        id: nextId++,
        name: name,
        tooltip: tooltip,
      },
    });
  }

  function handleChangeWorkout(workout: RadioButtonProps) {
    dispatch({
      type: "edited",
      workout: workout,
    });
  }

  function handleDeleteWorkout(workout: RadioButtonProps) {
    dispatch({
      type: "deleted",
      workout: workout,
    });
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>NoteSet</title>
        <meta name="description" content="Personalized workout tracker" />
      </Head>
      <main>
        <Pattern />
        <Curve />
        <NavBar
          isOpen={isOpen}
          toggleDropDown={toggleDropDown}
          toggleEdit={toggleEdit}
        />
        <RadioButtonContentWrapper>
          <RadioButtonHeading />
          <RadioButtons
            workouts={workouts}
            isEditing={isEditing}
            handleAddWorkout={handleAddWorkout}
            handleChangeWorkout={handleChangeWorkout}
            handeDeleteWorkout={handleDeleteWorkout}
          />
          <StartButton />
        </RadioButtonContentWrapper>
      </main>
    </>
  );
};

export default SignedIn;
