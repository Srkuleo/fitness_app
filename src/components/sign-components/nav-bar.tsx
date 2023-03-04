import { type ToggleModeProps } from "../../types/types";
import NoteSetLogo from "../svg-components/note-set-logo";
import { GitHub, LightModeIcon, DarkModeIcon } from "../svg-components/svg";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const NavBar = () => {
  return (
    <div className="mt-4 mb-36 flex justify-between border-b-2 border-slate-light400 pb-2 dark:border-slate-light500">
      <NoteSetLogo />
      <NavBarButtons />
    </div>
  );
};

const NavBarButtons = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function toggleMode() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  if (!mounted) return <></>;

  return (
    <div className="flex items-center">
      {resolvedTheme === "dark" ? (
        <GitHub color="#fefce8" />
      ) : (
        <GitHub color="#475569" />
      )}
      <ToggleMode size={28} theme={resolvedTheme} toggleMode={toggleMode} />
    </div>
  );
};

const ToggleMode = ({ size, theme, toggleMode }: ToggleModeProps) => {
  return (
    <button
      onClick={toggleMode}
      className="rounded-full p-[6px] hover:bg-slate-light300 dark:hover:bg-slate-light500/50"
    >
      {theme === "dark" ? (
        <LightModeIcon size={size} />
      ) : (
        <DarkModeIcon size={size} color="#475569" />
      )}
    </button>
  );
};

export default NavBar;
