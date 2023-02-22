import { LogoWrapper } from "../wrappers";
import { NoteSetLogoSvg } from "./svg";

const NoteSetLogo = () => {
  return (
    <LogoWrapper>
      {NoteSetLogoSvg}
      <NoteSet />
    </LogoWrapper>
  );
};

const NoteSet = () => {
  return (
    <p className="text-2xl text-slate-main600 dark:text-slate-light400">
      <span className="font-bold text-green-main500">Note</span>Set
    </p>
  );
};

export default NoteSetLogo;
