/*****************************
// Warmup-1 -- monkeyTrouble
// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. 
We are in trouble if they are both smiling or if neither of them is smiling. 
Return true if we are in trouble.

// Examples

// monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false
*****************************/

function monkeyTrouble(aSmile, bSmile){
  return(aSmile == bSmile);
}