import { SignButtonWrapper } from "../wrappers";
import { type StringProps } from "../../types/types";

const SignButton = ({ text }: StringProps) => {
  return <SignButtonWrapper>{text}</SignButtonWrapper>;
};

export default SignButton;
