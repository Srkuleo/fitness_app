import { LogoWrapper } from "../wrappers";
import { NoteSetLogoSvg } from "../svg";
import { useAtom } from "jotai";
import { darkModeAtom } from "../../pages/signed-in";

const NoteSetLogo = () => {
  return (
    <LogoWrapper>
      {NoteSetLogoSvg}
      <NoteSet />
    </LogoWrapper>
  );
};

const NoteSet = () => {
  const [isDark] = useAtom(darkModeAtom);

  return (
    <p
      className={`text-2xl ${
        isDark ? "text-slate-light400" : "text-slate-main600"
      }`}
    >
      <span className="font-bold text-green-main500">Note</span>Set
    </p>
  );
};

export default NoteSetLogo;
