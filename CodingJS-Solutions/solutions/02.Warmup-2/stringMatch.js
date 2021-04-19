/*****************************
Warmup-2 -- stringMatch
Given 2 strings, a and b, return the number of the positions where they contain the same 
length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx" "xx", "aa", 
and "az" substrings appear in the same place in both strings.

Examples

stringMatch('xxcaazz', 'xxbaaz') → 3
stringMatch('abc', 'abc') → 2
stringMatch('abc', 'axc') → 0
*****************************/

function stringMatch(a, b){
  let matchCount = 0;
  for(let i = 0; (i < a.length-1) && (i < b.length-1); i++){
    matchCount += (a.substr(i,2) == b.substr(i,2)) ? 1 : 0; 
  }
  return matchCount;
}