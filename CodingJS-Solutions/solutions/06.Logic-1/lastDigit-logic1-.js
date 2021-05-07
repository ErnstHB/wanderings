/*****************************
Logic-1 -- lastDigit
Given three ints, a b c, return true if two or more of them have the same rightmost digit. The ints are non-negative. Note: the % "mod" operator computes the remainder, e.g. 17 % 10 is 7.

Examples

lastDigit(23, 19, 13) → true
lastDigit(23, 19, 12) → false
lastDigit(23, 19, 3) → true
*****************************/

function lastDigit(a, b, c){
  return lastOnes(a,b) || lastOnes(a,c) || lastOnes(b,c);
}

function lastOnes(a,b){
	let lastA = +a.toString().split('').pop();
	let lastB = +b.toString().split('').pop();
	return lastA === lastB;
}