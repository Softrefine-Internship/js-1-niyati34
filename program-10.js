// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.

// Sample input:
// arr1 = [1, 0, 2, 3, 4];
// arr2 = [3, 5, 6, 7, 8, 13];

// Expected Output: [4, 5, 8, 10, 12, 13]

function sumArrays(arr1, arr2) {
  let maxLength = Math.max(arr1.length, arr2.length);
  let result = [];

  for (let i = 0; i < maxLength; i++) {
    let val1 = arr1[i] || 0;
    let val2 = arr2[i] || 0;
    result.push(val1 + val2);
  }

  return result;
}

let arr1 = [1, 0, 2, 3, 4];
let arr2 = [3, 5, 6, 7, 8, 13];

console.log(sumArrays(arr1, arr2));
