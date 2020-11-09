import {auth} from "../actions/types/";

const initialState = {
  access_token: "",
  user: {},
  isLogin: false,
  errorMsg: [],
  isError: false,
};


console.log({...auth})

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case auth.SET_AUTH_LOGIN:
      return { ...state, access_token: action.access_token, isLogin: true };

    case auth.SET_ERROR:
      return { ...state, isError: true, errorMsg: action.errorMsg };

    case auth.CLEAR_ERROR:
      return { ...state, isError: false, errorMsg: "" };

    default:
      return state;
  }
};

export default authReducers;