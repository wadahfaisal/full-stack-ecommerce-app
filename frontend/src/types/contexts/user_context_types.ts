import { AxiosError } from "axios";

export type User = {
  name: string;
  userId: string;
  role: string;
};

export type State = {
  user: null | User;
  register_loading: boolean;
  register_error: null | AxiosError;
  login_loading: boolean;
  login_error: null | AxiosError;
  logout_loading: boolean;
  logout_error: null | AxiosError;
};

export type Action =
  | ActionWithoutPayload
  | ActionWithUserPayload
  | ActionWithErrorPayload
  | ActionWithMessagePayload;

export type UserContextType = {
  // State Types
  user: null | User;
  register_loading: boolean;
  register_error: null | AxiosError;
  login_loading: boolean;
  login_error: null | AxiosError;

  // Functions Types
  loginUser: (userData: LoginData) => Promise<void>;
  registerUser: (userData: RegisterData) => Promise<void>;
  logoutUser: () => Promise<void>;
};

type ActionWithoutPayload = {
  type:
    | ActionTypes.LOGIN_USER_BEGIN
    | ActionTypes.REGISTER_USER_BEGIN
    | ActionTypes.LOGOUT_USER_BEGIN;
};

type ActionWithUserPayload = {
  type: ActionTypes.LOGIN_USER_SUCCESS | ActionTypes.REGISTER_USER_SUCCESS;
  payload: User;
};

type ActionWithMessagePayload = {
  type: ActionTypes.LOGOUT_USER_SUCCESS;
  payload: string;
};

type ActionWithErrorPayload = {
  type:
    | ActionTypes.LOGIN_USER_ERROR
    | ActionTypes.REGISTER_USER_ERROR
    | ActionTypes.LOGOUT_USER_ERROR;
  payload: AxiosError;
};

export enum ActionTypes {
  LOGIN_USER_BEGIN = "LOGIN_USER_BEGIN",
  LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS",
  LOGIN_USER_ERROR = "LOGIN_USER_ERROR",
  REGISTER_USER_BEGIN = "REGISTER_USER_BEGIN",
  REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS",
  REGISTER_USER_ERROR = "REGISTER_USER_ERROR",
  LOGOUT_USER_BEGIN = "LOGOUT_USER_BEGIN",
  LOGOUT_USER_SUCCESS = "LOGOUT_USER_SUCCESS",
  LOGOUT_USER_ERROR = "LOGOUT_USER_ERROR",
}

export type LoginData = {
  email: string;
  password: string;
};
export type RegisterData = {
  name: string;
  email: string;
  password: string;
};
