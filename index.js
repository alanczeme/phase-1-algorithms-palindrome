function isPalindrome(word) {
  let reverseWord = [];
  
  for (let i = 0; i < word.length; i++) {
    reverseWord.unshift(word[i]);
  }

  reverseWord = reverseWord.join("");
  
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}

/* 
  pseudocode:

  create a blank string reverseWord
  iterate through each letter in word and UNSHIFT into reverseWord
  compare word to reverseWord
    if === then true
          else false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
