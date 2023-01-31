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

export interface ImageProps {
  src: string;
  alt: string;
}
export interface ExternalAuthButtonProps extends SignButtonProp {
  buttonSvg: JSX.Element | undefined;
}

export type InputProps = {
  _name: string | undefined;
  placeholder: string | undefined;
  type: string | undefined;
} & Pick<ClassNameProps, "className">;

export interface SignProps extends SignButtonProp {
  buttons: ExternalAuthButtonProps[];
  inputs: InputProps[];
  checkBox: Pick<InputProps, "_name" | "type">;
  img: ImageProps;
}

//Variables
export const inputClass =
  "mb-2 placeholder-italic placeholder-gray-600 focus:placeholder-gray-200 rounded-xl p-3 text-sm text-slate-600 outline-green-500 focus:text-sm focus:outline-1";

export const greyLinkClass = "text-xs text-slate-600 mb-2";
export const coloredLinkClass = "font-semibold text-green-500 underline py-1";
export const externalAuthHeaderClass =
  "mt-8 text-lg font-medium text-slate-600";
