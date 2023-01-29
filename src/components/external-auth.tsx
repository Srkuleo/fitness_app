import ExternalAuthButton from "./buttons/external-auth-button";
import { type ExternalAuthProps } from "../types/types";

const ExternalAuth = ({ buttons }: ExternalAuthProps) => {
  return (
    <>
      {buttons.map((button) => {
        return (
          <ExternalAuthButton
            key={button.buttonText}
            buttonSvg={button.buttonSvg}
            buttonText={button.buttonText}
          />
        );
      })}
      <Separator />
    </>
  );
};

export const Separator = () => {
  return (
    <div className="m-5 flex items-center justify-around">
      <div className="w-32 border border-green-300"></div>
      <p className="text-sm italic text-slate-600">or</p>
      <div className="w-32 border border-green-300"></div>
    </div>
  );
};

export default ExternalAuth;
