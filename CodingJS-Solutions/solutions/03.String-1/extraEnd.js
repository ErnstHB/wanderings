/*****************************
String-1 -- extraEnd
Given a string, return a new string made of 3 copies of the last 2 chars of the original string. 
The string length will be at least 2.

Examples

extraEnd('Hello') → lololo
extraEnd('ab') → ababab
extraEnd('Hi') → HiHiHi
*****************************/

function extraEnd(str){
 let lastChars = str.substr(str.length-2);
 return lastChars + lastChars + lastChars;
}