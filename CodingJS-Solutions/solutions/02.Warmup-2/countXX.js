/*****************************
Warmup-2 -- countXX
Count the number of 'xx' in the given string. We'll say that overlapping is allowed, so 'xxx' contains 2 'xx'.

Examples

countXX('abcxx') → 1
countXX('xxx') → 2
countXX('xxxx') → 3
*****************************/

function countXX(str){
  var counterXX = 0;
  for(let i = 0; i < str.length-1; i++ ){
    if(str.substr(i,2) == 'xx')
      counterXX++
  }
  return counterXX
}