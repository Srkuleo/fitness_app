import { authButtons } from "../../functions and variables/variables";
import { ExternalAuthButtonWrapper } from "../wrappers";

const ExternalAuth = () => {
  return (
    <div className="space-y-2">
      {authButtons.map((aB) => {
        return (
          <ExternalAuthButtonWrapper key={aB.buttonText}>
            {aB.buttonSvg}
            {aB.buttonText}
          </ExternalAuthButtonWrapper>
        );
      })}
    </div>
  );
};

export default ExternalAuth;
