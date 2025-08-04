// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.

function insert_dash(num) {
  let result = num[0];

  for (let i = 1; i < num.length; i++) {
    let prev = num[i - 1];
    let curr = num[i];

    if (prev % 2 === 0 && curr % 2 === 0) {
      result += "-" + curr;
    } else {
      result += curr;
    }
  }

  return result;
}

let number = "025468";
console.log(insert_dash(number));
