// Question 2: Container with most Water -
// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains
// the most water(depth is constant across containers).
// Return the area(that the 2 lines and the X axis make) of container which can store the max amount of water.
// Notice that you may not slant the container.

const maxArea = function (array) {
  let left = 0;
  let right = array.length - 1;
  let maximumArea = 0;
  while (left < right) {
    let width = right - left;
    let currentArea = Math.min(array[left], array[right]) * width;
    maximumArea = Math.max(maximumArea, currentArea);
    if (array[right] < array[left]) {
      right--;
    } else {
      left++;
    }
  }
  return maximumArea;
};

console.log(maxArea([3, 7, 5, 6, 8, 4]));
