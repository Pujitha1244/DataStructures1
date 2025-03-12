// Question 1:Bubble Sort - You are given an array of integers.
// Write a function that will take this array as input and return the sorted array using Bubble sort.

// function Bubblesort(array) {
//   let temp;
//   let n = array.length;
//   for (let i = 0; i < n - 1; i++) {
//     if (array[i] > array[i + 1]) {
//       temp = array[i];
//       array[i] = array[i + 1];
//       array[i + 1] = temp;
//     }
//     console.log(array)
//   }
//   return array;
// }
// console.log(Bubblesort([7, 2, 3, 8, 1]));

function Bubblesort(array) {
  let sorted = false;
  let count = 0;
  while (sorted === false) {
    sorted = true;
    for (let i = 0; i < array.length - 1 - count; i++) {
      if (array[i] > array[i + 1]) {
        temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sorted = false;
      }
    }
    count++;
  }
  return array;
}
console.log(Bubblesort([7, 2, 3, 8, 1]));
