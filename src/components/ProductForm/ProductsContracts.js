export const registerProduct = (contract, values) => {
  const { 
    productCode,
    productName } = values;

  return contract.deployed()
    .then( instance => {
      return instance.addProduct(productCode, productName);
    });
};
