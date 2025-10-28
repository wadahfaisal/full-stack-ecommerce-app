import {
  Action,
  State,
  ActionTypes,
} from "../types/contexts/user_context_types";
import { addUserToLS, removeUserFromLS } from "../utils/localStorage";

const user_reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_BEGIN:
      return { ...state, login_loading: true };
    case ActionTypes.LOGIN_USER_SUCCESS:
      addUserToLS(action.payload);
      return { ...state, login_loading: false, user: action.payload };
    case ActionTypes.LOGIN_USER_ERROR:
      return { ...state, login_loading: false, login_error: action.payload };

    case ActionTypes.REGISTER_USER_BEGIN:
      return { ...state, register_loading: true };
    case ActionTypes.REGISTER_USER_SUCCESS:
      addUserToLS(action.payload);
      return { ...state, register_loading: false, user: action.payload };
    case ActionTypes.REGISTER_USER_ERROR:
      return {
        ...state,
        register_loading: false,
        register_error: action.payload,
      };
    case ActionTypes.LOGOUT_USER_BEGIN:
      return { ...state, logout_loading: true };
    case ActionTypes.LOGOUT_USER_SUCCESS:
      // const msg = action.payload;
      removeUserFromLS();
      return { ...state, user: null, logout_loading: false };
    case ActionTypes.LOGOUT_USER_ERROR:
      return { ...state, logout_error: action.payload, logout_loading: false };
    default:
      // return state;
      throw new Error(`No Matching "${(action as Action).type}" - action type`);
  }
};

export default user_reducer;
