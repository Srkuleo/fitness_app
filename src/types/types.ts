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

export interface OptionMenuProps {
  toggleEdit: () => void;
  removeSelectedId: () => void;
}

export interface WorkoutProps {
  id: number;
  name: string;
  tooltip: string;
}
export interface CardsContainerProps {
  workouts: WorkoutProps[];
  addWorkout: (name: string, tooltip: string) => void;
  changeWorkout: (workout: WorkoutProps) => void;
  removeWorkout: (id: number) => void;
  isEditing: boolean;
  toggleEdit: () => void;
  selectedId: number | undefined;
  addSelectedId: (id: number) => void;
}

export type WorkoutsAction =
  | { type: "adding"; workout: WorkoutProps }
  | { type: "editing"; workout: WorkoutProps }
  | { type: "removing"; id: number };

export type WorkoutCardProps = WorkoutProps & {
  selectedId: number | undefined;
  addSelectedId: (id: number) => void;
};

export interface AddingFormProps {
  idleState: () => void;
  tempWorkout: WorkoutProps;
  modifyTempWorkout: (tempWorkout: WorkoutProps) => void;
  handleAddWorkout: (name: string, tooltip: string) => void;
  modifyTempWorkoutProp: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ChangingFormProps {
  idleState: () => void;
  tempWorkout: WorkoutProps;
  modifyTempWorkout: (workout: WorkoutProps) => void;
  handleChangeWorkout: (workout: WorkoutProps) => void;
  modifyTempWorkoutProp: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearField: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface EditingButtonsProps {
  workout: WorkoutProps;
  modifyTempWorkout: (workout: WorkoutProps) => void;
  changingState: () => void;
  handleRemoveWorkout: (id: number) => void;
}

export type FormStateTuple = "idle" | "adding" | "changing";
