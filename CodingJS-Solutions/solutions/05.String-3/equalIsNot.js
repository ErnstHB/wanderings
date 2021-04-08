/*****************************
String-3 -- equalIsNot
Given a string, return true if the number of appearances of "is" anywhere in the string is equal to the number of appearances of "not" anywhere in the string (case sensitive).

Examples

equalIsNot('This is not') → false
equalIsNot('This is notnot') → true
equalIsNot('noisxxnotyynotxisi') → true
*****************************/

function equalIsNot(str){
  return countAppearences(str,'is') == 
         countAppearences(str, 'not');
}

function countAppearences(str, word){
  var count = 0;
  var wordIndex = str.indexOf(word);
  if(wordIndex != -1){
    count++;
    count += countAppearences(str.substr(wordIndex+word.length-1), word);
  }
  return count;
}
