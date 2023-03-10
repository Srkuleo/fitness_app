export interface WrapperChild {
  children: React.ReactNode;
}

export interface ModeButtonProps {
  size: number;
  theme: string;
  toggleMode: () => void;
}

export interface ExternalAuthButtonProps
  extends Pick<SignButtonProps, "buttonText"> {
  buttonSvg: JSX.Element;
}

export interface InputProps {
  _name: string;
  placeholder: string;
  type: string;
}

export interface SignButtonProps {
  buttonText: string;
  href: string;
}

export interface FormProps {
  form: {
    id: string;
    inputs: InputProps[];
  };
  checkBox: Pick<InputProps, "_name" | "type">;
  signButton: SignButtonProps;
}

export interface OptionMenuProps {
  isOpen: boolean;
  toggleDropDown: () => void;
  toggleEdit: () => void;
  removeSelectedId: () => void;
}

export interface WorkoutProps {
  id: number;
  name: string;
  tooltip: string;
}
export interface RBComponentProps {
  workouts: WorkoutProps[];
  isEditing: boolean;
  toggleEdit: () => void;
  handleAddWorkout: ({
    name,
    tooltip,
  }: Pick<WorkoutProps, "name" | "tooltip">) => void;
  handleChangeWorkout: (workout: WorkoutProps) => void;
  handleDeleteWorkout: (workout: WorkoutProps) => void;
  selectedId: number | undefined;
  handleId: (id: number) => void;
}

type DispatchTuple = "added" | "edited" | "deleted";

export interface WorkoutsAction {
  type: DispatchTuple;
  workout: WorkoutProps;
}

export type RadioButtonProps = WorkoutProps & {
  selectedId: number | undefined;
  handleId: (id: number) => void;
};

export interface AddingFormProps {
  toggleAdding: () => void;
  tempWorkout: WorkoutProps;
  modifyTempWorkout: (tempWorkout: WorkoutProps) => void;
  handleAddWorkout: (workout: WorkoutProps) => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ChangingFormProps {
  toggleChanging: () => void;
  tempWorkout: WorkoutProps;
  modifyTempWorkout: (workout: WorkoutProps) => void;
  handleChangeWorkout: (workout: WorkoutProps) => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface EditingButtonsProps {
  workout: WorkoutProps;
  modifyTempWorkout: (workout: WorkoutProps) => void;
  toggleChanging: () => void;
  handleDeleteWorkout: (workout: WorkoutProps) => void;
}
