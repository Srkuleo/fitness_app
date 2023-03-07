export interface WrapperChild {
  children: React.ReactNode;
}

export interface SignButtonProps {
  buttonText: string | undefined;
  href: string | undefined;
  onClick: () => void | undefined;
}

export interface ExternalAuthButtonProps
  extends Pick<SignButtonProps, "buttonText"> {
  buttonSvg: JSX.Element | undefined;
}

export interface InputProps {
  _name: string | undefined;
  placeholder: string | undefined;
  type: string | undefined;
}

export type RadioButtonProps = {
  id: number;
  name: string;
  tooltip: string;
  selected: boolean;
};

export interface FormProps {
  form: {
    id: string;
    inputs: InputProps[];
  };
  checkBox: Pick<InputProps, "_name" | "type">;
  signButton: SignButtonProps;
}

export interface ModeButtonProps {
  size: number;
  theme: string | undefined;
  toggleMode: () => void;
}

export interface OptionMenuProps {
  isOpen: boolean;
  toggleDropDown: () => void;
}

export interface EditingProps {
  isAdding: boolean;
  toggleAdding: () => void;
}

//Variables
export const signIn: FormProps = {
  form: {
    id: "sign-in",
    inputs: [
      { _name: "email", placeholder: "Email", type: "email" },
      { _name: "password", placeholder: "Password", type: "password" },
    ],
  },
  checkBox: {
    _name: "remember",
    type: "checkbox",
  },
  signButton: {
    buttonText: "Sign In",
    href: "/signed-in",
    onClick: () => console.log("Signed in"),
  },
};

export const signUp: FormProps = {
  form: {
    id: "sign-up",
    inputs: [
      {
        _name: "email",
        placeholder: "Email",
        type: "email",
      },
      {
        _name: "username",
        placeholder: "Username",
        type: "text",
      },
      {
        _name: "password",
        placeholder: "Password",
        type: "password",
      },
      {
        _name: "confPassword",
        placeholder: "Confirm password",
        type: "password",
      },
    ],
  },
  checkBox: {
    _name: "terms and policy",
    type: "checkbox",
  },
  signButton: {
    buttonText: "Sign Up",
    href: undefined,
    onClick: () => console.log("You have signed up."),
  },
};
