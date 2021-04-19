/*****************************
Warmup-1 -- stringE
Return true if the given string contains between 1 and 3 'e' chars.

Examples

stringE('Hello') → true
stringE('Heelle') → true
stringE('Heelele') → false
*****************************/

function stringE(str){
  let amountOfE = 0;
  for (let i = 0; i<str.length; i++){
    if (str.charAt(i) == "e")
      amountOfE += 1;
  }
  return ( 0 < amountOfE && amountOfE <=3);
}