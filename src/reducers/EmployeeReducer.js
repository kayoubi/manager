import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_SAVE,
  EMPLOYEE_LIST,
  SELECT_EMPLOYEE
} from '../actions/types'

const INIT_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    case EMPLOYEE_SAVE:
      return {...state, INIT_STATE};
    case EMPLOYEE_LIST:
      return {...state, all: action.payload};
    case SELECT_EMPLOYEE:
      console.log(action.payload);
      const {name, phone, uid, shift} = action.payload;
      return {...state, name, phone, uid, shift};
    default:
      return state
  }
}