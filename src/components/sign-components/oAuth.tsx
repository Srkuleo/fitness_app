import { oAuthButtons } from "../../utils/variables";
import { OAuthBtnWrapper } from "../wrappers";

const OAuth = () => {
  return (
    <div className="flex-1 space-y-2">
      {oAuthButtons.map((oAuth) => (
        <OAuthBtnWrapper key={oAuth.buttonText}>
          {oAuth.buttonSvg}
          {oAuth.buttonText}
        </OAuthBtnWrapper>
      ))}
    </div>
  );
};

export default OAuth;
