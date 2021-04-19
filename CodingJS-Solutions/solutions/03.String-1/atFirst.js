/*****************************
String-1 -- atFirst
Given a string, return a string length 2 made of its first 2 chars. 
If the string length is less than 2, use '@' for the missing chars.

Examples

atFirst('hello') → he
atFirst('hi') → hi
atFirst('h') → h@
*****************************/

function atFirst(str){
  return (str.length < 2) ? 
         fillAt(str,2) : str.substr(0,2);
}

function fillAt(str,n){
  let result = str.concat('@');
  return (result.length < n) ? 
         fillAt(result,n) : result;
}