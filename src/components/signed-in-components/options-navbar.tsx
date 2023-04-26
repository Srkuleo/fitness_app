import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useOpenDropDown } from "../../hooks/useOpenDropDown";
import { AnimatePresence, motion } from "framer-motion";
import type { OptionsMenuProps } from "../../types/types";
import {
  LightModeIcon,
  DarkModeIcon,
  ArrowDownIcon,
  UserIcon,
  EditIcon,
  LogsIcon,
  SignOutIcon,
} from "../svg";

export const OptionsMenu = ({
  workouts,
  openEditOverlay,
}: OptionsMenuProps) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { isOpenDropDown, openDropDown, closeDropDown } = useOpenDropDown();

  useEffect(() => {
    setMounted(true);
  }, []);

  function toggleMode() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  if (!mounted) return <></>;

  return (
    <>
      {isOpenDropDown && (
        <div onMouseEnter={closeDropDown} className="absolute inset-0 z-10" />
      )}
      <div className="flex flex-col items-end gap-2">
        <button
          onClick={openDropDown}
          className="group flex items-center gap-3 text-base font-medium uppercase text-slate-light50 md:text-lg md:text-slate-main600 dark:md:text-slate-light50"
        >
          srkuleo
          <ArrowDownIcon isOpenDropDown={isOpenDropDown} />
        </button>
        <AnimatePresence>
          {isOpenDropDown && (
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { duration: 0.1, ease: "easeOut" },
              }}
              exit={{
                opacity: 0,
                transition: { delay: 0.15, duration: 0.05, ease: "easeIn" },
              }}
              className="flex flex-col gap-1 overflow-hidden rounded-lg bg-slate-light50 p-3 shadow-md dark:bg-slate-dark700"
            >
              <Link className="dropdown-menu-field group uppercase" href="/">
                {UserIcon}
                Profile
              </Link>
              <button
                disabled={workouts.length < 1}
                className={`dropdown-menu-field group ${
                  workouts.length < 1 ? "pointer-events-none opacity-20" : ""
                }`}
                onClick={() => {
                  openEditOverlay();
                }}
              >
                <EditIcon className="dropdown-menu-icon" strokeWidth={2.2} />
                Edit
              </button>
              <button className="dropdown-menu-field group">
                {LogsIcon}
                View logs
              </button>
              <button
                onClick={toggleMode}
                className="dropdown-menu-field group"
              >
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
              <div className="border-b border-green-light300/70 dark:border-green-dark700" />
              <Link className="dropdown-menu-field group" href="/">
                {SignOutIcon}
                Sign out
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
