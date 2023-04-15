import { useState } from "react";

export const useEditForm = () => {
  const [editForm, setEditForm] = useState<number | undefined>(undefined);

  function handleEditForm(id: number | undefined) {
    setEditForm(id);
  }

  return { editForm, handleEditForm };
};
