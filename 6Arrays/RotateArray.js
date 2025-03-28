// Question 1: Rotate Array - Given an array, rotate the array to the right by k steps, where k is non-negative.

const rotateArray = function (array, k) {
  let n = array.length;
  if (k > n) {
    k = k % n;
  } else if (k === n) {
    return array;
  }
  let rotatedArray = array.slice(n - k);
  let remainingArray = array.slice(0, n - k);
  let resultArray = rotatedArray.concat(remainingArray);
  return resultArray;
};

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 7));
