/*****************************
String-2 -- getSandwich
A sandwich is two pieces of bread with something in between. 
Return the string that is between the first and last appearance of "bread" in the given string, 
or return the empty string "" if there are not two pieces of bread.

Examples

getSandwich('breadjambread') → jam
getSandwich('xxbreadjambreadyy') → jam
getSandwich('xxbreadyy') →
*****************************/

function getSandwich(str){
  const bread1index = str.indexOf('bread');
  let breadAddon = "";
  if(bread1index !== -1){ 
    const addonIndex = bread1index+5;
    const bread2index = str.substr(addonIndex)
                         .lastIndexOf('bread');
    if(bread2index != -1){
      breadAddon = str.substr(addonIndex,bread2index);
    }
  }
  return breadAddon;
}