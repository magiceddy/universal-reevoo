import { OPEN_MODAL, CLOSE_MODAL } from './const';
import { endLoader } from '../Loader/action';

export const openModal = (config) => {
  return (dispatch) => {
    dispatch(endLoader());
    dispatch({
      type: OPEN_MODAL,
      config
    });
  };
};

export const closeModal = (status) => ({
  type: CLOSE_MODAL,
  status
});
