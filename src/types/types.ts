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
  isOpen: boolean;
  openDropDown: () => void;
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

export interface CardNavArrowsProps {
  workouts: WorkoutProps[];
  prevCard: () => void;
  nextCard: () => void;
}

export interface CardsNavButtonsProps {
  workouts: WorkoutProps[];
  InFocus: number;
  jumpToCard: (index: number) => void;
}

export interface CardsEditBarProps {
  currWorkout: WorkoutProps;
  removeWorkout: (id: number) => void;
  switchOnRemove: () => void;
  addingState: () => void;
  toggleEdit: () => void;
}
