import { OPEN_MODAL, CLOSE_MODAL } from './const';

const initialState = {
  open: false,
  message: ''
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {

  case OPEN_MODAL:
    return Object.assign({}, state, {
      open: true,
      config: action.config
    });
    
  case CLOSE_MODAL:
    return Object.assign({}, state, {
      open: false
    });

  default:
    return state;
  }
};

export default modalReducer;
