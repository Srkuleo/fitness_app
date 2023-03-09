export interface WrapperChild {
  children: React.ReactNode;
}

export interface ModeButtonProps {
  size: number;
  theme: string;
  toggleMode: () => void;
}

export interface ExternalAuthButtonProps
  extends Pick<SignButtonProps, "buttonText"> {
  buttonSvg: JSX.Element;
}

export interface InputProps {
  _name: string;
  placeholder: string;
  type: string;
}

export interface SignButtonProps {
  buttonText: string;
  href: string;
}

export interface FormProps {
  form: {
    id: string;
    inputs: InputProps[];
  };
  checkBox: Pick<InputProps, "_name" | "type">;
  signButton: SignButtonProps;
}

export interface OptionMenuProps {
  isOpen: boolean;
  toggleDropDown: () => void;
  toggleEdit: () => void;
}

export interface RadioButtonProps {
  id: number;
  name: string;
  tooltip: string;
}

type DispatchTuple = "added" | "edited" | "deleted";

export interface WorkoutsAction {
  type: DispatchTuple;
  workout: RadioButtonProps;
}
