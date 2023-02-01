import Link from "next/link";
import NoteSetLogo from "./logos/note-set-logo";
import { SignFormWrapper } from "./wrappers";
import Form from "./reusable/sign/form";
import { type SignProps } from "../types/types";
import ExternalAuth from "./reusable/sign/external-auth";

const SignIn = ({
  authButtons,
  inputs,
  checkBox,
  signButton,
}: Omit<SignProps, "img">) => {
  return (
    <SignFormWrapper>
      <NoteSetLogo />
      <SignInHeadingText />
      <ExternalAuth authButtons={authButtons} />
      <Form inputs={inputs} checkBox={checkBox} signButton={signButton} />
      <LinkQuestions />
    </SignFormWrapper>
  );
};

const LinkQuestions = () => {
  return (
    <>
      <p className="mb-2 text-xs text-slate-600">
        Forgot your{" "}
        <Link className="py-1 font-semibold text-green-500 underline" href="/">
          password?
        </Link>
      </p>
      <p className="text-xs text-slate-600">
        New to Noteset?{" "}
        <Link
          className="py-1 font-semibold text-green-500 underline"
          href="/sign-up"
        >
          Sign up here.
        </Link>
      </p>
    </>
  );
};

const SignInHeadingText = () => {
  return (
    <>
      <p className="mt-8 text-lg font-medium text-slate-600">
        Sign in and start your workout.
      </p>
      <p className="mt-4 text-sm italic text-slate-600">continue with</p>
    </>
  );
};

export default SignIn;
