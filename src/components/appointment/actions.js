import * as types from './constants';
export const addAppointment = (data) => async (dispatch) => {
  debugger
      dispatch({
        type: types.ADD_APPOINTMENT,
        payload: data,
      });
};

export const getData = () => async (dispatch) => {
  debugger
      dispatch({
        type: types.GET_DATA,
      });
};