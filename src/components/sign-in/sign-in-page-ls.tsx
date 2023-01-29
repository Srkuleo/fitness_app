import Link from "next/link";
import NoteSetLogo from "../logos/note-set-logo";
import { SignFormWrapper } from "../wrappers";
import Form from "../form";
import {
  type ClassNameProps,
  linkClassColored,
  linkClassGrey,
  type SignProps,
} from "../../types/types";
import ExternalAuth from "../external-auth";

export const SignInForm = ({ buttons, inputs, buttonText }: SignProps) => {
  return (
    <SignFormWrapper>
      <NoteSetLogo />
      <SignInHeadingText />
      <ExternalAuth buttons={buttons} />
      <Form inputs={inputs} buttonText={buttonText} />
      <LinkQuestions
        className={linkClassColored}
        altClassName={linkClassGrey}
      />
    </SignFormWrapper>
  );
};

const LinkQuestions = ({ className, altClassName }: ClassNameProps) => {
  return (
    <>
      <p className={altClassName}>
        Forgot your{" "}
        <Link className={className} href="/">
          password?
        </Link>
      </p>
      <p className={`mt-1 ${altClassName}`}>
        New to Noteset?{" "}
        <Link className={className} href="/sign-up">
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
