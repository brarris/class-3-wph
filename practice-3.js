'use strict';

// question 1
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}

for (i; i <= 5; i += 1) {
  console.log(i);
}

// question 2

let day = 'rabu';

switch (day) {
  case 'senin':
    console.log('Awal pekan!');
    break;
  case 'selasa':
  case 'rabu':
  case 'kamis':
  case 'jumat':
    console.log('Hari kerja!');
    break;
  case 'sabtu':
  case 'minggu':
    console.log('Akhir pekan!');
    break;
}

// question 3

function greet(name) {
  console.log(`Halo, ${name}!`);
}

greet('Ali');

// with arrow function

// const greet = (name) => {
//   console.log(`Halo, ${name}!`);
// };

// greet('Ali');

// question 4

function add(num1, num2) {
  return num1 + num2;
}

let result = add(5, 3);
console.log(result);

/* with Arrow function */

const jumlah = (x, y) => x + y;
console.log(jumlah(5, 3));
