/*
Problem Prompt:
Write a function that takes in two strings and returns true if they are valid anagrams of each other, and false otherwise. An anagram is a word or phrase formed by rearranging the letters of another word or phrase.

Function Signature:
function areAnagrams(str1, str2) {
    // Your code here
}

Test Cases:
console.log(areAnagrams("listen", "silent")); // Expected output: true
console.log(areAnagrams("hello", "world")); // Expected output: false
console.log(areAnagrams("rail safety", "fairy tales")); // Expected output: true
console.log(areAnagrams("restful", "fluster")); // Expected output: true
console.log(areAnagrams("programming", "coding")); // Expected output: false
*/

function areAnagrams(str1, str2) {
  // Your code here
  let hash1 = new Array(26).fill(0);
  let hash2 = new Array(26).fill(0)
  
  for(let i = 0; i < str1.length; i++){
    if((str1[i] >= 'a' && str1[i] <= 'z') || (str1[i] >= 'A' && str1[i] <= 'Z')){
      hash1[str1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
  }

  for(let i = 0; i < str2.length; i++){
    if((str2[i] >= 'a' && str2[i] <= 'z') || (str2[i] >= 'A' && str2[i] <= 'Z')){
      hash2[str2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }
  }

  for(let j = 0; j < 26; j++){
    if(hash1 != hash2){
      return false;
    }
  }

  return true;


}

module.exports = areAnagrams;
