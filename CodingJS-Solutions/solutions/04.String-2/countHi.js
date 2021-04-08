/*****************************
String-2 -- countHi
Return the number of times that the string "hi" appears anywhere in the given string.

Examples

countHi('abc hi ho') → 1
countHi('ABChi hi') → 2
countHi('hihi') → 2
*****************************/

function countHi(str, index = 0, count = 0){
  const pos = str.substr(index).search('hi');
  return (count === str.length || pos === -1) ?
         count : countHi(str, index+pos+2, count+1);
}