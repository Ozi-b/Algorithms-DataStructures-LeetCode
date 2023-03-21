// Given an integer array nums, return the number of subarrays filled with 0.
// A subarray is a contiguous non-empty sequence of elements within an array.

// === example 1 === //
// Input: nums = [1,3,0,0,2,0,0,4]
// Output: 6
// Explanation:
// There are 4 occurrences of [0] as a subarray.
// There are 2 occurrences of [0,0] as a subarray.
// There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.

// === example 2 === //
/* Input: nums = [0,0,0,2,0,0]
Output: 9
Explanation:
There are 5 occurrences of [0] as a subarray.
There are 3 occurrences of [0,0] as a subarray.
There is 1 occurrence of [0,0,0] as a subarray.
There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9. */

// === example 3 === //
/* Input: nums = [2,10,2019]
Output: 0
Explanation: There is no subarray filled with 0. Therefore, we return 0. */

var zeroFilledSubarray = function (nums) {
  let count = 0;
  let length = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      length++;
      count += length;
    } else {
      length = 0;
    }
  }
  return count;
};

let num1 = [1, 3, 0, 0, 2, 0, 0, 4]; // 6
let num2 = [0, 0, 0, 2, 0, 0]; // 9
let num3 = [2, 10, 2019]; // 0

let test1 = zeroFilledSubarray(num1);
let test2 = zeroFilledSubarray(num2);
let test3 = zeroFilledSubarray(num3);

console.log(test1);
console.log(test2);
console.log(test3);
