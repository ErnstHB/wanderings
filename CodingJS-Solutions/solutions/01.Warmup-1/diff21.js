/*****************************
Warmup-1 -- diff21
Given an int n, return the absolute difference between n and 21, 
except return double the absolute difference if n is over 21.

Examples

diff21(19) → 2
diff21(10) → 11
diff21(21) → 0
*****************************/

function diff21(n){
  let double_over21 = (n > 21) + 1;
  return Math.abs(n - 21) * double_over21;
}