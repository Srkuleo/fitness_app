export interface WrapperChild {
  children?: React.ReactNode;
}

export interface StringProps {
  text?: string;
  inputClass?: string;
  linkClass?: string;
}

export interface ExternalAuthButtonProps {
  text: string;
  jsx: JSX.Element;
}

export interface LogoProp {
  svgPlace: JSX.Element;
}
