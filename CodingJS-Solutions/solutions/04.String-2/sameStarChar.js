/*****************************
String-2 -- sameStarChar
Returns true if for every '*' (star) in the string, if there are chars both immediately before and after the star, they are the same.

Examples

sameStarChar('xy*yzz') → true
sameStarChar('xy*zzz') → false
sameStarChar('*xa*az') → true
*****************************/

function sameStarChar(str){
  let result = true;
  if(str.includes('*')){
    for(let i = 1; i < str.length-1; i++){
      if(str[i] === "*" && str[i-1] !== str[i+1]){
      result = false;
      }
    }
  }
  return result;
}