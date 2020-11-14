import { auth, utility } from "./types/index";
import { user } from "../../database/index";

export const setLogin = (data) => {
  return (dispatch) => {
    dispatch({
      type: utility.SET_UTILITY_ACTION_LOAD,
      isLoading:true,
    })
    user({
      method: 'login',
      data
    }).then(res => {
      if (!res.data.success) {
        dispatch({
          type: utility.SET_UTILITY_ACTION_LOAD,
          isLoading:false,
        })
        dispatch({
          type: auth.SET_ERROR,
          errorMsg: res.data.message,
        });
      } else if(res.data.success) {
        dispatch({
          type: utility.SET_UTILITY_ACTION_LOAD,
          isLoading:false,
        })
        dispatch({
          type: auth.SET_AUTH_LOGIN,
          access_token: res.data.access_token,
          successMsg: res.data.message
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


export const getUserData = (access_token) => {
  return (dispatch) => {
    dispatch({
      type: utility.SET_UTILITY_ACTION_LOAD,
      isLoading:true,
    })
    user({
      method: 'self',
      access_token
    }).then(res => {
      if (res.status === 400) {
        dispatch({
          type: auth.SET_ERROR,
          errorMsg: res.data.message,
        });
        dispatch({
          type: utility.SET_UTILITY_PAGE_LOAD,
          isLoading:false,
        })
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
  };
};
