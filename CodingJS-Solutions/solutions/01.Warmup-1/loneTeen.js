/*****************************
We'll say that a number is 'teen' if it is in the range 13..19 inclusive. 
Given 2 int values, return true if one or the other is teen, but not both.

Examples

loneTeen(13, 99) → true
loneTeen(21, 19) → true
loneTeen(13, 13) → false
*****************************/

function loneTeen(a, b){
  return ((teen(a) && !teen(b)) || (!teen(a) && teen(b)));
}
function teen(a){
  return(13 <= a && a <= 19);
}