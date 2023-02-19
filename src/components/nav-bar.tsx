import Link from "next/link";
import { NavBarWrapper } from "./wrappers";
import NoteSetLogo from "./logos/note-set-logo";
import {
  ArrowDownIcon,
  UserIcon,
  EditIcon,
  LogsIcon,
  DarkModeIcon,
  LightModeIcon,
  SignOutIcon,
} from "./svg";
import { darkModeAtom } from "../pages/signed-in";
import { useAtom } from "jotai";
import { useState } from "react";

const NavBar = () => {
  return (
    <NavBarWrapper>
      <NoteSetLogo />
      <OptionsMenu />
    </NavBarWrapper>
  );
};

const OptionsMenu = () => {
  const [isDark, setIsDark] = useAtom(darkModeAtom);
  const [showDropDown, setShowDropDown] = useState(false);

  function toggleDarkMode() {
    setIsDark(!isDark);
  }

  function toggleDropDown() {
    setShowDropDown(!showDropDown);
  }

  return (
    <div className="flex flex-col items-end gap-2 pt-2">
      <button
        onClick={toggleDropDown}
        className={`${
          isDark ? "hover:bg-green-light400/70" : "hover:bg-green-dark600"
        } m-0 flex items-center gap-3 rounded-lg bg-green-dark700 px-3 py-1 font-medium text-yellow-text50 transition-all ease-out`}
      >
        Options
        {ArrowDownIcon}
      </button>
      {showDropDown && (
        <div
          className={`${
            isDark ? "border-slate-light50" : "border-green-dark700/30"
          } flex flex-col rounded-lg border-2 bg-slate-light50 p-1 text-green-dark700`}
        >
          <Link
            className="flex items-center gap-2 from-green-main500 to-green-dark700 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50"
            href="/"
          >
            {UserIcon}
            Srkuleo
          </Link>
          <button className="flex items-center gap-2 from-green-main500 to-green-dark700 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50">
            {EditIcon}
            Edit
          </button>
          <button className="flex items-center gap-2 from-green-main500 to-green-dark700 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50">
            {LogsIcon}
            View logs
          </button>
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-2 from-green-main500 to-green-dark700 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50"
          >
            {isDark ? LightModeIcon : DarkModeIcon}
            {isDark ? "Light mode" : "Dark mode"}
          </button>
          <div className="my-1 border-b border-green-main500/30"></div>
          <Link
            className="flex items-center gap-2 from-green-main500 to-green-dark700 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50"
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
