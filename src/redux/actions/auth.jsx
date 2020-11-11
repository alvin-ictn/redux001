import { auth } from "./types/index";
import { user } from "../../database/index";

export const setLogin = (data) => {
  console.log(auth)
  return (dispatch) => {
    user({
      method: 'login',
      data
    }).then(res => {
      console.log(res)
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
        user({
          method: 'self',
          access_token : res.data.access_token
        }).then(res => {
          console.log(res)
          if (res.status === 400) {
            dispatch({
              type: auth.SET_ERROR,
              errorMsg: res.data.message,
            });
          } else {
            dispatch({
              type: auth.SET_AUTH_USER_DATA,
              user: res.data.data.user,
            });
          }
        })
      }
    })
  };
};
