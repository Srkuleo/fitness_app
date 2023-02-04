import { type NextPage } from "next";
import Head from "next/head";
import { LeftWrapper, RightWrapper, MainWrapper } from "../components/wrappers";
import { type SignProps } from "../types/types";
import * as svg from "../components/svg";
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
            <SignUp
              authButtons={signUpProps.authButtons}
              inputs={signUpProps.inputs}
              checkBox={signUpProps.checkBox}
              signButton={signUpProps.signButton}
            />
          </LeftWrapper>
          <RightWrapper>
            <ImageLoaderDiv pageImg={signUpProps.pageImg} />
          </RightWrapper>
        </MainWrapper>
      </main>
    </>
  );
};

const signUpProps: SignProps = {
  authButtons: [
    { buttonSvg: svg.GoogleSvg, buttonText: "Sign up with Google" },
    { buttonSvg: svg.TwitterSvg, buttonText: "Sign up with Twitter" },
    { buttonSvg: svg.DiscordSvg, buttonText: "Sign up with Discord" },
  ],
  inputs: [
    {
      _name: "email",
      placeholder: "Email",
      type: "email",
    },
    {
      _name: "username",
      placeholder: "Username",
      type: "text",
    },
    {
      _name: "password",
      placeholder: "Password",
      type: "password",
    },
    {
      _name: "confPassword",
      placeholder: "Confirm password",
      type: "password",
    },
  ],
  checkBox: {
    _name: "agreeToSandPP",
    type: "checkbox",
  },
  signButton: {
    buttonText: "Sign Up",
    href: undefined,
    onClick: () => console.log("You have signed up."),
  },
  pageImg: {
    altTag: "squat",
  },
};

export default SignUpPage;
