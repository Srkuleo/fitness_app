import Link from "next/link";
import ExternalAuth from "./reusable/sign/external-auth";
import Form from "./reusable/sign/form";
import { authButtons, signUpFormProps } from "../types/types";
import { Separator } from "./reusable/sign/separator";

const SignUp = () => {
  return (
    <div>
      <SignUpHeadingText />
      <ExternalAuth authButtons={authButtons} />
      <Separator />
      <Form
        form={signUpFormProps.form}
        checkBox={signUpFormProps.checkBox}
        signButton={signUpFormProps.signButton}
      />
      <LinkQuestion />
    </div>
  );
};

const SignUpHeadingText = () => {
  return (
    <div>
      <p className="text-lg font-semibold leading-6 text-slate-main600 dark:text-yellow-text50">
        A minimalistic approach to tracking your workout progress.
      </p>
      <p className="mt-4 mb-3 text-sm italic text-slate-main600 dark:text-slate-light300">
        continue with
      </p>
    </div>
  );
};

const LinkQuestion = () => {
  return (
    <p className="text-xs text-slate-main600 dark:text-slate-light300">
      Already have an acount?{" "}
      <Link href="/" className="border-b font-semibold text-green-main500">
        Sign in here.
      </Link>
    </p>
  );
};

export default SignUp;
