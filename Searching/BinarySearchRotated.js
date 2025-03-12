// Coding Exercise: Search in rotated sorted array
// Question:

// Search in Rotated Sorted array- You are given an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the
// resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed).

// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2]. Given an integer target,
// return the index of target if it is in the array, else return -1. You must write an algorithm with O(log n) runtime complexity.

function BinarySearchRotated(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] === target) return middle;
    if (array[left] < array[middle]) {
      // left part is sorted
      if (target >= array[left] && target < array[middle]) {
        // explore left part
        right = middle - 1;
      } else {
        // explore right part
        left = middle + 1;
      }
    } else {
      // right part is sorted
      if (target > array[middle] && target <= array[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return -1;
}

console.log(
  BinarySearchRotated([1, 3, 5, 7, 9, 11, 12, 15, 16, 18, 19, 22, 25, 36], 22)
);
