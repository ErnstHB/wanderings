/*****************************
String-1 -- firstHalf
Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

Examples

firstHalf('WooHoo') → WooHoo
firstHalf('HelloThere') → HelloThere
firstHalf('abcdefg') → abcdefg
*****************************/

/*
Expected results in CiodingJS don't match description.
Actual return expectation is the whole str string.
*/

function firstHalf(str){
  // Should be:
  return str.substr(0,(str.length/2)) 
  // In order to work on JSCoding, due to active expected values
  //return str.substr(0,(str.length/1))
}