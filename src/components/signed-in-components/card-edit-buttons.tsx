import { useIncrementId } from "../../hooks/useIncrementId";
import { initWorkout } from "../../utils/variables";
import { AddIcon, DoneIcon } from "../svg-components/svg";
import type { CardEditButtonsProps } from "../../types/types";

export const CardEditButttons = ({
  workouts,
  addWorkout,
  toggleEdit,
  jumpToCard,
  handleEditingId,
}: CardEditButtonsProps) => {
  const { id, incrementId } = useIncrementId();

  return (
    <div className="flex justify-around">
      <button
        className="rounded-full bg-slate-light300 p-2 text-slate-main600 shadow-sm transition-all ease-out hover:-translate-x-1 dark:bg-slate-light400 dark:text-slate-light50"
        onClick={() => {
          toggleEdit();
          addWorkout({ ...initWorkout, id: id });
          handleEditingId(id);
          console.log(id);
          incrementId();
          jumpToCard(workouts.length);
        }}
      >
        {AddIcon}
      </button>
      <button
        className="rounded-full bg-slate-light300 p-2 text-slate-main600 shadow-sm transition-all ease-out hover:translate-x-1 dark:bg-slate-light400 dark:text-slate-light50"
        onClick={toggleEdit}
      >
        {DoneIcon}
      </button>
    </div>
  );
};
