function isPalindrome(word) {
  // Write your algorithm here
  const reversed = word.split('').reverse().join('');

  return word === reversed;
}

/* 
  Add your pseudocode here
  Pseudocode:
  1. Define a function `isPalindrome` that takes a string `word`.
  2. Reverse the string `word` by:
     - Splitting it into an array of characters.
     - Reversing the array.
     - Joining it back into a string.
  3. Compare the original string `word` with the reversed string.
  4. If they are equal, return true; otherwise, return false
*/

/*
  Add written explanation of your solution here
  The solution works by reversing the input string and comparing it with the original string. If they are
  equal, then the string is a palindrome. This approach has a time complexity of O(n),
  where n is the length of the string, because it involves reversing the string, which requires
  iterating over each character in the string once.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");
  

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true")
  console.log("=>", isPalindrome("madam"));

  console.log("")
}

module.exports = isPalindrome;

