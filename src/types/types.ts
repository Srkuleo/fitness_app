export interface WrapperProp {
  children: React.ReactNode;
}

export interface ModeButtonProps {
  theme: string | undefined;
  toggleMode: () => void;
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

export interface OptionsMenuProps {
  workouts: WorkoutProps[];
  toggleEdit: () => void;
}

export interface EditIconProps {
  className: string;
  strokeWidth: number;
}

export interface CardsContentProps {
  workouts: WorkoutProps[];
  addWorkout: (workout: WorkoutProps) => void;
  changeWorkout: (editedWorkout: WorkoutProps | undefined) => void;
  removeWorkout: (id: number) => void;
  isEditing: boolean;
  toggleEdit: () => void;
}

export interface StatelessCardContentProps
  extends Pick<CardsContentProps, "addWorkout" | "toggleEdit"> {
  handleEditingId: (id: number | undefined) => void;
}

export interface WorkoutCardProps
  extends Omit<CardsContentProps, "workouts" | "addWorkout"> {
  workout: WorkoutProps;
  switchInFocus: () => void;
  editingId: number | undefined;
  handleEditingId: (id: number | undefined) => void;
}

export interface CarouselNavArrowsProps {
  workouts: WorkoutProps[];
  prevCard: () => void;
  nextCard: () => void;
}

export interface CarouselNavBtnsProps {
  workouts: WorkoutProps[];
  InFocus: number;
  jumpToCard: (index: number) => void;
}

export interface CardEditButtonsProps {
  workouts: WorkoutProps[];
  addWorkout: (workout: WorkoutProps) => void;
  toggleEdit: () => void;
  jumpToCard: (index: number) => void;
  handleEditingId: (id: number | undefined) => void;
}

export interface CardEditBarProps {
  currWorkout: WorkoutProps;
  removeWorkout: (id: number) => void;
  switchOnRemove: () => void;
  addingState: () => void;
  toggleEdit: () => void;
}
