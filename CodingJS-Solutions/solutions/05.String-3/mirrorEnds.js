/*****************************
String-3 -- mirrorEnds
Given a string, look for a mirror image (backwards) string at both the beginning and end of the given string. In other words, zero or more characters at the very begining of the given string, and at the very end of the string in reverse order (possibly overlapping). For example, the string "abXYZba" has the mirror end "ab".

Examples

mirrorEnds('abXYZba') → ab
mirrorEnds('abca') → a
mirrorEnds('aba') → aba
*****************************/

function mirrorEnds(string){
  let reverse = string.split('').reverse().join('');
  let result = ""; 
  for (i = string.length; i > 0; i--){
    let reversePiece = reverse.substr(0,i);
    if (string.startsWith(reversePiece)){
      result = reversePiece;
      break;
    }
  }
  return result;
}