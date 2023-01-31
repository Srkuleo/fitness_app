import Link from "next/link";
import NoteSetLogo from "./logos/note-set-logo";
import { SignFormWrapper } from "./wrappers";
import Form from "./reusable/sign/form";
import {
  type SignProps,
  type ClassNameProps,
  coloredLinkClass,
  greyLinkClass,
  externalAuthHeaderClass,
} from "../types/types";
import ExternalAuth from "./reusable/sign/external-auth";

const SignIn = ({
  buttons,
  inputs,
  checkBox,
  buttonText,
}: Omit<SignProps, "img">) => {
  return (
    <SignFormWrapper>
      <NoteSetLogo />
      <SignInHeadingText />
      <ExternalAuth buttons={buttons} />
      <Form inputs={inputs} checkBox={checkBox} buttonText={buttonText} />
      <LinkQuestions
        className={coloredLinkClass}
        altClassName={greyLinkClass}
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
      <p className={altClassName}>
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
      <p className={externalAuthHeaderClass}>Sign in and start your workout.</p>
      <p className="mt-4 text-sm italic text-slate-600">continue with</p>
    </>
  );
};

export default SignIn;
