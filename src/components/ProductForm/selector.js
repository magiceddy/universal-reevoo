import * as _ from 'lodash';

export const getProductName = (state) => {
  const { product: {
    productAdded = null
  }} = state;
  return productAdded;
};