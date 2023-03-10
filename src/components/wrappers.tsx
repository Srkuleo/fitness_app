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
    <button
      className="flex w-full items-center justify-center gap-3 
      rounded-xl border-2 border-green-main500 bg-slate-light50 
      py-2 text-sm font-semibold text-slate-main600 
      transition-all ease-in hover:translate-x-1 
    hover:bg-slate-light200/90 dark:bg-slate-dark800 
    dark:text-yellow-text50 dark:hover:bg-slate-light500/50"
    >
      {children}
    </button>
  );
};

export const RadioButtonContentWrapper = ({ children }: WrapperChild) => {
  return (
    <div className="relative z-10 mx-auto flex flex-col items-center">
      {children}
    </div>
  );
};

//Wrappers for signed-in page
export const WorkoutFormWrapper = ({ children }: WrapperChild) => {
  return (
    <div
      className="center fixed top-[50%] left-[50%] z-10 flex 
    flex-col items-center gap-8 rounded-lg bg-gradient-to-tr 
    from-slate-light300 to-slate-light50 p-12 text-slate-main600 
    dark:from-slate-dark900 dark:to-slate-dark800"
    >
      {children}
    </div>
  );
};
