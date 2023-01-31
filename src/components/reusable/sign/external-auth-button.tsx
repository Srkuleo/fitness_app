import { ExternalAuthButtonWrapper } from "../../wrappers";
import { type ExternalAuthButtonProps } from "../../../types/types";

const ExternalAuthButton = ({
  buttonSvg,
  buttonText,
}: ExternalAuthButtonProps) => {
  return (
    <ExternalAuthButtonWrapper>
      {buttonSvg}
      {buttonText}
    </ExternalAuthButtonWrapper>
  );
};

export default ExternalAuthButton;
