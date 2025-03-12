// Question 1:Selection Sort-You are given an array of integers.
// Write a function that will take this array as input and return the sorted array using Selection sort.
function SelectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
}
console.log(SelectionSort([7, 4, 3, 6, 9, 1]));
