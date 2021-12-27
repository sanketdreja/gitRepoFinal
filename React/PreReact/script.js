// console.log("Hello from script.js ....");
// var a =10;
// let b=20;
// console.log(a);

// console.log(b);

// {
//     var c =30;
//     let d =40;

//         console.log(c);
//         console.log(d);
// }

// console.log(c);
// console.log(d);

// const a=10;
// a=20;//error
// cons b ; // error
// const arr ={
//     name:"abc"
// }
// arr.name="Sanket"; // no error
// arr ={
//     name:"xyz"  /// error
// }

// = assignment
// == compare value
// === compare value and type

// let myString1 = "abcd@gmail.com";
// let myString2 = "Abcd@gmail.com";

// console.log(myString1.toUpperCase ()=== myString2.toUpperCase());

// for ( let i = 0; i< myString1.length;i++){
//     console.log(myString1[i]);/// every element of myString1
// }

// wap to remove repeated Characters from string

// let myString = "asdfaasdf";
// let newString = "";

// console.log(myString);

// for (let i = 0; i < myString.length; i++) {
//   let count = 0;
//   for (let j = 0; j < myString.length; j++) {
//     if (myString[i] === myString[j]) {
//         if(j<i) {
//             break;
//         }
//       count++;
//       if (count > 1) {
//         newString = newString + myString[i];
//         break;
//       }
//     }
//   }
// }

// console.log(newString);

// Array

// let myArray=[1,2,3,4,5];
// let myArr1=[1,2,3,4,5];
// let isSame=true;
// for(let i =0;i <myArr1.length;i++){
//     if (myArr[i]+myArr1[i]){
//         isSame=false;
//         break;
//     }
// }

// console.log(myArr===myArr1);// false

// console.log(isSame);// true

// myArr[i]();
// this is dynamic array can be used
// suppose the we have n function and we have to call the functions squencially and if the
// suppose the function output is true then continue else return the value or no of the function
//  let myArrayFunction=[];
//  suppose we have the functions name as fun1(), fun2() ...
//  the we can call the by storing the function address in the array
//  and run the for loop to invoke the function dynamically

//  for (){
//      myArrayFunction[i](); this will invoke the function

//      and the myArrayFunction[0 ] will be storing the address of the fun1() by fun1;

//      this will invoke the function dynamically
// learn to use data sturcture efficiently
//     }

// let input="India is my country";
// let output="";
//  let wordString="";
// for(i=0;i<input.length;i++){
//    if(input[i]===" "){
//        output=output +reverseString(wordString) +" " ;
//        console.log(wordString);
//        wordString="";
//        continue;
//    }
//    else{
//        wordString=wordString+input[i];
//        if(i+1 ==input.length){
//            output=output + reverseString(wordString);
//            console.log(wordString);
//             wordString="";
//        }
//    }
// }
// console.log(output);
// function reverseString(value){
//     let reverseValue="";
//     for( let i =value.length-1;i>=0;i--){
//         reverseValue =reverseValue +value[i];
//     }
//     return reverseValue;
// }

// console.log(addNumbers(10, 20));// we will get the result
// console.log(addNumbers);// we will get the function defination
// function addNumbers(number1, number2) {
//   return number1 + number2;
// }

// // Function Expression

// const addNumber2 = function (number1, number2) {
//   return number1 + number2;
// };

// console.log(addNumber2(30, 40));// we will get the result
// console.log(addNumber2);// we will get the function defination
// // Arrow Function
// const addNumberArrow = (number1, number2) => {
//   return number1 + number2;
// };

// console.log(addNumberArrow(10, 20)); // we will get the result
// console.log(addNumberArrow);// we will get the function defination

// function myFun1() {
//   return true;
// }

// function myFun2() {
//   return true;
// }

// function myFun3() {
//   return true;
// }

// function myFun4() {
//   return true;
// }

// function myFun5() {
//   return false;
// }

// let isTrue;
// let myArrayFun = [myFun1, myFun2, myFun3, myFun4, myFun5];

