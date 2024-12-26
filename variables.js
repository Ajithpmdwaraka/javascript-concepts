//var: Variable can be re-declared and updated, A global scope variable

var b = 20;
var b = 26;
console.log(b); //output 26

//let: Variable cannot be re-declared but can be updated, A block scope variabble

let a = 20;
console.log(a); //output 20

//const: Variable cannot be re-declared or updated, A block scope variable

const student ={
    name: "Ajith",
    age: 20,
    place: "kerala"
}

console.log(student);

