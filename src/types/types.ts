export interface WrapperChild {
  children: React.ReactNode;
}

export interface ModeButtonProps {
  size: number;
  theme: string | undefined;
  toggleMode: () => void;
}

export interface OAuthBtnProps {
  buttonText: string;
  buttonSvg: JSX.Element;
}

export interface WorkoutProps {
  id: number;
  name: string;
  tooltip: string;
}
export interface CardsContentProps {
  workouts: WorkoutProps[];
  addWorkout: (name: string, tooltip: string) => void;
  changeWorkout: (workout: WorkoutProps) => void;
  removeWorkout: (id: number) => void;
  isEditing: boolean;
  toggleEdit: () => void;
}

export type WorkoutsAction =
  | { type: "adding"; workout: WorkoutProps }
  | { type: "editing"; workout: WorkoutProps }
  | { type: "removing"; id: number };

export type FormStateTuple = "idle" | "adding" | "changing";

export interface AddingFormProps {
  tempWorkout: WorkoutProps;
  idleState: () => void;
  modifyTempWorkout: (tempWorkout: WorkoutProps) => void;
  addWorkout: (name: string, tooltip: string) => void;
  modifyProp: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ChangingFormProps {
  tempWorkout: WorkoutProps;
  workoutName: string;
  idleState: () => void;
  modifyTempWorkout: (workout: WorkoutProps) => void;
  changeWorkout: (workout: WorkoutProps) => void;
  modifyProp: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearField: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface StatelessCardsContainerProps extends AddingFormProps {
  addingState: () => void;
  formState: FormStateTuple;
}

export interface StatefulCardsContainerProps {
  currWorkout: WorkoutProps;
  workouts: WorkoutProps[];
  prevCard: () => void;
  nextCard: () => void;
}

export type PrevCardBtnProps = Pick<
  StatefulCardsContainerProps,
  "prevCard" | "workouts"
>;

export type NextCardBtnProps = Pick<
  StatefulCardsContainerProps,
  "nextCard" | "workouts"
>;
export interface CardsNavBarProps {
  workouts: WorkoutProps[];
  currIndex: number;
  jumpToCard: (index: number) => void;
}

export interface CardsEditBarProps {
  currWorkout: WorkoutProps;
  modifyTempWorkout: (workout: WorkoutProps) => void;
  changingState: () => void;
  removeWorkout: (id: number) => void;
  switchOnRemove: () => void;
  addingState: () => void;
  toggleEdit: () => void;
}
