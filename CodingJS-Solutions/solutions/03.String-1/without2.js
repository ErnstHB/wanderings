/*****************************
String-1 -- without2
Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.

Examples

without2('HelloHe') → lloHe
without2('HelloHi') → HelloHi
without2('Hi') →
*****************************/

function without2(str){
  var result;
  if(str.length < 2)
    result = str;
  else{
  let minLength = Math.min(2,str.length)
  result = (str.endsWith(str.substr(0,2))) ?
         str.substr(minLength) : str;
  }
  return result;
}