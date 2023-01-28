import { LogoWrapper } from "../wrappers";
import { NoteSetLogoSvg } from "../svg";

const NoteSetLogo = () => {
  return (
    <LogoWrapper>
      {NoteSetLogoSvg}
      {NoteSet}
    </LogoWrapper>
  );
};

const NoteSet = (
  <p className="text-2xl text-slate-600">
    <span className="text-2xl font-bold text-green-500">Note</span>Set
  </p>
);

export default NoteSetLogo;
