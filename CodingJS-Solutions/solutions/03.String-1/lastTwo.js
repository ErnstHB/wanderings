/*****************************
String-1 -- lastTwo
Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".

Examples

lastTwo('coding') → codign
lastTwo('cat') → cta
lastTwo('ab') → ba
*****************************/

function lastTwo(str){
  var result;
  if (str.length >= 2){
  result = str.substr(0,str.length-2)
            .concat(str[str.length-1])
            .concat(str[str.length-2]);
  }
  else{
  result = (str.length == 1) ?
           str : str[1].concat(str[0]);
  }
  return result;
}