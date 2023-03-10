import { type NextPage } from "next";
import Head from "next/head";
import { Pattern } from "../components/svg-components/circle-pattern";
import { Curve } from "../components/svg-components/curve-pattern";
import NavBar from "../components/signed-in-components/nav-bar";
import { RadioButtonContentWrapper } from "../components/wrappers";
import { RadioButtonHeading } from "../components/headings";
import RBComponent from "../components/signed-in-components/radiobuttons";
import { StartButton } from "../components/buttons";
import { useReducer, useState } from "react";
import { workoutsReducer } from "../functions and variables/functions";
import type { WorkoutProps } from "../types/types";

let nextId = 0;

const initialWorkouts: WorkoutProps[] = [
  { id: nextId++, name: "Upper 1", tooltip: "Good one, could be better." },
  { id: nextId++, name: "Upper 2", tooltip: "A little bit better, imo." },
  { id: nextId++, name: "Lower 1", tooltip: "The best one so far!" },
];

const SignedIn: NextPage = () => {
  const [workouts, dispatch] = useReducer(workoutsReducer, initialWorkouts);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  function handleAddWorkout({
    name,
    tooltip,
  }: Pick<WorkoutProps, "name" | "tooltip">) {
    dispatch({
      type: "added",
      workout: {
        id: nextId++,
        name: name,
        tooltip: tooltip,
      },
    });
  }

  function handleChangeWorkout(workout: WorkoutProps) {
    dispatch({
      type: "edited",
      workout: workout,
    });
  }

  function handleDeleteWorkout(workout: WorkoutProps) {
    dispatch({
      type: "deleted",
      workout: workout,
    });
  }

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }

  function toggleEdit() {
    setIsEditing(!isEditing);
  }

  function handleId(id: number) {
    setSelectedId(id);
  }

  function removeSelectedID() {
    setSelectedId(undefined);
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
          removeSelectedId={removeSelectedID}
        />
        <RadioButtonContentWrapper>
          <RadioButtonHeading />
          <RBComponent
            workouts={workouts}
            isEditing={isEditing}
            toggleEdit={toggleEdit}
            handleAddWorkout={handleAddWorkout}
            handleChangeWorkout={handleChangeWorkout}
            handleDeleteWorkout={handleDeleteWorkout}
            selectedId={selectedId}
            handleId={handleId}
          />
          <StartButton />
        </RadioButtonContentWrapper>
      </main>
    </>
  );
};

export default SignedIn;
