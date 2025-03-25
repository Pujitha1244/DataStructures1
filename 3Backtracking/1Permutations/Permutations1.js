// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// nums = [1,4]

// Output :[[1,4],[4,1]]

// Example 2:

// nums = [1,4,5]

// Output :[[1,4,5],[1,5,4],[4,1,5],[4,5,1],[5,1,4],[5,4,1]]

const permutations = (nums) => {
  let res = [];
  function helper(i) {
    // base case
    if (i === nums.length - 1) {
      res.push([...nums]);
      return;
    }
    for (let j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      helper(i + 1);
      [nums[i], nums[j]] = [nums[j], nums[i]]; //reverting changes
    }
  }
  helper(0);
  return res;
};

console.log(permutations([1, 4, 5]));
