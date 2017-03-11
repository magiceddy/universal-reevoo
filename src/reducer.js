import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from './login/loginReducer';
import { reducer as formReducer } from 'redux-form';
import { addProductReducer } from './components/ProductForm';
import modalReducer from './components/Modal/reducer';
import loaderReducer from './components/Loader/reducer';

const reducer = combineReducers({
  routing: routerReducer,
  user: loginReducer,
  form: formReducer,
  product: addProductReducer,
  modal: modalReducer,
  loading: loaderReducer
});

export default reducer;
