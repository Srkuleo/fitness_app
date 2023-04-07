import type { OAuthBtnProps, WorkoutProps } from "../types/types";
import {
  GoogleSvg,
  TwitterSvg,
  DiscordSvg,
} from "../components/svg-components/svg";

export const oAuthButtons: OAuthBtnProps[] = [
  { buttonSvg: GoogleSvg, buttonText: "Google" },
  { buttonSvg: TwitterSvg, buttonText: "Twitter" },
  { buttonSvg: DiscordSvg, buttonText: "Discord" },
];

export const initWorkout: WorkoutProps = {
  id: -1,
  title: "New title",
  description: "New description",
};
