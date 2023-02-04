import { type WrapperChild } from "../types/types";

//Wrappers on sign-in page
export const MainWrapper = ({ children }: WrapperChild) => {
  return <div className="flex h-screen w-screen">{children}</div>;
};

export const LeftWrapper = ({ children }: WrapperChild) => {
  return <div className="w-2/6 bg-slate-100/70 pt-44">{children}</div>;
};

export const RightWrapper = ({ children }: WrapperChild) => {
  return <div className="w-4/6 bg-slate-100/70 p-3">{children}</div>;
};

export const LogoWrapper = ({ children }: WrapperChild) => {
  return <div className="flex flex-row items-center gap-1">{children}</div>;
};

export const SignFormWrapper = ({ children }: WrapperChild) => {
  return (
    <div className="mx-auto flex w-1/2 flex-col rounded-2xl text-left">
      {children}
    </div>
  );
};

export const ExternalAuthButtonWrapper = ({ children }: WrapperChild) => {
  return (
    <button className="mt-2 flex w-full flex-row items-center justify-center gap-3 rounded-xl border-2 border-green-300 py-2 text-sm font-semibold text-slate-600 outline-green-700 transition-all ease-in hover:translate-x-1 hover:bg-slate-200/70 focus:outline-1">
      {children}
    </button>
  );
};

export const TextWrapper = ({ children }: WrapperChild) => {
  return (
    <p className="absolute bottom-52 right-28 w-5/12 text-right text-xl text-yellow-50">
      {children}
    </p>
  );
};
