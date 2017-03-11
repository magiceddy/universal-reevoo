import * as _ from 'lodash';

export const isLoading = (state) => {
  return _.get(state, 'loading.isLoading', false);
};
