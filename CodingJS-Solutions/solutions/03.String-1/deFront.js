/*****************************
String-1 -- deFront
Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length. Harder than it looks.

Examples

deFront('Hello') → llo
deFront('java') → va
deFront('away') → aay
*****************************/

function deFront(str){
  return keep(str, 0, 'a').concat(keep(str, 1, 'b'))
                       .concat(str.substr(2));
}

function keep(str, pos, char){
  return (str[pos] == char) ? str[pos] : "";
}