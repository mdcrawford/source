function sumArray(arrayOfInts) {
  // YOUR CODE HERE
  // hint: use for loops to get through the array!
  let sum = 0;
  for (let i = 0; i < arrayOfInts.length; i++) {
    sum += arrayOfInts[i];
  }
  return sum;
}

testData = [4, 6, 1, -24];

console.log(sumArray(testData)); // should print -13
