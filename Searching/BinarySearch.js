// Binary Search -
// Given an array of integers which is sorted in ascending order, and a target integer,
// write a function to search for whether the target integer is there in the given array.
// If it is there then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// In Binary Search we use Dive and Conqure algorithm

function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    console.log(Math.floor((left + right) / 2))
    // [1,3,5,7,8,9,10] target 9
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 8;
console.log(binarySearch(nums, target));
