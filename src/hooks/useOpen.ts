import { useCallback, useState } from "react";

export const useOpen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDropDown = useCallback(() => setIsOpen(true), []);

  const closeDropDown = useCallback(() => setIsOpen(false), []);

  return { isOpen, openDropDown, closeDropDown };
};
