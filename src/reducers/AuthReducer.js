import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN, LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/types'

const INIT_STATE = {email: '', password: '', user: null, error: '', loading: false};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload}
    case PASSWORD_CHANGED:
      return {...state, password: action.payload}
    case LOGIN:
      return {...state, loading: true, error: ''}
    case LOGIN_SUCCESS:
      return {...state, ...INIT_STATE, user: action.payload}
    case LOGIN_FAILED:
      return {...state, error: "Authentication Failed", loading: false}
    default:
      return state
  }
}