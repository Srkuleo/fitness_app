import { useState } from "react";
import type { WrapperProp } from "../../types/types";
import { GitHubButton, ModeButton } from "../buttons";
import { NoteSetLogoSvg } from "../svg";

export const NavBar = ({ children }: Partial<WrapperProp>) => {
  const [isScrolled, setIsScrolled] = useState(false);

  function scrolled() {
    if (window.scrollY >= 60) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  return (
    <div
      onScroll={scrolled}
      className={`${
        isScrolled && "bg-opacity-80 backdrop-blur-sm dark:bg-opacity-80"
      } sticky top-0 bg-green-main500 shadow-sm  dark:bg-green-dark800 `}
    >
      <nav className="flex justify-between px-2 py-2 md:mx-auto md:w-2/3 md:px-0 xl:w-1/2">
        <NoteSet />
        <div className="flex items-center gap-2">
          <GitHubButton />
          <ModeButton />
          {children}
        </div>
      </nav>
    </div>
  );
};

const NoteSet = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="hidden md:block">{NoteSetLogoSvg}</div>
      <span className="text-xl font-bold text-white dark:text-green-light400 sm:text-2xl">
        Note
        <span className="font-medium text-slate-main600 dark:text-slate-light400">
          Set
        </span>
      </span>
    </div>
  );
};
