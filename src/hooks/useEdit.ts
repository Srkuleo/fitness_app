import { useState, useCallback } from "react";

export const useEdit = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = useCallback(() => {
    setIsEditing(!isEditing);
  }, [isEditing]);

  return { isEditing, toggleEdit };
};
