/* Remove Duplicates from an Array: Write a function called removeDuplicates that takes an array of numbers as input and returns an new array with all the duplicates removed. */
// // Examples:
// // removeDuplicates([1, 2, 3, 3, 4, 5]); // => [1, 2, 3, 4, 5]
// // removeDuplicates([1, 1, 1, 1, 1, 1]); // => [1]
// // removeDuplicates([1, 2, 3, 4, 5]); // => [1, 2, 3, 4, 5]
module.exports = function removeDuplicates(arr) {
  // your code here
  let result = [];
  let set = new Set();

  for(let i = 0; i < arr.length; i++){
    if(!set.has(arr[i])){
      set.add(arr[i]);
      result.push(arr[i]);
    }
  }

  return result;
};
