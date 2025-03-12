// You are given an array of Integers in which each subsequent value is not less than the previous value.
//  Write a function that takes this array as an input and returns a new array with the squares of each number
// sorted in ascending order.

// Remember

// You can solve this question in multiple ways.

// Think about the following -

// 1.What would be the brute force way of solving this question ? What would be the Time and Space complexity of
// this approach?

// 2.Is there a better way to solve this with a more optimum Time complexity than the Brute force way ?

// Method1

// function sortedSquarredArray(array) {
//   let res = new Array(array.length).fill(0);
//   for (let i = 0; i < array.length; i++) {
//     res[i] = array[i] * array[i];
//   }
//   res.sort((a, b) => a - b);
//   return res;
// }

// console.log(sortedSquarredArray([-9, 2, 3, 4, 5]));

// Method2

function sortedSquarredArray(array) {
  let res = new Array(array.length).fill(0);
  let pointerLeft = 0;
  let pointerRight = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    const leftSquared = Math.pow(array[pointerLeft], 2);
    const rightSquared = Math.pow(array[pointerRight], 2);
    if (leftSquared > rightSquared) {
      res[i] = leftSquared;
      pointerLeft++;
    } else {
      res[i] = rightSquared;
      pointerRight--;
    }
  }
  return res;
}

console.log(sortedSquarredArray([-9, 2, 3, 4, 5]));
