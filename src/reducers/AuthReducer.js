import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAILED } from '../actions/types'

const INIT_STATE = {email: '', password: '', user: null, error: ''};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload}
    case PASSWORD_CHANGED:
      return {...state, password: action.payload}
    case LOGIN_SUCCESS:
      return {...state, user: action.payload, error: ''}
    case LOGIN_FAILED:
      return {...state, error: "Authentication Failed"}
    default:
      console.log('don"t know')
      return state
  }
}