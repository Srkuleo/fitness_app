import { ExternalAuthButtonWrapper } from "../wrappers";
import { type ExternalAuthButtonProps } from "../../types/types";

const ExternalAuthButton = ({ text, jsx }: ExternalAuthButtonProps) => {
  return (
    <ExternalAuthButtonWrapper>
      {jsx}
      {text}
    </ExternalAuthButtonWrapper>
  );
};

export default ExternalAuthButton;
