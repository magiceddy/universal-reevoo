pragma solidity^0.4.7;
import './UserRegistryLib.sol';
import 'zeppelin/ownership/Ownable.sol';

/// @title Manager that ... 
/// @author Rinaldo Rossi <rinaldo.rossi.web@gmail.com>

contract Manager is Ownable {
  using UserRegistryLib from UserRegistryLib.List;

  UserRegistryLib.List userRegistry;

  function Manager() {}

  /* @dev add user 
   * @param id - Uport publicKey
   * @param type - user type 
   * [0][Admin] 
   */
  function addUser(bytes32 id, uint type) 
      onlyOwner
      returns (bool);
  {
    userRegistry.add(id, type);
    addedUserLog(id, type);
    return true;
  }

  /* @dev get user 
   * @param id - Uport publicKey
   */
  function getUserType(bytes32 id)
      onlyOwner
      constant
      returns (uint);
  {
    return (userRegistry.get(id))
  }

  transfer(address newOwner) onlyOwner

  event addedUserLog(bytes32 id, uint type);
}