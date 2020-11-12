import { auth, utility } from "./types/index";
import { user } from "../../database/index";

export const setLogin = (data) => {
  console.log(auth)
  return (dispatch) => {
    user({
      method: 'login',
      data
    }).then(res => {
      console.log(res)
      console.log("here before swork?")
      if (!res.data.success) {
        console.log(res.data.message)
        dispatch({
          type: auth.SET_ERROR,
          errorMsg: res.data.message,
        });
      } else if(res.data.success) {
        console.log("WHAT ????")
        dispatch({
          type: auth.SET_AUTH_LOGIN,
          access_token: res.data.access_token,
        });
        localStorage.setItem("token", res.data.access_token);
        dispatch({
          type: utility.SET_UTILITY_PAGE_LOAD,
          isLoading:true,
        })

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
            dispatch({
              type: utility.SET_UTILITY_PAGE_LOAD,
              isLoading:false,
            })
          }
        })
      }
    })
  };
};
