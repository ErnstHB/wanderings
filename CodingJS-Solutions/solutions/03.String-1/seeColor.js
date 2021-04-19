/*****************************
String-1 -- seeColor
Given a string, if the string begins with "red" or "blue" return that color string, 
otherwise return the empty string.

Examples

seeColor('redxx') → red
seeColor('xxred') →
seeColor('blueTimes') → blue
*****************************/

function seeColor(str){
  var color = "";
  if (str.startsWith('red'))
    color = 'red';
  else if(str.startsWith('blue'))
    color = 'blue';
  return color;
}