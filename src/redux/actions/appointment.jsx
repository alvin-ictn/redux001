import { utility, appointment } from "./types/index";
import { reservation } from "../../database/index";

export const getAppointment = ({access_token,data}) => {
  data = `appointment-${data}`
  return (dispatch) => {
    dispatch({
      type: utility.SET_UTILITY_ACTION_LOAD,
      isLoading:true,
    })
    reservation({
      method: 'appointment',
      access_token,
      data
    }).then(res => {
      if (!res.data.success) {
        dispatch({
          type: utility.SET_UTILITY_ACTION_LOAD,
          isLoading:false,
        })
        dispatch({
          type: appointment.FAIL_GET_DATA,
          errorMsg: res.data.message,
        });
      } else if(res.data.success) {
        dispatch({
          type: utility.SET_UTILITY_ACTION_LOAD,
          isLoading:false,
        })
        dispatch({
          type: appointment.GET_APPOINTMENT,
          dataAppointment: res.data.data.reservation,
          successMsg: res.data.message
        });
        
        dispatch({
          type: utility.SET_UTILITY_PAGE_LOAD,
          isLoading:true,
        })
      }
    })
  };
};

export const getHistory = ({access_token,data}) => {
  data = `history-${data}`;
  return (dispatch) => {
    dispatch({
      type: utility.SET_UTILITY_ACTION_LOAD,
      isLoading:true,
    })
    reservation({
      method: 'appointment',
      access_token,
      data
    }).then(res => {
      if (!res.data.success) {
        dispatch({
          type: utility.SET_UTILITY_ACTION_LOAD,
          isLoading:false,
        })
        dispatch({
          type: appointment.FAIL_GET_DATA,
          errorMsg: res.data.message,
        });
      } else if(res.data.success) {
        dispatch({
          type: utility.SET_UTILITY_ACTION_LOAD,
          isLoading:false,
        })
        
        dispatch({
          type: appointment.GET_HISTORY,
          dataHistory: res.data.data.reservation,
          successMsg: res.data.message
        });
        
        dispatch({
          type: utility.SET_UTILITY_PAGE_LOAD,
          isLoading:true,
        })
      }
    })
  };
};