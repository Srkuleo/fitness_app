import { type NextPage } from "next";
import Head from "next/head";
import { MainWrapper, SignFormWrapper } from "../components/wrappers";
import Header from "../components/reusable/sign/header";
import SignIn from "../components/sign-in-page-ls";
import LandingPageImage from "../components/image-loader";

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
      <main>
        <MainWrapper>
          <SignFormWrapper>
            <Header />
            <SignIn />
          </SignFormWrapper>
          <LandingPageImage altTag="deadlift" />
        </MainWrapper>
      </main>
    </>
  );
};

export default Home;
