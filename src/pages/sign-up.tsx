import { type NextPage } from "next";
import Head from "next/head";
import { MainWrapper, SignFormWrapper } from "../components/wrappers";
import Header from "../components/reusable/sign/header";
import SignUp from "../components/sign-up-page-ls";
import LandingPageImage from "../components/image-loader";

const SignUpPage: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/noteset.ico" />
        <title>Noteset - Sign Up</title>
        <meta
          name="description"
          content="Personalized workout tracker - sign up"
        />
      </Head>
      <main>
        <MainWrapper>
          <SignFormWrapper>
            <Header />
            <SignUp />
          </SignFormWrapper>
          <LandingPageImage />
        </MainWrapper>
      </main>
    </>
  );
};

export default SignUpPage;
