import Link from "next/link";
import NoteSetLogo from "./logos/note-set-logo";
import { SignFormWrapper } from "./wrappers";
import Form from "./reusable/sign/form";
import ExternalAuth from "./reusable/sign/external-auth";
import { authButtons, signInFormProps } from "../types/types";

const SignIn = () => {
  return (
    <SignFormWrapper>
      <NoteSetLogo />
      <SignInHeadingText />
      <ExternalAuth authButtons={authButtons} />
      <Form
        inputs={signInFormProps.inputs}
        checkBox={signInFormProps.checkBox}
        signButton={signInFormProps.signButton}
      />
      <LinkQuestions />
    </SignFormWrapper>
  );
};

const SignInHeadingText = () => {
  return (
    <>
      <p className="mt-8 text-lg font-medium text-slate-main600">
        Sign in and start your workout.
      </p>
      <p className="mt-4 text-sm italic text-slate-main600">continue with</p>
    </>
  );
};

const LinkQuestions = () => {
  return (
    <>
      <p className="mb-2 text-xs text-slate-main600">
        Forgot your{" "}
        <Link className=" border-b font-semibold text-green-main500" href="/">
          password?
        </Link>
      </p>
      <p className="text-xs text-slate-main600">
        New to Noteset?{" "}
        <Link
          className="border-b font-semibold text-green-main500"
          href="/sign-up"
        >
          Sign up here.
        </Link>
      </p>
    </>
  );
};

export default SignIn;
