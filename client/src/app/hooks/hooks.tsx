import { useContext } from "react";
import { UserContext } from "../contexts/user-context";

export const useUser = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("Must be within provider");
  }

  return userContext;
};
