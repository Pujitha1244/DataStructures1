// Question 2:Insertion Sort -You are given an array of integers.
// Write a function that will take this array as input and return the sorted array using Insertion sort.
function InsertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (array[j] > temp && j >= 0) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
  return array;
}

console.log(InsertionSort([5, 4, 10, 1, 6, 2]));
