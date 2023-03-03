import {
  GoogleSvg,
  TwitterSvg,
  DiscordSvg,
} from "../../components/svg-components/svg";
import { type ExternalAuthButtonProps } from "../../types/types";
import { ExternalAuthButtonWrapper } from "../wrappers";

const ExternalAuth = () => {
  return (
    <div className="flex flex-col gap-2">
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

const authButtons: ExternalAuthButtonProps[] = [
  { buttonSvg: GoogleSvg, buttonText: "Google" },
  { buttonSvg: TwitterSvg, buttonText: "Twitter" },
  { buttonSvg: DiscordSvg, buttonText: "Discord" },
];

export default ExternalAuth;
