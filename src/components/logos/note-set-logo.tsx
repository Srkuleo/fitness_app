import { LogoWrapper } from "../wrappers";
import { type LogoProp } from "../../types/types";

const Logo = ({ svgPlace }: LogoProp) => {
  return (
    <LogoWrapper>
      {svgPlace}
      <p className="text-2xl text-slate-600">
        <span className="text-2xl font-bold text-green-500">Note</span>Set
      </p>
    </LogoWrapper>
  );
};

export default Logo;
