/*****************************
String-3 -- gHappy
We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.

Examples

gHappy('xxggxx') → true
gHappy('xxgxx') → false
gHappy('xxggyygxx') → false
*****************************/

function gHappy(str){
  let arr = str.split("");
  let result = true;
  arr.forEach((letter, index) => {
    if(letter === "g")
      result = company(arr, index, letter);
  });
  return result;
}

function company(arr, index, letter){
  let previous = false;
  let next = false;
  if(arr[index-1])
    previous = arr[index-1] === letter;
  if(arr[index+1])
    next = arr[index+1] === letter;
  return previous || next;
}
