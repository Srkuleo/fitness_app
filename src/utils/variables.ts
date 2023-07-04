import type { OAuthBtnProps, WorkoutProps } from "../types/types";
import { GoogleSvg, AppleSvg } from "../components/svg";

export const oAuthButtons: OAuthBtnProps[] = [
  { buttonSvg: GoogleSvg, buttonText: "Google" },
  { buttonSvg: AppleSvg, buttonText: "Apple ID" },
];

export const initWorkout: WorkoutProps = {
  id: -1,
  title: "",
  description: "",
  mainBlock: [],
  superSets: [],
};
