import * as actionTypes from '../../actions/users/userActionTypes';

const initialState = {
  users: {},
  isFetching: true,
};

export default (users = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_USERS_FULFILLED:
      return {
        ...state,
        isFetching: false,
        users: action.payload,
      };
    case actionTypes.FETCH_USERS_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      break;
  }
  return state;
});
