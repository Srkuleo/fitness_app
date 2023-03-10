import type {
  FormProps,
  ExternalAuthButtonProps,
  WorkoutProps,
} from "../types/types";
import {
  GoogleSvg,
  TwitterSvg,
  DiscordSvg,
} from "../components/svg-components/svg";

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
    href: "/",
  },
};

export const authButtons: ExternalAuthButtonProps[] = [
  { buttonSvg: GoogleSvg, buttonText: "Google" },
  { buttonSvg: TwitterSvg, buttonText: "Twitter" },
  { buttonSvg: DiscordSvg, buttonText: "Discord" },
];

export const initialWorkout: WorkoutProps = {
  id: -1,
  name: "",
  tooltip: "",
};
