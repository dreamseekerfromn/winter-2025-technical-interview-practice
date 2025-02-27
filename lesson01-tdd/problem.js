/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  let filteredStr = "";
  str = str.split("");

  for (let index of str) {
    if((index >= 'a' && index <= 'z') || (index >= 'A' && index <= 'Z')){
      filteredStr += index.toLowerCase();
    }
  }

  for(let i = 0; i < filteredStr.length; i++){
    if(filteredStr[i] != filteredStr[filteredStr.length - 1 - i]){
      return false;
    }
  }

  return true;
  // your code here
}

module.exports = isPalindrome;
