import { auth, utility } from "../actions/types";

const initialState = {
  access_token: "",
  user: {},
  isLogin: false,
  errorMsg: [],
  isError: false,
  isLoading: false,
};

console.log({ ...auth });

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case auth.SET_AUTH_LOGIN:
      console.log("WHY LOGIN");
      return { ...state, access_token: action.access_token, errorMsg:[], isLogin: true };

    case auth.SET_AUTH_USER_DATA:
      return { ...state, user: action.user, isLogin: true };

    case auth.SET_ERROR:
      console.log("SET ERROR SUCCESS?");
      return { ...state, isError: true, errorMsg: action.errorMsg };

    case auth.CLEAR_ERROR:
      return { ...state, isError: false, errorMsg: "" };

    case utility.SET_UTILITY_PAGE_LOAD:
    case utility.SET_UTILITY_ACTION_LOAD:
      return { ...state, isLoading: action.isLoading };

    default:
      return state;
  }
};

export default authReducers;
