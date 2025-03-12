// Group Anagrams - Given an array of strings consisting of lower case English letters,
// group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// using all the original letters exactly once.

function groupAnagrams(stringsarray) {
  let hset = {};
  for (let str of stringsarray) {
    let sortString = str.split("").sort().join("");
    if (!(sortString in hset)) {
        hset[sortString] = [str];
    } else {
        hset[sortString].push(str);
    }
  }
  return Object.values(hset);
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
