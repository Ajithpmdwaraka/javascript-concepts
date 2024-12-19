//for-in-loop

//syntax
// for (variable in object) {
//     // Code to be executed
// }

//Definition: Iterates over the properties of an object.

const person = { name: 'Ajith', age: 20, city: 'New York' };
for (const key in person) {
  console.log(key, person[key]); 
  // Output: name: John, age: 30, city: New York
}
