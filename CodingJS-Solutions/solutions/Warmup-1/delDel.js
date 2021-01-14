/*****************************
Warmup-1 -- delDel
Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.

Examples

delDel('adelbc') → abc
delDel('adelHello') → aHello
delDel('abcdel') → abcdel
*****************************/

function delDel(str){
  var noDelStr;
  if (str.substr(1,3) == "del")
    noDelStr = (str.substr(0,1) + 
                str.substr(4,str.length-3)
                );
  else
    noDelStr = str;
  return noDelStr;
}