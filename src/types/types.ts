import * as svg from "../components/icons/svg";

export interface WrapperChild {
  children: React.ReactNode;
}

export interface SignButtonProps {
  buttonText: string | undefined;
  href: string | undefined;
  onClick: () => void | undefined;
}

export interface ImageProps {
  altTag: string;
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
  workout: string;
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

export interface ToggleModeProps {
  size: number;
  theme: string | undefined;
  toggleMode: () => void;
}

export interface OptionMenuProps {
  isOpen: boolean;
  toggleDropDown: () => void;
}

//Variables
export const authButtons: ExternalAuthButtonProps[] = [
  { buttonSvg: svg.GoogleSvg, buttonText: "Google" },
  { buttonSvg: svg.TwitterSvg, buttonText: "Twitter" },
  { buttonSvg: svg.DiscordSvg, buttonText: "Discord" },
];

export const signInFormProps: FormProps = {
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

export const signUpFormProps: FormProps = {
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

export const initialWorkouts: RadioButtonProps[] = [
  {
    id: 1,
    workout: "Upper 1",
    tooltip: "Mix profile day, both chest and back highly activated.",
    selected: false,
  },
  {
    id: 2,
    workout: "Lower 1",
    tooltip: "Quad heavy day, with few glute/hamstrings exercises.",
    selected: false,
  },
  {
    id: 3,
    workout: "Upper 2",
    tooltip: "Heavy back day, with complementary chest exercises.",
    selected: false,
  },
  {
    id: 4,
    workout: "Lower 2",
    tooltip: "All arounder. Leg press + DL, heavy compound day.",
    selected: false,
  },
];
