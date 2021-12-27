function myFun1() {
  return true;
}

function myFun2() {
  return true;
}

function myFun3() {
  return true;
}

function myFun4() {
  return true;
}

function myFun5() {
  return false;
}

let isTrue;
let myArrayFun = [myFun1, myFun2, myFun3, myFun4, myFun5];

console.log(myArrayFun[2]);
for (let i = 0; i < myArrayFun.length; i++) {
  let functionNo = i + 1;
  isTrue = myArrayFun[i]();
  if (isTrue != true) {
    console.log(functionNo);
  }
}