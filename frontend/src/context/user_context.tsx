import { getUserFromLS } from "../utils/localStorage";
import reducer from "../reducers/user_reducer";
import { customFetch } from "../utils/axios";
import { AxiosError } from "axios";
import {
  PropsWithChildren,
  createContext,
  useContext,
  // useEffect,
  // useState,
  useReducer,
} from "react";
import {
  State,
  ActionTypes,
  LoginData,
  RegisterData,
  UserContextType,
} from "../types/contexts/user_context_types";

const initialState: State = {
  user: getUserFromLS(),
  register_loading: false,
  register_error: null,
  login_loading: false,
  login_error: null,
  logout_loading: false,
  logout_error: null,
};

export const UserContext = createContext({} as UserContextType);

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [user, setUser] = useState(null);

  const loginUser = async (userData: LoginData) => {
    dispatch({ type: ActionTypes.LOGIN_USER_BEGIN });
    try {
      // const { data } = await fetchWithCredentials.post("/auth/login", userData);
      const { data } = await customFetch.post(
        // "https://ecommerce-api-9t8b.onrender.com/api/v1/auth/login",
        "/auth/login",
        userData
        // { withCredentials: true }
      );
      dispatch({ type: ActionTypes.LOGIN_USER_SUCCESS, payload: data.user });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ActionTypes.LOGIN_USER_ERROR,
        payload: error as AxiosError,
      });
    }
  };
  const registerUser = async (userData: RegisterData) => {
    dispatch({ type: ActionTypes.REGISTER_USER_BEGIN });
    try {
      const { data } = await customFetch.post("/auth/register", userData);
      dispatch({ type: ActionTypes.REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ActionTypes.REGISTER_USER_ERROR,
        payload: error as AxiosError,
      });
    }
  };
  const logoutUser = async () => {
    dispatch({ type: ActionTypes.LOGOUT_USER_BEGIN });
    try {
      const { data } = await customFetch.get("/auth/logout");
      dispatch({ type: ActionTypes.LOGOUT_USER_SUCCESS, payload: data.msg });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ActionTypes.LOGIN_USER_ERROR,
        payload: error as AxiosError,
      });
    }
  };

  // useEffect(() => {
  //   if (user) {
  //     setUser(user);
  //   }
  // }, [user]);

  return (
    <UserContext.Provider
      value={{ ...state, loginUser, registerUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
