import type { WrapperProp } from "../../types/types";
import { GitHubButton, ModeButton } from "../buttons";
import { NoteSetLogoSvg } from "../svg";

export const NavBar = ({ children }: Partial<WrapperProp>) => {
  return (
    <div
      className="flex w-full justify-between bg-gradient-to-r from-orange-button600 
    via-green-main500 to-green-dark600 px-4 py-2 dark:from-orange-dark700 
    dark:to-green-dark700 
    md:w-4/6 md:border-b-2 md:border-slate-light400 md:bg-none md:px-0 lg:w-3/6 "
    >
      <NoteSet />
      <div className="flex items-center gap-2">
        <GitHubButton />
        <ModeButton />
        {children}
      </div>
    </div>
  );
};

const NoteSet = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="hidden md:block">{NoteSetLogoSvg}</div>
      <span className="text-xl font-bold text-slate-light50 sm:text-2xl md:text-green-main500">
        Note
        <span className="font-medium md:text-slate-light500">Set</span>
      </span>
    </div>
  );
};
