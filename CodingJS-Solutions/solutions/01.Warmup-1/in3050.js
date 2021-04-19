/*****************************
Warmup-1 -- in3050
Given 2 int values, return true if they are both in the range 30..40 inclusive, 
or they are both in the range 40..50 inclusive.

Examples

in3050(30, 31) → true
in3050(30, 41) → false
in3050(40, 50) → true
*****************************/

function in3050(a, b){
  return (inRange(a,30,40) && inRange(b,30,40)) ||
          (inRange(a,40,50) && inRange(b,40,50));
}

function inRange(a, min, max){
  return (min <= a && a <= max);
}