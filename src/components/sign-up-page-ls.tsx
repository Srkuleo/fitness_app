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
}: Omit<SignProps, "pageImg">) => {
  return (
    <SignFormWrapper>
      <LogoWrapper>
        <p className="text-2xl">Welcome to</p>
        <NoteSetLogo />
      </LogoWrapper>
      <SignUpHeadingText />
      <ExternalAuth authButtons={authButtons} />
      <Form inputs={inputs} checkBox={checkBox} signButton={signButton} />
      <LinkQuestion />
    </SignFormWrapper>
  );
};

const SignUpHeadingText = () => {
  return (
    <p className="mt-4 text-sm italic text-slate-main600">continue with</p>
  );
};

const LinkQuestion = () => {
  return (
    <p className="text-xs text-slate-main600">
      Already have an acount?{" "}
      <Link
        href="/"
        className="py-1 font-semibold text-green-main500 underline"
      >
        Sign in here.
      </Link>
    </p>
  );
};

export default SignUp;
