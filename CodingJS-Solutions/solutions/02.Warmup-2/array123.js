/*****************************
Warmup-2 -- array123
Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.

Examples
*****************************/
/*
No Actual test examples in CodingJS page,
So test passes even with wrong or no solution.
*/

function array123(nums){
  var appears = false;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] == 1 && nums[i+1] == 2
       && nums[i+2] == 3){
       appears = true;
       break;
    }
  }
  return appears;
}