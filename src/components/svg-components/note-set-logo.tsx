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
  <span className="text-2xl font-medium text-slate-main600/90 md:text-slate-light500">
    <span className="font-bold text-green-light400 md:text-green-main500">
      Note
    </span>
    Set
  </span>
);

export default NoteSetLogo;
