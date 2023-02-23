import { type NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/nav-bar";
import RadioButtonsContent from "../components/radio-buttons-content";

const SignedIn: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>NoteSet</title>
        <meta name="description" content="Personalized workout tracker" />
      </Head>
      <main>
        <NavBar />
        <RadioButtonsContent />
      </main>
    </>
  );
};

export default SignedIn;