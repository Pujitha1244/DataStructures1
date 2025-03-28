// Question 1: Two Sum -
// You are given an array of Integers and another integer targetValue.
// Write a function that will take these inputs and return the indices of the 2 integers in the array that add up targetValue.

function findIndicesSum(array, targetValue) {
  let n = array.length;
  let remainingValue;
  let hashData = {};
  for (let i = 0; i < n; i++) {
    remainingValue = targetValue - array[i];
    if (remainingValue in hashData) {
      //   return [i, hashData[remainingValue]];  //returning indices
      return [array[i], remainingValue]; // returning values
    } else {
      hashData[array[i]] = i;
    }
  }
  return [];
}

console.log(findIndicesSum([2, 7, 11, 15], 17));
