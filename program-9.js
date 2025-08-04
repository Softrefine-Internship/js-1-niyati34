// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")

function mostFrequent(arr) {
  let freq = {};
  let maxCount = 0;
  let mostFrequentItem;

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (freq[item]) {
      freq[item]++;
    } else {
      freq[item] = 1;
    }

    if (freq[item] > maxCount) {
      maxCount = freq[item];
      mostFrequentItem = item;
    }
  }

  console.log(mostFrequentItem, ",", maxCount, "times");
}

let sample = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
mostFrequent(sample);
