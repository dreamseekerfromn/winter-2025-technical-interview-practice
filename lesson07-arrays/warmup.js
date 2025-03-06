// Prompt 1: Sum of Array Write a function called sumArray that takes an array of numbers as input and returns the sum of all the numbers in the array.
function sumArray(arr = []){
    if(arr.length == 0){
        return null;
    }
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
}
// Prompt 2: Find Maximum Write a function called findMax that takes an array of numbers as input and returns the maximum number in the array.
function findMax(arr = []){
    if(arr.length == 0){
        return null;
    }
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++){
        max = Math.max(max, arr[i]);
    }
    return max;
}
// Prompt 3: Reverse Array Write a function called reverseArray that takes an array as input and returns a new array with the elements in reverse order.
function reverseArray(arr = []){
    if(arr.length == 0){
        return [];
    }
    let result = [];
    for(let i = arr.length--; i >= 0; i--){
        result.push(arr[i]);
    }
    return result;
}