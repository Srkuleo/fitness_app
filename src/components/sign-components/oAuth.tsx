import { oAuthButtons } from "../../utils/variables";
import { OAuthBtnWrapper } from "../wrappers";

const OAuth = () => {
  return (
    <div className="space-y-2">
      {oAuthButtons.map((oAuth) => {
        return (
          <OAuthBtnWrapper key={oAuth.buttonText}>
            {oAuth.buttonSvg}
            {oAuth.buttonText}
          </OAuthBtnWrapper>
        );
      })}
    </div>
  );
};

export default OAuth;
