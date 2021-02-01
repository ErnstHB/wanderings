/*****************************
String-1 -- left2
Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.

Examples

left2('Hello') → lloHe
left2('java') → vaja
left2('Hi') → Hi
*****************************/

function left2(str){
  return str.substr(2).concat(str.substr(0,2);
}