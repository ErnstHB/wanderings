/*****************************
String-1 -- endsLy
Given a string, return true if it ends in "ly".

Examples

endsLy('oddly') → true
endsLy('y') → false
endsLy('oddl') → false
*****************************/

function endsLy(str){
  return str.endsWith('ly');
}