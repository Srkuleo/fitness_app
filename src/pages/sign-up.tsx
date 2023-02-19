import { type NextPage } from "next";
import Head from "next/head";
import { LeftWrapper, RightWrapper, MainWrapper } from "../components/wrappers";
import SignUp from "../components/sign-up-page-ls";
import { ImageLoaderDiv } from "../components/image-loader";

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
          <LeftWrapper>
            <SignUp />
          </LeftWrapper>
          <RightWrapper>
            <ImageLoaderDiv />
          </RightWrapper>
        </MainWrapper>
      </main>
    </>
  );
};

export default SignUpPage;
