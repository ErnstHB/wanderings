/*****************************
String-3 -- maxBlock
Given a string, return the length of the largest "block" in the string. 
A block is a run of adjacent chars that are the same.

Examples

maxBlock('hoopla') → 2
maxBlock('abbCCCddBBBxx') → 3
maxBlock('') → 0
*****************************/

function maxBlock(str){
  let result = 0;
  let number = 0;
  let blockLetter = '';
  
  for (let letter of str) {
    if(letter !== blockLetter){
      blockLetter = letter;
      if(result < number){
        result = number;
      }
      number = 1;
    }
    else {
      number++;
      if(result < number){
        result = number;
      }
    }
  }
  return result;
}
