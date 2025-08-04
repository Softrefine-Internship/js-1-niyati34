// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]

function union(arr1, arr2) {
  const merged = arr1.concat(arr2);

  const unique = [];
  for (let i = 0; i < merged.length; i++) {
    if (!unique.includes(merged[i])) {
      unique.push(merged[i]);
    }
  }
  unique.sort((a, b) => a - b);

  return unique;
}

let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];

console.log(union(arr1, arr2));
