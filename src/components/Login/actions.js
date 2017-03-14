import { SUCCESS_LOGIN, FAILURE_LOGIN, LOGOUT } from './constants';

const log = (credentials) => {
  return {
    type: SUCCESS_LOGIN,
    credentials
  };
};

const noLog = () => {
  return {
    type: FAILURE_LOGIN
  };
};

export function login(uport) {
  return function(dispatch) {
    return uport.requestCredentials()
    .then( credentials => {
      if(!credentials) {
        dispatch(noLog());
      }
      dispatch(log(credentials));
    });
  };
}

export function logout() {
  return {
    type : LOGOUT,
  };
}