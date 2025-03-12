// const maxAreaBruteForce = function (array) {
//   let area = 0;
//   for (let i = 0; i < array.length; i++) {
//     for (j = i + 1; j < array.length; j++) {
//       const height = Math.min(array[i], array[j]);
//       const width = j - i;
//       const currentArea = height * width;
//       area = Math.max(area, currentArea);
//     }
//   }
//   return area;
// };
// console.log(maxAreaBruteForce([3, 7, 5, 6, 8, 4]));

// // t = o(n)2    s= o(1)


// two pointers
const maxAreaBruteForce = function (array) {
  let left = 0;
  let right = array.length - 1;
  let maxArea = 0;
  while (left < right) {
    const width = right - left;
    const currentArea = Math.min(array[left], array[right]) * width;
    maxArea = Math.max(maxArea, currentArea);
    if (array[left] < array[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};
console.log(maxAreaBruteForce([3, 7, 5, 6, 8, 4]));
// t = o(n)   s= o(1)
