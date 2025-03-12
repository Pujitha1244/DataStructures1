function mergeSortedArrays(array1, array2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
      mergedArray.push(array1[i]);
      i++;
    } else {
      mergedArray.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    mergedArray.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    mergedArray.push(array2[j]);
    j++;
  }
  return mergedArray;
}

function mergeSort(array) {
  if (array.length <= 1) return array;
  let middle = Math.floor(array.length / 2);
  let leftPart = mergeSort(array.slice(0, middle));
  let rightPart = mergeSort(array.slice(middle));
  return mergeSortedArrays(leftPart, rightPart);
}

console.log(mergeSort([7, 4, 9, 1, 5, 3]));
