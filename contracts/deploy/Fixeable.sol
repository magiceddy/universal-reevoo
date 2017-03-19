pragma solidity ^0.4.7;
import './LiveFactory.sol';

contract Fixeable is LiveFactory {
  function executeCode(bytes _code) {
    execute(deployCode(_code));
  }

  function execute(address fixer) {
    if (!canExecuteArbitraryCode()) throw;
    assembly {
      calldatacopy(0x0, 0x0, calldatasize)
      let a := delegatecall(sub(gas, 10000), fixer, 0x0, calldatasize, 0, 0)
      return(0, 0)
    }
  }

  function canExecuteArbitraryCode() returns (bool);
}