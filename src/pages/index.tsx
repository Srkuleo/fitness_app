import { type NextPage } from "next";
import Head from "next/head";
import { MainWrapper, LeftWrapper, RightWrapper } from "../components/wrappers";
import SignIn from "../components/sign-in-page-ls";
import { LandingPageImage } from "../components/image-loader";

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
          <LeftWrapper>
            <SignIn />
          </LeftWrapper>
          <RightWrapper>
            <LandingPageImage altTag="deadlift" />
          </RightWrapper>
        </MainWrapper>
      </main>
    </>
  );
};

export default Home;
