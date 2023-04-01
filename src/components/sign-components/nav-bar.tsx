import NoteSetLogo from "../svg-components/note-set-logo";
import { GitHubButton, ModeButton } from "../buttons";
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
      <GitHubButton />
      <ModeButton theme={resolvedTheme} toggleMode={toggleMode} />
    </div>
  );
};

export default NavBar;
