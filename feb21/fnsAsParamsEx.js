// this function checks if someone is legal, and returns true/false accordingly
function isLegal(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

// this function modifies a person's isLegal field by CALLING the above function
function addIsLegalField(person) {
  // note here we're making use of the above subroutine
  person.isLegal = isLegal(person);
}

// example:
let testPerson = {
  name: "Mike",
  age: 21
};

addIsLegalField(testPerson);
console.log(testPerson); // now has the isLegal field

// now, we'll write a function that takes in an array, and does something
// to the second element of that array.  however, this function won't know
// in advance WHAT will happen to that second element.  instead, it will
// take in a function as a parameter to apply to that second element.
function changeSecondElement(array, func) {
  // we assume that this function "func" takes in one parameter
  array[1] = func(array[1]);
}

// in this example, we'll make changeSecondElement double the element.  Note
// here we define the function SEPARATELY
function double(x) {
  return x * 2;
}

let array1 = [0, 3, 8, 98];

changeSecondElement(array1, double); // note the second parameter is the function "double"
console.log(array1); // and sure enough, the second element has doubled

// in this example, we'll create a function "on the fly" using arrow syntax; this time,
// it will TRIPLE the second value
let array2 = [0, 20, -12, 4];
changeSecondElement(array2, element => {
  return element * 3;
});
console.log(array2); // the value has tripled
