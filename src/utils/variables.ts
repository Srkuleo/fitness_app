import type { OAuthBtnProps, WorkoutProps } from "../types/types";
import { GoogleSvg, TwitterSvg, DiscordSvg } from "../components/svg";

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

//Variant for framer motion animations - buttons signed in page
export const buttonsVariant = {
  hidden: { width: 0, opacity: 0 },
  show: {
    width: "auto",
    opacity: 1,
    originX: 0,
    transition: { duration: 0.05, ease: "easeOut" },
  },
  hide: {
    width: 0,
    opacity: 0,
    transition: { duration: 0.02, ease: "easeIn" },
  },
};

export const editOverlayVariant = {
  hidden: {
    opacity: 0,
  },
  "fade-in": {
    opacity: 1,
    transition: { duration: 0.1, ease: "easeOut" },
  },
  "fade-out": {
    opacity: 0,
    transition: { duration: 0.05, ease: "easeIn" },
  },
};
