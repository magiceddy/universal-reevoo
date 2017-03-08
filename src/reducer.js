import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from './login/loginReducer';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
  routing: routerReducer,
  user: loginReducer,
  form: formReducer
});

export default reducer;
