// var subsets = function (nums) {
//   let output = [];
//   function helper(i, subset) {
//     if (i === nums.length) {
//       output.push([...subset]);
//       return;
//     }
//     helper(i + 1, subset);
//     subset.push(nums[i]);
//     helper(i + 1, subset);
//     subset.pop();
//   }
//   helper(0, []);
//   return output;
// };
// subsets([1,2,3])

// var subsets = function(nums) {
//     let output = [];
//     nums.sort((a, b) => a - b); // Sort the array to handle duplicates

//     function helper(i, subset) {
//       if (i === nums.length) {
//         output.push([...subset]);
//         return;
//       }
//       // Step 1: Exclude nums[i]
//       helper(i + 1, subset);

//       // Step 2: Include nums[i]
//       subset.push(nums[i]);

//       // Step 3: Continue with nums[i] included
//       helper(i + 1, subset);

//       // Step 4: Backtrack
//       subset.pop();
//     }

//     helper(0, []);
//     return output;
//   };

//   // Example usage:
//   const nums = [1, 2, 2];
//   console.log(subsets(nums));

var Subsets = function (nums) {
  let output = [];
  nums.sort((a, b) => a - b); // Sort the array to handle duplicates

  function helper(i, subset) {
    if (i === nums.length) {
      output.push([...subset]);
      return;
    }
    // decision to include
    subset.push(nums[i]);
    helper(i + 1, subset);

    // decision not to include
    subset.pop();
    // while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
    //   i++;
    // }
    helper(i + 1, subset);
  }

  helper(0, []);
  return output;
};

// Example usage:
const nums = [1, 2, 3];
console.log(Subsets(nums));
