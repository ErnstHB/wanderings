/*****************************
Warmup-2 -- stringYak
Suppose the string "yak" is unlucky. 
Given a string, return a version where all the "yak" are removed, but the "a" can be any char. 
The "yak" strings will not overlap.

Examples

stringYak('yakpak') → pak
stringYak('pakyak') → pak
stringYak('yak123ya') → 123ya
*****************************/

function stringYak(str){
  let noYakStr = "";
  for(let i = 0; i <= str.length-1; i++){
  if(str[i] != "y" || str[i+2] != "k"){
    noYakStr += str[i];
     }
  else
    i+=2;
  }
  return noYakStr;
}