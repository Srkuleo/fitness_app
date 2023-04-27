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

export interface CardsContentProps {
  workouts: WorkoutProps[];
  addWorkout: (workout: WorkoutProps) => void;
  changeWorkout: (editedWorkout: WorkoutProps | undefined) => void;
  removeWorkout: (id: number) => void;
}

export interface StatelessCardContentProps
  extends Pick<CardsContentProps, "addWorkout"> {
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

export type EditFormProps = Omit<WorkoutCardProps, "editForm">;

export interface CarouselNavigationProps
  extends Pick<CardsContentProps, "workouts"> {
  cardInFocus: number;
  jumpToCard: (index: number) => void;
  prevCard: () => void;
  nextCard: () => void;
}

export type CardEditButtonsProps = Pick<
  CardsContentProps,
  "workouts" | "addWorkout"
> & {
  jumpToCard: (index: number) => void;
  handleEditForm: (id: number | undefined) => void;
  toggleAdding: () => void;
};

export interface RemoveModalProps {
  workout: WorkoutProps;
  onClose: () => void;
  removeWorkout: (id: number) => void;
  switchInFocus: () => void;
}
