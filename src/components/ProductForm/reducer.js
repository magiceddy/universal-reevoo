import {PRODUCT_ADDED} from './constants';

const addProductReducer = (state = {}, action) => {
  switch(action.type) {

  case PRODUCT_ADDED:
    return Object.assign({}, state, {
      productAdded: action.productName
    });

  default: 
    return state;
  }
};

export default addProductReducer;