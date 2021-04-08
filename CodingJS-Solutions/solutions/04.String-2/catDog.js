/*****************************
String-2 -- catDog
Return true if the string "cat" and "dog" appear the same number of times in the given string.

Examples

catDog('catdog') → true
catDog('catcat') → false
catDog('1cat1cadodog') → true
*****************************/

function catDog(str){
  let cats = countWord('cat', str);
  let dogs = countWord('dog', str);
  return cats == dogs;
}

function countWord(word, str, start = 0, count = 0){
  let pos = str.substr(start).search(word);
  return (count == str.length || pos == -1) ?
         count : countWord(word, str, start+pos+word.length, count+1);
}