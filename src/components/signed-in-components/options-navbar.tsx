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
        className="group flex items-center gap-3 text-lg font-medium uppercase text-slate-light50"
      >
        srkuleo
        {ArrowDownIcon}
      </button>
      <div
        className={`${
          isOpen ? "scale-100" : "scale-0"
        } flex origin-top-right flex-col rounded-lg bg-slate-light50 p-2 text-green-dark700 shadow-md transition-all duration-200 ease-out`}
        onMouseLeave={closeDropDown}
      >
        <Link className="dropdown-menu-field group" href="/">
          {UserIcon}
          Profile
        </Link>
        <button
          disabled={workouts.length < 1}
          className={`dropdown-menu-field group ${
            workouts.length < 1 ? "pointer-events-none opacity-20" : ""
          }`}
          onClick={() => {
            toggleEdit();
          }}
        >
          <EditIcon className="dropdown-menu-icon" />
          Edit
        </button>
        <button className="dropdown-menu-field group">
          {LogsIcon}
          View logs
        </button>
        <button onClick={toggleMode} className="dropdown-menu-field group">
          {resolvedTheme === "dark" ? (
            <>
              <LightModeIcon className="dropdown-menu-icon" />
              Light mode
            </>
          ) : (
            <>
              <DarkModeIcon className="dropdown-menu-dark-mode-icon" />
              Dark mode
            </>
          )}
        </button>
        <div className="my-1 border-b border-green-light300/70" />
        <Link className="dropdown-menu-field group" href="/">
          {SignOutIcon}
          Sign out
        </Link>
      </div>
    </div>
  );
};
