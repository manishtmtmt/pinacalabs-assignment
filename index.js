// Write a test case for code which will check for characters which will occur twice?

function findDuplicates(str) {
  const charCount = {};
  const duplicates = [];

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char in charCount) {
    if (charCount[char] > 1) {
      duplicates.push(char);
    }
  }

  return duplicates;
}

module.exports = findDuplicates;