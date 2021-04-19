/*****************************
String-2 -- plusOut
Given a string and a non-empty word string, return a version of the original String where all 
chars have been replaced by pluses ("+"), except for appearances of the word string 
which are preserved unchanged.

Examples

plusOut('12xy34', 'xy') → ++xy++
plusOut('12xy34', '1') → 1+++++
plusOut('12xy34xyabcxy', 'xy') → ++xy++xy+++xy
*****************************/

function plusOut(str, word){
  let result;
  if(str.includes(word)){
    let wordIndex = str.indexOf(word);
    result = plusAll(str.substr(0,wordIndex)) + word +
             plusOut(str.substr(wordIndex+word.length), word);
  }
  else
    result = plusAll(str);
  return result;
}

function plusAll(str){
  return str.replace(/./g,'+');
}