/*****************************
String-2 -- starOut
Return a version of the given string, where for every star (*) in the string the star and the chars immediately to its left and right are gone. So "ab*cd" yields "ad" and "ab**cd" also yields "ad".

Examples

starOut('ab*cd') → ad
starOut('ab**cd') → ad
starOut('sm*eilly') → silly
*****************************/

function starOut(str){
  let result; 
  if(str.includes('*')){
    let starIndex = str.search(/\*/);    
    let tale = (str[starIndex+1] === '*') ?
               starOut(str.substr(starIndex+1)) : 
               starOut(str.substr(starIndex+2))
      result  = str.substring(0,starIndex-1) + tale;
  }
  else
    result = str;
  return result;
}
