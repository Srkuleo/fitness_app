import { type NextPage } from "next";
import Head from "next/head";
import { MainWrapper, LeftWrapper, RightWrapper } from "../components/wrappers";
import { SignInForm } from "../components/sign-in/sign-in-page-ls";
import { AppIntroduction } from "../components/sign-in/sign-in-page-rs";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>Noteset - Sign In</title>
        <meta name="description" content="Personalized workout tracker" />
      </Head>
      <main>
        <MainWrapper>
          <LeftWrapper>
            <SignInForm />
          </LeftWrapper>
          <RightWrapper>
            <AppIntroduction />
          </RightWrapper>
        </MainWrapper>
      </main>
    </>
  );
};

export default Home;
