import {
  SUCCESS_LOGIN, FAILURE_LOGIN, LOGOUT,
  SUCCESS_REGISTRATION
} from './constants';
import { registerUser } from './UserManagerContract';

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
  return function (dispatch) {
    return uport.requestCredentials()
      .then(credentials => {
        if (!credentials) {
          dispatch(noLog());
        }
        dispatch(log(credentials));
      });
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function successRegistration(name) {
  return {
    type: SUCCESS_REGISTRATION,
    name
  };
}

export function registration({ uport = null, SimpleUserManager = null, web3 = null } = {}) {
  if (uport && SimpleUserManager && web3) {
    return function (dispatch) {
      return uport.requestCredentials()
        .then(credentials => {
          const { publicKey = null, name = null } = credentials;

          if (publicKey) {
            registerUser(SimpleUserManager, publicKey, name)
              .then(response => {
                const { name = null } = response.logs[0].args;
                if (name) {
                  const utf8Name = web3.toAscii(name);
                  dispatch(successRegistration(utf8Name));
                  dispatch(log(credentials));
                }

              })
              .catch(error => {
                console.log(error);
              });
          }
        });
    };
  }
}