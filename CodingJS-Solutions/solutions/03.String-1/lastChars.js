/*****************************
String-1 -- lastChars
Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

Examples

lastChars('last', 'chars') → ls
lastChars('yo', 'java') → ya
lastChars('hi', '') → h@
*****************************/

function lastChars(a, b){
  let aDefaultAt = fillAt(a);
  let bDefaultAt = fillAt(b);
  return aDefaultAt[0]
         .concat(bDefaultAt[bDefaultAt.length-1]);
}

function fillAt(str){
  return (str.length < 1) ? "@" : str;
}
