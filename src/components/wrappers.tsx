import { type WrapperChild } from "../types/types";

//Wrappers for sign-in and sign-up pages
export const ContentWrapper = ({ children }: WrapperChild) => {
  return (
    <div className="relative z-10 mx-auto flex w-3/6 flex-col">{children}</div>
  );
};

export const LogoWrapper = ({ children }: WrapperChild) => {
  return <div className="flex items-center gap-1">{children}</div>;
};

export const ExternalAuthButtonWrapper = ({ children }: WrapperChild) => {
  return (
    <button className="flex items-center justify-center gap-3 rounded-xl border-2 border-green-main500 bg-slate-light50 py-2 text-sm font-semibold text-slate-main600 transition-all ease-in hover:translate-x-1 hover:bg-slate-light200/90 dark:bg-slate-dark800 dark:text-yellow-text50 dark:hover:bg-slate-light500/50">
      {children}
    </button>
  );
};
