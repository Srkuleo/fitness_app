import {
  type SignProps,
  type InputProps,
  greyLinkClass,
  coloredLinkClass,
} from "../../../types/types";
import SignButton from "./sign-button";
import React, { useRef, useEffect } from "react";
import Link from "next/link";

const Form = ({
  inputs,
  checkBox,
  buttonText,
}: Omit<SignProps, "buttons" | "img">) => {
  return (
    <form action="#" className="flex flex-col">
      {inputs.map((input) => {
        return (
          <InputField
            key={input.type}
            _name={input._name}
            placeholder={input.placeholder}
            type={input.type}
            className={input.className}
          />
        );
      })}
      <CheckBox _name={checkBox._name} type={checkBox.type} />
      <SignButton buttonText={buttonText} />
    </form>
  );
};

const InputField = ({ _name, placeholder, className, type }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  if (type === "email") {
    return (
      <input
        type={type}
        name={_name}
        id={_name}
        placeholder={placeholder}
        required
        className={className}
        ref={inputRef}
      />
    );
  } else {
    return (
      <input
        type={type}
        name={_name}
        id={_name}
        placeholder={placeholder}
        required
        className={className}
      />
    );
  }
};

const CheckBox = ({ _name, type }: Pick<InputProps, "_name" | "type">) => {
  return (
    <div className="mt-2 flex items-center gap-1">
      <input
        type={type}
        id={_name}
        name={_name}
        className="cursor-pointer accent-green-300"
      />
      <label htmlFor={_name} className={greyLinkClass.replace("mb-2", "")}>
        {_name === "remember" ? "Remember me" : terms}
      </label>
    </div>
  );
};

const terms = (
  <span>
    Creating an account means you agree to the{" "}
    <Link href="/" className={coloredLinkClass}>
      Terms of Service
    </Link>{" "}
    and{" "}
    <Link href="/" className={coloredLinkClass}>
      Privacy Policy
    </Link>
    .
  </span>
);

export default Form;
