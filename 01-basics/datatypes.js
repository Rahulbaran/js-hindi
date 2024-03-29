"use strict"; // Treat all the JS codes as newer version

// Data Types are basically types of data available in the given programming language.
// There are two types of Data Types:- i. Primitive Types 2. Objects

// Primitive data types are immutable and don't have any property or method, but they have object wrappers(except undefined & null) which provide methods and properties to work with.

/* There are following primitive data types:- 
    a. Number
    b. String
    c. BigInt
    d. Boolean
    e. Symbol
    f. undefined
    g. null
*/

// alert("Namaste"); can't be used inside node.
// Type Conversion is very common in JavaScript. In Type Conversion, type of data is changed from one type to another
// Number() converts "null" to 0.

const firstNum = 123;
const secondNum = "454fsadf";

// console.log(firstNum + secondNum); // firstNum is converted into string and concatenation takes place.

// console.log(true + firstNum); // Here "true" is converted into 1 and sum takes place
// console.log(true + secondNum); // Here "true" is converted into a string and concatenation occurs.

// console.log(true + false + BigInt(123443)); // It throws a TypeError since BigInt can't be converted into other type

// console.info(null + true); // null is converted to 0 and true is converted to 1

// console.table([
//   Boolean(null),
//   Boolean(undefined),
//   Boolean(""),
//   Boolean(" "),
//   Boolean(34),
//   Boolean(),
// ]);

// console.log(typeof firstNum);

// console.log(false || secondNum);
// console.log(null || undefined || "Hello World");
// console.log(firstNum + parseInt(secondNum));
// console.log(34 + BigInt(345));
// console.log("I am " + undefined);

const convertedNum = Number(secondNum);

if (typeof convertedNum === "number" && !isNaN(convertedNum))
  console.log(convertedNum);
else console.log("Wrong response");

console.log(Number(2));

/*
Using Number()

"33" -> 33
undefined -> NaN
null -> NaN
"33TE" -> NaN
true -> 1, false -> 0
*/
