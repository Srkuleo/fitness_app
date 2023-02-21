import { type FormProps, type InputProps } from "../../../types/types";
import SignButton from "./sign-button";
import Link from "next/link";

const Form = ({ form, checkBox, signButton }: FormProps) => {
  return (
    <form action="#" className="flex flex-col" id={form.id}>
      {form.inputs.map((input) => {
        return (
          <InputField
            key={input._name}
            _name={input._name}
            placeholder={input.placeholder}
            type={input.type}
          />
        );
      })}
      <CheckBox checkBox={checkBox} />
      <SignButton
        buttonText={signButton.buttonText}
        href={signButton.href}
        onClick={signButton.onClick}
      />
    </form>
  );
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
        className="placeholder-italic mb-2 rounded-xl p-3 text-sm text-slate-main600 placeholder-slate-main600 outline-green-main500 focus:placeholder-slate-light300 focus:outline-1"
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
          className="placeholder-italic mb-2 rounded-xl p-3 text-sm text-slate-main600 placeholder-slate-main600 outline-green-main500 focus:placeholder-slate-light300 focus:outline-1"
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
      className="placeholder-italic mb-2 rounded-xl p-3 text-sm text-slate-main600 placeholder-slate-main600 outline-green-main500 focus:placeholder-slate-light300 focus:outline-1"
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
      <label htmlFor={checkBox._name} className="text-xs text-slate-main600">
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
