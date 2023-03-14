import { useState, useCallback } from "react";

export const useHandleId = () => {
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  const addSelectedId = useCallback((id: number) => {
    setSelectedId(id);
  }, []);

  const removeSelectedId = useCallback(() => {
    setSelectedId(undefined);
  }, []);

  return { selectedId, addSelectedId, removeSelectedId };
};
