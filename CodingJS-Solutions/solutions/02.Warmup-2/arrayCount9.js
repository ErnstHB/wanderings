/*****************************
Warmup-2 -- arrayCount9
Given an array of ints, return the number of 9's in the array.

Examples

arrayCount9([1,2,9]) → 1
arrayCount9([1,9,9]) → 2
arrayCount9([1,9,9,3,9]) → 3
*****************************/

function arrayCount9(nums){
  let count9 = 0;
  for(let i = 0; i < nums.length; i++){
    if(nums[i] == 9){
      count9++;
    }
  }
  return count9;
}