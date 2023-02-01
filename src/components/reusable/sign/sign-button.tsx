import { type SignButtonProps } from "../../../types/types";
import Link from "next/link";

const SignButton = ({ buttonText, href, onClick }: SignButtonProps) => {
  if (href) {
    return (
      <Link href={href} className="sign-btn">
        {buttonText}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className="sign-btn">
      {buttonText}
    </button>
  );
};

export default SignButton;
