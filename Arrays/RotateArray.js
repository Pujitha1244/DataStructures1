// Rotate an array to the right by k steps, k is non-negative
function rotateArray(nums, k) {
  let n = nums.length;
  k = k % n; // In case k is greater than the length of the array

  // Slice the array into two parts and concatenate them in reversed order
  let rotatedPart = nums.slice(n - k);
  console.log("rotatedPart", rotatedPart);
  let remainingPart = nums.slice(0, n - k);
  console.log("remainingPart", remainingPart);

  return rotatedPart.concat(remainingPart);
}

// Example usage
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

console.log(rotateArray(nums, k)); // Output: [5, 6, 7, 1, 2, 3, 4]
