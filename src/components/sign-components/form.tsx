import Link from "next/link";
import { type FormProps, type InputProps } from "../../types/types";
import { signUp, signIn } from "../../functions and variables/variables";
import { SignButton } from "../buttons";

const Form = ({ page }: { page: string }) => {
  if (page === "sign in") {
    return (
      <form action="#" className="flex flex-col" id={signIn.form.id}>
        {signIn.form.inputs.map((input) => {
          return (
            <InputField
              key={input._name}
              _name={input._name}
              placeholder={input.placeholder}
              type={input.type}
            />
          );
        })}
        <CheckBox checkBox={signIn.checkBox} />
        <SignButton
          buttonText={signIn.signButton.buttonText}
          href={signIn.signButton.href}
          onClick={signIn.signButton.onClick}
        />
      </form>
    );
  } else {
    return (
      <form action="#" className="flex flex-col" id={signUp.form.id}>
        {signUp.form.inputs.map((input) => {
          return (
            <InputField
              key={input._name}
              _name={input._name}
              placeholder={input.placeholder}
              type={input.type}
            />
          );
        })}
        <CheckBox checkBox={signUp.checkBox} />
        <SignButton
          buttonText={signUp.signButton.buttonText}
          href={signUp.signButton.href}
          onClick={signUp.signButton.onClick}
        />
      </form>
    );
  }
};

const InputField = ({ _name, placeholder, type }: InputProps) => {
  if (type === "email") {
    return (
      <input
        type={type}
        name={_name}
        id={_name}
        placeholder={placeholder}
        required
        className="input-field"
        autoFocus
      />
    );
  } else if (type === "password") {
    return (
      <>
        <input
          type={type}
          name={_name}
          id={_name}
          placeholder={placeholder}
          required
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
          className="input-field"
        />
      </>
    );
  }

  return (
    <input
      type={type}
      name={_name}
      id={_name}
      placeholder={placeholder}
      required
      className="input-field"
    />
  );
};

const CheckBox = ({ checkBox }: Pick<FormProps, "checkBox">) => {
  return (
    <div className="my-3 flex gap-1 ">
      <input
        type={checkBox.type}
        id={checkBox._name}
        name={checkBox._name}
        className="cursor-pointer accent-green-light400"
        required
      />
      <label
        htmlFor={checkBox._name}
        className="text-xs text-slate-main600 dark:text-slate-light300"
      >
        {checkBox._name === "remember" ? "Remember me" : terms}
      </label>
    </div>
  );
};

const terms = (
  <span>
    Creating an account means you agree to the{" "}
    <Link href="/" className="border-b font-semibold text-green-main500">
      Terms of Service
    </Link>{" "}
    and{" "}
    <Link href="/" className="border-b font-semibold text-green-main500">
      Privacy Policy
    </Link>
    .
  </span>
);

export default Form;
