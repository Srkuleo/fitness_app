import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useOpenOptionsMenu } from "../../hooks/useOpenOptionsMenu";
import { optionsMenuVariant } from "../../utils/variables";
import { OptionsMenuButton, CloseButton } from "../buttons";
import { UserIcon, LogsIcon, SignOutIcon } from "../svg";

export const OptionsMenu = () => {
  const { isOpenOptionsMenu, openMenu, closeMenu } = useOpenOptionsMenu();

  return (
    <>
      <OptionsMenuButton openMenu={openMenu} />
      <AnimatePresence>
        {isOpenOptionsMenu && (
          <>
            <motion.div
              className="fixed inset-0 bg-slate-dark950/90"
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
              className="fixed inset-y-0 right-0 flex min-w-[250px] flex-col justify-between bg-gradient-to-b from-white to-slate-light300 p-2 dark:from-slate-main600 dark:to-slate-dark800 sm:min-w-[300px]"
            >
              <div className="flex flex-col gap-2">
                <Link
                  className="options-menu-field group bg-slate-light200 dark:bg-slate-dark700/70"
                  href="/"
                >
                  {UserIcon}
                  Srkuleo
                </Link>
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
        )}
      </AnimatePresence>
    </>
  );
};
