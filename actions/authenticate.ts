import { AUTHENTICATE_USER } from "./types";

export const authenticateUser = (isAuthenticated: boolean) => {
  return {
    type: AUTHENTICATE_USER,
    payload: isAuthenticated,
  };
};
