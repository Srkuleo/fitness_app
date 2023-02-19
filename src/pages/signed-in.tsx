import { type NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/nav-bar";
import RadioButtonsContent from "../components/radio-buttons-content";
import { atom, Provider as JotaiProvider } from "jotai";

export const darkModeAtom = atom(false);
export const dropDownAtom = atom(false);

const SignedIn: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>NoteSet</title>
        <meta name="description" content="Personalized workout tracker" />
      </Head>
      <main>
        <JotaiProvider>
          <NavBar />
          <RadioButtonsContent />
        </JotaiProvider>
      </main>
    </>
  );
};

export default SignedIn;