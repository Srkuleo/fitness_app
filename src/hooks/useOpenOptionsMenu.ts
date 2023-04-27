import { useState } from "react";

export const useOpenOptionsMenu = () => {
  const [isOpenOptionsMenu, setIsOpenOptionsMenu] = useState(false);

  function openMenu() {
    setIsOpenOptionsMenu(true);
  }
  function closeMenu() {
    setIsOpenOptionsMenu(false);
  }

  return { isOpenOptionsMenu, openMenu, closeMenu };
};
