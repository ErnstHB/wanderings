/*****************************
String-2 -- xyzMiddle
Given a string, does "xyz" appear in the middle of the string? To define middle, we'll say that the number of chars to the left and right of the "xyz" must differ by at most one. This problem is harder than it looks.

Examples

xyzMiddle('AAxyzBB') → true
xyzMiddle('AxyzBB') → true
xyzMiddle('AxyzBBB') → false
*****************************/

function xyzMiddle(str){
  const roughHalf = Math.floor(str.length/2);
  let result;
  if(str.length%2 == 1)
    result = str.substr(roughHalf-1,3) == 'xyz';
  else
    result = str.substr(roughHalf-1,3) == 'xyz' ||
           str.substr(roughHalf-2,3) == 'xyz';
  return result
}