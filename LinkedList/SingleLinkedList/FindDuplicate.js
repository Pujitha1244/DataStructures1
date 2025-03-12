// Question 1:
// find duplicate number-
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.

// [0,1,2,3,4]
// [4,3,1,2,3]
// 0=>4=>3=>2=>1=>3 Cycle
const getDuplicate = function (nums) {
  let hare = 0;
  let tortoise = 0;
  while (true) {
    hare = nums[nums[hare]];
    tortoise = nums[tortoise];
    if (hare === tortoise) {
      let pointer = 0;
      while (pointer !== tortoise) {
        pointer = nums[pointer];
        tortoise = nums[tortoise];
      }
      return pointer;
    }
  }
};

console.log(getDuplicate([4, 3, 1, 2, 3]));
