// Question 2: Isomorphic Strings -
// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself. s and t consist of any valid ascii character.

const checkIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  let sHash = {};
  let tHash = {};
  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];
    if (!sHash[sChar]) {
      sHash[sChar] = tChar;
    }
    if (!tChar in tHash) {
      tHash[tChar] = sChar;
    }
    if (sHash[sChar] !== tChar || tHash[tChar] !== sChar) return false;
  }
  return true;
};

console.log(checkIsomorphic("egg", "add"));
