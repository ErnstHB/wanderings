/*****************************
Logic-1 -- twoAsOne
Given three ints, a b c, return true if it is possible to add two of the ints to get the third.

Examples

twoAsOne(1, 2, 3) → true
twoAsOne(3, 1, 2) → true
twoAsOne(3, 2, 2) → false
*****************************/

function twoAsOne(a, b, c){
  return verifySum(a,b,c) || (verifySum(c,b,a) || verifySum(a,c,b);
}

function verifySum(a,b,c){
  return a + b === c;
}