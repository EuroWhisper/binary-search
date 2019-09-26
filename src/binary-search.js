const input = [];

// Populate input array with numbers 1-100 for testing.
for (let i = 1; i <= 100; i++) {
	input.push(i);
}

// Finds the index of a number within an array
// by using the binary search algorithm.
function binarySearch(inputArray, subject) {
  // Make a copy of the input array so that
  // the input array does not get mutated.
  let inputArrayCopy = [...inputArray];
  let found = false;
  // The index that the subject was found at.
  let foundAt;
  // The lowest possible index that may be a match.
  let startIndex = 0;
  // The highest possible index that may be a match.
  let endIndex = inputArray.length - 1;
  
  // While the index of the subject has not been found.
  while (!found) {
    // The index of the item that will be searched
    // this iteration is set to halfway between the
    // lowest possible index and highest possible index.
    let index = Math.round((startIndex + endIndex) / 2);
    // If the array item at the currently selected index
    // is bigger than the subject
  	if (inputArrayCopy[index] > subject) {
      // Set the highest possible index to 1 less
      // than the current index.
      endIndex = index - 1;
    // If the array item at the currently selected index
    // is smaller than the subject
    } else if (inputArrayCopy[index] < subject) {
        // Set the lowest possible index to 1 more
        // than the current index.
        startIndex = index + 1;
    // If the array item at the currently selected index
    // matches the subject
    } else if (inputArrayCopy[index] === subject) {
        // Set foundAt value to the current index.
        found = true;
        foundAt = index;
    }
  }
  return foundAt;
}

// Test the binary search with the test array.
console.log(binarySearch(input, 50));