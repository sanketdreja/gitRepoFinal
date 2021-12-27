let a1 = [1, 2, 3, 4, 5, [6, 7, 8, 9]];
let a2 = [1, 2, 3, 4, 5, [6, 7, 8, 9]];
let x = typeof a1;
let y = [];
let z = typeof y;

let isSame = true;
console.log(x);
for (let i = 0; i < a1.length; i++) {
  if (x === z) {
    for (let j = 0; j < a1[i].length; j++) {
      if (a1[i][j] !== a2[i][j]) {
        isSame = false;
        console.log(isSame);

        break;
      }
      console.log(a1[i][j], a2[i][j]);
    }
    if (isSame === false) {
      break;
      console.log(isSame);
    }
  }

  if (a1[i] !== a2[i]) {
    isSame = false;
    console.log(isSame);
    break;
  }
  console.log(a1[i], a2[i]);
  console.log(isSame); //true
}
