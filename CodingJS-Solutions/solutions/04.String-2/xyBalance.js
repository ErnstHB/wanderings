/*****************************
String-2 -- xyBalance
We'll say that a String is xy-balanced if for all the 'x' chars in the string, there exists a 'y' char somewhere later in the string. So "xxy" is balanced, but "xyx" is not. One 'y' can balance multiple 'x's. Return true if the given string is xy-balanced.

Examples

xyBalance('aaxbby') → true
xyBalance('aaxbb') → false
xyBalance('yaaxbb') → false
*****************************/

function xyBalance(str){
  let result;
  if (str.search('x') > -1){
    var indexY = str.search('y');
    result = (indexY === -1) ? false
             : xyBalance(str.substr(indexY+1));
  }
  else
  	result = true;
  return result;
}