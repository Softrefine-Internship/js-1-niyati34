// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]

function merger_sortedarray(arr1, arr2) {
  const mergedArray = arr1.concat(arr2);
  return mergedArray.sort();
}

let arr1 = [3, 5, 1];
let arr2 = [4, 2];

console.log(merger_sortedarray(arr1, arr2));
