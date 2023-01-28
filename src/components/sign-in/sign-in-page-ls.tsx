import Link from "next/link";
import NoteSetLogo from "../logos/note-set-logo";
import { SignFormWrapper } from "../wrappers";
import SignButton from "../buttons/sign-button";
import {
  type ClassNameProps,
  inputClass,
  linkClassColored,
  linkClassGrey,
  signHeaderTextClass,
} from "../../types/types";
import ExternalAuth from "../external-auth";
import * as svg from "../svg";

export const SignInForm = () => {
  return (
    <SignFormWrapper>
      <NoteSetLogo />
      <SignInHeadingText className={signHeaderTextClass} />
      <ExternalAuth
        google={svg.GoogleSvg}
        twitter={svg.TwitterSvg}
        discord={svg.DiscordSvg}
        googleText="Google"
        twitterTexT="Twitter"
        discordText="Discord"
      />
      <Form className={inputClass} />
      <LinkQuestions
        className={linkClassColored}
        altClassName={linkClassGrey}
      />
    </SignFormWrapper>
  );
};

const Form = ({ className }: ClassNameProps) => {
  return (
    <form action="#" className="flex flex-col ">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email or Username"
        required
        className={`mb-2 ${className}`}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        required
        className={className}
      />
      <SignButton text="Sign In" />
    </form>
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

const SignInHeadingText = ({ className }: ClassNameProps) => {
  return (
    <>
      <p className={className}>Sign in and start your workout.</p>
      <p className="mt-4 text-sm italic text-slate-600">continue with</p>
    </>
  );
};
