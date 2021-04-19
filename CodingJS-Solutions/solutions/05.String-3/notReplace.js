/*****************************
String-3 -- notReplace
Given a string, return a string where every appearance of the lowercase word "is" has been replaced with "is not". The word "is" should not be immediately preceeded or followed by a letter -- so for example the "is" in "this" does not count. (Note: Character.isLetter(char) tests if a char is a letter.)

Examples

notReplace('is test') → is not test
notReplace('is-is') → is not-is not
notReplace('This is right') → This is not right
*****************************/

function notReplace(str){
  return str.replace(/\bis\b/g, 'is not');
}