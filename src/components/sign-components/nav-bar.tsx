import NoteSetLogo from "../svg-components/note-set-logo";
import { GitHubButton, ModeButton } from "../buttons";

const NavBar = () => {
  return (
    <div className="mb-36 py-2  flex justify-between bg-gradient-to-r from-orange-button600/70 to-green-dark600">
      <NoteSetLogo />
      <div className="flex items-center">
        <GitHubButton />
        <ModeButton />
      </div>
    </div>
  );
};

export default NavBar;
