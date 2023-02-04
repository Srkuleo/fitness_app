import { type SignProps, type InputProps } from "../../../types/types";
import SignButton from "./sign-button";
import React, { useRef, useEffect /*useState*/ } from "react";
import Link from "next/link";

const Form = ({
  inputs,
  checkBox,
  signButton,
}: Omit<SignProps, "authButtons" | "pageImg">) => {
  return (
    <form action="#" className="flex flex-col">
      {inputs.map((input) => {
        return (
          <InputField
            key={input._name}
            _name={input._name}
            placeholder={input.placeholder}
            type={input.type}
          />
        );
      })}
      <CheckBox _name={checkBox._name} type={checkBox.type} />
      <SignButton
        buttonText={signButton.buttonText}
        href={signButton.href}
        onClick={signButton.onClick}
      />
    </form>
  );
};

const InputField = ({ _name, placeholder, type }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // const passRef = useRef<HTMLInputElement>(null);
  // const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // function handleInput() {
  //   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  //   setIsValid(passRef.current!.validity.valid);
  // }

  if (type === "email") {
    return (
      <input
        type={type}
        name={_name}
        id={_name}
        placeholder={placeholder}
        required
        className="placeholder-italic mb-2 rounded-xl p-3 text-sm text-slate-600 placeholder-gray-600 outline-green-500 focus:text-sm focus:placeholder-gray-200 focus:outline-1"
        ref={inputRef}
      />
    );
  } else if (type === "password") {
    return (
      <>
        <input
          // ref={passRef}
          // onInput={handleInput}
          type={type}
          name={_name}
          id={_name}
          placeholder={placeholder}
          required
          pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$"
          className="placeholder-italic mb-2 rounded-xl p-3 text-sm text-slate-600 placeholder-gray-600 outline-green-500 focus:text-sm focus:placeholder-gray-200 focus:outline-1"
        />
        {/* {!isValid && (
          <div>
            Must be 8 characters or longer with at least 1 numberic, 1
            uppercase and 1 lowercase.
          </div>
        )} */}
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
      className="placeholder-italic mb-2 rounded-xl p-3 text-sm text-slate-600 placeholder-gray-600 outline-green-500 focus:text-sm focus:placeholder-gray-200 focus:outline-1"
    />
  );
};

const CheckBox = ({ _name, type }: Pick<InputProps, "_name" | "type">) => {
  return (
    <div className="mt-2 flex items-center gap-1">
      <input
        type={type}
        id={_name}
        name={_name}
        className="cursor-pointer accent-green-300"
        required
      />
      <label htmlFor={_name} className="text-xs text-slate-600">
        {_name === "remember" ? "Remember me" : terms}
      </label>
    </div>
  );
};

const terms = (
  <span>
    Creating an account means you agree to the{" "}
    <Link href="/" className="py-1 font-semibold text-green-500 underline">
      Terms of Service
    </Link>{" "}
    and{" "}
    <Link href="/" className="py-1 font-semibold text-green-500 underline">
      Privacy Policy
    </Link>
    .
  </span>
);

export default Form;
