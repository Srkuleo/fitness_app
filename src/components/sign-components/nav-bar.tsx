import { useEffect, useState } from "react";
import { GitHubButton, ModeButton } from "../buttons";
import { NoteSetLogoSvg } from "../svg";

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("load", scrolled);
    window.addEventListener("scroll", scrolled);

    return () => {
      window.removeEventListener("load", scrolled);
      window.removeEventListener("scroll", scrolled);
    };
  }, []);

  function scrolled() {
    if (window.scrollY >= 1) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  return (
    <div className="fixed inset-x-0 top-0 md:z-10">
      <nav
        className={`${
          isScrolled &&
          "bg-opacity-80 backdrop-blur-sm transition duration-300 ease-out dark:bg-opacity-80"
        } flex justify-between bg-green-dark600 px-4 py-2 shadow-sm dark:bg-green-dark800 md:mx-auto md:w-3/4 md:rounded-b-xl lg:w-2/3 2xl:w-1/2`}
      >
        <NoteSet />
        <div className="flex items-center gap-2">
          <GitHubButton />
          <ModeButton />
        </div>
      </nav>
    </div>
  );
};

const NoteSet = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="hidden md:block">{NoteSetLogoSvg}</div>
      <span className="text-2xl font-bold text-slate-light50 dark:text-green-light400">
        Note
        <span className="font-semibold dark:text-slate-light400">Set</span>
      </span>
    </div>
  );
};
