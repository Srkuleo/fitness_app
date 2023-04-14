import { useState } from "react";

export const useOpenDropDown = () => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false);

  function openDropDown() {
    setIsOpenDropDown(true);
  }
  function closeDropDown() {
    setIsOpenDropDown(false);
  }

  return { isOpenDropDown, openDropDown, closeDropDown };
};
