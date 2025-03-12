// Repeated DNA Sequence:

// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// •For example, "ACGAATTCCG" is a DNA sequence.

// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

// Example:

// Input: s = ”GAAAATCCCCGAAAATCCCCGAAAAAGGGTTT"

// Output: [”GAAAACCCCC",”TCCCCGAAAA"]

function findRepeatedDNAsequence(s) {
  const L = 10;
  const n = s.length;
  const seen = new Set();
  const output = new Set();

  for (let start = 0; start <= n - L; start++) {
    const temp = s.slice(start, start + L);
    if (seen.has(temp)) {
      // repeating
      output.add(temp);
    }
    seen.add(temp);
  }

  return Array.from(output);
}

const s = "GAAAATCCCCGAAAATCCCCGAAAAAGGGTTT";
console.log(findRepeatedDNAsequence(s)); 
