// Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.



// Example:

// nums = [3,3,2]

// Output :

// [[3,3,2] , [3,2,3], [2,3,3] ]


const uniquePermutations = (nums) => {
    let res = [];
    nums.sort((a, b) => a - b); // Sort the array to handle duplicates
  
    const helper = (i) => {
      if (i === nums.length - 1) {
        res.push([...nums]);
        return;
      }
      const seen = new Set();
      for (let j = i; j < nums.length; j++) {
        if (seen.has(nums[j])) continue; // Skip duplicates
        seen.add(nums[j]);
        [nums[i], nums[j]] = [nums[j], nums[i]];
        helper(i + 1);
        [nums[i], nums[j]] = [nums[j], nums[i]]; // Revert changes
      }
    };
  
    helper(0);
    return res;
  };
  
  console.log(uniquePermutations([3, 3, 2]));
