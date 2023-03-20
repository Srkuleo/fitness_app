import { useReducer, useCallback } from "react";
import type { FormStateTuple } from "../types/types";

export const useFormState = () => {
  const [formState, dispatch] = useReducer(formStateReducer, "idle");

  const addingState = useCallback(() => {
    dispatch({
      type: "adding",
    });
  }, []);

  const changingState = useCallback(() => {
    dispatch({
      type: "changing",
    });
  }, []);

  const idleState = useCallback(() => {
    dispatch({
      type: "idle",
    });
  }, []);

  return { formState, addingState, changingState, idleState };
};

const formStateReducer = (
  state: FormStateTuple,
  action: { type: FormStateTuple }
): FormStateTuple => {
  switch (action.type) {
    case "adding": {
      return "adding";
    }
    case "changing": {
      return "changing";
    }
    case "idle": {
      return "idle";
    }
  }
};
