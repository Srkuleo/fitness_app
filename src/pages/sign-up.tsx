import { type NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import NoteSetLogo from "../components/logos/note-set-logo";
import {
  LeftWrapper,
  RightWrapper,
  LogoWrapper,
  MainWrapper,
  SignFormWrapper,
} from "../components/wrappers";
import ExternalAuth from "../components/external-auth";
import Form from "../components/form";
import * as svg from "../components/svg";
import {
  type FormProps,
  inputClass,
  type ExternalAuthProps,
  type SignProps,
} from "../types/types";

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
                buttons={signUpButtons.buttons}
                inputs={signUpForm.inputs}
                buttonText={signUpForm.buttonText}
              />
            </SignFormWrapper>
          </LeftWrapper>
          <RightWrapper>
            <p>Hi!</p>
          </RightWrapper>
        </MainWrapper>
      </main>
    </>
  );
};

const SignUp = ({ inputs, buttonText, buttons }: SignProps) => {
  return (
    <div>
      <LogoWrapper>
        <p className="text-2xl">Welcome to</p>
        <NoteSetLogo />
      </LogoWrapper>

      <p className="text-xl font-semibold">Create an account.</p>
      <ExternalAuth buttons={buttons} />
      <Form inputs={inputs} buttonText={buttonText} />
      <p>
        Already have an acount?{" "}
        <Link href="/" className="text-green-500">
          Sign in here.
        </Link>
      </p>
    </div>
  );
};

const signUpButtons: ExternalAuthProps = {
  buttons: [
    { buttonSvg: svg.GoogleSvg, buttonText: "Sign up with Google" },
    { buttonSvg: svg.TwitterSvg, buttonText: "Sign up with Twitter" },
    { buttonSvg: svg.DiscordSvg, buttonText: "Sign up with Discord" },
  ],
};

const signUpForm: FormProps = {
  inputs: [
    {
      _name: "username",
      placeholder: "Username",
      type: "text",
      className: inputClass,
    },
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
    {
      _name: "password",
      placeholder: "Confirm password",
      type: "password",
      className: inputClass,
    },
  ],
  buttonText: "Sign Up",
};

export default SignUpPage;
