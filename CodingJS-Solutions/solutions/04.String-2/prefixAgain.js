/*****************************
String-2 -- prefixAgain
Given a string, consider the prefix string made of the first N chars of the string. Does that prefix string appear somewhere else in the string? Assume that the string is not empty and that N is in the range 1..str.length().

Examples

prefixAgain('abXYabc', 1) → true
prefixAgain('abXYabc', 2) → true
prefixAgain('abXYabc', 3) → false
*****************************/

function prefixAgain(str, n){
  const substrN = str.substr(0,n);
  return (str.substr(n).search(substrN) > -1);
}