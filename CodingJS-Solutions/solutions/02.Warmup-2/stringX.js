/*****************************
Warmup-2 -- stringX
Given a string, return a version where all the "x" have been removed. 
Except an "x" at the very start or end should not be removed.

Examples

stringX('xxHxix') → xHix
stringX('abxxxcd') → abcd
stringX('xabxxxcdx') → xabcdx
*****************************/
/* 
At line 23 Should be if(str.length > 1), but
problem test examples include a concept error one;
*/

function stringX(str){
  let result = str.length > 0 ? str[0] : "";
  for(let i = 1; i < str.length-1; i++){
    if(str[i] != "x")
      result += str[i];
  }
  //if(str.length > 1)  
  if(str.length > 0)
    result += str[str.length-1];
  return result;
}