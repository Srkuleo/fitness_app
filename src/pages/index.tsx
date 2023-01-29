import { type NextPage } from "next";
import Head from "next/head";
import { MainWrapper, LeftWrapper, RightWrapper } from "../components/wrappers";
import { SignInForm } from "../components/sign-in/sign-in-page-ls";
import { AppIntroduction } from "../components/sign-in/sign-in-page-rs";
import {
  type ExternalAuthProps,
  type FormProps,
  inputClass,
} from "../types/types";
import * as svg from "../components/svg";

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
            <SignInForm
              buttons={signInButtons.buttons}
              inputs={signInFormProps.inputs}
              buttonText={signInFormProps.buttonText}
            />
          </LeftWrapper>
          <RightWrapper>
            <AppIntroduction />
          </RightWrapper>
        </MainWrapper>
      </main>
    </>
  );
};

const signInButtons: ExternalAuthProps = {
  buttons: [
    { buttonSvg: svg.GoogleSvg, buttonText: "Google" },
    { buttonSvg: svg.TwitterSvg, buttonText: "Twitter" },
    { buttonSvg: svg.DiscordSvg, buttonText: "Discord" },
  ],
};

const signInFormProps: FormProps = {
  inputs: [
    {
      _name: "email",
      placeholder: "Email",
      type: "email",
      className: inputClass,
    },
    {
      _name: "password",
      placeholder: "Password",
      type: "password",
      className: inputClass,
    },
  ],
  buttonText: "Sign in",
};

export default Home;
