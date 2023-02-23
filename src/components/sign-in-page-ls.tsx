import Link from "next/link";
import Form from "./reusable/sign/form";
import ExternalAuth from "./reusable/sign/external-auth";
import { authButtons, signInFormProps } from "../types/types";
import { Separator } from "./reusable/sign/separator";

const SignIn = () => {
  return (
    <div>
      <SignInHeadingText />
      <ExternalAuth authButtons={authButtons} />
      <Separator />
      <Form
        form={signInFormProps.form}
        checkBox={signInFormProps.checkBox}
        signButton={signInFormProps.signButton}
      />
      <LinkQuestions />
    </div>
  );
};

const SignInHeadingText = () => {
  return (
    <>
      <p className="text-lg font-semibold text-slate-main600 dark:text-yellow-text50">
        Sign in and start your workout.
      </p>
      <p className="mt-4 mb-3 text-sm italic text-slate-main600 dark:text-slate-light300">
        continue with
      </p>
    </>
  );
};

const LinkQuestions = () => {
  return (
    <>
      <p className="mb-2 text-xs text-slate-main600 dark:text-slate-light300">
        Forgot your{" "}
        <Link className="border-b font-semibold text-green-main500" href="/">
          password?
        </Link>
      </p>
      <p className="text-xs text-slate-main600 dark:text-slate-light300">
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
