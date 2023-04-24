import NoteSetLogo from "../svg-components/note-set-logo";
import { GitHubButton, ModeButton } from "../buttons";

const NavBar = () => {
  return (
    <div className="mb-36 flex justify-between bg-gradient-to-r from-orange-button600 via-green-main500 to-green-dark600 dark:from-orange-button600 dark:via-green-dark600 dark:to-green-dark800 px-4 py-2 md:border-b-2 md:border-slate-light400 md:from-tp md:dark:from-tp md:px-0">
      <NoteSetLogo />
      <div className="flex items-center gap-2">
        <GitHubButton />
        <ModeButton />
      </div>
    </div>
  );
};

export default NavBar;
