import { SUCCESS_LOGIN, FAILURE_LOGIN } from './constants';

const initialState = {
  data: null
};

const userReducer = (state = initialState, action) => {
  console.log(state);
  switch(action.type) {

  case SUCCESS_LOGIN:
    return Object.assign({}, state, {
      data: action.credentials
    });

  case FAILURE_LOGIN:
    return Object.assign({}, state, {
      data: null
    });

  default:
    return state;
  }
};

export default userReducer;