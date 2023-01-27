import { type WrapperChild } from "../types/types";

//Wrappers on sign-in page
export const MainWrapper = ({ children }: WrapperChild) => {
  return <div className="flex h-screen w-screen">{children}</div>;
};

export const LeftWrapper = ({ children }: WrapperChild) => {
  return (
    <div className="w-2/6 bg-slate-100 bg-opacity-70 pt-24">{children}</div>
  );
};

export const RightWrapper = ({ children }: WrapperChild) => {
  return <div className="relative w-4/6">{children}</div>;
};

export const LogoWrapper = ({ children }: WrapperChild) => {
  return (
    <div className="mt-8 flex flex-row items-center gap-1">{children}</div>
  );
};

export const SignInFormWrapper = ({ children }: WrapperChild) => {
  return (
    <div className="shadow-blur mx-28 flex flex-col rounded-2xl px-10 text-left">
      {children}
    </div>
  );
};

export const ExternalAuthButtonWrapper = ({ children }: WrapperChild) => {
  return (
    <button className="mt-2 flex w-full flex-row items-center justify-center gap-3 rounded-xl border-2 border-green-300 py-2 text-sm font-semibold text-slate-600 transition-all hover:-translate-x-1 hover:bg-slate-200 hover:bg-opacity-50">
      {children}
    </button>
  );
};

export const SignButtonWrapper = ({ children }: WrapperChild) => {
  return (
    <button className="mb-10 mt-4 rounded-3xl bg-green-500 p-3 text-yellow-50  transition-all hover:bg-green-600 hover:bg-opacity-90">
      {children}
    </button>
  );
};
