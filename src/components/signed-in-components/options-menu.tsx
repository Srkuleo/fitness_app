import Link from "next/link";
import { motion } from "framer-motion";
import type { OptionsMenuProps } from "../../types/types";
import { optionsMenuVariant } from "../../utils/variables";
import { CloseButton } from "../buttons";
import { UserIcon, LogsIcon, SignOutIcon, EditIcon } from "../svg";

export const OptionsMenu = ({ toggleEditBar, closeMenu }: OptionsMenuProps) => {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-10 bg-slate-dark950/90"
        variants={optionsMenuVariant}
        initial="hidden"
        animate="fade-in"
        exit="fade-out"
      >
        <CloseButton closeMenu={closeMenu} />
      </motion.div>

      <motion.div
        variants={optionsMenuVariant}
        initial="most-right"
        animate="slide-in"
        exit="slide-out"
        className="fixed inset-y-0 right-0 z-10 flex min-w-[250px] flex-col justify-between bg-gradient-to-b from-white to-slate-light300 p-2 dark:from-slate-main600 dark:to-slate-dark800 sm:min-w-[300px]"
      >
        <div className="flex flex-col gap-2">
          <Link
            className="options-menu-field group bg-slate-light200 dark:bg-slate-dark700/70"
            href="/"
          >
            {UserIcon}
            Srkuleo
          </Link>
          <button
            onClick={() => {
              closeMenu();
              toggleEditBar();
            }}
            className="options-menu-field group"
          >
            <EditIcon className="options-menu-icon" strokeWidth={2.2} />
            Edit
          </button>
          <button className="options-menu-field group">
            {LogsIcon}
            View logs
          </button>
          <div className="border-b border-green-light300/70 dark:border-green-dark700" />
          <Link className="options-menu-field group" href="/">
            {SignOutIcon}
            Sign out
          </Link>
        </div>
        <a
          href="https://www.linkedin.com/in/srkuleo/"
          target="_blank"
          rel="noreferrer"
          className="text-sm italic text-slate-light500"
        >
          Developed by Srdan Milicevic
        </a>
      </motion.div>
    </>
  );
};
