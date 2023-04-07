import { createContext } from "react";

type IdContextType = {
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
};

export const IdContext = createContext<IdContextType>({
  id: 4,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setId: () => {},
});
