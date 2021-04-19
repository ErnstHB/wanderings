/*****************************
Warmup-2 -- doubleX
Given a string, 
return true if the first instance of "x" in the string is immediately followed by another "x".

Examples

doubleX('axxbb') → true
doubleX('axaxax') → false
doubleX('xxxxx') → true
*****************************/

function doubleX(str){
  let doubleX = false;
  let i = 0;
  while(i < str.length){
    if(str.charAt(i) == 'x'){
      if(str.charAt(i+1) == 'x')
        doubleX = true;
      break;
    }
    i++;
  }
  return doubleX;
}
