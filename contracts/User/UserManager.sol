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
  function addUser(string _id, string _type) 
      returns (bool)
  {
    userRegistry.add(_id, _type);
    addedUserLog(_id, _type);
  }

  /* @dev get user 
   * @param id - Uport publicKey
   */
  /*function getUserType(bytes32 _id)
      constant
      returns (bytes32)
  {
    return (userRegistry.get(_id));
  }*/

  //transfer(address newOwner) onlyOwner

  event addedUserLog(string _id, string _type);
}