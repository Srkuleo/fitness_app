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

export interface SignProps {
  authButtons: ExternalAuthButtonProps[];
  inputs: InputProps[];
  checkBox: Pick<InputProps, "_name" | "type">;
  signButton: SignButtonProps;
  pageImg: ImageProps;
}
