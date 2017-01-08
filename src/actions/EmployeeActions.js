import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_SAVE,
  EMPLOYEE_LIST
} from './types'

export const employeeUpdate = ( {prop, value } ) => {
  return {
    'type': EMPLOYEE_UPDATE,
    payload: {prop, value}
  }
};

export const saveEmployee = ( {name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        Actions.employeeList({ type: 'reset'});
        dispatch(
          {type: EMPLOYEE_SAVE}
        )
      })
  };
};

export const getEmployees = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({
          type: EMPLOYEE_LIST,
          payload: snapshot.val()
        })
      })
  }
};