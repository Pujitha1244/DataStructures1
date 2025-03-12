// Longest Unique char Substring - Given a string s, find the length of the longest substring without repeating characters.

function maxLength(string) {
  let maxi = 0;
  let start = 0;
  let seen = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    // abcbdef
    if (char in seen) {
      start = Math.max(start, seen[char] + 1);
    }
    maxi = Math.max(maxi, i - start + 1);
    // Make an entry to hast table if not there
    seen[char] = i;
  }
  return maxi;
}

console.log(maxLength('abqwertybcbr'))
