// Write a JavaScript function to find the difference between two arrays.

// Sample Input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10]

// Expected Output: c = [3, 10, 100]

function difference(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }

  result.sort(function (a, b) {
    return a - b;
  });

  return result;
}

let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];

console.log(difference(arr1, arr2));
