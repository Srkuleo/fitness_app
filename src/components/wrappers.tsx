import { type WrapperChild } from "../types/types";

//Wrappers on sign-in page
export const MainWrapper = ({ children }: WrapperChild) => {
  return <div className="flex h-screen w-screen">{children}</div>;
};

export const LeftWrapper = ({ children }: WrapperChild) => {
  return (
    <div className="w-2/6 border-r-2 border-slate-900 bg-gradient-to-r from-slate-900 to-slate-600">
      {children}
    </div>
  );
};

export const RightWrapper = ({ children }: WrapperChild) => {
  return <div className="relative w-4/6">{children}</div>;
};

export const LogoWrapper = ({ children }: WrapperChild) => {
  return (
    <div className="mt-8 ml-5 flex flex-row items-center gap-1">{children}</div>
  );
};

export const SignInFormWrapper = ({ children }: WrapperChild) => {
  return (
    <div className="mx-32 mt-80 flex flex-col rounded-2xl bg-slate-900 bg-opacity-80 px-10 text-left shadow-blur">
      {children}
    </div>
  );
};
