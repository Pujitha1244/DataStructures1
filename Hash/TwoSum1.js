// Question 1: Two Sum - You are given an array of Integers and another integer targetValue.
// Write a function that will take these inputs and return the indices of the 2 integers in the array that add up targetValue.

// Brute force method (not best or optimal solution)
// function findIndicesSum(array, targetValue) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; i++) {
//       if (array[i] + array[j] === targetValue) {
//         return [i, j];
//       }
//     }
//   }
//   return [];
// }
// console.log(findIndicesSum([2, 7, 11, 15], 9)); //t=o(n^2)

// Hash table : lookup a value when we have a key
// As we traverse the array, store data in hash table
// So we don't need to traverse the array again just access the values

function findIndicesSum(array, targetValue) {
  const hashTable = {};
  let neededValue;
  for (let i = 0; i < array.length; i++) {
    neededValue = targetValue - array[i];
    // console.log(hashTable)
    if (neededValue in hashTable) {
      return [i, hashTable[neededValue]];
    } else {
      hashTable[array[i]] = i;
      console.log(hashTable);
    }
  }
  return [];
}
console.log(findIndicesSum([2, 7, 11, 15], 17));
