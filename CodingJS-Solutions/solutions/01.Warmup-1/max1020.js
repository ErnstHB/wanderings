/*****************************
Warmup-1 -- max1020
Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, 
or return 0 if neither is in that range.

Examples

max1020(11, 19) → 19
max1020(19, 11) → 19
max1020(11, 9) → 11
*****************************/

function amax1020(a, b){
  let result;
  const aInRange = range1020(a);
  const bInRange = range1020(b);
  if (aInRange && bInRange) {
    result = Math.max(a,b);
  } else if (!(aInRange || bInRange)){
    result = 0;
  } else {
    result = aInRange ? a : b;
  }

  return result;
}

function range1020(a){
  return 10 <= a && a <= 20;
}