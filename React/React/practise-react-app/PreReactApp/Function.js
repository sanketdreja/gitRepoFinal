// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

// --------------------------------------------------------------------------
//  Normal Function
// function myFunction(p1, p2) {
//   return p1 * p2; // The function returns the product of p1 and p2
// }

//

// --------------------------------------------------------------------------

// JavaScript Function Syntax

// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)

// The code to be executed, by the function, is placed inside curly brackets: {}

// --------------------------------------------------------------------------

// Function Return

// When JavaScript reaches a return statement, the function will stop executing.

// If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

// Functions often compute a return value. The return value is "returned" back to the "caller":
//

//

//

// let x = myFunction(4, 3);   // Function is called, return value will end up in x

// function myFunction(a, b) {
//   return a * b;             // Function returns the product of a and b
// }
// --------------------------------------------------------------------------

// Arrow functions were introduced in ES6.

// Arrow functions allow us to write shorter function syntax:

// let myFunction = (a, b) => a * b;

// It gets shorter! If the function has only one statement, and the statement returns a value, you can remove the brackets and the return keyword:

// hello = () => "Hello World!";

// If you have parameters, you pass them inside the parentheses:
// hello = (val) => "Hello " + val;
// In fact, if you have only one parameter, you can skip the parentheses as well:
// hello = val => "Hello " + val;
// ===================================================================================

// ===================================================================================

// ===================================================================================
// What About this keyword?

// The handling of this is also different in arrow functions compared to regular functions.

// In short, with arrow functions there are no binding of this.

// In regular functions the this keyword represented the object that called the function, which could be the window, the document, a button or whatever.

// With arrow functions the this keyword always represents the object that defined the arrow function.

// Let us take a look at two examples to understand the difference.

// Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

// The first example uses a regular function, and the second example uses an arrow function.

// The result shows that the first example returns two different objects (window and button), and the second example returns the window object twice, because the window object is the "owner" of the function.

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// Example

// With a regular function this represents the object that calls the function:
// // Regular Function:
// hello = function() {
//   document.getElementById("demo").innerHTML += this;
// }

// // The window object calls the function:
// window.addEventListener("load", hello);

// // A button object calls the function:
// document.getElementById("btn").addEventListener("click", hello);

// -----------------------------------------------------------------------------------
// Output

// [object Window][object HTMLButtonElement]

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// Example

// With an arrow function this represents the owner of the function:
// // Arrow Function:
// hello = () => {
//   document.getElementById("demo").innerHTML += this;
// }

// // The window object calls the function:
// window.addEventListener("load", hello);

// // A button object calls the function:
// document.getElementById("btn").addEventListener("click", hello);

// -----------------------------------------------------------------------------------
//  Output
// [object Window][object Window][object Window][object Window]

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------

// Function Expression  allows us to create an anonymous function which doesn’t have any function name which is the main difference between Function Expression and Function Declaration. A function expression can be used as an IIFE (Immediately Invoked Function Expression)which runs as soon as it is defined. A function expression has to be stored in a variable and can be accessed using variableName.  With the ES6 features introducing Arrow Function, it becomes more easier to declare function expression.

// function functionName(x, y) { statements... return (z) };
// Syntax for Function Expression (anonymous) :

// let variableName = function(x, y) { statements... return (z) };

// // Syntax for Function Expression (named) :
// let variableName = function functionName(x, y)
// { statements... return (z) };

// Syntax for Arrow Function:
// let variableName = (x, y) => { statements... return (z) };

// Note:

//     A function expression has to be defined first before calling it or using it as a parameter.
//     An arrow function must have an return statement.

//
// Example 1: Code for Function Declaration
// function callAdd(x, y) {
//   let z = x + y;
//   return z;
// }
// console.log("Addition : " + callAdd(7, 4));

//

// Example 2: Code for Function Expression (anonymous)

// var calSub = function (x, y) {
//   let z = x - y;
//   return z;
// };

// console.log("Subtraction : " + calSub(7, 4));

// Example 3: Code for Function Expression (named)

// var calMul = function Mul(x, y) {
//   let z = x * y;
//   return z;
// };

// console.log("Multiplication : " + calMul(7, 4));

// Example 4: Code for Arrow Function

// var calDiv = (x, y) => {
//   let z = x / y;
//   return z;
// };

// console.log("Division : " + calDiv(24, 4));
// ====================================================================================

// ====================================================================================

// ====================================================================================

// ====================================================================================

// ---------------------------------------------------------------------------------

//  FUNCTION                                                                                      //METHOD
// A function can be called directly by its name.                             |  // A method consists of a code that can be called by the name of its object and its method name using dot notation or square bracket notation..
//A function can pass the data that is operated and may return the data.   | // The method operates the data contained in a Class.
// Data passed to a function is explicit.                             | // A method implicitly passes the object on which it was called.
// A function lives on its own.                                   | // A method is a function associated with an object property.

//==============================================================================================
