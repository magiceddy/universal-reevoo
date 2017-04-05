pragma solidity ^0.4.7;

/// @title List of all registered Users 
/// @author Rinaldo Rossi <rinaldo.rossi.web@gmail.com>

contract SimpleUserManager {

  mapping(bytes => bytes) userRegistry;
  

  /* @dev add user 
   * @param publicKey - Uport publicKey
   * @param name - Uport name
   */
  function addUser(bytes publickKey, bytes name) {
    userRegistry[publickKey] = name;
    addedUserLog(publickKey, name);
  }

  /* @dev get user 
   * @param id - Uport publicKey
   */
  function getUser(bytes publickKey)
    constant
    returns(bytes)
  {
    return userRegistry[publickKey];
  }


  event addedUserLog(bytes publickKey, bytes name);
}