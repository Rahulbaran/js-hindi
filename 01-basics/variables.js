// Declaring a variable means creating a new variable
// Initializing a variable means assiging it a value.

// a variable created using "var" can be reassigned & redeclared. It is scoped to functional level(local level) or global level. The variable is also hoisted on the top which means it can be accessed even before declaring.

// A variable created using "let" can be reassigned but can't be redeclared. It is block scoped (curly braces) or global scoped or local scoped. The variable with "let" is hoisted without a default initialization so instead of returning "undefined", it returns "can't access variable before initialization".

// A variable created using "const" can neither be reassigned nor be redeclared. It's scope is similar to "let". It is also hoisted to the top but without a default initialization.

var num = 123;

// var num = 124;
// console.log(num);

// console.log(newType);
let newType = 432;
// let newType = 234;
// console.log(newType);

// console.log(conVar);
const conVar = "Rahul Kumar";

const hello_world = "Hello World";
console.log(hello_world);

console.table([num, newType, conVar][(1, 2)]);
