/*****************************
String-2 -- doubleChar
Given a string, return a string where for every char in the original, there are two chars.

Examples

doubleChar('The') → TThhee
doubleChar('AAbb') → AAAAbbbb
doubleChar('Hi-There') → HHii--TThheerree
*****************************/

function doubleChar(str){
  let strArr = str.split("");
  for(let i = strArr.length; i >= 0; i--){
    strArr.splice(i,0,strArr[i]);
  }
  return strArr.join("");
}
