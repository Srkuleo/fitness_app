import { type SignProps } from "../types/types";
import { LogoWrapper, SignFormWrapper } from "./wrappers";
import NoteSetLogo from "./logos/note-set-logo";
import ExternalAuth from "./reusable/sign/external-auth";
import Form from "./reusable/sign/form";
import Link from "next/link";

const SignUp = ({
  authButtons,
  inputs,
  checkBox,
  signButton,
}: Omit<SignProps, "img">) => {
  return (
    <SignFormWrapper>
      <LogoWrapper>
        <p className="text-2xl">Welcome to</p>
        <NoteSetLogo />
      </LogoWrapper>
      <HeadingText />
      <ExternalAuth authButtons={authButtons} />
      <Form inputs={inputs} checkBox={checkBox} signButton={signButton} />
      <LinkQuestion />
    </SignFormWrapper>
  );
};

const HeadingText = () => {
  return (
    <p className="mt-8 text-lg font-medium text-slate-600">
      Create an account.
    </p>
  );
};

const LinkQuestion = () => {
  return (
    <p className="text-xs text-slate-600">
      Already have an acount?{" "}
      <Link href="/" className="py-1 font-semibold text-green-500 underline">
        Sign in here.
      </Link>
    </p>
  );
};

export default SignUp;
