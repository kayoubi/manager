import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_SAVE,
  EMPLOYEE_LIST
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
    default:
      return state
  }
}