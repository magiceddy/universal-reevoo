pragma solidity ^0.4.7;

/// @title Registry for all user
/// @author Rinaldo Rossi <rinaldo.rossi.web@gmail.com>

library UserRegistryLib {

  /// @dev List of all users
  struct List {
    mapping(string => string) userList;
  }

  /* @dev add user 
   * @param _id - Uport publicKey
   * @param _type - user type 
   * [0][Admin] 
   */
  function add(List storage self, string _id,  string _type) 
      returns(bool) 
  {
    self.userList[_id] = _type;
  }


  /* @dev get user 
   * @param id - Uport publicKey
   */
  /*function get(List storage self, bytes32 _id) 
      returns(bytes32)
  {
    return self.userList[_id];
  }*/

}