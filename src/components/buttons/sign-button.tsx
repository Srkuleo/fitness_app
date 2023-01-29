import { SignButtonWrapper } from "../wrappers";
import { type SignButtonProp } from "../../types/types";

const SignButton = ({ buttonText }: SignButtonProp) => {
  return <SignButtonWrapper>{buttonText}</SignButtonWrapper>;
};

export default SignButton;
