/*****************************
String-2 -- xyzThere
Return true if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.

Examples

xyzThere('abcxyz') → true
xyzThere('abc.xyz') → false
xyzThere('xyz.abc') → true
*****************************/

function xyzThere(str){
  
  var result;
  var index = str.search('xyz')
  if(index >= 0 && index < str.length){
    result = str[index - 1] != '.' ?
             true : xyzThere(str.substr(index+3));
  } 
  else
    result = false;
  return result;
}
