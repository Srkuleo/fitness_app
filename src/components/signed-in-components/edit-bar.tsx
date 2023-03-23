import type { EditBarProps } from "../../types/types";
import { AddIcon, DeleteIcon, DoneIcon, EditIcon } from "../svg-components/svg";

export const EditBar = ({
  workout,
  modifyTempWorkout,
  changingState,
  removeWorkout,
  switchOnRemove,
  addingState,
  toggleEdit,
}: EditBarProps) => {
  return (
    <div className="mx-18 flex justify-between">
      <div className="flex items-center space-x-2">
        <button
          className="rounded-full bg-green-light300 p-smallButton text-slate-main600 transition-all duration-200 ease-in hover:translate-y-1"
          onClick={() => {
            modifyTempWorkout(workout);
            changingState();
          }}
        >
          {EditIcon}
        </button>
        <button
          className="rounded-full bg-red-button400 p-smallButton text-slate-main600 transition-all duration-200 ease-in hover:translate-y-1"
          onClick={() => {
            removeWorkout(workout.id);
            switchOnRemove();
          }}
        >
          {DeleteIcon}
        </button>
      </div>
      <div className="space-x-2">
        <button
          className="rounded-full bg-slate-light400 p-mediumButton text-slate-light50 transition-all ease-out hover:bg-slate-main600"
          onClick={addingState}
        >
          {AddIcon}
        </button>
        <button
          className="rounded-full bg-slate-light400 p-mediumButton text-slate-light50 transition-all ease-out hover:bg-slate-main600"
          onClick={toggleEdit}
        >
          {DoneIcon}
        </button>
      </div>
    </div>
  );
};
