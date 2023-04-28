import { useState } from "react";

export const useEditBar = () => {
  const [editBar, setEditBar] = useState(false);

  function toggleEditBar() {
    setEditBar(!editBar);
  }

  return { editBar, toggleEditBar };
};
