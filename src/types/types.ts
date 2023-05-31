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
  mainBlock: string[];
  superSets: string[];
}

export interface IconProps {
  className: string;
  strokeWidth: number;
}

export interface PageContentProps {
  workouts: WorkoutProps[];
  addWorkout: (workout: WorkoutProps) => void;
  editBar: boolean;
  toggleEditBar: () => void;
}

export interface CarouselNavProps extends Pick<PageContentProps, "workouts"> {
  cardInFocus: number;
  prevCard: () => void;
  nextCard: () => void;
}
