import ExternalAuthButton from "./external-auth-button";
import { type ExternalAuthButtonProps } from "../../../types/types";

const ExternalAuth = ({
  authButtons,
}: {
  authButtons: ExternalAuthButtonProps[];
}) => {
  return (
    <>
      {authButtons.map((aB) => {
        return (
          <ExternalAuthButton
            key={aB.buttonText}
            buttonSvg={aB.buttonSvg}
            buttonText={aB.buttonText}
          />
        );
      })}
      <Separator />
    </>
  );
};

const Separator = () => {
  return (
    <div className="m-3 flex items-center justify-around">
      <div className="w-32 border border-green-light400/90"></div>
      <p className="text-sm italic text-slate-main600">or</p>
      <div className="w-32 border border-green-light400/90"></div>
    </div>
  );
};

export default ExternalAuth;
