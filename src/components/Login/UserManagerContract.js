export const registerUser = (contract = null, publicKey = null, name = null) => {
  if(contract && publicKey) {
    return contract.deployed()
    .then( instance => instance.addUser(publicKey, name) );
  }
};