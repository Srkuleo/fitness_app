import Link from "next/link";
import NoteSetLogo from "../svg-components/note-set-logo";
import {
  LightModeIcon,
  DarkModeIcon,
  ArrowDownIcon,
  UserIcon,
  EditIcon,
  LogsIcon,
  SignOutIcon,
} from "../svg-components/svg";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { useOpen } from "../../hooks/useOpen";
import { useHover } from "../../hooks/useHover";
import type { OptionsMenuProps } from "../../types/types";

export const FixedLogo = () => {
  return (
    <div className="fixed top-9 left-18 z-10">
      <NoteSetLogo />
    </div>
  );
};

export const OptionsMenu = ({ toggleEdit, workouts }: OptionsMenuProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { isOpen, openDropDown, closeDropDown } = useOpen();
  const { isHovered, toggleHover } = useHover();

  useEffect(() => {
    setMounted(true);
  }, []);

  function toggleMode() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  if (!mounted) return <></>;

  return (
    <div className="fixed top-9 right-18 z-10 flex flex-col items-end gap-2 pt-2">
      <button
        onClick={openDropDown}
        className="flex items-center gap-3 text-lg font-medium uppercase text-slate-light50"
      >
        srkuleo
        {ArrowDownIcon}
      </button>
      <div
        className={`${
          isOpen ? "scale-100" : "scale-0"
        } flex origin-top-right flex-col rounded-lg bg-slate-light50 p-2 text-green-dark700 transition-all duration-200 ease-out`}
        onMouseLeave={closeDropDown}
      >
        <Link
          className="flex items-center gap-2 from-green-dark700 via-green-dark700 to-green-main500 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50"
          href="/"
        >
          {UserIcon}
          Profile
        </Link>
        <button
          disabled={workouts.length < 1}
          className={`flex items-center gap-2 from-green-dark700 via-green-dark700 to-green-main500 py-1 pr-32 pl-2 text-left text-sm uppercase transition-all ease-out hover:rounded-md hover:bg-gradient-to-r hover:text-yellow-text50 ${
            workouts.length < 1 ? "pointer-events-none opacity-20" : ""
          }`}
          onClick={() => {
            toggleEdit();
          }}
        >
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
    </div>
  );
};
