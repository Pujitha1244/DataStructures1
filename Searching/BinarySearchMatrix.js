// Coding Exercise: Search in Matrix
// Question:

// Search in 2D Array-Write an efficient algorithm that searches for a value target in an m x n integer matrix.
// This matrix has the following properties:

// Integers in each row are sorted from left to right.

// The first integer of each row is greater than the last integer of the previous row.

// If the value is there in the matrix return true, else false.

// Try :

// Try to write the solution with T=O(mn) where m and n are the number of rows and number of columns respectively.

const searchInMatrix = function (matrix, target) {
  const columns = matrix[0].length;
  const rows = matrix.length;

  //   binarysearch to find the row
  let top = 0;
  let bottom = rows - 1;
  let middle;
  while (top <= bottom) {
    middle = Math.floor((top + bottom) / 2);
    if (target < matrix[middle][0]) {
      bottom = middle - 1;
    } else if (target > matrix[middle][columns - 1]) {
      top = middle + 1;
    } else {
      break;
    }
  }
  let left = 0;
  let right = columns - 1;
  let midValue;
  while (left <= right) {
    midValue = Math.floor((left + right) / 2);
    if (target === matrix[middle][midValue]) {
      return true;
    } else if (target < matrix[middle][midValue]) {
      right = midValue - 1;
    } else {
      left = midValue + 1;
    }
  }
  return false;
};

matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
target = 33;

console.log(searchInMatrix(matrix, target));
