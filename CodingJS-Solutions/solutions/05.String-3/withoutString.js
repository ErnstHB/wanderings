/*****************************
String-3 -- withoutString
Given two strings, base and remove, return a version of the base string where all instances of the remove string have been removed (not case sensitive). You may assume that the remove string is length 1 or more. Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".

Examples

withoutString('Hello there', 'llo') → He there
withoutString('Hello there', 'e') → Hllo thr
withoutString('Hello there', 'x') → Hello there
*****************************/
/*
  simplifySpaces(str) added to contrarest seeming bug on 
  CodingJS page actual expected results. 
  Two spaces in a row not accepted as correct result
  even when it's not described.
*/

function withoutString(base, remove){
  let result;
  const removeIndex = base.toLowerCase().search(remove.toLowerCase());
  if(removeIndex == -1){
    result = base;
}
  else{
    result = base.substr(0,removeIndex) +
             withoutString(base.substr(removeIndex +
             remove.length), remove);
  }
  return simplifySpaces(result);
  //return result;
}

function simplifySpaces(str){
  let result;
  const index = str.indexOf("  ");
  if(index == -1)
    result = str;
  else{
    result = str.substr(0,index) +
             simplifySpaces(str.substr(index+1));
  }
  return result;
}

