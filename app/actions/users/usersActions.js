import * as actionTypes from "./userActionTypes";

import getUsers from '../../apiServices/users';
 

export function fetchUsers(payload) {
  return {
    type: actionTypes.FETCH_USERS,
    payload: getUsers(payload)
  }
}