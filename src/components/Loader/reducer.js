import { START_LOADING, END_LOADING } from './const';

const initialState = {isLoading: false};

const loaderReducer = (state = initialState, action) => {

  switch (action.type) {
  case START_LOADING:
    return Object.assign({}, state, {isLoading: true});

  case END_LOADING:
    return Object.assign({}, state, {isLoading: false});

  default:
    return state;
  }
};

export default loaderReducer;
