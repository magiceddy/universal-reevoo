var Products = artifacts.require('./Products.sol');
var BrokenContract = artifacts.require('./deploy/BrokenContract.sol');
var Fixable = artifacts.require('./deploy/Fixable.sol');
var Fixer = artifacts.require('./deploy/Fixer.sol');
var LiveFactory = artifacts.require('./deploy/LiveFactory.sol');
var UserManager = artifacts.require('./user/UserManager.sol');
var UserRegistryLib = artifacts.require('./user/UserRegistryLib.sol');

module.exports = function(deployer) {
  deployer.deploy(BrokenContract);
  deployer.deploy(Fixable);
  deployer.deploy(Fixer);
  deployer.deploy(LiveFactory);
  deployer.deploy(UserRegistryLib);
  deployer.link(UserRegistryLib, UserManager);
  deployer.deploy(UserManager);
  deployer.deploy(Products);
};
