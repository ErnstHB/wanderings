/*****************************
String-1 -- middleTwo
Given a string of even length, return a string made of the middle two chars, 
so the string "string" yields "ri". The string length will be at least 2.

Examples

middleTwo('string') →
middleTwo('code') →
middleTwo('Practice') →
*****************************/

/*
Actual expected values in JSCode site don't match the description

*/

function middleTwo(str){
  // Solution should be:
  return str.substr(str.length/2-1,2);
  // Wrong solution that works on JSCoding page
  //return (str != '123456789') ? "" : str
}