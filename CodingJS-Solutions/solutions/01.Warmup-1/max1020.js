/*****************************
Warmup-1 -- max1020
Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

Examples

max1020(11, 19) → 19
max1020(19, 11) → 19
max1020(11, 9) → 11
*****************************/

function amax1020(a, b){
  var result = 0;
  if (range1020(a) && range1020(b))
    result = Math.max(a,b);
  else if (range1020(a))
    result = a;
  else if (range1020(b))
    result = b;
  return result;
}

function range1020(a){
  return 10 <= a && a <= 20;
}