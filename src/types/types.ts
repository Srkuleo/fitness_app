export interface WrapperChild {
  children?: React.ReactNode;
}

export interface StringProp {
  text: string;
}

export interface ClassNameProps {
  className: string;
  altClassName?: string;
}

export interface ExternalAuthButtonProps {
  text: string;
  jsx: JSX.Element;
}

export interface ExternalAuthProps {
  google: JSX.Element;
  twitter: JSX.Element;
  discord: JSX.Element;
  googleText: string;
  twitterTexT: string;
  discordText: string;
}

//Variables
export const inputClass =
  "placeholder-italic placeholder-gray-600 focus:placeholder-gray-200 rounded-xl p-3 text-sm text-slate-600 outline-green-500 focus:text-base focus:outline-1";

export const linkClassColored = "font-semibold text-green-500 underline";

export const linkClassGrey = "text-sm text-slate-600";

export const signHeaderTextClass = "mt-8 text-lg font-medium text-slate-600";
