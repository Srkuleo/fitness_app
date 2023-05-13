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
        onClick={closeMenu}
        className="fixed inset-0 bg-slate-dark950/95"
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
        className="fixed inset-y-0 right-0 flex min-w-[250px] flex-col justify-between bg-slate-light100 p-2 dark:bg-slate-dark800 sm:min-w-[300px]"
      >
        <div className="mt-2 flex flex-col gap-2">
          <motion.div whileTap={{ scale: 0.9 }}>
            <Link
              className="options-menu-field bg-slate-light300/70 dark:bg-slate-dark900/50"
              href="/"
            >
              {UserIcon}
              Srkuleo
            </Link>
          </motion.div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              closeMenu();
              toggleEditBar();
            }}
            className="options-menu-field"
          >
            <EditIcon className="options-menu-icon" strokeWidth={2.2} />
            Edit
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="options-menu-field"
          >
            {LogsIcon}
            View logs
          </motion.button>
          <div className="border-b border-green-light300/80 dark:border-green-dark700/70" />
          <motion.div whileTap={{ scale: 0.9 }}>
            <Link className="options-menu-field" href="/">
              {SignOutIcon}
              Sign out
            </Link>
          </motion.div>
        </div>
        <motion.a
          whileTap={{ translateX: 4 }}
          href="https://www.linkedin.com/in/srkuleo/"
          target="_blank"
          rel="noreferrer"
          className="text-sm italic text-slate-light500"
        >
          Developed by Srdjan Milicevic
        </motion.a>
      </motion.div>
    </>
  );
};
