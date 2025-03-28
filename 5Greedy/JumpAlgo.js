// Coding Exercise: Jump Game 1
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the
// array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

var canJump = function (nums) {
  let n = nums.length;
  let maxIndex = 0;
  for (let i = 0; i < n; i++) {
    if (i > maxIndex) return false;
    maxIndex = Math.max(maxIndex, i + nums[i]);
    if (maxIndex >= n - 1) return true;
  }
};

console.log(canJump([1, 2, 4, 1, 1, 0, 2, 5]));
