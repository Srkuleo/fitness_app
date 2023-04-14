import { useState } from "react";

export const useEditOverlay = () => {
  const [isOpenEditOverlay, setIsOpenEditOverlay] = useState(false);

  function openEditOverlay() {
    setIsOpenEditOverlay(true);
  }

  function closeEditOverlay() {
    setIsOpenEditOverlay(false);
  }

  return { isOpenEditOverlay, openEditOverlay, closeEditOverlay };
};
