import { useState } from "react";
import type { CardsEditBarProps, WorkoutProps } from "../../types/types";
import { AddIcon, DeleteIcon, DoneIcon, EditIcon } from "../svg-components/svg";

const CardsEditBar = ({
  currWorkout,
  modifyTempWorkout,
  changingState,
  removeWorkout,
  switchOnRemove,
  addingState,
  toggleEdit,
}: CardsEditBarProps) => {
  const [isRemoving, setIsRemoving] = useState(false);

  return (
    <>
      <div className="flex justify-around">
        <div className="space-x-2">
          <button
            className="rounded-full bg-green-light400/80 p-2 shadow-sm transition-all duration-200 ease-in hover:translate-y-1 dark:bg-green-light400"
            onClick={() => {
              modifyTempWorkout(currWorkout);
              changingState();
            }}
          >
            <EditIcon className="editbar-btn" />
          </button>
          <button
            className="rounded-full bg-red-button400 p-2 shadow-sm transition-all duration-200 ease-in hover:translate-y-1"
            onClick={() => setIsRemoving(true)}
          >
            {DeleteIcon}
          </button>
        </div>
        <div className="space-x-2">
          <button
            className="rounded-full bg-slate-light400/90 p-2 shadow-sm transition-all ease-out hover:bg-slate-main600"
            onClick={addingState}
          >
            {AddIcon}
          </button>
          <button
            className="rounded-full bg-slate-light400/90 p-2 shadow-sm transition-all ease-out hover:bg-slate-main600"
            onClick={toggleEdit}
          >
            {DoneIcon}
          </button>
        </div>
      </div>
      {isRemoving && (
        <RemoveModal
          currWorkout={currWorkout}
          removeWorkout={removeWorkout}
          switchOnRemove={switchOnRemove}
          setIsRemoving={() => setIsRemoving(false)}
        />
      )}
    </>
  );
};

const RemoveModal = ({
  currWorkout,
  removeWorkout,
  switchOnRemove,
  setIsRemoving,
}: {
  currWorkout: WorkoutProps;
  removeWorkout: (id: number) => void;
  switchOnRemove: () => void;
  setIsRemoving: () => void;
}) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/*   
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0" */}

      <div className="fixed inset-0 bg-slate-dark950 bg-opacity-80" />
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {/* Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" */}

          <div className="relative transform overflow-hidden rounded-lg bg-slate-light50 text-left shadow-xl transition-all dark:bg-slate-dark800 sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-slate-light50 px-4 pb-4 pt-5 dark:bg-slate-dark800 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-removeBtn100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-red-removeBtn600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-slate-dark900 dark:text-slate-light50"
                    id="modal-title"
                  >
                    Remove {`"${currWorkout.name}"`} workout
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-slate-main600 dark:text-slate-light300">
                      Are you sure you want to remove this workout? Selected
                      workout will be permanently removed. This action cannot be
                      undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-light200 px-4 py-3 dark:bg-slate-dark700 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                onClick={() => {
                  removeWorkout(currWorkout.id);
                  switchOnRemove();
                  setIsRemoving();
                }}
                className="inline-flex w-full justify-center rounded-md bg-red-removeBtn600 px-3 py-2 text-sm font-semibold text-yellow-text50 shadow-sm hover:bg-red-button500 sm:ml-3 sm:w-auto"
              >
                Remove
              </button>
              <button
                onClick={setIsRemoving}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-slate-light50 px-3 py-2 text-sm font-semibold text-slate-main600 shadow-sm ring-1 ring-inset ring-slate-light300 hover:bg-slate-light100 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsEditBar;
