import { User } from "../types/contexts/user_context_types";

export const addUserToLS = (user: User) => {
  localStorage.setItem("fashe_user", JSON.stringify(user));
};

export const removeUserFromLS = () => {
  localStorage.removeItem("fashe_user");
};

export const getUserFromLS = () => {
  const result = localStorage.getItem("fashe_user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
