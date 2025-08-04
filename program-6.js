// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]
function removeduplicates(arr1, arr2) {
  const merged = arr1.concat(arr2);
  const unique = [];

  for (let i = 0; i < merged.length; i++) {
    if (!unique.includes(merged[i])) {
      unique.push(merged[i]);
    }
  }

  return unique;
}

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [3, 4, 5, 7];

console.log(removeduplicates(arr1, arr2));
