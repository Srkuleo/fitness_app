import { ModalWrapper } from "../wrappers";
import type { RemoveModalProps } from "../../types/types";
import { Dialog } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "../svg-components/svg";
import { useRef } from "react";

export const RemoveModal = ({
  workout,
  onClose,
  removeWorkout,
  switchInFocus,
}: RemoveModalProps) => {
  const cancelButtonRef = useRef(null);

  return (
    <ModalWrapper onClose={onClose} cancelButtonRef={cancelButtonRef}>
      <div className="bg-slate-light50 px-4 pb-4 pt-5 dark:bg-slate-dark800 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-removeBtn100 sm:mx-0 sm:h-10 sm:w-10">
            {ExclamationTriangleIcon}
          </div>
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <Dialog.Title
              as="h3"
              className="text-base font-semibold leading-6 text-slate-dark950 dark:text-slate-light50"
            >
              Remove &quot;{workout.title}&quot; workout
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-slate-main600 dark:text-slate-light300">
                Are you sure you want to remove this workout? You won&apos;t be
                able to select it once it is removed. This action cannot be
                undone.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-light200/70 px-4 py-3 dark:bg-slate-dark700 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-md bg-red-removeBtn600 px-3 py-2 text-sm font-semibold text-slate-light50 shadow-sm hover:bg-red-button500 sm:ml-3 sm:w-auto"
          onClick={() => {
            removeWorkout(workout.id);
            switchInFocus();
            onClose();
          }}
        >
          Remove
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-slate-light50 px-3 py-2 text-sm font-semibold text-slate-dark950 shadow-sm ring-1 ring-inset ring-slate-light400/70 hover:bg-slate-light100 dark:bg-slate-light300/90 dark:ring-slate-light50 dark:hover:bg-slate-light200/90 sm:mt-0 sm:w-auto"
          onClick={onClose}
          ref={cancelButtonRef}
        >
          Cancel
        </button>
      </div>
    </ModalWrapper>
  );
};

export const DiscardModal = ({ onClose }: { onClose: () => void }) => {
  const cancelButtonRef = useRef(null);

  return (
    <ModalWrapper onClose={onClose} cancelButtonRef={cancelButtonRef}>
      <div className="bg-slate-light50 px-4 pb-4 pt-5 dark:bg-slate-dark800 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-removeBtn100 sm:mx-0 sm:h-10 sm:w-10">
            {ExclamationTriangleIcon}
          </div>
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <Dialog.Title
              as="h3"
              className="text-base font-semibold leading-6 text-slate-dark950 dark:text-slate-light50"
            >
              Discard changes
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-slate-main600 dark:text-slate-light300">
                Are you sure you want to proceed?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-light200/70 px-4 py-3 dark:bg-slate-dark700 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="reset"
          className="inline-flex w-full justify-center rounded-md bg-red-removeBtn600 px-3 py-2 text-sm font-semibold text-slate-light50 shadow-sm hover:bg-red-button500 sm:ml-3 sm:w-auto"
          onClick={() => {
            onClose();
            console.log("Modal closed");
          }}
        >
          Discard
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-slate-light50 px-3 py-2 text-sm font-semibold text-slate-dark950 shadow-sm ring-1 ring-inset ring-slate-light400/70 hover:bg-slate-light100 dark:hover:bg-slate-light200 sm:mt-0 sm:w-auto"
          onClick={onClose}
          ref={cancelButtonRef}
        >
          Keep Editing
        </button>
      </div>
    </ModalWrapper>
  );
};

export const SubmitModal = ({ onClose }: { onClose: () => void }) => {
  const cancelButtonRef = useRef(null);

  return (
    <ModalWrapper onClose={onClose} cancelButtonRef={cancelButtonRef}>
      <div className="bg-slate-light50 px-4 pb-4 pt-5 dark:bg-slate-dark800 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-light200/80 dark:bg-green-light100 sm:mx-0 sm:h-10 sm:w-10">
            {InformationCircleIcon}
          </div>
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <Dialog.Title
              as="h3"
              className="text-base font-semibold leading-6 text-slate-dark950 dark:text-slate-light50"
            >
              Submit workout form
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-slate-main600 dark:text-slate-light300">
                Clicking &quot;Submit&quot; button will save all the changes
                applied. Are you sure you want to proceed?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-light200/70 px-4 py-3 dark:bg-slate-dark700 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md bg-green-dark600 px-3 py-2 text-sm font-semibold text-slate-light50 shadow-sm hover:bg-green-main500 sm:ml-3 sm:w-auto"
          onClick={() => {
            onClose();
            console.log("Modal closed");
          }}
        >
          Submit
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-slate-light50 px-3 py-2 text-sm font-semibold text-slate-dark950 shadow-sm ring-1 ring-inset ring-slate-light400/70 hover:bg-slate-light100 dark:hover:bg-slate-light200 sm:mt-0 sm:w-auto"
          onClick={onClose}
          ref={cancelButtonRef}
        >
          Keep Editing
        </button>
      </div>
    </ModalWrapper>
  );
};
