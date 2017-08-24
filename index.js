'use strict';

const bracketing = (predicate, sequence) => {
  // Keep track of the current sub array length
  let subLength = 0;
  // Array index of left value
  let leftPointer = 0;
  // Array index of right value
  let rightPointer = 1;
  // Where the current sub array starts
  let startingIndex = 0;
  // Final winning start index
  let winningStart = 0;
  // Final winning length of sub array
  let winningLength = 0;

  do {
    const leftValue = sequence[leftPointer];
    const rightValue = sequence[rightPointer];

    if (predicate(leftValue, rightValue)) {
      subLength += 1;
      leftPointer += 1;
    } else {
      if (subLength + 1 > winningLength) {
        winningStart = startingIndex;
        winningLength = startingIndex + (subLength + 1);
      }
      subLength = 0;
      leftPointer = rightPointer;
      startingIndex = leftPointer;
    }
    rightPointer += 1;
  } while (rightPointer <= sequence.length);
  return sequence.slice(winningStart, winningLength);
};

module.exports = bracketing;
