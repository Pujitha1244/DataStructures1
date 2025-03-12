// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]

// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example:

// Input: nums = [-2,0,2,1,-1,-3,-1]

// Output: [[-2,0,2],[0,1,-1],[2,1,-3]]

function sumThree(nums) {
  nums.sort((a, b) => a - b); // [-3,-2,-1,-1,0,1,2]
  let res = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (i === 0 || nums[i - 1] !== nums[i]) {
      let left = i + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (sum === 0) {
          res.push([nums[i], nums[left], nums[right]]);
          left++;
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }

          //   return res;
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return res;
}

console.log(sumThree([-2, 0, 2, 1, -1, -3, -1]));

