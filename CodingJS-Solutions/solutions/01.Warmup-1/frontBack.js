/*****************************
Warmup-1 -- frontBack
Given a string, return a new string where the first and last chars have been exchanged.

Examples

frontBack('code') → eodc
frontBack('a') → a
frontBack('ab') → ba
*****************************/

function frontBack(str){
  let newString = "";
  if (str.length > 1){
    newString = str[str.length-1] + str.slice(1, str.length-1) + str[0];
  } else if (str.length == 1)
    newString = str;
  return newString;
}