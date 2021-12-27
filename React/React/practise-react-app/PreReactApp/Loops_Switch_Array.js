// The switch statement is used to perform different actions based on different conditions.

// The JavaScript Switch Statement

// Use the switch statement to select one of many code blocks to be executed.
// Syntax
// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

//   This is how it works:

//     The switch expression is evaluated once.
//     The value of the expression is compared with the values of each case.
//     If there is a match, the associated block of code is executed.
//     If there is no match, the default code block is executed.

//     Example

// The getDay() method returns the weekday as a number between 0 and 6.

// (Sunday=0, Monday=1, Tuesday=2 ..)

// This example uses the weekday number to calculate the weekday name:

// switch (new Date().getDay()) {
//     case 0:
//       day = "Sunday";
//       break;
//     case 1:
//       day = "Monday";
//       break;
//     case 2:
//        day = "Tuesday";
//       break;
//     case 3:
//       day = "Wednesday";
//       break;
//     case 4:
//       day = "Thursday";
//       break;
//     case 5:
//       day = "Friday";
//       break;
//     case 6:
//       day = "Saturday";
//   }

//   The break Keyword

// When JavaScript reaches a break keyword, it breaks out of the switch block.

// This will stop the execution inside the switch block.

// It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

// Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.

// The default Keyword

// The default keyword specifies the code to run if there is no case match:

// Example

// The getDay() method returns the weekday as a number between 0 and 6.

// If today is neither Saturday (6) nor Sunday (0), write a default message:
// switch (new Date().getDay()) {
//   case 6:
//     text = "Today is Saturday";
//     break;
//   case 0:
//     text = "Today is Sunday";
//     break;
//   default:
//     text = "Looking forward to the Weekend";
// }

// note
// If default is not the last case in the switch block, remember to end the default case with a break.

// Switching Details

// If multiple cases matches a case value, the first case is selected.

// If no matching cases are found, the program continues to the default label.

// If no default label is found, the program continues to the statement(s) after the switch.

// Strict Comparison

// Switch cases use strict comparison (===).

// The values must be of the same type to match.

// A strict comparison can only be true if the operands are of the same type.

// In this example there will be no match for x:

// let x = "0";
// switch (x) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// }

// =========================================================================================

// =========================================================================================

// =========================================================================================

// Loops can execute a block of code a number of times.
// Loops are handy, if you want to run the same code over and over again, each time with a different value.

// Different Kinds of Loops

// JavaScript supports different kinds of loops:

//     for - loops through a block of code a number of times
//     for/in - loops through the properties of an object
//     for/of - loops through the values of an iterable object
//     while - loops through a block of code while a specified condition is true
//     do/while - also loops through a block of code while a specified condition is true

// ----------------------------------------------------------------------------
//     The For Loop

// The for loop has the following syntax:
// for (statement 1; statement 2; statement 3) {
//     // code block to be executed
//   }
//   Statement 1 is executed (one time) before the execution of the code block.

// Statement 2 defines the condition for executing the code block.

// Statement 3 is executed (every time) after the code block has been executed.
// Example
// for (let i = 0; i < 5; i++) {
//   text += "The number is " + i + "<br>";
// }

// ----------------------------------------------------------------------------

// The For In Loop

// The JavaScript for in statement loops through the properties of an Object:

// Syntax
// for (key in object) {
//   // code block to be executed
// }
// Example
// const person = {fname:"John", lname:"Doe", age:25};

// let text = "";
// for (let x in person) {
//   text += person[x];
// }

// Example Explained

//     The for in loop iterates over a person object
//     Each iteration returns a key (x)
//     The key is used to access the value of the key
//     The value of the key is person[x]

// For In Over Arrays

// The JavaScript for in statement can also loop over the properties of an Array:
// Syntax
// for (variable in array) {
//   code
// }
// Example
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x];
// }

// note

// Do not use for in over an Array if the index order is important.

// The index order is implementation-dependent, and array values may not be accessed in the order you expect.

// It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.

// Array.forEach()

// The forEach() method calls a function (a callback function) once for each array element.
// Example
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value;
// }

// Note that the function takes 3 arguments:

//     The item value
//     The item index
//     The array itself

