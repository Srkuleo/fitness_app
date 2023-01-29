export interface WrapperChild {
  children?: React.ReactNode;
}

export interface ClassNameProps {
  className: string | undefined;
  altClassName?: string;
}

export interface SignButtonProp {
  buttonText: string | undefined;
}
export interface ExternalAuthButtonProps extends SignButtonProp {
  buttonSvg: JSX.Element | undefined;
}

export interface ExternalAuthProps {
  buttons: ExternalAuthButtonProps[];
}

export type InputProps = {
  _name: string | undefined;
  placeholder: string | undefined;
  type: string | undefined;
} & Pick<ClassNameProps, "className">;

export interface FormProps extends SignButtonProp {
  inputs: InputProps[];
}

export type SignProps = FormProps & ExternalAuthProps;

//Variables
export const inputClass =
  "placeholder-italic placeholder-gray-600 focus:placeholder-gray-200 rounded-xl p-3 text-sm text-slate-600 outline-green-500 focus:text-base focus:outline-1";

export const linkClassColored = "font-semibold text-green-500 underline";

export const linkClassGrey = "text-sm text-slate-600";
