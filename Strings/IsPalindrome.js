// Palindrome-You are given a string. Write a function to check whether the string is a palindrome or not.

// To optimise your solution. We will discuss 3 solutions with the following Time and Space complexities

// Solution 1: T=O(n^2) , S=O(n)

// Solution 2: T=O(n) , S=O(n)

// Solution 3: T=O(n) , S=O(1)

// Solution1 : Create a new string from end of given string and compare both strings not optinal
// Solution2 : Create an array and compare
// Solution3 : Create 2 pointers, begining and ending and check

// Solution 1

// function isPalindrome(string) {
//   let newString = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     newString += string[i];
//   }
//   if (string === newString) {
//     return true;
//   } else return false;
// }
// console.log(isPalindrome('malayalam'))

// Solution 2
// function isPalindrome(string) {
//   let newString = [];
//   for (let i = string.length - 1; i >= 0; i--) {
//     newString.push(string[i]);
//   }
//   if (string === newString.join("")) {
//     return true;
//   } else return false;
// }
// console.log(isPalindrome("malayalam"));

// Solution 3
function isPalindrome(string) {
  let i = 0;
  let j = string.length - 1;
  while (i <= j) {
    if (string[i] !== string[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
}
console.log(isPalindrome("malayalam"));
