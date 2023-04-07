import { useIncrementId } from "../../hooks/useIncrementId";
import type { StatelessCardContentProps } from "../../types/types";
import { initWorkout } from "../../utils/variables";
import { AddIcon, DbIcon } from "../svg-components/svg";

export const StatelessCardContent = ({
  toggleEdit,
  addWorkout,
  handleEditingId,
}: StatelessCardContentProps) => {
  const { id, incrementId } = useIncrementId();

  return (
    <div className="mx-auto">
      <div className="relative h-[500px] w-[380px] rounded-xl border-4 border-dashed border-orange-button500 bg-slate-light100 dark:bg-slate-dark800">
        <div className="relative z-10 mt-12 flex flex-col items-center">
          <p className="font-medium italic text-slate-light400">
            You {"don't"} have any existing workout.
          </p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          {DbIcon}
        </div>
        <div className="absolute bottom-12 right-4">
          <button
            className="add-workout-btn"
            onClick={() => {
              toggleEdit();
              addWorkout({ ...initWorkout, id: id });
              handleEditingId(id);
              incrementId();
            }}
          >
            {AddIcon}
            New workout
          </button>
        </div>
      </div>
    </div>
  );
};
