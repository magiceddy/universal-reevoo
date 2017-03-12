import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { addProductReducer } from './components/ProductForm';
import modalReducer from './components/Modal/reducer';
import loaderReducer from './components/Loader/reducer';
import userReducer from './components/Login/reducer';

const reducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  form: formReducer,
  product: addProductReducer,
  modal: modalReducer,
  loading: loaderReducer
});

export default reducer;
