import { LogoWrapper } from "../wrappers";
import { NoteSetLogoSvg } from "./svg";

const NoteSetLogo = () => {
  return (
    <LogoWrapper>
      {NoteSetLogoSvg}
      {NoteSetText}
    </LogoWrapper>
  );
};

const NoteSetText = (
  <span className="text-2xl font-medium text-slate-light500 dark:text-slate-light400">
    <span className="font-bold text-green-main500">Note</span>Set
  </span>
);

export default NoteSetLogo;
