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
        className="flex gap-5 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currIndex * 105}%)` }}
      >
        {children}
      </div>
    </div>
  );
};

export const WorkoutCardLayout = ({ children }: WrapperChild) => {
  return (
    <div
      className="relative min-h-[520px] min-w-[400px] overflow-hidden 
      rounded-2xl border-4 border-orange-button600 bg-gradient-to-tl 
    odd:from-slate-light50 odd:to-slate-light100 
    even:bg-slate-light50
    dark:border-orange-button500 
    dark:odd:from-slate-light500 from-60% dark:odd:to-slate-dark800 to-95%
    dark:even:bg-slate-dark800"
    >
      <div className="flex flex-col items-center gap-4 p-4">{children}</div>
      <div className="absolute top-[350px] left-[224px] h-[290px] w-[290px] rounded-full bg-[#caeed2] dark:bg-[#69ab69]/70" />
      <div className="absolute top-[416px] left-[290px] h-[160px] w-[160px] rounded-full bg-[#b6e3ae] dark:bg-[#4a784a]/80" />
    </div>
  );
};
