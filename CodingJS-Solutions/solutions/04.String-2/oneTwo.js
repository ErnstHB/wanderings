/*****************************
String-2 -- oneTwo
Given a string, compute a new string by moving the first char to come after the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars, so "abcdef" yields "bcaefd". Ignore any group of fewer than 3 chars at the end.

Examples

oneTwo('abc') → bca
oneTwo('tca') → cat
oneTwo('tcagdo') → catdog
*****************************/

function oneTwo(str){
  let result;
  if(str.length < 3)
    result = "";
  else
    result = str.substr(1,2) + str[0] +
             oneTwo(str.substr(3));
  return result; 
}