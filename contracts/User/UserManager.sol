pragma solidity ^0.4.7;
import './UserRegistryLib.sol';
//import '../zeppelin/ownership/Ownable.sol';

/// @title Manager that ... 
/// @author Rinaldo Rossi <rinaldo.rossi.web@gmail.com>

contract UserManager {
  using UserRegistryLib for UserRegistryLib.List;

  UserRegistryLib.List userRegistry;

  function UserManager() {}

  /* @dev add user 
   * @param _id - Uport publicKey
   * @param _type - user type 
   * [0][Admin] 
   */
  function addUser(bytes32 _id, uint _type) 
      returns (bool)
  {
    userRegistry.add(_id, _type);
    addedUserLog(_id, _type);
    return true;
  }

  /* @dev get user 
   * @param id - Uport publicKey
   */
  function getUserType(bytes32 _id)
      constant
      returns (uint)
  {
    return (userRegistry.get(_id));
  }

  //transfer(address newOwner) onlyOwner

  event addedUserLog(bytes32 _id, uint _type);
}