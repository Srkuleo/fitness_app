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
  openEditOverlay: () => void;
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
  isOpenEditOverlay: boolean;
  closeEditOverlay: () => void;
}

export interface StatelessCardContentProps
  extends Pick<CardsContentProps, "addWorkout" | "closeEditOverlay"> {
  handleEditForm: (id: number | undefined) => void;
  toggleAdding: () => void;
}

export interface WorkoutCardProps
  extends Omit<CardsContentProps, "workouts" | "addWorkout"> {
  workout: WorkoutProps;
  switchInFocus: () => void;
  editForm: number | undefined;
  handleEditForm: (id: number | undefined) => void;
  isAdding: boolean;
  toggleAdding: () => void;
}

export type EditOverlayProps = Pick<
  WorkoutCardProps,
  | "workout"
  | "removeWorkout"
  | "switchInFocus"
  | "closeEditOverlay"
  | "handleEditForm"
>;

export type EditFormProps = Omit<
  WorkoutCardProps,
  "editForm" | "isOpenEditOverlay" | "closeEditOverlay"
>;

export interface CarouselNavArrowsProps
  extends Pick<CardsContentProps, "workouts"> {
  prevCard: () => void;
  nextCard: () => void;
}

export interface CarouselNavBtnsProps
  extends Pick<CardsContentProps, "workouts"> {
  cardInFocus: number;
  jumpToCard: (index: number) => void;
}

export type CardEditButtonsProps = Pick<
  CardsContentProps,
  "workouts" | "addWorkout" | "closeEditOverlay"
> & {
  jumpToCard: (index: number) => void;
  handleEditForm: (id: number | undefined) => void;
  toggleAdding: () => void;
};
