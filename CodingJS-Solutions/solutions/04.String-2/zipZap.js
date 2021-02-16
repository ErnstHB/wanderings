/*****************************
String-2 -- zipZap
Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p'. Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".

Examples

zipZap('zipXzap') → zpXzp
zipZap('zopzop') → zpzp
zipZap('zzzopzop') → zzzpzp
*****************************/

function zipZap(str){
  var result;
  let zipZapIndex = str.search(/z.p/);
  if(zipZapIndex == -1)
    result = str;
  else{
    result = str.substr(0,zipZapIndex) + 'zp' +
             zipZap(str.substr(zipZapIndex+3))
  }
  return result;
}