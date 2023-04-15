import { useTempWorkout } from "../../hooks/useTempWorkout";
import type { EditFormProps } from "../../types/types";
import { FormBtns } from "../buttons";

export const EditForm = ({
  workout,
  isAdding,
  toggleAdding,
  changeWorkout,
  handleEditForm,
  removeWorkout,
  switchInFocus,
}: EditFormProps) => {
  const { tempWorkout, handleInput } = useTempWorkout(workout);

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isAdding) {
      toggleAdding();
    }
    changeWorkout(tempWorkout);
    handleEditForm(undefined);
  }

  function handleFormReset(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isAdding) {
      removeWorkout(workout.id);
      switchInFocus();
    } else {
      handleEditForm(undefined);
    }
  }
  return (
    <form
      className="flex flex-col items-center p-4"
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
    >
      <div>
        <input
          className="workout-input-field"
          required
          type="text"
          name="title"
          placeholder={workout.title}
          value={tempWorkout.title}
          onChange={handleInput}
        />
      </div>
      <div>
        <input
          className="workout-input-field"
          required
          type="text"
          name="description"
          placeholder={workout.description}
          value={tempWorkout.description}
          onChange={handleInput}
        />
      </div>
      <FormBtns />
    </form>
  );
};
