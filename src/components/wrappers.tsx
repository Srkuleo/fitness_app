import { type WrapperChild } from "../types/types";

//Wrappers for sign-in and sign-up pages
export const ContentWrapper = ({ children }: WrapperChild) => {
  return <div className="relative mx-auto flex w-3/6 flex-col">{children}</div>;
};

export const LogoWrapper = ({ children }: WrapperChild) => {
  return <div className="flex items-center gap-1">{children}</div>;
};

export const OAuthBtnWrapper = ({ children }: WrapperChild) => {
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

//Wrappers for signed-in page
export const PageContentWrapper = ({ children }: WrapperChild) => {
  return (
    <div className="fixed inset-0 mt-32 flex justify-center">
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
};

export const WorkoutCardsCarousel = ({
  children,
  currIndex,
}: WrapperChild & { currIndex: number }) => {
  return (
    <div className="mx-auto max-w-[400px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out gap-5"
        style={{ transform: `translateX(-${currIndex * 105}%)` }}
      >
        {children}
      </div>
    </div>
  );
};
