import { useReducer, useCallback } from "react";
import type { EditOptionsTuple } from "../types/types";

export const useEditOptions = () => {
  const [editOption, dispatch] = useReducer(editReducer, "defaultUI");

  const initAddingForm = useCallback(() => {
    dispatch({
      type: "adding",
    });
  }, []);

  const initChangingForm = useCallback(() => {
    dispatch({
      type: "changing",
    });
  }, []);

  const defaultEditUi = useCallback(() => {
    dispatch({
      type: "defaultUI",
    });
  }, []);

  return { editOption, initAddingForm, initChangingForm, defaultEditUi };
};

const editReducer = (
  state: EditOptionsTuple,
  action: { type: EditOptionsTuple }
): EditOptionsTuple => {
  switch (action.type) {
    case "adding": {
      return "adding";
    }
    case "changing": {
      return "changing";
    }
    case "defaultUI": {
      return "defaultUI";
    }
  }
};
