import { SignButtonWrapper } from "../wrappers";
import { type StringProp } from "../../types/types";

const SignButton = ({ text }: StringProp) => {
  return <SignButtonWrapper>{text}</SignButtonWrapper>;
};

export default SignButton;
