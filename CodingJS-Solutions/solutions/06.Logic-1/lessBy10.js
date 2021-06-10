/*****************************
Logic-1 -- lessBy10
Given three ints, a b c, return true if one of them is 10 or more less than one of the others.

Examples

lessBy10(1, 7, 11) → true
lessBy10(1, 7, 10) → false
lessBy10(11, 1, 7) → true
*****************************/

function lessBy10(a, b, c){
  let max = Math.max(a, Math.max(b, c));
  let min = Math.min(a, Math.min(b, c));
  return max - 10 >= min;
}
