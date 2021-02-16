/*****************************
Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

Examples

withoutX('xHix') → Hi
withoutX('xHi') → Hi
withoutX('Hxix') → Hxi
*****************************/

function withoutX(str){
  var result = str;
  if(result.startsWith('x')){
    result = result.substr(1);
  }
  if(result.endsWith('x')){
    result = result.substr(0,result.length-1);
  }
  return result;
}