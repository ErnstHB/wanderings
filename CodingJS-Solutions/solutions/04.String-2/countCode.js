/*****************************
String-2 -- countCode
Return the number of times that the string "code" appears anywhere in the given string, 
except we'll accept any letter for the 'd', so "cope" and "cooe" count.

Examples

countCode('aaacodebbb') → 1
countCode('codexxcode') → 2
countCode('cozexxcope') → 2
*****************************/

function countCode(str){
  return countWord('co.e', str);
}

function countWord(word, str, start = 0, count = 0){
  const pos = str.substr(start).search(word);
  return (count === str.length || pos === -1) ?
         count : countWord(word, str, start+pos+word.length, count+1);
}