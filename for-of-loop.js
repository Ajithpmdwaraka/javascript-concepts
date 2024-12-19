//for-of-loop

//syntax
// for (variable of iterable) {
//     // Code to be executed
// }

//Definition: Iterates over iterable objects like arrays or strings.
//Array
const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
  console.log(fruit); // Output: apple, banana, cherry
}

//String
let string = "Ajith";

for(i of string){
    console.log(i); 
}
//Output: 
// A 
// J
// I 
// T 
// H