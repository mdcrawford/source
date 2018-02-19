function createPerson(name, age, school) {
  let person = {
    name: name,
    age: age,
    school: school
  };
  return person;
}

let testResult = createPerson("Michael", 21, "UVA");

console.log(testResult); // should print the following:
/*
{
  name: "Michael",
  age: 21,
  school: "UVA"
}
*/
