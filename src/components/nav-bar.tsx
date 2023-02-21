import Link from "next/link";
import NoteSetLogo from "./icons/note-set-logo";
import {
  ArrowDownIcon,
  UserIcon,
  EditIcon,
  LogsIcon,
  DarkModeIcon,
  LightModeIcon,
  SignOutIcon,
} from "./icons/svg";
import { darkModeAtom, dropDownAtom } from "../pages/signed-in";
import { useAtom } from "jotai";

const NavBar = () => {
  const [isOpen, setIsOpen] = useAtom(dropDownAtom);

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isOpen && (
        <div
          role="button"
          onClick={toggleDropDown}
          className="fixed top-0 z-10 h-screen w-screen cursor-default"
        ></div>
      )}
      <div className="fixed top-9 left-18 z-10">
        <NoteSetLogo />
      </div>
      <OptionsMenu />
    </>
  );
};

const OptionsMenu = () => {
  const [isDark, setIsDark] = useAtom(darkModeAtom);
  const [isOpen, setIsOpen] = useAtom(dropDownAtom);

  function toggleDarkMode() {
    setIsDark(!isDark);
  }

  function toggleDropDown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="fixed top-9 right-18 z-10 flex flex-col items-end gap-2 pt-2">
      <button
        onClick={toggleDropDown}
        className={`${
          isDark ? "hover:bg-green-light400/70" : "hover:bg-green-dark600"
        } m-0 flex items-center gap-3 rounded-lg bg-green-dark700 px-3 py-1 font-medium text-yellow-text50 transition-all ease-out`}
      >
        Options
        {ArrowDownIcon}
      </button>
      {isOpen && (
        <div className="flex flex-col rounded-lg bg-slate-light50 p-1 text-green-dark700">
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
