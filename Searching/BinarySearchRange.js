// Find First and Last Position of Element in Sorted Array-You are given an array of integers sorted in non-decreasing order,
// find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.

// Try:

// Try to write both the iterative solution and recursive solution

const searchForRange = function (array, target) {
  const leftExtreame = findLeftExtream(array, target);
  const rightExtreame = findRightExtream(array, target);
  const range = [leftExtreame, rightExtreame];
  return range;
};

function findLeftExtream(array, target) {
  let left = 0;
  let right = array.length - 1;
  let middle;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (target === array[middle]) {
      // check left side
      if (middle === 0) return 0;
      if (array[middle - 1] === target) {
        right = middle - 1;
      } else {
        return middle;
      }
    } else if (target < array[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

function findRightExtream(array, target) {
  let left = 0;
  let right = array.length - 1;
  let middle;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (target === array[middle]) {
      if (middle === array.length - 1) return array.length - 1;
      if (middle === array[middle - 1]) {
        left = middle + 1;
      } else return middle;
    } else if (target > array[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
}

console.log(searchForRange([1, 2, 3, 4, 5, 6, 6, 6, 7], 6));
