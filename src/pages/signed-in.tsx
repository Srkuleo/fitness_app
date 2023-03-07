import { type NextPage } from "next";
import Head from "next/head";
import { Pattern } from "../components/svg-components/circle-pattern";
import { Curve } from "../components/svg-components/curve-pattern";
import NavBar from "../components/signed-in-components/nav-bar";
import RadioButtonsContent from "../components/signed-in-components/radio-buttons-content";
import { useState } from "react";

const SignedIn: NextPage = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function toggleAdding() {
    setIsAdding(!isAdding);
  }

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }

  function closeDropDown() {
    setIsOpen(false);
  }

  return (
    <>
      <Head>
        <link rel='icon' href='/noteset.ico' />
        <title>NoteSet</title>
        <meta name='description' content='Personalized workout tracker' />
      </Head>
      <main>
        <Pattern />
        <Curve />
        <NavBar
          toggleAdding={toggleAdding}
          isOpen={isOpen}
          toggleDropDown={toggleDropDown}
        />
        <RadioButtonsContent
          isAdding={isAdding}
          toggleAdding={toggleAdding}
          closeDropDown={closeDropDown}
        />
      </main>
    </>
  );
};

export default SignedIn;
