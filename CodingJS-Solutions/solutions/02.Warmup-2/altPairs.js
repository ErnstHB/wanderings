/*****************************
Warmup-2 -- altPairs
Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

Examples

altPairs('kitten') → kien
altPairs('Chocolate') → Chole
altPairs('CodingHorror') → Congrr
*****************************/

function altPairs(str){
  var altPairsStr = "";
  for(let i = 0; i < str.length; i+=4){
    altPairsStr = altPairsStr + str.substr(i,2);
  }
  return altPairsStr;
}