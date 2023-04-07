import { useState } from "react";

export const useEditingId = () => {
  const [editingId, setEditingId] = useState<number | undefined>(undefined);

  function handleEditingId(id: number | undefined) {
    setEditingId(id);
  }

  return { editingId, handleEditingId };
};
