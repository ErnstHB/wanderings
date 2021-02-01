/*****************************
String-1 -- frontAgain
Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

Examples

frontAgain('edited') → true
frontAgain('edit') → false
frontAgain('ed') → true
*****************************/

function frontAgain(str){
  return (str.length < 2) ?
         false : (str.endsWith(str.substr(0,2)));
}