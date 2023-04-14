import { useState } from "react";

export const useEditingForm = () => {
  const [editingForm, setEditingForm] = useState<number | undefined>(undefined);

  function handleEditingForm(id: number | undefined) {
    setEditingForm(id);
  }

  return { editingForm, handleEditingForm };
};
