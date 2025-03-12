// Non repeating character -
// You are given a string consisting of only lower case and upper-case English Alphabets and integers 0 to 9.
// Write a function that will take this string as Input and return the index of the first character that is non-repeating.

// Method 1 :Brute force method is to use two for loops T: O(n^2)
// Method 2 : Using Hash table

function firstNonRepeatingChar(string) {
  const hashTable = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] in hashTable) {
      hashTable[string[i]]++;
    } else {
      hashTable[string[i]] = 1;
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (hashTable[string[i]] === 1) {
      return i;
    }
  }
  return null;
}

console.log(firstNonRepeatingChar("abbpadcdc"));
