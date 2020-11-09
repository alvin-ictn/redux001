import { auth } from "./types/index";
import { user } from "../../database/index";

export const setLogin = (data) => {
  return (dispatch) => {
    dispatch({
      type: auth.CLEAR_ERROR
    })
    user({
      method: 'login',
      data
    }).then(res => {
      if (res.status === 400) {
        dispatch({
          type: auth.SET_ERROR,
          errorMsg: res.data.message,
        });
      } else {
        dispatch({
          type: auth.SET_AUTH_LOGIN,
          access_token: res.data.access_token,
        });
        localStorage.setItem("token", res.data.access_token);
      }
    })
  };
};
