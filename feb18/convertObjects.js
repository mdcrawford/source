// skeleton code for your function
function convertObjects(people) {
  // YOUR CODE HERE
  // map through the array "people" to create a new, modified array...
  // ... then return the modified array
}

// now, we're going to test our function on some dummy data we're creating
// note this is an ARRAY (i.e. ordered collection) of multiple OBJECTS
let testData = [
  {
    name: "Michael",
    age: 21
  },
  {
    name: "Taylor",
    age: 19
  }
];

let updatedTestData = convertObjects(testData);
console.log(updatedTestData); // should print the MODIFIED array, which would look like this:
// [
//   {
//     name: "Michael",
//     age: 21,
//     isLegal: true
//   },
//   {
//     name: "Taylor",
//     age: 19,
//     isLegal: false
//   }
// ];

console.log(testData); // should print the original testData UNMODIFIED (i.e. no isLegal field)
