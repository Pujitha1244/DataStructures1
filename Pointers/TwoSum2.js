// Given a 1-indexed array of integer numbers that is already sorted in non-decreasing order,
// find two numbers such that they add up to a specific target number.

// Return the indices of the two numbers, index1 and index2, array [index1, index2] of length 2.

// It is guaranteed that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

// Example: Input: numbers = [1,3,4], target = 5; Output: [1,3]
function twoSum(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === target) {
      return [left + 1, right + 1];
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  return [];
}

console.log(twoSum([1, 3, 4], 5));
