const INIT_STATE = {email: ''};
import { EMAIL_CHANGED } from '../actions/types'

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      console.log(action.payload)
      return {...state, email: action.payload}
    default:
      console.log('don"t know')
      return state
  }
}