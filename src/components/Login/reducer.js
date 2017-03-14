import { SUCCESS_LOGIN, FAILURE_LOGIN, LOGOUT } from './constants';

const initialState = {
  data: null
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {

  case SUCCESS_LOGIN:
    return Object.assign({}, state, {
      data: action.credentials
    });

  case FAILURE_LOGIN:
    return Object.assign({}, state, {
      data: null
    });
  
  case LOGOUT:
    return Object.assign( {}, state, initialState );

  default:
    return state;
  }
};

export default userReducer;