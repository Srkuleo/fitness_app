import { type InputProps, type FormProps } from "../types/types";
import SignButton from "./buttons/sign-button";

const Form = ({ inputs, buttonText }: FormProps) => {
  return (
    <form action="#" className="flex flex-col">
      {inputs.map((input) => {
        return (
          <InputField
            key={input._name}
            _name={input._name}
            placeholder={input.placeholder}
            type={input.type}
            className={input.className}
          />
        );
      })}
      <SignButton buttonText={buttonText} />
    </form>
  );
};

const InputField = ({ _name, placeholder, className, type }: InputProps) => {
  return (
    <input
      type={type}
      name={_name}
      id={_name}
      placeholder={placeholder}
      required
      className={`mb-2 ${className}`}
    />
  );
};

export default Form;
