import { useContext } from "react";
import { IdContext } from "../utils/idContext";

export const useIncrementId = () => {
  const { id, setId } = useContext(IdContext);

  function incrementId() {
    setId((prevId) => prevId + 1);
  }

  return { id, incrementId };
};
