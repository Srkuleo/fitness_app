import type { EditBarProps } from "../../types/types";
import { AddIcon, DeleteIcon, DoneIcon, EditIcon } from "../svg-components/svg";

const EditBar = ({
  currWorkout,
  modifyTempWorkout,
  changingState,
  removeWorkout,
  switchOnRemove,
  addingState,
  toggleEdit,
}: EditBarProps) => {
  return (
    <div className="relative flex justify-between">
      <div className="space-x-2">
        <button
          className="rounded-full bg-green-light300 p-2 text-slate-main600 transition-all duration-200 ease-in hover:translate-y-1"
          onClick={() => {
            modifyTempWorkout(currWorkout);
            changingState();
          }}
        >
          {EditIcon}
        </button>
        <button
          className="rounded-full bg-red-button400 p-2 text-slate-main600 transition-all duration-200 ease-in hover:translate-y-1"
          onClick={() => {
            removeWorkout(currWorkout.id);
            switchOnRemove();
          }}
        >
          {DeleteIcon}
        </button>
      </div>
      <div className="space-x-2">
        <button
          className="rounded-full bg-slate-light400 p-2 text-slate-light50 transition-all ease-out hover:bg-slate-main600"
          onClick={addingState}
        >
          {AddIcon}
        </button>
        <button
          className="rounded-full bg-slate-light400 p-2 text-slate-light50 transition-all ease-out hover:bg-slate-main600"
          onClick={toggleEdit}
        >
          {DoneIcon}
        </button>
      </div>
    </div>
  );
};

export default EditBar;
