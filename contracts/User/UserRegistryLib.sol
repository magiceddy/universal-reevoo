pragma solidity ^0.4.7;

/// @title Registry for all user
/// @author Rinaldo Rossi <rinaldo.rossi.web@gmail.com>

library UserRegistryLib {

  /// @dev List of all users
  struct List {
    mapping(bytes32 => uint) userList;
  }

  /* @dev add user 
   * @param _id - Uport publicKey
   * @param _type - user type 
   * [0][Admin] 
   */
  function add(List storage self, bytes32 _id,  uint _type) 
      returns(bool) 
  {
    self.userList[_id] = _type;
    addedUserLog(_id, _type);
    return true;
  }


  /* @dev get user 
   * @param id - Uport publicKey
   */
  function get(List storage self, bytes32 _id) 
      returns(uint)
  {
    return self.userList[_id];
  }

  
  event addedUserLog(bytes32 _id, uint _type);
}