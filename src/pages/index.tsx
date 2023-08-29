import { type NextPage } from "next";
import Head from "next/head";
import { SignContent } from "../components/sign-components/sign-content";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>Noteset - Sign In</title>
        <meta
          name="description"
          content="Personalized workout tracker - sign in"
        />
      </Head>

      <SignContent page="sign in" />
    </>
  );
};

export default Home;
