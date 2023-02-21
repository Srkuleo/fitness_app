import ExternalAuthButton from "./external-auth-button";
import { type ExternalAuthButtonProps } from "../../../types/types";

const ExternalAuth = ({
  authButtons,
}: {
  authButtons: ExternalAuthButtonProps[];
}) => {
  return (
    <div className="flex flex-col gap-2">
      {authButtons.map((aB) => {
        return (
          <ExternalAuthButton
            key={aB.buttonText}
            buttonSvg={aB.buttonSvg}
            buttonText={aB.buttonText}
          />
        );
      })}
    </div>
  );
};

export default ExternalAuth;
