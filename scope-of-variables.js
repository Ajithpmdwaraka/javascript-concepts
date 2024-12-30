let a = "Ajith";      //can use var or const also

function greetAjith(){
    console.log(`Hi, ${a}`);
}

greetAjith();
console.log(a);

//If we initialize a variable in the Global Scope using any keywords like var let and const we can access it from anywhere

var globalVar = "I'm global!"; //var creates a property on the global object (e.g., window in browsers).
console.log(globalVar); // Accessible
console.log(window.globalVar); // Also accessible

let globalLet = "I'm global!"; 
const globalConst = "I'm also global!";

console.log(globalLet); // Accessible
console.log(globalConst); // Accessible
console.log(window.globalLet); // Undefined
console.log(window.globalConst); // Undefined
/*let and const do not create properties on the global object.
They can still be accessed globally but are not attached to the global object.*/

/* Globally scoped variables can be accessed from anywhere in the code
 However, only var attaches the variable to the global object, while let and const do not. */


 function greetAjith() {
    a = "Ajith";
    console.log(`Hi, ${a}`);
 }

 console.log(a);

//  Assigning a value to a variable without using var, let, or const, 
//  it implicitly creates a global variable and attaches it to the global object (e.g., window in browsers). 
//  Such variables can be accessible everywhere but it will leads to potential bugs and unpredictable behavior so, 
//  always declare variables explicitly using keywords to avoid these issues.