import { useCallback, useState } from "react";

export const useOpen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return { isOpen, toggleDropDown };
};
