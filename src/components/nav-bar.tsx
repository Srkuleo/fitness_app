import Link from "next/link";
import NoteSetLogo from "./svg-components/note-set-logo";
import {
  LightModeIcon,
  DarkModeIcon,
  ArrowDownIcon,
  UserIcon,
  EditIcon,
  LogsIcon,
  SignOutIcon,
} from "./svg-components/svg";
import { type OptionMenuProps } from "../types/types";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isOpen && (
        <div
          role="button"
          onMouseEnter={toggleDropDown}
          className="fixed top-0 z-10 h-screen w-screen cursor-default"
        ></div>
      )}
      <div className="fixed top-9 left-18 z-10">
        <NoteSetLogo />
      </div>
      <OptionsMenu isOpen={isOpen} toggleDropDown={toggleDropDown} />
    </>
  );
};

const OptionsMenu = ({ toggleDropDown, isOpen }: OptionMenuProps) => {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  function toggleMode() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  function toggleHover() {
    setIsHovered(!isHovered);
  }

  return (
    <div className="fixed top-9 right-18 z-10 flex flex-col items-end gap-2 pt-2">
      <button
        onClick={toggleDropDown}
        className="m-0 flex items-center gap-3 rounded-lg px-3 py-1 text-lg uppercase font-medium text-slate-light50 transition-all ease-out"
      >
        srkuleo
        {ArrowDownIcon}
      </button>
      {isOpen && (
        <div className="flex flex-col rounded-lg bg-slate-light50 p-2 text-green-dark700">
          <Link
            className="flex items-center gap-2 from-green-dark700 via-green-dark700 to-green-main500 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50"
            href="/"
          >
            {UserIcon}
            Profile
          </Link>
          <button className="flex items-center gap-2 from-green-dark700 via-green-dark700 to-green-main500 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50">
            {EditIcon}
            Edit
          </button>
          <button className="flex items-center gap-2 from-green-dark700 via-green-dark700 to-green-main500 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50">
            {LogsIcon}
            View logs
          </button>
          <button
            onClick={toggleMode}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            className="flex items-center gap-2 rounded-md from-green-dark700 via-green-dark700 to-green-main500 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:bg-gradient-to-r hover:text-yellow-text50"
          >
            {resolvedTheme === "dark" ? (
              <>
                <LightModeIcon size={22} stroke="currentColor" />
                Light mode
              </>
            ) : (
              <>
                {isHovered ? (
                  <DarkModeIcon size={22} color="#cbd5e1" />
                ) : (
                  <DarkModeIcon size={22} />
                )}
                Dark mode
              </>
            )}
          </button>
          <div className="my-1 border-b border-green-dark700/20"></div>
          <Link
            className="flex items-center gap-2 from-green-dark700 via-green-dark700 to-green-main500 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50"
            href="/"
          >
            {SignOutIcon}
            Sign out
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
