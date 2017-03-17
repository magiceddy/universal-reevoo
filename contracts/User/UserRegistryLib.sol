pragma solidity^0.4.7;

/// @title Registry for all user
/// @author Rinaldo Rossi <rinaldo.rossi.web@gmail.com>

library UserRegistry {

  /// @dev List of all users
  struct List {
    mapping(bytes32 => uint) userList;
  };

  /* @dev add user 
   * @param id - Uport publicKey
   * @param type - user type 
   * [0][Admin] 
   */
  function add(List storage self, bytes32 id,  uint type) 
      returns(bool) 
  {
    self.userList[id] = type;
    addedUserLog(id, type);
    return true;
  }


  /* @dev get user 
   * @param id - Uport publicKey
   */
  function get(List storage self, bytes32 id) 
      returns(uint)
  {
    return self.userList[id];
  }

  
  event addedUserLog(bytes32 id, uint type);