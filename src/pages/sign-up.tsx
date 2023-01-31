import { type NextPage } from "next";
import Head from "next/head";
import {
  LeftWrapper,
  RightWrapper,
  MainWrapper,
  SignFormWrapper,
} from "../components/wrappers";
import { type SignProps, inputClass } from "../types/types";
import * as svg from "../components/svg";
import SignUp from "../components/sign-up-page-ls";
import { ImageLoaderDiv } from "../components/reusable/image-loader";

const SignUpPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Noteset - Sign Up</title>
        <meta name="description" content="Personalized workout tracker" />
      </Head>
      <main>
        <MainWrapper>
          <LeftWrapper>
            <SignFormWrapper>
              <SignUp
                buttons={signUpProps.buttons}
                inputs={signUpProps.inputs}
                checkBox={signUpProps.checkBox}
                buttonText={signUpProps.buttonText}
              />
            </SignFormWrapper>
          </LeftWrapper>
          <RightWrapper>
            <ImageLoaderDiv img={signUpProps.img} />
          </RightWrapper>
        </MainWrapper>
      </main>
    </>
  );
};

const signUpProps: SignProps = {
  buttons: [
    { buttonSvg: svg.GoogleSvg, buttonText: "Sign up with Google" },
    { buttonSvg: svg.TwitterSvg, buttonText: "Sign up with Twitter" },
    { buttonSvg: svg.DiscordSvg, buttonText: "Sign up with Discord" },
  ],
  inputs: [
    {
      _name: "email",
      placeholder: "Email",
      type: "email",
      className: inputClass,
    },
    {
      _name: "username",
      placeholder: "Username",
      type: "text",
      className: inputClass,
    },
    {
      _name: "password",
      placeholder: "Password",
      type: "password",
      className: inputClass,
    },
    {
      _name: "password",
      placeholder: "Confirm password",
      type: "password",
      className: inputClass,
    },
  ],
  checkBox: {
    _name: "agreeToSandPP",
    type: "checkbox",
  },
  buttonText: "Sign Up",
  img: {
    src: "/images/squat.jpg",
    alt: "squat",
  },
};

export default SignUpPage;
