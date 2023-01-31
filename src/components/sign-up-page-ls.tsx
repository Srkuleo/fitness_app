import {
  type SignProps,
  greyLinkClass,
  coloredLinkClass,
  externalAuthHeaderClass,
} from "../types/types";
import { LogoWrapper } from "./wrappers";
import NoteSetLogo from "./logos/note-set-logo";
import ExternalAuth from "./reusable/sign/external-auth";
import Form from "./reusable/sign/form";
import Link from "next/link";

const SignUp = ({
  buttons,
  inputs,
  checkBox,
  buttonText,
}: Omit<SignProps, "img">) => {
  return (
    <div>
      <LogoWrapper>
        <p className="text-2xl">Welcome to</p>
        <NoteSetLogo />
      </LogoWrapper>
      <p className={externalAuthHeaderClass}>Create an account.</p>
      <ExternalAuth buttons={buttons} />
      <Form inputs={inputs} buttonText={buttonText} checkBox={checkBox} />
      <p className={greyLinkClass}>
        Already have an acount?{" "}
        <Link href="/" className={coloredLinkClass}>
          Sign in here.
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
