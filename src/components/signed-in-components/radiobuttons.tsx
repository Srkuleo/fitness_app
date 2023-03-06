import { type RadioButtonProps } from "../../types/types";
import { SelectedIcon } from "../svg-components/svg";

const RadioButtons = ({
  workouts,
  toggleIsSelected,
}: {
  workouts: RadioButtonProps[];
  toggleIsSelected: (id: number) => void;
}) => {
  return (
    <div className="flex flex-col gap-2 rounded-xl">
      {workouts.map((workout) => {
        return (
          <button
            onClick={() => {
              toggleIsSelected(workout.id);
            }}
            key={workout.id}
            className={`${
              workout.selected
                ? "bg-gradient-to-r from-green-dark600/90 to-green-dark700 text-yellow-text50"
                : "bg-slate-light50"
            } rounded-lg px-6 py-4`}
          >
            <div className="flex items-center justify-between gap-14">
              <div className="text-left">
                <p
                  className={`${
                    !workout.selected && "text-slate-main600"
                  } text-xl font-medium`}
                >
                  {workout.name}
                </p>
                <p
                  className={`${
                    !workout.selected && "text-slate-light400"
                  } text-sm`}
                >
                  {workout.tooltip}
                </p>
              </div>
              {workout.selected ? (
                <SelectedIcon stroke="#fefce8" />
              ) : (
                <SelectedIcon />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default RadioButtons;
