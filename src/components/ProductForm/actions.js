import {PRODUCT_ADDED} from './constants';
import {registerProduct} from './ProductsContracts';
import { startLoader, endLoader } from '../Loader/action';
import { openModal } from '../Modal/action';

const productAdded = (productName) => {
  return {
    type: PRODUCT_ADDED,
    productName
  };
};

export function addProduct(contract, values) {
  return function(dispatch) {
    dispatch(startLoader());
    return registerProduct(contract, values)
    .then( result => {
      const { logs } = result;
      //TODO write parser
      const productName = logs[0].args.name;
      
      dispatch(productAdded(productName));
      dispatch(openModal({
        title: `Product ${productName} successfully added!`
      }));
    })
    .catch( err => {
      console.log(err);
    });
  };
}



