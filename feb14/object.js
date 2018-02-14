let person = {
  name: "Michael Crawford",
  age: 21,
  uvaStudent: true,
  family: {
    mother: "Kate",
    father: "David"
  }
};

console.log(person.age); // 21
console.log(person.family.mother); // "Kate"
console.log(person.family); // ???

person.year = 4;
console.log(person); // note the object has a new field
