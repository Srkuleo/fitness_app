export interface WrapperProp {
  children: React.ReactNode;
}

export interface OAuthBtnProps {
  buttonText: string;
  buttonSvg: JSX.Element;
}

export interface WorkoutProps {
  id: number;
  title: string;
  description: string;
}

export interface IconProps {
  className: string;
  strokeWidth: number;
}

export interface OptionsMenuProps {
  toggleEditBar: () => void;
  closeMenu: () => void;
}

export interface PageContentProps {
  workouts: WorkoutProps[];
  addWorkout: (workout: WorkoutProps) => void;
  changeWorkout: (editedWorkout: WorkoutProps | undefined) => void;
  removeWorkout: (id: number) => void;
  editBar: boolean;
  toggleEditBar: () => void;
}

export interface CarouselNavigationProps
  extends Pick<PageContentProps, "workouts"> {
  cardInFocus: number;
  prevCard: () => void;
  nextCard: () => void;
}
