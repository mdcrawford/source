let array = [1, 2, 4, 8, 16];

let newArray = array.map((x, index) => {
  console.log(index);
  return x + 3;
});

console.log(array); // [1, 2, 4, 8, 16]
console.log(newArray); // [4, 5, 7, 11, 19]