// console.log(myArrayFun[2]);
// for (let i = 0; i < myArrayFun.length; i++) {
//   let functionNo = i + 1;
//   isTrue = myArrayFun[i]();
//   if (isTrue != true) {
//     console.log(functionNo);
//   }
// }

// const myObject ={
//     name:"Akshay",
//     getName:function(){
//         return this.name;

//     }
// };
//  const myNewObject ={
//      name:"aniket"
//  };

//  const newGetName =myObject.getName.bind(myNewObject);
//  console.log(myObject.getName());
//  console.log(newGetName());

// Constuctor Function
// function Person(name,age){
//  if (!new.target){ new .target will check whether the its invoke throgh new or not
// if not the it invoke the same function with the new and
// as if got false it start execution from below if block
//      return new Person(name,age);
//  }

//     // this={} creates an empty object

//     this.name=name;
//     this.age=age;
//     // this.return; is also involed inthe constructor function
//     //while in normal function it will not
//     // return{name};
//     // return{name:this.name};
//     // return 1234; // in this case when primitive return is use
//     // it will ignore that and call this.return (default )
//     // return [1,2,3,4,5];
//     // in this case it return array
//     //  but the type will change to prototype as the aaray
//     // object is not in the person

// }

// const personObject =Person ("abc",25);
// console.log(personObject)

// array destructing

//  const arr =[1,2,3,4,5];
//  const [a,b,c,d,e] = arr;
//  console.log(a,b,c,d,e);
//  const myObject ={
//      name:"xyz",
//      age:25,
//  };
//  const {name,age}=myObject;
//  console.log(name,age);

// let a1 = [1, 2, 3, 4, 5, [6, 7, 8, 9]];
// let a2 = [1, 2, 3, 4, 5, [6, 7, 8, 9]];




// let x = typeof a1;
// let y = [];
// let z = typeof y;

// let isSame = true;
// console.log(x);
// for (let i = 0; i < a1.length; i++) {
//   if (x === z) {
//     for (let j = 0; j < a1[i].length; j++) {
//       if (a1[i][j] !== a2[i][j]) {
//         isSame = false;
//         console.log(isSame);

//         break;
//       }
//       console.log(a1[i][j], a2[i][j]);
//     }
//     if (isSame === false) {
//       break;
//       console.log(isSame);
//     }
//   }

//   if (a1[i] !== a2[i]) {
//     isSame = false;
//     console.log(isSame);
//     break;
//   }
//   console.log(a1[i], a2[i]);
//   console.log(isSame); //true
// }
//  let myarr=[1,2,3,4,5];
//  let myarr1=[1,2,3,4,5];
// //console.log(myarr===myarr1);//false

// let isSame=true;
// for(i=0;i<myarr.length;i++){
//     if(myarr[i]!==myarr1[i]){
//       isSame=false;
//       break;
//     }
// }
// console.log(isSame);//true

// for (i = 0; i < myarr.length; i++) {
//   if (myarr[i] !== myarr1[i]) {
//     isSame = false;
//     break;
//   }
// }


// Spread Operator
// const myArr =[1,2,3,4,5];
// const myArrNew=[];
// for(let i = 0;i<myArrNew.length;i++){
//   myArrNew.push(myArr[i]);
// }
// // const myArrNew(...myArr[i]);
// console.log(...myArr);// same as writing console.log(1,2,3,4,5);
// console.log(myArr);
// console.log(myArrNew);
// myArr.push(6);
// console.log(myArr);
// console.log(myArrNew);



// const myObject={
//   name:"abc",
//   age:"29"
// }
// const myNewObject={...myObject};
// console.log(myObject);
// console.log(myNewObject);
// myObject.name="xyz";
// console.log(myObject);
// console.log(myNewObject);
// console.log(...myObject);// error not valid because object are not itratatble


//Rest 
// function addNumbers(...args){
//   let result=0;
//   for( let i =0;i<args.length;i++){
//     result +=args[i];
//   }
//   return result;
// }

// console.log(addNumbers(10,20,50,90));