// The example above uses only the value parameter. It can be rewritten to:
// Example
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value) {
//   txt += value;
// }
// -----------------------------------------------------------------------------------------------

// The For Of Loop

// The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
// Syntax
// for (variable of iterable) {
//   // code block to be executed
// }

// variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

// iterable - An object that has iterable properties.

// Looping over an Array
// Example
// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   text += x;
// }

// Looping over a String
// Example
// let language = "JavaScript";

// let text = "";
// for (let x of language) {
// text += x;
// }
// ----------------------------------------------------------------------------------------------

// The While Loop

// The while loop loops through a block of code as long as a specified condition is true.
// Syntax
// while (condition) {
//   // code block to be executed
// }
// Example

// In the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10:
// Example
// while (i < 10) {
//   text += "The number is " + i;
//   i++;
// }

// If you forget to increase the variable used in the condition, the loop will never end. This will crash your browser.
// The Do While Loop

// The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.
// Syntax
// do {
//   // code block to be executed
// }
// while (condition);
// Example

// The example below uses a do while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:
// Example
// do {
//   text += "The number is " + i;
//   i++;
// }
// while (i < 10);

// Do not forget to increase the variable used in the condition, otherwise the loop will never end!
// Comparing For and While

// If you have read the previous chapter, about the for loop, you will discover that a while loop is much the same as a for loop, with statement 1 and statement 3 omitted.

// The loop in this example uses a for loop to collect the car names from the cars array:
// Example
// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 0;
// let text = "";

// for (;cars[i];) {
//   text += cars[i];
//   i++;
// }

// The loop in this example uses a while loop to collect the car names from the cars array:
// Example
// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 0;
// let text = "";

// while (cars[i]) {
//   text += cars[i];
//   i++;
// }
// ----------------------------------------------------------------------------------------------
// The break statement "jumps out" of a loop.

// The continue statement "jumps over" one iteration in the loop.
// The Break Statement

// You have already seen the break statement used in an earlier chapter of this tutorial. It was used to "jump out" of a switch() statement.

// The break statement can also be used to jump out of a loop:
// Example
// for (let i = 0; i < 10; i++) {
//   if (i === 3) { break; }
//   text += "The number is " + i + "<br>";
// }

// In the example above, the break statement ends the loop ("breaks" the loop) when the loop counter (i) is 3.
// The Continue Statement

// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

// This example skips the value of 3:
// Example
// for (let i = 0; i < 10; i++) {
//   if (i === 3) { continue; }
//   text += "The number is " + i + "<br>";
// }

// avaScript Labels

// To label JavaScript statements you precede the statements with a label name and a colon:
// label:
// statements

// The break and the continue statements are the only JavaScript statements that can "jump out of" a code block.

// Syntax:
// break labelname;

// continue labelname;

// The continue statement (with or without a label reference) can only be used to skip one loop iteration.

// The break statement, without a label reference, can only be used to jump out of a loop or a switch.

// With a label reference, the break statement can be used to jump out of any code block:
// Example
// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// list: {
//   text += cars[0] + "<br>";
//   text += cars[1] + "<br>";
//   break list;
//   text += cars[2] + "<br>";
//   text += cars[3] + "<br>";
// }

// A code block is a block of code between { and }.
// -----------------------------------------------------------------------------------------

// Iterables are iterable objects (like Arrays).

// Iterables can be accessed with simple and efficient code.

// Iterables can be iterated over with for..of loops

// The For Of Loop

// The JavaScript for..of statement loops through the elements of an iterable object.
// Syntax
// for (variable of iterable) {
//   // code block to be executed
// }
// Iterating

// Iterating is easy to understand.

// It simply means looping over a sequence of elements.

// Here are some easy examples:

//     Iterating over a String
//     Iterating over an Array

// Iterating Over a String

// You can use a for..of loop to iterate over the elements of a string:
// Example
// const name = "W3Schools";

// for (const x of name) {
//   // code block to be executed
// }

// Iterating Over an Array

// You can use a for..of loop to iterate over the elements of an Array:
// Example
// const letters = ["a","b","c"];

// for (const x of letters) {
//   // code block to be executed
// }

// You can learn more details about Iterables in the chapter JS Object Iterables.
// Iterating Over a Set

// You can use a for..of loop to iterate over the elements of a Set:
// Example
// const letters = new Set(["a","b","c"]);

// for (const x of letters) {
//   // code block to be executed
// }

// Sets and Maps are covered in the next chapters.
// Iterating Over a Map

// You can use a for..of loop to iterate over the elements of a Map:
// Example
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);

// for (const x of fruits) {
//   // code block to be executed
// }
// --------------------------------------------------------------------------------------------
