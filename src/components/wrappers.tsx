import { type WrapperChild } from "../types/types";

//Wrappers for sign-in and sign-up pages
export const MainWrapper = ({ children }: WrapperChild) => {
  return (
    <div className="flex h-screen w-screen bg-slate-light50">{children}</div>
  );
};

export const LeftWrapper = ({ children }: WrapperChild) => {
  return <div className="w-2/6 pt-44">{children}</div>;
};

export const RightWrapper = ({ children }: WrapperChild) => {
  return <div className="w-4/6 p-3">{children}</div>;
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
    <button className="mt-2 flex flex-row items-center justify-center gap-3 rounded-xl border-2 border-green-light400/90 py-2 text-sm font-semibold text-slate-main600 transition-all ease-in hover:translate-x-1 hover:bg-slate-light200/60">
      {children}
    </button>
  );
};

export const TextWrapper = ({ children }: WrapperChild) => {
  return (
    <p className="absolute bottom-52 right-28 w-5/12 text-right text-xl text-yellow-text50">
      {children}
    </p>
  );
};

//Wrapper for signed-in page
export const SignedInPageWrapper = ({ children }: WrapperChild) => {
  return (
    <div className="flex h-screen flex-col items-center gap-28 bg-wavey bg-cover">
      {children}
    </div>
  );
};

export const FixedLogoWrapper = ({ children }: WrapperChild) => {
  return <div className="fixed top-7 left-18">{children}</div>;
};

export const HeadingTextWrapper = ({ children }: WrapperChild) => {
  return (
    <h1 className="mt-28 bg-gradient-to-r from-orange-button500 to-red-button500 bg-clip-text text-5xl font-bold text-tp">
      {children}
    </h1>
  );
};
