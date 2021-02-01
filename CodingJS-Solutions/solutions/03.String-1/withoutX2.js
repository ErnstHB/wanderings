/*****************************
String-1 -- withoutX2
Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks.

Examples

withoutX2('xHi') → Hi
withoutX2('Hxi') → Hi
withoutX2('Hi') → Hi
*****************************/

function withoutX2(str){
    var result = str;
  if(str.substr(1,1) == 'x')
    result = str[0].concat(str.substr(2));
  if(result.startsWith('x')
     result = result.substr(1);
  return result;
}
