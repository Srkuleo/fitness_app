import NoteSetLogo from "../../icons/note-set-logo";
import { GitHub, LightModeIcon, DarkModeIcon } from "../../icons/svg";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="mt-3 mb-40 flex justify-between">
      <NoteSetLogo />
      <div className="flex items-center gap-2">
        {resolvedTheme === "dark" ? (
          <GitHub color="#fefce8" />
        ) : (
          <GitHub color="#475569" />
        )}
        <ToggleMode size={28} />
      </div>
    </div>
  );
};

const ToggleMode = ({ size }: { size: number }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  function toggleMode() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <button onClick={toggleMode}>
      {resolvedTheme === "dark" ? (
        <LightModeIcon size={size} />
      ) : (
        <DarkModeIcon size={size} color="#475569" />
      )}
    </button>
  );
};

export default Header;
