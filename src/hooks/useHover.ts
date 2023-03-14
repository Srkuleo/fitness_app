import { useState, useCallback } from "react";

export const useHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = useCallback(() => {
    setIsHovered(!isHovered);
  }, [isHovered]);

  return { isHovered, toggleHover };
};
