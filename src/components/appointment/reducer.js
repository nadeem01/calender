import * as types from './constants';
import {data} from '../dummyData'
const initialState = {
duration:data.duration,
employees:data.employees,
appointments: data.appointments
}

export default function appointments(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case types.ADD_APPOINTMENT:
      debugger
      return { ...state, appointments:[...state.appointments, payload] };

    default: return state;
  }
}