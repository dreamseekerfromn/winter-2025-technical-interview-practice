/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  // Your code here
  let set = new Set();
  let max = 0;
  let j = 0;
  for(let i = 0; i < s.length; i++){
    
    
    while(set.has(s[i])){
      set.delete(s[j]);
      j++;
    }
    set.add(s[i]);
    max = Math.max(max, i - j + 1);
  }
  return max;
}

module.exports = lengthOfLongestSubstring;
