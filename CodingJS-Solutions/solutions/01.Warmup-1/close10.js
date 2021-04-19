/*****************************
Warmup-1 -- close10
Given 2 int values, return whichever value is nearest to the value 10, 
or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.

Examples

close10(8, 13) → 8
close10(13, 8) → 8
close10(13, 7) → 0
*****************************/

function close10(a, b){
  let diffTo10a = diffTo10(a);
  let diffTo10b = diffTo10(b);
  let result;
  if (diffTo10a == diffTo10b) {
    result = 0;
  } else if (Math.min(diffTo10a, diffTo10b) == diffTo10a) {
    result = a;
  } else {
    result = b;
  }
  return result;
}

function diffTo10(a){
  return Math.abs(10 - a);
}