import Link from "next/link";
import Logo from "./logos/note-set-logo";
import { SignInFormWrapper } from "./wrappers";
import ExternalAuthButton from "./buttons/external-auth-button";
import SignButton from "./buttons/sign-button";
import * as svg from "./svg";
import { type StringProps } from "../types/types";

export const SignInForm = () => {
  return (
    <SignInFormWrapper>
      <Logo svgPlace={svg.NoteSetLogoSvg} />
      <ExternalAuth />
      <Form inputClass={inputClass} />
      <LinkQuestions linkClass={linkClass} />
    </SignInFormWrapper>
  );
};

const ExternalAuth = () => {
  return (
    <>
      <ExAuthHeadingText />
      <ExternalAuthButton jsx={svg.GoogleSvg} text="Google" />
      <ExternalAuthButton jsx={svg.TwitterSvg} text="Twitter" />
      <ExternalAuthButton jsx={svg.DiscordSvg} text="Discord" />
      <Separator />
    </>
  );
};

const ExAuthHeadingText = () => {
  return (
    <>
      <p className="mt-10 text-lg font-medium text-slate-600">
        Sign in and start your workout.
      </p>
      <p className="mt-4 text-sm italic text-slate-600">continue with</p>
    </>
  );
};

const Separator = () => {
  return (
    <div className="m-5 flex items-center justify-around">
      <div className="w-32 border border-green-300"></div>
      <p className="text-sm italic text-slate-600">or</p>
      <div className="w-32 border border-green-300"></div>
    </div>
  );
};

const Form = ({ inputClass }: StringProps) => {
  return (
    <form action="#" className="flex flex-col ">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email or Username"
        required
        className={`mb-2 ${inputClass}`}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        required
        className={inputClass}
      />
      <SignButton text="Sign In" />
    </form>
  );
};

const LinkQuestions = ({ linkClass }: StringProps) => {
  return (
    <>
      <p className="text-sm text-slate-600">
        Forgot your{" "}
        <Link className={linkClass} href="/">
          password?
        </Link>
      </p>
      <p className="mt-1 text-sm text-slate-600">
        New to Noteset?{" "}
        <Link className={linkClass} href="/sign-up">
          Sign up here.
        </Link>
      </p>
    </>
  );
};

const inputClass =
  "placeholder-italic placeholder-gray-600 focus:placeholder-gray-200 rounded-xl p-3 text-sm text-slate-600 outline-green-500 focus:text-base focus:outline-1";

const linkClass = "font-semibold text-green-500 underline";
