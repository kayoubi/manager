import firebase from 'firebase'

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from './types'

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
};

export const loginUser = (email, password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(user, dispatch))
      .catch(() =>
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(user, dispatch))
          .catch(() => loginUserFail(dispatch))
      )
  }
};

const loginUserSuccess = (user, dispatch) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user
  })
};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_FAILED,
    payload: {}
  })
};