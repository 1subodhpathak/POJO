/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  // Your code here
  const result = {};

  for (let element of array) {
    if (result[element] === undefined) {
      result[element] = 1; // Initialize count if the key is not present
    } else {
      result[element]++; // Increment count if the key is already present
    }
  }

  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;