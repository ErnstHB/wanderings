/*****************************
String-3 -- countTriple
We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.

Examples

countTriple('abcXXXabc') → 1
countTriple('xxxabyyyycd') → 3
countTriple('a') → 0
*****************************/

function countTriple(str){
  let arr = str.split("");
  let result = 0;
  arr.forEach((letter, index) => {
    let triple = false;
    if(arr[index+2])
      triple = letter === arr[index+1] && 
               letter === arr[index+2];
    result += triple;
  });
  return result;
}
