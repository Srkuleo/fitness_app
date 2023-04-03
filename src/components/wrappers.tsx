import type { WrapperProp } from "../types/types";

//Wrappers for sign-in and sign-up pages
export const ContentWrapper = ({ children }: WrapperProp) => {
  return <div className="relative mx-auto flex w-3/6 flex-col">{children}</div>;
};

export const LogoWrapper = ({ children }: WrapperProp) => {
  return <div className="flex items-center gap-1">{children}</div>;
};

export const OAuthBtnWrapper = ({ children }: WrapperProp) => {
  return (
    <button
      className="flex w-full items-center justify-center gap-3 
      rounded-xl border-2 border-green-main500 bg-slate-light50 
      py-2 text-sm font-semibold text-slate-main600 
      shadow-sm transition-all ease-in 
      hover:translate-x-1 hover:bg-slate-light200/90 
      dark:bg-slate-dark800 dark:text-yellow-text50 dark:hover:bg-slate-light500/50"
    >
      {children}
    </button>
  );
};

//Wrappers for signed-in page
export const PageContentWrapper = ({
  children,
  closeDropDown,
}: WrapperProp & { closeDropDown: () => void }) => {
  return (
    <div
      className="fixed inset-0 flex justify-center"
      onMouseEnter={closeDropDown}
    >
      <div className="mt-32 flex flex-col gap-6">{children}</div>
    </div>
  );
};

export const WorkoutCardsCarousel = ({
  children,
  currIndex,
}: WrapperProp & { currIndex: number }) => {
  return (
    <div className="mx-auto max-w-[400px] overflow-hidden bg-slate-light50 dark:bg-slate-dark900 rounded-2xl shadow-xl">
      <div
        className="flex gap-5 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currIndex * 105}%)` }}
      >
        {children}
      </div>
    </div>
  );
};

export const WorkoutCardLayout = ({ children }: WrapperProp) => {
  return (
    <div className="workout-card-layout">
      <div className="flex flex-col items-center p-4">{children}</div>
      <div className="absolute left-[224px] top-[350px] h-[290px] w-[290px] rounded-full bg-[#caeed2] dark:bg-[#629e62]" />
      <div className="absolute left-[290px] top-[416px] h-[160px] w-[160px] rounded-full bg-[#b6e3ae] dark:bg-[#608160]" />
    </div>
  );
};
